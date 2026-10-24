// Get-in-touch email templates, keyed by division + "I am" (see gettemps.txt).
// The route picks the matching body and builds the notification email from it.

interface TemplateBody {
  intro: string[];
  outro: string;
  thanks: string;
}

const commonBodies = (brand: string): Record<string, TemplateBody> => ({
  Farmer: {
    intro: [
      `We have received a new enquiry from a Farmer through the ${brand} website.`,
      'The customer is interested in our agricultural piping solutions. Please find the enquiry details below.',
    ],
    outro:
      'Please review the details and contact the customer to understand their requirements and provide the appropriate product information.',
    thanks: 'Thank you for your prompt attention.',
  },
  Dealer: {
    intro: [
      `We have received a new business enquiry from a Dealer through the ${brand} website.`,
      'This is an opportunity to explore a potential business association and expand our dealer network.',
    ],
    outro:
      'Please contact the dealer to discuss their business requirements, explain the relevant products and take the discussion forward.',
    thanks: 'Thank you for your prompt action.',
  },
  'Agri Professional': {
    intro: [
      `A new enquiry has been received from an Agriculture Professional through the ${brand} website.`,
      'The enquiry may relate to agricultural piping requirements or a potential business opportunity. Please review the information below.',
    ],
    outro:
      'Please connect with the applicant to understand their specific needs and recommend suitable products from our range.',
    thanks: 'Thank you for your attention.',
  },
  Government: {
    intro: [
      `A new enquiry has been received from a Government Employee through the ${brand} website.`,
    ],
    outro: 'Please review the details above and follow up with the individual.',
    thanks: 'Thank you for your prompt attention.',
  },
  Other: {
    intro: [
      `We have received a new enquiry from an individual who does not fall into any of the specific categories on the ${brand} website.`,
      'The enquiry details are as follows:',
    ],
    outro:
      'Please review the details and get in touch to understand the specific requirements and provide assistance accordingly.',
    thanks: 'Thank you for your attention.',
  },
});

const pipeOnlyBodies: Record<string, TemplateBody> = {
  'MEP Consultant': {
    intro: [
      'A new enquiry has been submitted by an MEP Consultant through the Kothari Pipes website.',
      'This could be an opportunity to connect with the consultant regarding their project requirements and introduce our relevant plumbing piping solutions.',
    ],
    outro:
      'Please review the enquiry and get in touch with the consultant to understand the project scope and provide the required technical or product information.',
    thanks: 'Thank you for your support.',
  },
  Plumber: {
    intro: [
      'We have received a new enquiry from a Plumber through the Kothari Pipes website.',
      'This is an opportunity to connect with a plumbing professional, understand their product requirements and build a stronger professional relationship.',
    ],
    outro:
      'Please contact the plumber, provide the necessary product information and assist with their requirements.',
    thanks: 'Thank you for your prompt follow-up.',
  },
};

const irrigationOnlyBodies: Record<string, TemplateBody> = {
  'Irrigation Consultant': {
    intro: [
      'A new enquiry has been submitted by an Irrigation Consultant through the Kothari Irrigation website.',
      'This could be an opportunity to connect with the consultant regarding their project requirements and introduce our relevant plumbing piping solutions.',
    ],
    outro:
      'Please review the enquiry and get in touch with the consultant to understand the project scope and provide the required technical or product information.',
    thanks: 'Thank you for your support.',
  },
};

const divisions = {
  pipe: {
    brand: 'Kothari Pipes',
    bodies: { ...commonBodies('Kothari Pipes'), ...pipeOnlyBodies },
  },
  irrigation: {
    brand: 'Kothari Irrigation',
    bodies: { ...commonBodies('Kothari Irrigation'), ...irrigationOnlyBodies },
  },
};

export interface EnquiryTemplate extends TemplateBody {
  subject: string;
  signature: string;
}

export function enquiryTemplate(division: string, iam: string): EnquiryTemplate {
  const kind = /pipe/i.test(division) ? 'pipe' : 'irrigation';
  const { brand, bodies } = divisions[kind];
  const iamKey = bodies[iam] ? iam : 'Other';
  const body = bodies[iamKey];

  return {
    subject: `Enquiry Received – ${iamKey} | ${brand}`,
    signature: `${brand} – Website Enquiry Notification`,
    ...body,
  };
}
