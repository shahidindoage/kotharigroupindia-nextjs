'use client';

import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Reveal } from '@/components/main/Reveal';
import type { DownloadItem } from '@/lib/download';

interface DownloadGalleryProps {
  downloads: DownloadItem[];
  categories: string[];
}

const PER_PAGE = 6;

export const DownloadGallery: React.FC<DownloadGalleryProps> = ({ downloads, categories }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(0);

  const filtered =
    activeCategory === 'All'
      ? downloads
      : downloads.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const pageItems = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

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

      {/* Download List */}
      {pageItems.length > 0 ? (
        <div className="flex flex-col gap-3">
          {pageItems.map((item, i) => (
            <Reveal key={item.id} delay={(i % PER_PAGE) * 60}>
              <div className="group bg-white border border-slate-200 px-5 sm:px-6 py-5 flex items-center justify-between gap-4 shadow-sm hover:shadow-lg hover:border-[#1575B3] transition-all duration-300">
                <div className="min-w-0">
                  <p className="text-[10px] font-mono tracking-widest uppercase text-slate-400 font-medium mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-base sm:text-lg font-serif font-medium text-slate-900 leading-snug group-hover:text-[#1575B3] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
                <a
                  href={item.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  aria-label={`Download ${item.title}`}
                  title={`Download ${item.title}`}
                  className="shrink-0 w-11 h-11 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center text-[#1575B3] hover:bg-[#1575B3] hover:text-white transition-colors duration-300"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="text-sm text-slate-500">No files available in this category.</p>
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