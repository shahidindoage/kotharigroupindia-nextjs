// Static content sourced from https://kotharigroupindia.com/privacy-policy
export interface PolicySection {
  number: number;
  title: string;
  paragraphs: string[];
}

export interface PolicyData {
  title: string;
  effectiveDate: string;
  introHeadline: string;
  introParagraphs: string[];
  address: string[];
  contents: string[];
  sections: PolicySection[];
}

const introParagraphs = [
  'It is Kothari Group\u2019s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to kotharigroupindia.com. We are committed to protecting personally identifiable information you may provide through the Website.',
  'This Privacy Policy explains what information may be collected, how we use it, and when it may be disclosed to third parties. It applies only to information collected through our Website and not to information collected from other sources.',
  'By using our Website, you agree to the terms listed in this Privacy Policy, together with our Terms of Service.',
];

const address = [
  'Kothari Group',
  '8516/11, Level 3, Sun Plaza, Subhash Chowk,',
  'Murarji Peth, Solapur \u2013 413001, Maharashtra, India.',
  'Mobile: +91 9307300390',
];

const contents = [
  '1. Security',
  '2. Cookies',
  '3. E-commerce',
  '4. Privacy Policy Changes',
  '5. Contact Information & Credit',
  '6. Mobile App Location Data',
];

const sections: PolicySection[] = [
  {
    number: 1,
    title: 'Security',
    paragraphs: [
      'We take the security of your personal information seriously. However, no method of internet transmission or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.',
    ],
  },
  {
    number: 2,
    title: 'Cookies',
    paragraphs: [
      'We use cookies to enhance your browsing experience, personalize content, and store your preferences.',
      'Cookies are small files stored on your device. You may disable cookies in your browser settings, but some features of the Website may not function properly.',
      'By continuing to use our Website without changing cookie settings, you consent to our use of cookies.',
    ],
  },
  {
    number: 3,
    title: 'E-commerce',
    paragraphs: [
      'If you purchase products or services from us, we may collect additional information required to process your transactions. We only collect what is necessary and do not share your data except to complete the transaction.',
    ],
  },
  {
    number: 4,
    title: 'Privacy Policy Changes',
    paragraphs: [
      'We may update this Privacy Policy occasionally. Any changes will be posted on this page. Continued use of our Website after updates means you accept the revised policy.',
    ],
  },
  {
    number: 5,
    title: 'Contact Information & Credit',
    paragraphs: [
      'If you have questions regarding this Privacy Policy, please contact us at the phone number listed above.',
    ],
  },
  {
    number: 6,
    title: 'Mobile App Location Data',
    paragraphs: [
      'Kothari Group may collect location data via its mobile application for operational coordination. This data is stored securely and is not shared with third parties except when legally required. Disabling location permissions may limit certain app functions.',
    ],
  },
];

export const policyData: PolicyData = {
  title: 'Privacy Policy',
  effectiveDate: '24-06-2022',
  introHeadline: 'Your Privacy is Important to Us',
  introParagraphs,
  address,
  contents,
  sections,
};