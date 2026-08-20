'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

const categories = [
  {
    num: '01',
    title: 'Plumbing Pipes & Fittings',
    description: 'We provide durable plumbing pipes and fittings for leakage-free water flow and safe waste management.',
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp'
  },
  {
    num: '02',
    title: 'Agri Pipes & Fittings',
    description: 'For sustainable farming with efficient water management, we offer an extensive range of durable agricultural pipes and fittings.',
    image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp'
  },
  {
    num: '03',
    title: 'Micro Irrigation System',
    description: 'For over four decades, we have empowered Indian farmers with smart water management for agriculture.',
    image: 'https://kotharigroupindia.com/img/images/Irrigation_products.webp'
  }
];

export const HomeCategories: React.FC = () => {
  const [active, setActive] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollToProducts = () => {
    const el = document.getElementById('categories');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getCardIndex = (offset: number) => {
    return (active + offset + categories.length) % categories.length;
  };

  const prevIdx = getCardIndex(-1);
  const nextIdx = getCardIndex(1);

  return (
    <section id="our-categories" className="py-12 bg-white border-b border-[#DCEAF5] overflow-hidden">
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>

      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="bg-[#FFFFFF] border border-[#DCEAF5] text-[#1575B3] text-xs font-bold px-3.5 py-1 rounded-lg  tracking-wider shadow-2xs">
            Our Segments
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-[#1575B3]">
           Complete Range of Piping Solutions
          </h2>
          <p className="text-xs sm:text-sm font-light text-[#5F6B7A]">
            Everything you need for agriculture, plumbing, drainage and industrial applications.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Nav Buttons */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-white transition-all"
            aria-label="Previous slide"
          >
            {/* <ArrowLeft className="w-4 h-4" /> */}
            <ChevronLeft className="w-4 h-4"/>
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-white transition-all"
            aria-label="Next slide"
          >
            {/* <ArrowRight className="w-4 h-4" /> */}
             <ChevronRight className="w-4 h-4"/>
          </button>

          {/* Cards Layout - Height expanded */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 py-2 min-h-[480px]">
            
            {/* LEFT CARD */}
            <div
              onClick={() => setActive(prevIdx)}
              className="hidden md:block w-[220px] lg:w-[250px] h-[380px] lg:h-[400px] cursor-pointer opacity-70 hover:opacity-90 transition-all duration-500 transform scale-90 shrink-0"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <img
                  src={categories[prevIdx].image}
                  alt={categories[prevIdx].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003F82]/90 via-[#003F82]/40 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {categories[prevIdx].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* CENTER CARD (TALLER HEIGHT) */}
            <div className="perspective-1000 w-[280px] sm:w-[320px] lg:w-[350px] h-[440px] sm:h-[480px] shrink-0 group z-20">
              <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180 transition-transform">
                
                {/* FRONT VIEW (Centered Heading + Extended Bottom Overlay) */}
                <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 backface-hidden">
                  <img
                    src={categories[active].image}
                    alt={categories[active].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  
                  {/* Deepened & Taller Bottom Blue Gradient Overlay */}
                  <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#002D5E] via-[#003F82]/85 via-50% to-transparent" />

                  {/* Bottom Content Container (Centered) */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex justify-center text-center z-10">
                    <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-wide leading-snug drop-shadow-md">
                      {categories[active].title}
                    </h3>
                  </div>
                </div>

                {/* BACK VIEW (Left-Aligned Details) */}
                <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-[#1575B3] text-white p-6 sm:p-8 flex flex-col justify-between items-start text-left rotate-y-180 backface-hidden">
                  <div className="space-y-4 w-full">
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                      {categories[active].title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-white/90 leading-relaxed">
                      {categories[active].description}
                    </p>
                  </div>
                  <button
                    onClick={scrollToProducts}
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#1575B3] hover:bg-slate-100 w-full py-2.5 rounded-xl font-semibold text-xs transition-all shadow-md"
                  >
                    View Products
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

            {/* RIGHT CARD */}
            <div
              onClick={() => setActive(nextIdx)}
              className="hidden md:block w-[220px] lg:w-[250px] h-[380px] lg:h-[400px] cursor-pointer opacity-70 hover:opacity-90 transition-all duration-500 transform scale-90 shrink-0"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <img
                  src={categories[nextIdx].image}
                  alt={categories[nextIdx].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003F82]/90 via-[#003F82]/40 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {categories[nextIdx].title}
                  </h3>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Indicators */}
          <div className="flex justify-center items-center gap-1.5 mt-3">
            {categories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === active ? 'w-6 bg-[#1575B3]' : 'w-3 bg-slate-200'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};