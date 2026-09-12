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