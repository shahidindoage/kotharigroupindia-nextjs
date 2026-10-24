// Dealer application email templates, keyed by divisionInterest (gettemps.txt).
export interface DealerTemplate {
  subject: string;
  intro: string[];
  leadStatus: string;
  outro: string;
  thanks: string;
  signature: string;
}

const build = (brand: string): DealerTemplate => ({
  subject: `New Dealer Application – Hot Lead | ${brand}`,
  intro: [
    `We have received a new Dealer Application through the ${brand} website.`,
    'This enquiry represents a potential business opportunity to expand our dealer network. Please review the application details and connect with the applicant to understand their business profile, location and dealership requirements.',
  ],
  leadStatus: 'Hot Lead',
  outro:
    'Please prioritise this enquiry, contact the applicant promptly and update the lead status based on the discussion.',
  thanks: 'Thank you for your prompt action.',
  signature: `${brand} – Website Enquiry Notification`,
});

const templates: Record<'pipe' | 'irrigation', DealerTemplate> = {
  pipe: build('Kothari Pipes'),
  irrigation: build('Kothari Irrigation'),
};

export function dealerTemplate(divisionInterest: string): DealerTemplate {
  return /pipe/i.test(divisionInterest) ? templates.pipe : templates.irrigation;
}
