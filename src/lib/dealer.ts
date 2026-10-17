// Static content sourced from https://kotharigroupindia.com/become-dealer
export interface DealerStep {
  number: number;
  title: string;
}

export interface DealerBenefit {
  title: string;
  description: string;
}

export interface DealerData {
  steps: DealerStep[];
  benefits: DealerBenefit[];
  applyLink: string;
}

const steps: DealerStep[] = [
  { number: 1, title: 'SUBMIT APPLICATION' },
  { number: 2, title: 'REVIEW & APPROVAL' },
  { number: 3, title: 'ONBOARDING & TRAINING' },
];

const benefits: DealerBenefit[] = [
  {
    title: 'Unique Products',
    description:
      'We provide unique, innovative products including advanced irrigation systems, tailored garden watering solutions, and custom plumbing solutions, all designed to meet the specific needs of our customers.',
  },
  {
    title: 'Competitive Pricing',
    description:
      'We provide irrigation & plumbing solutions that offer value to your customers while maintaining strong margins.',
  },
  {
    title: 'Customization',
    description:
      'All our solutions are designed according to the specific needs and preferences of your customers.',
  },
  {
    title: 'Transparency',
    description:
      'We uphold honest practices in all our dealings and work hand-in-hand to succeed as a team.',
  },
  {
    title: 'Training & Knowledge Sharing',
    description:
      'Our expert agronomists provide regular market and product training for our dealers to stay ahead in this ever-evolving market.',
  },
  {
    title: 'After-Sales Service Team',
    description:
      'We are committed to your sustained growth and are always available to resolve any challenges you face, even after the sales process is complete.',
  },
];

const applyLink = 'https://kotharigroupindia.com/Dealers';

export const dealerData: DealerData = { steps, benefits, applyLink };

export const IRRIGATION_DIVISION = 'Irrigation Division';
export const PIPE_DIVISION = 'Pipe Division';

export interface DivisionEmails {
  pipe: string;
  irrigation: string;
}

/**
 * Maps a division to the sales inbox that should receive its enquiries.
 *
 * Single source of truth for two consumers:
 *  - the dealer form UI, which shows the matching address on the dialog's left
 *    card, and
 *  - POST /api/dealer, which routes the email to the same address.
 *
 * Falls back to CONTACT_TO_EMAIL so a missing division-specific value still
 * produces a working address rather than a blank one. Server-only: read from
 * process.env and passed to client components as plain props.
 */
export function dealerRecipientEmails(
  env: Record<string, string | undefined> = process.env
): DivisionEmails {
  const fallback = env.CONTACT_TO_EMAIL || '';
  return {
    pipe: env.CONTACT_PIPE_EMAIL || fallback,
    irrigation: env.CONTACT_IRRIGATION_EMAIL || fallback,
  };
}

/**
 * Resolves the recipient for a dealer application. Anything that is not the
 * Pipe Division routes to Irrigation, matching the form's default selection.
 */
export function dealerRecipient(
  divisionInterest: string,
  env: Record<string, string | undefined> = process.env
): string {
  const isPipe = divisionInterest.trim().toLowerCase().startsWith('pipe');
  const { pipe, irrigation } = dealerRecipientEmails(env);
  return (
    (isPipe ? pipe : irrigation) ||
    env.DEALER_TO_EMAIL ||
    env.GMAIL_USER ||
    ''
  );
}