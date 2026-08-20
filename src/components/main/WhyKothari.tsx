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
    gradient: 'from-blue-700 via-indigo-800 to-slate-900',
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
    gradient: 'from-slate-800 via-blue-900 to-indigo-950',
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
    gradient: 'from-sky-800 via-blue-900 to-slate-900',
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
    gradient: 'from-teal-800 via-slate-800 to-blue-900',
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
    gradient: 'from-emerald-700 via-teal-800 to-slate-900',
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
    gradient: 'from-teal-700 via-green-800 to-slate-900',
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
    gradient: 'from-blue-700 via-teal-800 to-stone-900',
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
    gradient: 'from-sky-700 via-slate-800 to-indigo-900',
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

export const WhyKothari = () => {
  const [activeTab, setActiveTab] = useState<'pipes' | 'agriculture'>('pipes');
  const [activeCategory, setActiveCategory] = useState<DivisionCategory>(pipesData[0]);

  const handleTabChange = (tab: 'pipes' | 'agriculture') => {
    setActiveTab(tab);
    setActiveCategory(tab === 'pipes' ? pipesData[0] : agricultureData[0]);
  };

  const currentCategories = activeTab === 'pipes' ? pipesData : agricultureData;

  return (
    <section className="w-full bg-[#F5F6F8] py-20 lg:py-28 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-300/80 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
              Divisions
            </h2>
          </div>

          {/* Light Minimalist Tab Switcher */}
          <div className="flex items-center gap-8 border-b border-slate-300/80 md:border-none pb-2 md:pb-0">
            {[
              { id: 'pipes', label: 'PIPES & CONDUITS' },
              { id: 'agriculture', label: 'AGRICULTURAL SYSTEMS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as 'pipes' | 'agriculture')}
                className="relative pb-3 text-xs tracking-widest font-mono uppercase transition-colors"
              >
                <span className={activeTab === tab.id ? 'text-slate-900 font-bold' : 'text-slate-400 hover:text-slate-700'}>
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabUnderlineLight"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
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
                    isActive ? 'border-blue-600/40 ring-1 ring-blue-600/20' : 'border-slate-800'
                  }`}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  {/* Dark Overlay for Non-Selected Cards */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive
                        ? `bg-gradient-to-br ${item.gradient} opacity-95`
                        : 'bg-slate-950/80 group-hover:bg-slate-950/65'
                    }`}
                  />

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCardIndicatorLight"
                      className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 z-20"
                    />
                  )}

                  {/* Card Content */}
                  <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                    <div>
                      <span className={`text-[8px] font-mono tracking-widest uppercase font-semibold ${isActive ? 'text-sky-300' : 'text-slate-400'}`}>
                        {item.subtitle}
                      </span>
                      <h3 className={`text-sm sm:text-base font-semibold mt-1 leading-snug transition-colors ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                        {item.name}
                      </h3>
                    </div>

                    <div className={`flex items-center justify-between text-xs transition-colors ${isActive ? 'text-white/80' : 'text-slate-400 group-hover:text-slate-200'}`}>
                      <span className="font-mono text-[10px] tracking-wider">SELECT</span>
                      <span className={`transform transition-transform duration-300 ${isActive ? 'translate-x-1 text-sky-300' : ''}`}>
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

            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />

            {/* Top Stage Header Badges */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
              {/* <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 rounded-full text-[10px] font-mono tracking-widest text-sky-400 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                Featured System
              </span> */}

              {/* <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                {activeCategory.id}
              </span> */}
            </div>

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
                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6 max-w-xl">
                    {activeCategory.heroDescription}
                  </p>

                  {/* Sub-Category Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    {activeCategory.subCategories.map((sub, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-900/90 text-slate-200 text-xs px-3.5 py-1.5 border border-slate-700/80 backdrop-blur-md font-medium tracking-wide shadow-sm"
                      >
                        {sub.title}
                      </span>
                    ))}
                  </div>

                  {/* CTA Row */}
                  <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between">
                    <a
                      href={activeCategory.exploreLink}
                      className="group inline-flex items-center gap-3 text-xs tracking-widest uppercase text-sky-400 font-mono font-semibold hover:text-sky-300 transition-colors"
                    >
                      <span>Explore Technical Specs</span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </a>

                    {/* <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest hidden sm:inline-block">
                      Grade A Standard
                    </span> */}
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