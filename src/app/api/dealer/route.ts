import { NextResponse } from 'next/server';
import {
  createTransporter,
  sendMailWithFallback,
  escapeHtml,
  verifyRecaptchaToken,
  NOT_CONFIGURED,
} from '@/lib/mailer';
import { dealerRecipient } from '@/lib/dealer';
import { dealerTemplate } from '@/lib/dealer-templates';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_BYTES = 5 * 1024 * 1024;
const MAX_FILES = 5;
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
];

function str(value: FormDataEntryValue | null, max: number): string {
  return String(value ?? '').trim().slice(0, max);
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const proprietorName = str(form.get('proprietorName'), 100);
  const mobile = str(form.get('mobile'), 15);
  const email = str(form.get('email'), 160);
  const pincode = str(form.get('pincode'), 10);
  const firmName = str(form.get('firmName'), 160);
  const gstNumber = str(form.get('gstNumber'), 30);
  const divisionInterest = str(form.get('divisionInterest'), 60);
  const heardAbout = str(form.get('heardAbout'), 60);
  const description = str(form.get('description'), 5000);

  if (!proprietorName || !mobile || !pincode) {
    return NextResponse.json(
      { ok: false, error: 'Name, mobile number and pincode are required.' },
      { status: 400 }
    );
  }
  if (!/^[0-9]{10}$/.test(mobile)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid 10-digit mobile number.' },
      { status: 400 }
    );
  }
  if (!/^[0-9]{6}$/.test(pincode)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid 6-digit pincode.' },
      { status: 400 }
    );
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid email address.' },
      { status: 400 }
    );
  }

  // reCAPTCHA v3 spam check — enforced only when a secret is configured.
  const recaptchaError = await verifyRecaptchaToken(form.get('recaptchaToken'));
  if (recaptchaError) {
    return NextResponse.json(
      { ok: false, error: recaptchaError },
      { status: 403 }
    );
  }

  // Optional supporting documents (validated client-side too).
  const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
  const docs = form
    .getAll('document')
    .filter((entry): entry is File => typeof entry !== 'string' && entry.size > 0);

  if (docs.length > MAX_FILES) {
    return NextResponse.json(
      { ok: false, error: `You can attach up to ${MAX_FILES} documents.` },
      { status: 400 }
    );
  }

  for (const file of docs) {
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { ok: false, error: `${file.name} is larger than 5MB.` },
        { status: 400 }
      );
    }
    if (file.type && !ALLOWED_FILE_TYPES.includes(file.type)) {
      return NextResponse.json(
        { ok: false, error: `Only PDF, DOC or JPG documents are allowed (${file.name}).` },
        { status: 400 }
      );
    }
    const safeName = (file.name || 'document').replace(/[^\w.\-() ]/g, '_').slice(0, 120);
    attachments.push({
      filename: safeName,
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type || 'application/octet-stream',
    });
  }

  const transporter = createTransporter();
  if (!transporter) {
    console.error('[dealer] Email is not configured (GMAIL_USER + GMAIL_APP_PASSWORD missing).');
    return NextResponse.json(NOT_CONFIGURED, { status: 500 });
  }

  // Route the application to the sales inbox for the chosen division
  // (Pipe -> CONTACT_PIPE_EMAIL, otherwise -> CONTACT_IRRIGATION_EMAIL).
  const to = dealerRecipient(divisionInterest);
  if (!to) {
    console.error('[dealer] No recipient configured.');
    return NextResponse.json(NOT_CONFIGURED, { status: 500 });
  }

  const from = process.env.GMAIL_USER as string;
  // Subject + body vary by divisionInterest (templates in gettemps.txt).
  const template = dealerTemplate(divisionInterest);
  const subject = template.subject;
  const text = [
    'Dear Team,',
    '',
    ...template.intro.flatMap((paragraph) => [paragraph, '']),
    'Dealer Application Details',
    `Name: ${proprietorName}`,
    `Mobile Number: ${mobile}`,
    `Email Address: ${email || '-'}`,
    `Pin Code: ${pincode}`,
    `Firm Name: ${firmName || '-'}`,
    `GST No: ${gstNumber || '-'}`,
    `Division Interest: ${divisionInterest || '-'}`,
    `Message: ${description || '-'}`,
    '',
    `Lead Status: ${template.leadStatus}`,
    '',
    template.outro,
    '',
    template.thanks,
    '',
    'Regards,',
    template.signature,
    ...(attachments.length
      ? ['', `Attachments (${attachments.length}): ${attachments.map((a) => a.filename).join(', ')}`]
      : []),
  ].join('\n');

  const html = `
    <p>Dear Team,</p>
    ${template.intro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
    <p><strong>Dealer Application Details</strong></p>
    <ul>
      <li>Name: ${escapeHtml(proprietorName)}</li>
      <li>Mobile Number: ${escapeHtml(mobile)}</li>
      <li>Email Address: ${escapeHtml(email || '-')}</li>
      <li>Pin Code: ${escapeHtml(pincode)}</li>
      <li>Firm Name: ${escapeHtml(firmName || '-')}</li>
      <li>GST No: ${escapeHtml(gstNumber || '-')}</li>
      <li>Division Interest: ${escapeHtml(divisionInterest || '-')}</li>
      <li>Message: ${escapeHtml(description || '-')}</li>
    </ul>
    <p><strong>Lead Status:</strong> ${escapeHtml(template.leadStatus)}</p>
    <p>${escapeHtml(template.outro)}</p>
    <p>${escapeHtml(template.thanks)}</p>
    <p>Regards,<br />${escapeHtml(template.signature)}</p>
  `;

  try {
    await sendMailWithFallback({
      from: `"Kothari Group" <${from}>`,
      to,
      replyTo: email
        ? `"${proprietorName.replace(/"/g, '')}" <${email}>`
        : undefined,
      subject,
      text,
      html,
      attachments,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[dealer] sendMail failed:', error);
    return NextResponse.json(
      { ok: false, error: 'Could not send your application. Please try again later.' },
      { status: 502 }
    );
  }
}
