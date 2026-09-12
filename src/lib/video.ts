// Static video data sourced from https://kotharigroupindia.com/KothariTV
export interface KothariVideo {
  title: string;
  category: string;
  embedId: string;
}

export interface KothariTVData {
  videos: KothariVideo[];
  categories: string[];
}

const videos: KothariVideo[] = [
  { title: 'Irrigation Video 1', category: 'Irrigation', embedId: 'dxADOuC0qc4' },
  { title: 'Irrigation Video 2', category: 'Irrigation', embedId: 'Wcs1ip0rgVo' },
  { title: 'Irrigation Video 3', category: 'Irrigation', embedId: 'CLue7cz_QEs' },
  { title: 'Irrigation Video 4', category: 'Irrigation', embedId: 'iP5kZpRFqZk' },
  { title: 'Irrigation Video 5', category: 'Irrigation', embedId: 'rioQ2oeg0XQ' },
  { title: 'Irrigation Video 6', category: 'Irrigation', embedId: 'XIRMLv7iQfU' },
  { title: 'Irrigation Video 7', category: 'Irrigation', embedId: 'Di88ToPE4OI' },
  { title: 'Irrigation Video 8', category: 'Irrigation', embedId: '6gAiXWLme_0' },
  { title: 'Irrigation Video 9', category: 'Irrigation', embedId: 'Jgast9mUF8E' },
  { title: 'Irrigation Video 10', category: 'Irrigation', embedId: 'dyOH6Q1mKlU' },
  { title: 'Irrigation Video 11', category: 'Irrigation', embedId: 'g80myvWH2Js' },
  { title: 'Irrigation Video 12', category: 'Irrigation', embedId: 'k2Dbf9smCA4' },
  { title: 'Irrigation Video 13', category: 'Irrigation', embedId: 's8A44TYAS-8' },
  { title: 'Irrigation Video 14', category: 'Irrigation', embedId: 'fLviTf8y-Ew' },
  { title: 'Agri Pipe 1', category: 'Agri Pipe', embedId: 'CXhLwY75RPY' },
  { title: 'Agri Pipe 2', category: 'Agri Pipe', embedId: 'KT9sTi5o7fE' },
  { title: 'Agri Pipe 3', category: 'Agri Pipe', embedId: 'dEAp88dqCxg' },
  { title: 'Pipe Video 1', category: 'Plumbing Pipe', embedId: 'FcfuEnXjyY0' },
  { title: 'Pipe Video 2', category: 'Plumbing Pipe', embedId: 'LbLyCUNtqMU' },
  { title: 'Pipe Video 3', category: 'Plumbing Pipe', embedId: 'rKjDH_Egtkw' },
  { title: 'Pipe Video 4', category: 'Plumbing Pipe', embedId: 'm7lKTNJRFKk' },
];

const categories = ['All', ...Array.from(new Set(videos.map((v) => v.category)))];

export const kothariTVData: KothariTVData = { videos, categories };