import React from 'react';
import { SectionHeader } from './SectionHeader';

export const SolutionOverview: React.FC<{ overview: string[] }> = ({ overview }) => {
  if (!overview.length) return null;
  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        {/* <span className="inline-block text-[11px] font-mono tracking-[0.25em] uppercase text-[#1575B3]">
          Overview
        </span> */}

         <SectionHeader
                  title="Overview"
                  // description="Specification-grade reasons engineers, contractors and growers standardize on Kothari."
                />
        {overview.map((para, idx) => (
          <p key={idx} className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-7xl">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
};
