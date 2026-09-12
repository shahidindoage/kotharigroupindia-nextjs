'use client';

import React, { useState } from 'react';
import { Reveal } from '@/components/main/Reveal';
import type { Award } from '@/lib/awards';

interface AwardsGalleryProps {
  awards: Award[];
  categories: string[];
}

export const AwardsGallery: React.FC<AwardsGalleryProps> = ({ awards, categories }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? awards : awards.filter((a) => a.category === activeCategory);

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
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

      {/* Awards Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((award, i) => (
            <Reveal key={award.id} delay={(i % 3) * 90}>
              <div className="group h-full bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500 flex flex-col">
                <div className="relative bg-[#F5F6F8] border-b border-slate-200 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.opacity = '0.3';
                    }}
                    className="w-full h-auto object-contain opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <h3 className="text-base font-serif font-medium text-slate-900 leading-snug">
                    {award.title}
                  </h3>
                  {/* <span className="text-[10px] font-mono tracking-widest uppercase text-[#1575B3] font-semibold">
                    {award.category}
                  </span> */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="text-sm text-slate-500">No awards found in this category.</p>
        </div>
      )}
    </div>
  );
};