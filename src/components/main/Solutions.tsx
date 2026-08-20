'use client';
import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Droplets,
  Factory,
  Filter,
  Gauge,
  Layers,
  ShowerHead,
  ShieldCheck,
  Sprout,
  Waves,
  Wrench
} from 'lucide-react';
import Link from 'next/link';
import { Reveal, SectionLabel } from './Reveal';

const HighlightsPanel: React.FC<{
  points: Array<{ label: string; icon: any }>;
  tone: {
    panel: string;
    highlights: string;
    liBox: string;
  };
}> = ({ points, tone }) => {
  return (
    <div className={`w-full ${tone.panel}`}>
      <span className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider ${tone.highlights}`}>
        <span className="w-2 h-2 rounded-full bg-current" />
        Key Highlights
      </span>

      <ul className="space-y-3 mt-3">
        {points.map((pt) => {
          const PointIcon = pt.icon;
          return (
            <li
              key={pt.label}
              className={`group/li relative flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 ${tone.liBox}`}
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs">
                <PointIcon className="w-4 h-4 text-slate-700" />
              </div>
              <p className="flex-1 text-xs font-medium text-slate-800 leading-snug">
                {pt.label}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Solutions: React.FC = () => {
  const divisions = [
    {
      tag: 'Agriculture Division',
      title: 'Micro Irrigation Solutions',
      description: 'Smart irrigation solutions for every crop and every farmer.',
      points: [
        { label: 'Drip Irrigation Systems', image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp', icon: Droplets },
        { label: 'Sprinkler Networks', image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp', icon: ShowerHead },
        { label: 'Filters & Fertigation', image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp', icon: Filter },
        { label: 'PMKSY Subsidy Approved', image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp', icon: BadgeCheck }
      ],
      button: 'Explore Agriculture Division',
      icon: Sprout,
      glyph: [Droplets, Wrench],
      green: true,
      url:'/agriculture-division'
    },
    {
      tag: 'Pipe Division',
      title: 'Agri Pipes | Plumbing Pipes & Fittings',
      description: 'High quality piping solutions for agriculture, plumbing, infrastructure and industries.',
      points: [
        { label: 'Agri Pressure Pipes', image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp', icon: Gauge },
        { label: 'CPVC & UPVC Plumbing', image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp', icon: Wrench },
        { label: 'SWR Drainage & Fittings', image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp', icon: Waves },
        { label: 'BIS & ISO Certified', image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp', icon: ShieldCheck }
      ],
      button: 'Explore Pipe Division',
      icon: Factory,
      glyph: [Wrench, Droplets],
      url:'/pipe-division'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-[#F5FAFF] scroll-mt-20 relative overflow-hidden">
      <style>
        {`
          .flip-card {
            perspective: 1200px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            transform-style: preserve-3d;
          }
          @media (min-width: 768px) {
            .flip-card:hover .flip-card-inner {
              transform: rotateY(180deg) rotateX(-6deg);
            }
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
          .flip-card-back {
            transform: rotateY(180deg);
            z-index: 20;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12 relative z-10">
        <Reveal className="text-center max-w-2xl mx-auto space-y-3">
          <SectionLabel icon={Layers}>Kothari Divisions</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1575B3]">Choose Your Solution</h2>
          <p className="text-sm font-light text-[#5F6B7A]">
            Select the division that best matches your needs.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {(() => {
            const cardImages = [
              'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg',
              'https://kotharigroupindia.com/img/images/Building_pipe.webp'
            ];

            return divisions.map((div, idx) => {
              const IconComp = div.icon;
              const green = !!div.green;

              const accentColor = green ? 'text-[#1E8E3E]' : 'text-[#1575B3]';
              const badgeBg = green ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-sky-50 text-sky-700 border-sky-200';
              const topBorderColor = green ? 'border-t-emerald-600' : 'border-t-[#1575B3]';
              const btnBg = green ? 'bg-[#1E8E3E] hover:bg-emerald-800' : 'bg-[#1575B3] hover:bg-sky-800';

              const frontOverlay = green
                ? 'from-emerald-950/90 via-emerald-900/60 to-emerald-950/80'
                : 'from-sky-950/90 via-sky-900/60 to-sky-950/80';

              return (
                <Reveal key={idx} delay={idx * 150}>
                  <div className="flip-card relative h-[540px] group/card">

                    <div className="flip-card-inner">

                      <div className="flip-card-front rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg transition-shadow duration-500 group-hover/card:shadow-2xl">

                        <Link
                          href={div.url}
                          className="absolute inset-0 z-30 block cursor-pointer md:pointer-events-none md:cursor-default"
                          aria-label={`Navigate to ${div.title}`}
                        />

                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover/card:scale-105"
                          style={{ backgroundImage: `url(${cardImages[idx]})` }}
                        />

                        <div className={`absolute inset-0 bg-gradient-to-b ${frontOverlay}`} />

                        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full p-8 space-y-3 pointer-events-none">
                          <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border backdrop-blur-md shadow-xs ${badgeBg}`}>
                            Division {idx + 1}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight drop-shadow-md max-w-xs">
                            {div.title}
                          </h3>

                          <span className="md:hidden text-[11px] font-medium text-white/80 pt-2 flex items-center gap-1">
                            Tap to view solution
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>

                      <div className={`flip-card-back rounded-2xl overflow-hidden bg-white border border-slate-200 border-t-4 ${topBorderColor} shadow-xl group-hover/card:shadow-2xl flex flex-col justify-between p-7 z-20`}>

                        <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100 shrink-0">
                          <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${badgeBg}`}>
                            <IconComp className={`w-6 h-6 ${accentColor}`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 tracking-tight">{div.title}</h3>
                            <p className="text-xs text-slate-500 font-normal mt-0.5">Key Features & Highlights</p>
                          </div>
                        </div>

                        <div className="flex-1 my-auto py-4 flex flex-col justify-center">
                          <HighlightsPanel
                            points={div.points}
                            tone={{
                              panel: 'bg-transparent space-y-3',
                              highlights: 'text-slate-800 font-semibold text-xs uppercase tracking-wide',
                              liBox: 'text-slate-700 bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl hover:bg-slate-100/90 transition-colors text-xs font-medium shadow-xs'
                            }}
                          />
                        </div>

                        <div className="pt-4 border-t border-slate-100 shrink-0 relative z-30">
                          <Link
                            href={div.url}
                            className={`group/btn flex items-center justify-center gap-2 w-full text-white ${btnBg} py-3.5 px-5 rounded-xl font-semibold text-xs tracking-wide transition-all shadow-md active:scale-[0.98] cursor-pointer`}
                          >
                            <span>{div.button}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </div>

                      </div>

                    </div>
                  </div>
                </Reveal>
              );
            });
          })()}
        </div>
      </div>
    </section>
  );
};