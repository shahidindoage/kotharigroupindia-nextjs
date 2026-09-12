// Static news data sourced from https://kotharigroupindia.com/press-release
export interface NewsItem {
  slug: string;
  image: string;
  title: string;
  description: string;
  info: string;
  category: string;
  date: string;
}

export interface NewsData {
  news: NewsItem[];
  categories: string[];
}

const news: NewsItem[] = [
  {
    slug: 'most-trusted-brand-in-agriculture-sector',
    image: 'https://kotharigroupindia.com/img/images/award1.webp',
    title: 'Most Trusted Brand In Agriculture Sector',
    description:
      'Kothari Group has one more feather in their cap. It was awarded with the Most Trusted Brand in Agriculture Sector Award on 9th March 2019.',
    info: '<p>Kothari Group has one more feather in their cap. It was awarded with the Most Trusted Brand in Agriculture Sector Award on 9th March 2019 during &#8216;All Maharashtra Sarpanch Parishad&#8217; held at Nagpur in presence of Devendra Fadanvis Chief Minister of Maharashtra, Minister of Road Transport and Highways of India Mr. Nitin Gadkari and Mr. Radha Mohan Singh along with Sarpanch of various villages throughout India. This proved that Kothari products like PVC Pipes, HDPE Pipes, Drip Irrigation System etc. are well appreciated by the farmers all over India.</p>\n<p>In reply to this felicitation, Mr. Ujjwal Kothari expressed gratitude towards all those who had helped Kothari Group to reach to this level and that Kothari Group will continue to work for farmers in the coming years and will continue to contribute towards strong and healthy nation-building.</p>',
    category: 'Events',
    date: '21 June 2021',
  },
  {
    slug: 'mascot-smart-sathi-launching-2019',
    image: 'https://kotharigroupindia.com/img/images/Mascot.webp',
    title: 'Mascot Smart Sathi Launching 2019',
    description:
      'Every year 23rd December is celebrated as Farmers\u2019 Day throughout the nation.',
    info: '<p>Every year 23rd December is celebrated as Farmers&#8217; Day throughout the nation. On the same day of 2019, Kothari group has launched a Brand Mascot in order to make the brand more attractive and successful.</p>',
    category: 'Events',
    date: '14 June 2021',
  },
  {
    slug: 'pune-award-ceremony-2019',
    image: 'https://kotharigroupindia.com/img/images/Pune-Award-Ceremony.webp',
    title: 'HT & IE - Pune Award Ceremony 2019',
    description:
      'Solapur based Kothari Group, a leading market player of manufacturing comprehensive range of Agriculture products, was awarded with the prestigious Best Brand Awards.',
    info: '<p>Solapur based Kothari Group, a leading market player of manufacturing comprehensive range of Agriculture products, was awarded with the prestigious Best Brand Awards on 17th October 2019 in a 14th Employer Branding Awards Ceremony organized by World Marketing Congress at Pune.</p>\n<p>The prestigious Best Brand Award, recognizing Kothari Group&#8217;s continuous contribution for fulfillment of all needs of farmer for better crop yield with minimum water consumption. Now, Kothari products are regularly exported to Asian, African & Gulf Countries and had made their special presence in these markets. Kothari Group has directly and indirectly created more than 10000 employments and thus contributes to the build a healthy nation.</p>',
    category: 'Events',
    date: '14 June 2021',
  },
];

const categories = ['All', 'Events', 'Announcements', 'Updates'];

export const newsData: NewsData = { news, categories };

export const getNewsBySlug = (slug: string): NewsItem | undefined =>
  news.find((item) => item.slug === slug);