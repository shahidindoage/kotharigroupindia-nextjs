// Static awards data sourced from https://kotharigroupindia.com/awards
export interface Award {
  id: number;
  image: string;
  title: string;
  category: string;
}

export interface AwardsData {
  awards: Award[];
  categories: string[];
}

const awards: Award[] = [
  {
    id: 1,
    image: 'https://kotharigroupindia.com/img/images/award1.webp',
    title: 'Green Manufacturer of the Year',
    category: 'Plumbing Pipe',
  },
];

const categories = [
  'All',
  'Plumbing Pipe',
  'Agri Pipe',
  'Irrigation',
];

export const awardsData: AwardsData = { awards, categories };