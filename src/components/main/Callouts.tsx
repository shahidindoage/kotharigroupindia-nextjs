'use client';
import React from 'react';
import { ArrowRight, MapPin, ShieldCheck, PhoneCall } from 'lucide-react';
import { Reveal } from './Reveal';

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const callouts = [
  {
    title: 'Dealer Locator',
    description: 'Find nearest dealer in your area.',
    icon: MapPin
  },
  {
    title: 'Government Subsidy',
    description: 'Check eligibility and available schemes.',
    icon: ShieldCheck
  },
  {
    title: 'Enquire Now',
    description: 'Fill the form and our team will contact you.',
    icon: PhoneCall
  }
];

export const Callouts: React.FC = () => {
  return (
    <section id="callouts" className="bg-[#F5FAFF] scroll-mt-20 overflow-hidden">
      <Reveal>
        <div className="marquee-mask bg-gradient-to-r from-[#0F6B2B] to-[#1575B3] border-y border-[#DCEAF5]">
          <div className="marquee-pause flex overflow-hidden py-6">
            <div className="marquee-track flex shrink-0 items-center w-max">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 items-center">
                  {callouts.map((call) => {
                    const IconComp = call.icon;
                    return (
                      <button
                        key={call.title}
                        onClick={() => scrollToId('home2-footer')}
                        className="group flex items-center gap-4 shrink-0 px-8 sm:px-10 cursor-pointer"
                      >
                        <div className="w-11 h-11 rounded-lg bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#1575B3] transition-colors shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <p className="text-white font-semibold text-sm sm:text-base leading-tight">
                            {call.title}
                          </p>
                          <p className="text-white/70 text-[11px] leading-tight mt-0.5">
                            {call.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform shrink-0" />
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};