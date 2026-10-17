'use client';

import React, { useState } from 'react';
import { ArrowRight, ClipboardList, SearchCheck, Users } from 'lucide-react';
import { DealerApplyModal } from '@/components/dealer/DealerApplyModal';
import type { DivisionEmails } from '@/lib/dealer';

// Icon + display title per step. Lives here rather than in the server page
// because icon components cannot be passed across the server -> client
// boundary as props.
const stepMeta = [
  { title: 'Submit Application', icon: ClipboardList },
  { title: 'Review & Approval', icon: SearchCheck },
  { title: 'Onboarding & Training', icon: Users },
];

export interface DealerProcessStepsProps {
  steps: { number: number; title: string }[];
  emails: DivisionEmails;
}

/**
 * The "How it works" step list. Only the first step is interactive — clicking
 * it opens the dealer application dialog. The later steps describe what happens
 * after submission, so they stay inert.
 */
export const DealerProcessSteps: React.FC<DealerProcessStepsProps> = ({ steps, emails }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-5 justify-center min-h-full h-full">
        {steps.map((step, i) => {
          const meta = stepMeta[i];
          const Icon = meta.icon;
          const isClickable = i === 0;

          const body = (
            <>
              <div className="w-16 h-16 shrink-0 bg-[#F5FAFF] border border-[#DCEAF5] flex items-center justify-center text-[#1575B3] group-hover:bg-[#1575B3] group-hover:text-white transition-colors duration-500">
                <Icon className="w-7 h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#0E588A] font-semibold">
                  Step {String(step.number).padStart(2, '0')}
                </span>
                <h4 className="mt-1 text-lg sm:text-xl font-serif font-medium text-slate-900 leading-snug group-hover:text-[#1575B3] transition-colors duration-300">
                  {meta.title}
                </h4>
              </div>
              {/* Only the actionable first step advertises the arrow, so it reads
                  as the entry point. The trailing steps stay visually inert. */}
              {isClickable && (
                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#1575B3] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
              )}
            </>
          );

          const shell =
            'group relative flex items-center gap-5 sm:gap-6 bg-white border border-slate-200 p-6 sm:p-7 shadow-sm transition-all duration-500';

          return isClickable ? (
            <button
              key={step.number}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open the dealer application form"
              className={`${shell} w-full text-left cursor-pointer hover:shadow-xl hover:border-[#1575B3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1575B3] focus-visible:ring-offset-2`}
            >
              {body}
            </button>
          ) : (
            <div key={step.number} className={`${shell} cursor-default hover:shadow-xl hover:border-[#1575B3]`}>
              {body}
            </div>
          );
        })}
      </div>

      <DealerApplyModal open={open} onClose={() => setOpen(false)} emails={emails} />
    </>
  );
};
