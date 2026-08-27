'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SubCategory {
  title: string;
}

interface DivisionCategory {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  gradient: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  subCategories: SubCategory[];
  exploreLink: string;
}

const pipesData: DivisionCategory[] = [
  {
    id: 'plumbing',
    name: 'Plumbing & Fluid Systems',
    subtitle: 'High-performance conduits',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-[#1575B3]/90 via-[#0E588A]/90 to-slate-900/90',
    heroImage: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1600&q=80',
    heroTitle: 'Architectural Fluid Dynamics',
    heroDescription: 'Engineered for seamless delivery and durability across residential and commercial towers.',
    subCategories: [
      { title: 'Plumbing Pipes & Fittings' },
      { title: 'Flexible Hose Pipes' },
    ],
    exploreLink: '/divisions/pipes/plumbing',
  },
  {
    id: 'sewerage',
    name: 'Sewerage & Drainage',
    subtitle: 'Urban flow management',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-slate-800/80 via-[#0E588A]/80 to-slate-900/90',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80',
    heroTitle: 'High-Capacity Subterranean Systems',
    heroDescription: 'Designed to handle continuous volume with zero compromise on structural integrity.',
    subCategories: [
      { title: 'Sewerage Drainage Pipes & Fittings' },
    ],
    exploreLink: '/divisions/pipes/sewerage',
  },
  {
    id: 'cable-protection',
    name: 'Cable & Underground Ducting',
    subtitle: 'Sub-surface shield',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-[#1575B3]/80 via-[#0E588A]/80 to-slate-900/90',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    heroTitle: 'Critical Conduit Architecture',
    heroDescription: 'Protecting telecom and power grids against environmental friction and ground movement.',
    subCategories: [
      { title: 'Cable Protection' },
    ],
    exploreLink: '/divisions/pipes/cable-protection',
  },
  {
    id: 'borewell',
    name: 'Borewell & Deep Extraction',
    subtitle: 'Precision casing',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-teal-800/80 via-slate-800/80 to-[#1575B3]/90',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
    heroTitle: 'Submersible Casing Engineering',
    heroDescription: 'Corrosion-resistant casing systems optimized for deep subterranean water sourcing.',
    subCategories: [
      { title: 'Borewell Solution' },
    ],
    exploreLink: '/divisions/pipes/borewell',
  },
];

const agricultureData: DivisionCategory[] = [
  {
    id: 'agri-pipes',
    name: 'Agri Supply Piping',
    subtitle: 'Cultivation infrastructure',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-emerald-700/80 via-teal-800/80 to-slate-900/90',
    heroImage: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1600&q=80',
    heroTitle: 'Agricultural Supply Ecosystems',
    heroDescription: 'High-volume water conveyance systems optimized for agrarian terrains.',
    subCategories: [
      { title: 'Agriculture Pipes & Fittings' },
    ],
    exploreLink: '/divisions/agriculture/pipes',
  },
  {
    id: 'drip-micro',
    name: 'Precision Drip & Micro',
    subtitle: 'Targeted irrigation',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-teal-700/80 via-green-800/80 to-slate-900/90',
    heroImage: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=1600&q=80',
    heroTitle: 'Next-Gen Micro Irrigation',
    heroDescription: 'Root-level nutrient and hydration delivery that reduces water loss by up to 60%.',
    subCategories: [
      { title: 'Drip Irrigation System' },
      { title: 'Micro & Mini Sprinklers' },
    ],
    exploreLink: '/divisions/agriculture/drip',
  },
  {
    id: 'sprinklers-filtration',
    name: 'Sprinklers & Filtration',
    subtitle: 'Water purification & coverage',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-[#1575B3]/80 via-teal-800/80 to-slate-900/90',
    heroImage: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1600&q=80',
    heroTitle: 'High-Density Sprinklers & Filtration',
    heroDescription: 'Filtering particulate matter to ensure clog-free performance across wide crop layouts.',
    subCategories: [
      { title: 'Sprinkler Irrigation System' },
      { title: 'Filters & Injectors' },
    ],
    exploreLink: '/divisions/agriculture/sprinklers',
  },
  {
    id: 'automation-turnkey',
    name: 'Automated Farm Systems',
    subtitle: 'Smart turnkey installations',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-[#1575B3]/80 via-slate-800/80 to-indigo-900/90',
    heroImage: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1600&q=80',
    heroTitle: 'Automated Farm Governance',
    heroDescription: 'IoT-ready valves, automated fertigation, and large-scale agricultural engineering.',
    subCategories: [
      { title: 'Automation System' },
      { title: 'Turnkey Projects' },
    ],
    exploreLink: '/divisions/agriculture/turnkey',
  },
];

export const Category = ({tab}:any) => {
  const [activeTab, setActiveTab] = useState<'pipes' | 'agriculture'>(tab);
  const [activeCategory, setActiveCategory] = useState<DivisionCategory>(tab==="pipes"?pipesData[0]:agricultureData[0]);

  const currentCategories = activeTab === 'pipes' ? pipesData : agricultureData;

  return (
    <section className="w-full bg-[#F5F6F8] py-20 lg:py-28 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-300/80 mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
            SEGMENTS
          </h2>
          <p className="text-sm text-slate-600 max-w-md md:text-left font-normal leading-relaxed">
           {tab==='pipes' ? ' Complete hot & cold water piping systems for residential and commercial applications.' : 'Complete hot & cold water piping systems for residential and commercial applications.'}
          </p>
        </div>

        {/* Equal Height Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[580px]">
          
          {/* Left Column: Interactive Stack */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-full">
            {currentCategories.map((item) => {
              const isActive = activeCategory.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item)}
                  className={`relative group h-40 lg:h-full w-full overflow-hidden text-left border focus:outline-none transition-all duration-500 shadow-sm hover:shadow-md ${
                    isActive ? tab==='pipes' ? 'border-[#1575B3] ring-1 ring-[#1575B3]/30' : 'border-[#3ab315] ring-1 ring-[#3ab315]/30' : 'border-slate-300'
                  }`}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  {/* Dark Overlay (Darker at Top for Text Visibility) */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive
                        ? `bg-gradient-to-b from-slate-950/90 via-slate-900/75 to-slate-950/90 opacity-90`
                        : 'bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/70 group-hover:from-slate-950/70'
                    }`}
                  />

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCardIndicatorLight"
                      className={`absolute top-0 left-0 w-1.5 h-full ${activeTab === 'pipes' ? 'bg-[#1575B3]' : 'bg-[#3ab315]'} z-20`}
                    />
                  )}

                  {/* Card Content */}
                  <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                    <div>
                      <span className={`text-[9px] font-mono tracking-widest uppercase font-semibold block ${isActive ? tab==='pipes' ? 'text-sky-300' : 'text-green-300' : 'text-slate-300'}`}>
                        {item.subtitle}
                      </span>
                      <h3 className={`text-sm sm:text-base font-semibold mt-1 leading-snug transition-colors ${isActive ? 'text-white' : 'text-white group-hover:text-sky-100'}`}>
                        {item.name}
                      </h3>
                    </div>

                    <div className={`flex items-center justify-between text-xs transition-colors ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                      <span className="font-mono text-[10px] tracking-wider">SELECT</span>
                      <span className={`transform transition-transform duration-300 ${isActive ? 'translate-x-1 text-sky-200' : ''}`}>
                        →
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: High-End Hero Showcase */}
          <div className="lg:col-span-7 relative h-[500px] lg:h-full w-full overflow-hidden border border-slate-200 shadow-xl bg-slate-950 flex flex-col justify-between">
            
            {/* Background Image with Dynamic Fade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${activeCategory.heroImage})` }}
              />
            </AnimatePresence>

            {/* Dynamic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent" />

            {/* Top Stage Spacer */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between" />

            {/* Bottom Content Area */}
            <div className="relative z-10 p-6 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-2xl"
                >
                  {/* Category Title */}
                  <h3 className="text-2xl sm:text-4xl font-serif text-white font-light tracking-tight leading-tight mb-3">
                    {activeCategory.heroTitle}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed mb-6 max-w-xl">
                    {activeCategory.heroDescription}
                  </p>

                  {/* Sub-Category Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    {activeCategory.subCategories.map((sub, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-900/80 text-slate-100 text-xs px-3.5 py-1.5 border border-slate-700/60 backdrop-blur-md font-medium tracking-wide shadow-sm"
                      >
                        {sub.title}
                      </span>
                    ))}
                  </div>

                  {/* CTA Row */}
                  <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between">
                    <a
                      href={activeCategory.exploreLink}
                      className="group inline-flex items-center gap-3 text-xs tracking-widest uppercase font-mono font-semibold transition-colors bg-[#fff] hover:bg-[#0E588A] hover:text-white text-black px-5 py-2.5 shadow-sm"
                    >
                      <span>Explore Products</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};