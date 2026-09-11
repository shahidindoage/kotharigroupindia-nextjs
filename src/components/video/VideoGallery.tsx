'use client';

import React, { useState } from 'react';
import { Reveal } from '@/components/main/Reveal';
import type { KothariVideo } from '@/lib/kothari-tv';

const PER_PAGE = 9;

interface VideoGalleryProps {
  videos: KothariVideo[];
  categories: string[];
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ videos, categories }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(0);

  const filtered =
    activeCategory === 'All'
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const pageVideos = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setPage(0);
  };

  return (
    <div>
      {/* Filter by category heading + tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-300">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 m-0">
          Filter by category
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1575B3] border-[#1575B3] text-white'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      {pageVideos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pageVideos.map((video, i) => (
            <Reveal key={video.embedId} delay={(i % 3) * 90}>
              <div className="group border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500">
                <div className="aspect-video w-full bg-slate-900">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="text-sm text-slate-500">No videos found in this category.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pt-10 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className={`h-9 px-3 flex items-center justify-center gap-1 text-xs font-mono border transition-all duration-200 ${
              page === 0
                ? 'border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed'
                : 'border-slate-200 bg-white text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3]'
            }`}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-9 h-9 flex items-center justify-center text-xs font-mono border transition-all duration-200 ${
                page === i
                  ? 'bg-[#1575B3] border-[#1575B3] text-white font-semibold'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3]'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className={`h-9 px-3 flex items-center justify-center gap-1 text-xs font-mono border transition-all duration-200 ${
              page === totalPages - 1
                ? 'border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed'
                : 'border-slate-200 bg-white text-slate-600 hover:border-[#1575B3] hover:text-[#1575B3]'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};