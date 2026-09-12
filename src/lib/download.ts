// Static downloads data sourced from https://kotharigroupindia.com/Download
export interface DownloadItem {
  id: number;
  title: string;
  category: string;
  description: string;
  downloadLink: string;
}

export interface DownloadsData {
  downloads: DownloadItem[];
  categories: string[];
}

const downloads: DownloadItem[] = [
  {
    id: 1,
    title: 'User Manual',
    category: 'Documents',
    description: 'A complete user guide.',
    downloadLink: 'https://kotharigroupindia.com/pdf/coming_soon.pdf',
  },
  {
    id: 2,
    title: 'Installation Guide',
    category: 'Guides',
    description: 'Step-by-step installation instructions.',
    downloadLink: 'https://kotharigroupindia.com/pdf/coming_soon.pdf',
  },
  {
    id: 3,
    title: 'Software Update',
    category: 'Software',
    description: 'Latest version of our software.',
    downloadLink: 'https://kotharigroupindia.com/pdf/coming_soon.pdf',
  },
  {
    id: 4,
    title: 'FAQ Document',
    category: 'Documents',
    description: 'Frequently asked questions.',
    downloadLink: 'https://kotharigroupindia.com/pdf/coming_soon.pdf',
  },
  {
    id: 5,
    title: 'Setup Wizard',
    category: 'Software',
    description: 'Automated setup wizard.',
    downloadLink: 'https://kotharigroupindia.com/pdf/coming_soon.pdf',
  },
  {
    id: 6,
    title: 'Troubleshooting Guide',
    category: 'Guides',
    description: 'Common issues and solutions.',
    downloadLink: 'https://kotharigroupindia.com/pdf/coming_soon.pdf',
  },
  {
    id: 7,
    title: 'Quick Start Guide',
    category: 'Guides',
    description: 'Get started quickly.',
    downloadLink: 'https://kotharigroupindia.com/pdf/coming_soon.pdf',
  },
];

const categories = ['All', 'Documents', 'Software', 'Guides'];

export const downloadsData: DownloadsData = { downloads, categories };