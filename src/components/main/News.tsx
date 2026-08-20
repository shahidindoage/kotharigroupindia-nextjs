'use client';
import React from 'react';
import { ArrowRight, Newspaper, Calendar } from 'lucide-react';
import { Reveal, SectionLabel } from './Reveal';

export const News: React.FC = () => {
  const news = [
    {
      title: 'CPVC vs. UPVC: Choosing The Right Plumbing Pipe For Your Building',
      snippet: 'An engineering comparison of temperature thresholds, working pressure SDR ratings, chemical resistance, and solvent welding best practices.',
      date: 'Jun 2026',
      category: 'Plumbing Systems',
      image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp'
    },
    {
      title: 'How Micro Irrigation Boosts Crop Yield By 40% With 50% Less Water',
      snippet: 'Discover the science behind targeted root-zone drip irrigation, fertigation nutrient uptake, and preventing evaporation losses in arid farmland.',
      date: 'Jul 2026',
      category: 'Micro Irrigation',
      image: 'https://images.pexels.com/photos/11679735/pexels-photo-11679735.jpeg'
    },
    {
      title: 'Preventing Borewell Column Failure: Submersible Pipe Installation Rules',
      snippet: 'Key guidelines on thread locking, torque limits, pump weight support, and preventing back-siphonage in deep underground borewells.',
      date: 'May 2026',
      category: 'Agri & Borewell',
      image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp'
    }
  ];

  return (
    <section id="news" className="py-16 sm:py-20 bg-[#F5FAFF] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#DCEAF5]">
          <div className="space-y-3">
            <SectionLabel icon={Newspaper}>Stay Updated</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#1575B3]">News & Updates</h2>
            <p className="text-sm font-light text-[#5F6B7A]">
              The latest from Kothari Group — launches, expansions and industry recognition.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <article className="group bg-[#FFFFFF] rounded-lg border border-[#DCEAF5] p-5 shadow-xs hover:shadow-xl hover:border-[#1575B3]/30 transition-all flex flex-col justify-between h-full">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-[#DCEAF5] bg-gradient-to-br from-[#E8F3FB] via-[#F5FAFF] to-[#DCEAF5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-1.5 text-[#1575B3]/50">
                      <Newspaper className="w-8 h-8" />
                      <span className="text-[10px] font-semibold tracking-wider">Image</span>
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1575B3] text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-[#DCEAF5]">
                    {item.category}
                  </span>
                </div>

                <div className="pt-4 space-y-2.5 flex-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#5F6B7A]">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  <h3 className="text-base font-medium text-[#1575B3] leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-light text-[#5F6B7A] leading-relaxed line-clamp-3">
                    {item.snippet}
                  </p>
                </div>

                <a
                  href="#news"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1.5 mt-4 pt-4 border-t border-[#DCEAF5] text-xs font-medium text-[#1575B3] hover:text-[#0E588A] hover:gap-2.5 transition-all"
                >
                  Read More
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <button className="inline-flex items-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white px-7 py-3.5 rounded-lg font-medium text-sm transition-all shadow-md shadow-[#1575B3]/20 hover:-translate-y-0.5 group">
            View All Updates
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    </section>
  );
};