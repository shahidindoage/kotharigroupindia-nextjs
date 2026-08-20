'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal, SectionLabelGreen } from './Reveal';

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const crops = [
  { num: '01', name: 'Sugarcane', description: 'Water-efficient ratoon management for higher sugar recovery.', image: '/food1.jpg' },
  { num: '02', name: 'Banana', description: 'Uniform soil moisture for strong, healthy bunches.', image: '/food2.jpg' },
  { num: '03', name: 'Pomegranate', description: 'Drip schedules that prevent fruit cracking.', image: '/food3.jpg' },
  { num: '04', name: 'Grapes', description: 'Precise fertigation for premium vineyard quality.', image: '/food4.jpg' },
  { num: '05', name: 'Vegetables', description: 'Steady irrigation for faster, cleaner harvests.', image: '/food7.jpg' }
];

export const CropSolutions: React.FC = () => {
  return (
    <section id="crops" className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#BFE4CC] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#BFE4CC]">
          <div className="space-y-3">
            <SectionLabelGreen>Crop Based Solutions</SectionLabelGreen>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0F6B2B]">
              Find the right solution for your crop.
            </h2>
            <p className="text-sm font-light text-[#5F6B7A]">
              Crop-specific irrigation designs for higher yields and healthier plants.
            </p>
          </div>

          <button
            onClick={() => scrollToId('crops')}
            className="inline-flex items-center gap-2 bg-transparent border border-[#1E8E3E] text-[#1E8E3E] hover:bg-[#1E8E3E] hover:text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-all group shrink-0"
          >
            View All Crops
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>

        <div className="space-y-4">
          {crops.map((crop) => (
            <div key={crop.name} className="relative">
              <button
                onClick={() => scrollToId('why')}
                className="group relative z-10 group-hover:z-30 w-full flex items-center justify-between gap-6 rounded-lg border border-[#BFE4CC] bg-[#FFFFFF] px-5 sm:px-8 py-5 sm:py-6 hover:bg-gradient-to-r hover:from-[#1E8E3E] hover:to-[#0F6B2B] hover:border-transparent hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-36 sm:w-40 aspect-[16/10] rounded-lg overflow-hidden border-4 border-white shadow-2xl shadow-black/30 -translate-x-1/2 -translate-y-1/2 scale-50 rotate-3 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 transition-all duration-300">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-sm font-bold text-[#1E8E3E] group-hover:text-[#A9DDB8] transition-colors">
                    {crop.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] group-hover:text-white transition-colors">
                    {crop.name}
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <p className="hidden md:block text-xs font-light text-[#5F6B7A] group-hover:text-white/80 transition-colors max-w-xs text-right">
                    {crop.description}
                  </p>
                  <ArrowRight className="w-5 h-5 text-[#1E8E3E] group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};