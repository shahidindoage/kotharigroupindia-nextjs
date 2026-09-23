'use client';

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { SectionHeader } from '../solutions/SectionHeader';
import type { SegmentPageContent } from '@/data/segment-pages';

/* ── SEGMENT OVERVIEW ────────────────────────────────── */
export const SegmentOverview: React.FC<{
  content: SegmentPageContent;
  title: string;
}> = ({ content, title }) => {
  if (!content || content.overview.length === 0) return null;
  return (
    <section className="w-full bg-white py-16 pb-2 sm:py-24 sm:pb-4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title={`Overview`}
        />
        <div className="space-y-4">
          {content.overview.map((para, idx) => (
            <p
              key={idx}
              className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── SEGMENT FAQS ────────────────────────────────────── */
export const SegmentFaqs: React.FC<{
  content: SegmentPageContent;
}> = ({ content }) => {
  const [open, setOpen] = useState<number | null>(0);

  if (!content || content.faqs.length === 0) return null;

  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title="Frequently Asked Questions"
        />
        <div className="space-y-3">
          {content.faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className={`border bg-white transition-all ${
                  isOpen
                    ? 'border-[#1575B3] shadow-md'
                    : 'border-slate-200 hover:border-[#1575B3]/40'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm sm:text-base font-semibold ${
                      isOpen ? 'text-[#1575B3]' : 'text-slate-900'
                    }`}
                  >
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#1575B3] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};