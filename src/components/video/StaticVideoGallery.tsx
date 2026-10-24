'use client';

import React, { useState } from 'react';
import { PlayCircle, Youtube } from 'lucide-react';
import { Reveal } from '@/components/main/Reveal';
import type { KothariVideo } from '@/lib/video';

const INITIAL_COUNT = 6;
const LOAD_STEP = 6;

// Static, unfiltered video grid (KothariTV card styling without the category tabs).
export const StaticVideoGallery: React.FC<{
  videos: KothariVideo[];
  playlistId?: string;
}> = ({ videos, playlistId }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  if (videos.length === 0) return null;

  const visible = videos.slice(0, visibleCount);
  const hasMore = visibleCount < videos.length;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visible.map((video, i) => {
          const href =
            video.url ||
            (video.embedId ? `https://www.youtube.com/watch?v=${video.embedId}` : '#');
          const image =
            video.img ||
            (video.embedId ? `https://img.youtube.com/vi/${video.embedId}/hqdefault.jpg` : '');

          return (
            <Reveal key={video.url || video.embedId || i} delay={(i % 3) * 90}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${video.title} on YouTube`}
                className="group block border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1E8E3E] transition-all duration-500 bg-white"
              >
                <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                  {image ? (
                    <img
                      src={image}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-600">
                      <PlayCircle className="w-10 h-10" />
                    </div>
                  )}
                </div>

                <span className="flex items-center justify-center gap-2 w-full bg-[#1575B3] text-white text-xs font-mono font-semibold tracking-wider uppercase px-4 py-3 group-hover:bg-[#0E588A] transition-colors">
                  <Youtube className="w-4 h-4" />
                  Watch on YouTube
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>

      <div className="pt-10 flex flex-col items-center gap-4">
        {hasMore && (
          <>
            <button
              onClick={() => setVisibleCount((c) => Math.min(videos.length, c + LOAD_STEP))}
              className="px-7 py-3.5 text-xs font-mono font-semibold tracking-wider uppercase border border-[#1575B3] text-[#1575B3] hover:bg-[#1575B3] hover:text-white transition-all duration-200"
            >
              Load More
            </button>
            <span className="text-[11px] font-mono tracking-wider uppercase text-slate-500">
              Showing {visible.length} of {videos.length}
            </span>
          </>
        )}

        {playlistId && (
          <a
            href={`https://www.youtube.com/playlist?list=${playlistId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1575B3] hover:bg-[#01568f] text-white px-7 py-3.5 text-sm font-medium transition-all duration-300"
          >
            <PlayCircle className="w-4 h-4" /> 
            Watch all on YouTube
          </a>
        )}
      </div>
    </div>
  );
};
