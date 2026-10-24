import { NextResponse } from 'next/server';
import {
  createTransporter,
  sendMailWithFallback,
  escapeHtml,
  verifyRecaptchaToken,
  NOT_CONFIGURED,
} from '@/lib/mailer';
import { aisensyConfigured } from '@/lib/aisensy';
import { isVerified, normalizePhone } from '@/lib/otp-store';
import { enquiryTemplate } from '@/lib/get-in-touch-templates';
import { OTP_VERIFICATION_ENABLED } from '@/lib/otp-config';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = { fullName: 100, email: 160, phone: 30, iam: 40, requirement: 100, otherRequirement: 500 } as const;

// Route to the divisional inbox based on the division interest.
// Pipe Division → pipe inbox, anything else → irrigation inbox.
function resolveRecipient(division: string): string {
  if (/pipe/i.test(division)) {
    return (
      process.env.CONTACT_PIPE_EMAIL || 'sales.pipe@kotharigroupindia.com'
    );
  }
  return (
    process.env.CONTACT_IRRIGATION_EMAIL ||
    'sales.irrigation@kotharigroupindia.com'
  );
}

// WhatsApp OTP gate: the phone number must be verified before the enquiry is sent.
// OTP_REQUIRED=true|false overrides; otherwise the gate is on whenever AiSensy is
// configured (and during development), so a missing config never hard-blocks prod.
function otpRequired(): boolean {
  if (!OTP_VERIFICATION_ENABLED) return false;
  const flag = process.env.OTP_REQUIRED;
  if (flag) return flag === 'true';
  return aisensyConfigured() || process.env.NODE_ENV !== 'production';
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const data = body as Record<string, unknown>;
  const fullName = String(data.fullName ?? '').trim();
  const email = String(data.email ?? '').trim();
  const phone = String(data.phone ?? '').trim();
  const division = String(data.division ?? '').trim();
  const iam = String(data.iam ?? '').trim();
  const requirement = String(data.requirement ?? '').trim();
  const otherRequirement = String(data.otherRequirement ?? '').trim();

  if (!fullName || !phone) {
    return NextResponse.json(
      { ok: false, error: 'Name and phone are required.' },
      { status: 400 }
    );
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Enter a valid email address.' },
      { status: 400 }
    );
  }
  if (
    fullName.length > MAX_LEN.fullName ||
    email.length > MAX_LEN.email ||
    phone.length > MAX_LEN.phone ||
    iam.length > MAX_LEN.iam ||
    requirement.length > MAX_LEN.requirement ||
    otherRequirement.length > MAX_LEN.otherRequirement
  ) {
    return NextResponse.json(
      { ok: false, error: 'One or more fields are too long.' },
      { status: 400 }
    );
  }

  // WhatsApp OTP verification — phone must be verified in this server session.
  if (otpRequired()) {
    const normalizedPhone = normalizePhone(phone);
    if (!normalizedPhone || !isVerified(normalizedPhone)) {
      return NextResponse.json(
        {
          ok: false,
          verifyRequired: true,
          error: 'Please verify your phone number with the WhatsApp OTP before submitting.',
        },
        { status: 403 }
      );
    }
  }

  // reCAPTCHA v3 spam check — enforced only when a secret is configured.
  const recaptchaError = await verifyRecaptchaToken(data.recaptchaToken);
  if (recaptchaError) {
    return NextResponse.json(
      { ok: false, error: recaptchaError },
      { status: 403 }
    );
  }

  const transporter = createTransporter();
  if (!transporter) {
    console.error('[get-in-touch] Email is not configured (GMAIL_USER + GMAIL_APP_PASSWORD missing).');
    return NextResponse.json(NOT_CONFIGURED, { status: 500 });
  }

  const to = resolveRecipient(division);
  if (!to) {
    console.error('[get-in-touch] No recipient configured.');
    return NextResponse.json(NOT_CONFIGURED, { status: 500 });
  }

  const from = process.env.GMAIL_USER as string;
  // Subject + body vary by division and "I am" (templates in gettemps.txt).
  const template = enquiryTemplate(division, iam);
  const showOther = requirement === 'Other' && Boolean(otherRequirement);

  const subject = template.subject;
  const text = [
    'Dear Team,',
    '',
    ...template.intro.flatMap((paragraph) => [paragraph, '']),
    'Enquiry Details',
    `- Name: ${fullName}`,
    `- Mobile Number: ${phone}`,
    `- Email Address: ${email || '-'}`,
    `- Requirement: ${requirement}`,
    ...(showOther ? [`- Other Requirement: ${otherRequirement}`] : []),
    '',
    template.outro,
    '',
    template.thanks,
    '',
    'Regards,',
    template.signature,
  ].join('\n');

  const html = `
    ${template.intro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
    <p><strong>Enquiry Details</strong></p>
    <ul>
      <li>Name: ${escapeHtml(fullName)}</li>
      <li>Mobile Number: ${escapeHtml(phone)}</li>
      <li>Email Address: ${escapeHtml(email || '-')}</li>
      <li>Requirement: ${escapeHtml(requirement)}</li>
      ${showOther ? `<li>Other Requirement: ${escapeHtml(otherRequirement)}</li>` : ''}
    </ul>
    <p>${escapeHtml(template.outro)}</p>
    <p>${escapeHtml(template.thanks)}</p>
    <p>Regards,<br />${escapeHtml(template.signature)}</p>
  `;

  try {
    await sendMailWithFallback({
      from: `"Kothari Group" <${from}>`,
      to,
      replyTo: email
        ? `"${fullName.replace(/"/g, '')}" <${email}>`
        : undefined,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[get-in-touch] sendMail failed:', error);
    return NextResponse.json(
      { ok: false, error: 'Could not send your enquiry. Please try again later.' },
      { status: 502 }
    );
  }
}
