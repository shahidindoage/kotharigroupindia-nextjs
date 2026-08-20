'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const News: React.FC = () => {
  const news = [
    {
      id: 'PUB-01',
      title: 'CPVC vs. UPVC: Choosing The Right Plumbing Pipe For Your Building',
      snippet: 'An engineering comparison of temperature thresholds, working pressure SDR ratings, chemical resistance, and solvent welding best practices.',
      date: 'June 2026',
      category: 'PLUMBING SYSTEMS',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp'
    },
    {
      id: 'PUB-02',
      title: 'How Micro Irrigation Boosts Crop Yield By 40% With 50% Less Water',
      snippet: 'Discover the science behind targeted root-zone drip irrigation, fertigation nutrient uptake, and preventing evaporation losses in arid farmland.',
      date: 'July 2026',
      category: 'MICRO IRRIGATION',
      image: 'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg'
    },
    {
      id: 'PUB-03',
      title: 'Preventing Borewell Column Failure: Submersible Pipe Installation Rules',
      snippet: 'Key guidelines on thread locking, torque limits, pump weight support, and preventing back-siphonage in deep underground borewells.',
      date: 'May 2026',
      category: 'AGRI & BOREWELL',
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp'
    }
  ];

  return (
    <section id="news" className="w-full bg-[#F5F6F8] pt-16 pb-12 sm:pt-20 sm:pb-16 text-slate-900 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Editorial Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300/80">
          <div>
            {/* <span className="text-xs font-mono tracking-widest text-blue-700 uppercase font-semibold">
              Technical Publications
            </span> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900 mt-2">
              News & Journal
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            Engineering insights, agronomic studies, and corporate announcements from the Kothari Group intelligence desk.
          </p>
        </div>

        {/* Editorial Articles Grid */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <Reveal key={idx} delay={idx * 90} className="h-full">
                <article className="group relative bg-white border border-slate-200/90 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-all duration-500 hover:border-slate-300">
                  
                  {/* Top Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.opacity = '0.3';
                      }}
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Monospaced Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-mono tracking-widest font-medium px-3 py-1 border border-white/20 uppercase">
                        {item.category}
                      </span>
                    </div>

                    {/* Publication Code Stamp */}
                    <div className="absolute top-4 right-4">
                      {/* <span className="text-[10px] font-mono tracking-widest text-slate-300 font-semibold uppercase bg-slate-950/60 px-2 py-0.5 backdrop-blur-sm">
                        {item.id}
                      </span> */}
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      {/* Clean Date Badge Line */}
                      <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        <span className="font-medium text-slate-600">{item.date}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-serif font-normal text-slate-900 leading-snug tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-3">
                        {item.snippet}
                      </p>
                    </div>

                    {/* Clean Monospaced CTA Line */}
                    <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase group-hover:text-blue-700 transition-colors">
                      <span>READ PAPER</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Bottom CTA Row */}
        <Reveal className="pt-2 flex justify-center">
          <a
            href="#journal"
            className="group inline-flex items-center gap-3 bg-slate-900 hover:bg-blue-700 text-white px-8 py-3.5 text-xs font-mono tracking-widest uppercase font-semibold transition-all duration-300 shadow-sm"
          >
            <span>ACCESS FULL ARCHIVE</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </Reveal>

      </div>
    </section>
  );
};