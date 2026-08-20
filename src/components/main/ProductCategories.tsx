'use client';
import React, { useState } from 'react';
import { Sprout, ArrowRight } from 'lucide-react';
import { SectionLabelGreen } from './Reveal';

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const categories = [
  { num: '01', title: 'Drip Irrigation', description: 'Efficient drip systems that deliver water directly to the root zone.', image: 't1.jpg' },
  { num: '02', title: 'Sprinkler Irrigation', description: 'Uniform water distribution for wide-area coverage.', image: 't2.jpg' },
  { num: '03', title: 'Filters', description: 'Remove impurities and protect your drippers and emitters.', image: 't3.jpg' },
  { num: '04', title: 'Fertigation', description: 'Precise nutrient application through the irrigation system.', image: 't4.jpg' },
  { num: '05', title: 'Crop Solutions', description: 'Tailored irrigation designs for specific crops.', image: 't7.jpg' },
  { num: '06', title: 'Accessories', description: 'Fittings, valves and components for a complete system.', image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp' }
];

export const ProductCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="products" className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#BFE4CC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <SectionLabelGreen icon={Sprout}>Product Categories</SectionLabelGreen>
          <h2 className="text-3xl sm:text-4xl font-medium text-[#0F6B2B]">
            Complete Micro Irrigation Range
          </h2>
          <p className="text-sm font-light text-[#5F6B7A]">
            Everything you need to irrigate smarter, from source to root zone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="space-y-3">
            {categories.map((cat, idx) => {
              const active = idx === activeCategory;
              return (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategory(idx)}
                  onMouseEnter={() => setActiveCategory(idx)}
                  className={`w-full text-left rounded-lg border transition-all duration-300 p-4 ${
                    active
                      ? 'bg-[#F2FBF4] border-[#1E8E3E]/30 shadow-lg shadow-[#1E8E3E]/10'
                      : 'bg-transparent border-transparent hover:bg-[#F2FBF4]/60 hover:border-[#BFE4CC]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                        active
                          ? 'bg-gradient-to-br from-[#1E8E3E] to-[#0F6B2B] text-white shadow-md shadow-[#1E8E3E]/25'
                          : 'bg-[#F2FBF4] border border-[#BFE4CC] text-[#5F6B7A]'
                      }`}
                    >
                      {cat.num}
                    </span>
                    <h3
                      className={`text-base sm:text-lg transition-colors ${
                        active ? 'text-[#1E8E3E] font-semibold' : 'text-[#111111] font-medium'
                      }`}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      active ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs font-light text-[#5F6B7A] leading-relaxed pl-14">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative h-80 lg:h-full min-h-[24rem] rounded-lg overflow-hidden border border-[#BFE4CC] shadow-xl shadow-[#1E8E3E]/10">
            <img
              key={activeCategory}
              src={categories[activeCategory].image}
              alt={categories[activeCategory].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              style={{ animation: 'fadeSlideUp 0.5s ease-out both' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F6B2B]/80 via-[#0F6B2B]/15 to-transparent" />

            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1E8E3E] text-[10px] font-semibold px-3 py-1.5 rounded-lg border border-[#BFE4CC]">
              {categories[activeCategory].num} · {categories[activeCategory].title}
            </span>

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
              <h3
                key={`t-${activeCategory}`}
                className="text-xl sm:text-2xl font-semibold text-white leading-snug"
                style={{ animation: 'fadeSlideUp 0.5s 0.05s ease-out both' }}
              >
                {categories[activeCategory].title}
              </h3>
              <p
                key={`d-${activeCategory}`}
                className="mt-1.5 text-xs font-light text-white/80 max-w-md"
                style={{ animation: 'fadeSlideUp 0.5s 0.1s ease-out both' }}
              >
                {categories[activeCategory].description}
              </p>
              <button
                onClick={() => scrollToId('crops')}
                className="mt-4 inline-flex items-center gap-2 bg-white text-[#1E8E3E] hover:bg-[#BFE4CC] px-5 py-2.5 rounded-lg font-semibold text-xs transition-all group/link"
              >
                Explore
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};