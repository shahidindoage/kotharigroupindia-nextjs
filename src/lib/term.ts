// Static content sourced from https://kotharigroupindia.com/terms-and-conditions
export interface TermsDefinition {
  term: string;
  description: string;
}

export interface TermsSection {
  title: string;
  paragraphs?: string[];
  list?: string[];
  definitions?: TermsDefinition[];
  contactEmail?: string;
}

export interface TermsData {
  title: string;
  updatedDate: string;
  contents: string[];
  sections: TermsSection[];
}

const sections: TermsSection[] = [
  {
    title: 'General Terms',
    paragraphs: [
      'By accessing and placing an order with Kothari Group, you confirm that you are in agreement with and bound by the terms of service contained in the Terms & Conditions outlined below. These terms apply to the entire website and any communication between you and Kothari Group.',
      'Under no circumstances shall Kothari Group be liable for any direct, indirect, special, incidental or consequential damages, including but not limited to loss of data or profit, arising out of the use or the inability to use the materials on this site.',
      'Kothari Group will not be responsible for any outcome during the use of our resources. We reserve the right to change prices and revise usage policies at any time.',
    ],
  },
  {
    title: 'License',
    paragraphs: [
      'Kothari Group grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the website/app strictly according to these Terms & Conditions.',
      'These Terms & Conditions are a contract between you and Kothari Group (referred to as \u201CKothari Group\u201D, \u201Cus\u201D, \u201Cwe\u201D or \u201Cour\u201D). If you do not agree, you must not use the service.',
    ],
  },
  {
    title: 'Definitions and Key Terms',
    paragraphs: ['For clarity, here are key definitions used in this document:'],
    definitions: [
      { term: 'Cookie', description: 'Small data stored in your browser that allows preferences to be remembered.' },
      { term: 'Company', description: 'Refers to Kothari Group (the service provider).' },
      { term: 'Country', description: 'India.' },
      { term: 'Device', description: 'Any device such as phone, tablet, laptop used to access the service.' },
      { term: 'Service', description: 'Refers to the Website and mobile application features.' },
      { term: 'Third-party Service', description: 'External service providers connected through our system.' },
      { term: 'Website', description: 'https://kotharigroupindia.com/' },
      { term: 'You', description: 'The user of the website or services.' },
    ],
  },
  {
    title: 'Restrictions',
    paragraphs: ['You agree not to:'],
    list: [
      'Sell, share, lease or distribute the website/app.',
      'Reverse engineer, modify or create derivative works of the platform.',
      'Remove copyright notices or ownership labels.',
    ],
  },
  {
    title: 'Payment',
    paragraphs: [
      'If you subscribe to paid services, you agree to pay all fees associated with your account. You must provide accurate billing information and update it when necessary.',
      'Kothari Group reserves the right to modify prices and billing methods at any time.',
    ],
  },
  {
    title: 'Return and Refund Policy',
    paragraphs: [
      'If you are not satisfied with a product or service, please contact us. We will evaluate your concern and provide a resolution where applicable.',
    ],
  },
  {
    title: 'Your Suggestions',
    paragraphs: [
      'Any suggestions or improvements you provide become the exclusive property of Kothari Group without compensation.',
    ],
  },
  {
    title: 'Your Consent',
    paragraphs: [
      'By using our website/app, registering an account, or making a purchase, you consent to these Terms & Conditions.',
    ],
  },
  {
    title: 'Links to Other Websites',
    paragraphs: [
      'We are not responsible for content or activity on external websites. Once you leave our site, you are governed by that site\u2019s policies.',
    ],
  },
  {
    title: 'Cookies',
    paragraphs: [
      'We use cookies to improve your user experience. You may disable cookies, but some features may stop working.',
    ],
  },
  {
    title: 'Changes to Terms',
    paragraphs: [
      'We may update these terms from time to time. Continued use of the website means you accept the new Terms & Conditions.',
    ],
  },
  {
    title: 'Limitation of Liability',
    paragraphs: [
      'Kothari Group shall not be liable for any damages resulting from the use or inability to use the website/app.',
    ],
  },
  {
    title: 'Contact Us',
    paragraphs: ['If you have any questions, contact us:'],
    contactEmail: 'info@kotharigroupindia.com',
  },
];

const contents = sections.map((section, i) => `${i + 1}. ${section.title}`);

export const termsData: TermsData = {
  title: 'Terms & Conditions',
  updatedDate: '13-07-2022',
  contents,
  sections,
};