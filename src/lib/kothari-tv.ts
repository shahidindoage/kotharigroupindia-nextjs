import { cache } from 'react';

const KOTHARI_TV_URL = 'https://kotharigroupindia.com/KothariTV';

export interface KothariVideo {
  title: string;
  category: string;
  embedId: string;
}

export interface KothariTVData {
  featuredVideo: KothariVideo | null;
  videos: KothariVideo[];
  categories: string[];
}

function extractFeaturedVideo(html: string): KothariVideo | null {
  // The featured video is the first youtube embed rendered in the page HTML.
  const featuredMatch = html.match(/youtube\.com\/embed\/([A-Za-z0-9_-]+)/);
  if (featuredMatch) {
    return { title: 'Kothari TV', category: 'All', embedId: featuredMatch[1] };
  }
  return null;
}

async function fetchKothariTVPage(): Promise<string> {
  const res = await fetch(KOTHARI_TV_URL, {
    next: { revalidate: 3600 },
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  if (!res.ok) throw new Error(`KothariTV fetch failed: ${res.status}`);
  return res.text();
}

async function fetchKothariTVChunk(html: string): Promise<string> {
  // The chunk is referenced as: /_next/static/chunks/pages/KothariTV-<hash>.js
  const chunkMatch = html.match(
    /\/_next\/static\/chunks\/pages\/KothariTV-([a-f0-9]+)\.js/
  );
  if (!chunkMatch) throw new Error('Could not find KothariTV chunk URL');
  const chunkUrl = `https://kotharigroupindia.com/_next/static/chunks/pages/KothariTV-${chunkMatch[1]}.js`;
  const res = await fetch(chunkUrl, {
    next: { revalidate: 3600 },
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  if (!res.ok) throw new Error(`KothariTV chunk fetch failed: ${res.status}`);
  return res.text();
}

function extractVideosFromChunk(chunk: string): KothariVideo[] {
  const videos: KothariVideo[] = [];
  // Match patterns like: {title:"Irrigation Video 1",category:"Irrigation",embedId:"dxADOuC0qc4"}
  const regex =
    /\{title:"([^"]+)",category:"([^"]+)",embedId:"([^"]+)"\}/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(chunk)) !== null) {
    videos.push({ title: match[1], category: match[2], embedId: match[3] });
  }
  return videos;
}

export const fetchKothariTVData = cache(async (): Promise<KothariTVData> => {
  try {
    const html = await fetchKothariTVPage();
    const featuredVideo = extractFeaturedVideo(html);
    const chunk = await fetchKothariTVChunk(html);
    const videos = extractVideosFromChunk(chunk);
    const categorySet = new Set(videos.map((v) => v.category));
    const categories = ['All', ...categorySet];
    return { featuredVideo, videos, categories };
  } catch {
    return { featuredVideo: null, videos: [], categories: ['All'] };
  }
});
