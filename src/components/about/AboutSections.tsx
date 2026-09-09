'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Eye,
  Target,
  Lightbulb,
  Leaf,
  BadgeCheck,
  HeartHandshake,
  Handshake,
  ShieldCheck,
  Accessibility,
  Trophy,
  Heart,
  Award,
  TrendingUp,
  MapPin,
} from 'lucide-react';
import { SectionHeader } from '../solutions/SectionHeader';
import { Reveal } from '../main/Reveal';
import {
  aboutHero,
  aboutGrowth,
  aboutVisionMission,
  aboutApproach,
  aboutCoreValues,
  aboutLegacy,
  aboutWhyKothari,
} from '@/data/about';

/* ── 1. HERO ─────────────────────────────────────────── */
export const AboutHero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[100dvh] bg-black text-white font-sans overflow-hidden flex flex-col justify-between">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutHero.image}
          alt="About Kothari Group"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/50 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full min-h-[100dvh] pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col justify-between">
        {/* Breadcrumb */}
        {/* <nav className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-white/60 overflow-x-auto whitespace-nowrap shrink-0">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-white/90">About Us</span>
        </nav> */}

        {/* Headline Section */}
        <div className="w-full flex flex-col gap-5 sm:gap-6 my-auto py-8">
          <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
            {aboutHero.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
            {aboutHero.heading}
          </h1>
          <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
            {aboutHero.description}
          </p>
        </div>

        {/* Stats Strip - Anchored at Bottom */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10 w-full border-t border-white/20 pt-6 mt-auto max-w-2xl">
          {aboutGrowth.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-white/90 leading-snug mt-1 drop-shadow-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── 2. GROWTH ───────────────────────────────────────── */
export const AboutGrowth: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title={aboutGrowth.heading}
          // description="Four decades of building India's water future."
        />
        <div className="max-w-7xl space-y-4">
          <p className="text-base sm:text-xl font-semibold text-slate-900 leading-snug">
            {aboutGrowth.intro}
          </p>
          {aboutGrowth.paragraphs.map((para, idx) => (
            <p key={idx} className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 3. VISION / MISSION ─────────────────────────────── */
const VISION_ICONS: Record<string, React.ElementType> = { vision: Eye, mission: Target };

export const AboutVisionMission: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title="Vision & Mission"
          description="The direction we travel and the standard we hold."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {aboutVisionMission.map((item, idx) => {
            const Icon = VISION_ICONS[item.icon] || Eye;
            return (
              <Reveal key={item.type} delay={idx * 90} className="h-full">
                <div className="group bg-white border border-slate-200 p-8 sm:p-10 flex flex-col gap-5 h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] transition-colors">
                    <Icon className="w-6 h-6 text-[#1575B3] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light uppercase tracking-tight text-slate-900">
                    {item.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ── 4. APPROACH + PURPOSE ───────────────────────────── */
const APPROACH_ICONS = [Lightbulb, Handshake, ShieldCheck];

export const AboutApproach: React.FC = () => {
  return (
    <section className="w-full bg-white border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-10">
        <SectionHeader
          title={aboutApproach.heading}
          description="Three principles behind every product and partnership."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {aboutApproach.items.map((item, idx) => {
            const Icon = APPROACH_ICONS[idx % APPROACH_ICONS.length];
            const num = String(idx + 1).padStart(2, '0');
            return (
              <div key={item.title} className="group bg-white p-6 sm:p-8 space-y-4 hover:bg-slate-50/60 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] transition-colors">
                    <Icon className="w-5 h-5 text-[#1575B3] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-slate-400">{num}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Purpose Band */}
      <div className="w-full bg-[#015CAA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-sky-200 border border-white/25 bg-white/10 px-3 py-1.5 self-start shrink-0">
            {aboutApproach.purpose.label}
          </span>
          <p className="text-lg sm:text-2xl font-serif font-light text-white leading-snug tracking-tight">
            {aboutApproach.purpose.description}
          </p>
        </div>
      </div>
    </section>
  );
};

/* ── 5. CORE VALUES ──────────────────────────────────── */
const VALUE_ICONS: Record<string, React.ElementType> = {
  innovation: Lightbulb,
  sustainability: Leaf,
  quality: BadgeCheck,
  'customer-first': HeartHandshake,
  collaboration: Handshake,
  integrity: ShieldCheck,
  accessibility: Accessibility,
  excellence: Trophy,
  respect: Heart,
};

export const AboutCoreValues: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title={aboutCoreValues.heading}
          description="Nine values that guide how we build, serve and grow."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {aboutCoreValues.values.map((value) => {
            const Icon = VALUE_ICONS[value.icon] || BadgeCheck;
            return (
              <div key={value.title} className="group bg-white p-6 space-y-4 hover:bg-slate-50/60 transition-colors">
                <div className="w-10 h-10 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] transition-colors">
                  <Icon className="w-5 h-5 text-[#1575B3] group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold text-slate-900 leading-snug">{value.title}</h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ── 6. LEGACY SLIDER ──────────────────────────────────── */

export const AboutLegacy: React.FC = () => {
  // Track active selected item index (starts directly at index 0)
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(3);
      else setItemsPerPage(5);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = aboutLegacy.timeline.length;

  // Calculate slide start index so active item is kept visible
  const maxStartIndex = Math.max(0, totalItems - itemsPerPage);
  const startIndex = Math.min(
    Math.max(0, activeIndex - Math.floor(itemsPerPage / 2)),
    maxStartIndex
  );

  // Step backward by 1
  const goPrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1));
  };

  // Step forward by 1
  const goNext = () => {
    setActiveIndex((prev) => (prev < totalItems - 1 ? prev + 1 : 0));
  };

  const visibleTimeline = aboutLegacy.timeline.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <SectionHeader
          title={aboutLegacy.heading}
          description="Four decades of milestones — from a fertilizer shop to a 100-acre mega plant."
        />

        {/* Milestone Timeline Track */}
        <div className="relative flex items-center justify-between min-h-[220px]">
          {/* Previous Arrow Button */}
          <button
            onClick={goPrev}
            aria-label="Previous milestone"
            className="z-10 shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-black hover:bg-[#1575B3] text-white flex items-center justify-center transition-colors shadow-md"
          >
            ‹
          </button>

          {/* Timeline Wrapper */}
          <div className="relative flex-1 mx-2 sm:mx-6 overflow-hidden">
            {/* Horizontal Dashed Axis Line */}
            <div className="absolute top-[38px] left-0 right-0 border-b border-dashed border-slate-400/80 z-0" />

            {/* Grid of Milestone Items */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
              {visibleTimeline.map((entry, index) => {
                const globalIndex = startIndex + index;
                const isActive = globalIndex === activeIndex;

                return (
                  <article
                    key={`${entry.year}-${globalIndex}`}
                    onClick={() => setActiveIndex(globalIndex)}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    {/* Year */}
                    <span
                      className={`text-xs sm:text-sm font-mono tracking-wider transition-all duration-300 ${
                        isActive
                          ? 'text-[#1575B3] font-bold text-sm sm:text-base -translate-y-0.5'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {entry.year}
                    </span>

                    {/* Timeline Node */}
                    <div className="h-[28px] flex items-center justify-center my-1">
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? 'bg-[#1575B3] ring-4 ring-[#1575B3]/20 scale-125'
                            : 'bg-slate-400 group-hover:bg-[#1575B3]'
                        }`}
                      />
                    </div>

                    {/* Title */}
                    <h4
                      className={`text-xs sm:text-sm leading-snug max-w-[180px] transition-colors duration-300 ${
                        isActive
                          ? 'text-slate-900 font-bold'
                          : 'text-slate-600 font-normal group-hover:text-slate-900'
                      }`}
                    >
                      {entry.title}
                    </h4>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={goNext}
            aria-label="Next milestone"
            className="z-10 shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-black hover:bg-[#1575B3] text-white flex items-center justify-center transition-colors shadow-md"
          >
            ›
          </button>
        </div>

      
      </div>
    </section>
  );
};

/* ── 7. WHY KOTHARI ──────────────────────────────────── */
const WHY_ICONS: Record<string, React.ElementType> = {
  'trusted-legacy': Award,
  'proven-quality': BadgeCheck,
  innovation: Lightbulb,
  'empowering-growth': TrendingUp,
  'extensive-reach': MapPin,
  'customer-first-service': HeartHandshake,
};

export const AboutWhyKothari: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title={aboutWhyKothari.heading}
          description="Six reasons farmers, builders and engineers standardize on Kothari."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {aboutWhyKothari.items.map((item) => {
            const Icon = WHY_ICONS[item.icon] || Award;
            return (
              <div key={item.title} className="group bg-white p-6 space-y-4 hover:bg-slate-50/60 transition-colors">
                <div className="w-10 h-10 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] transition-colors">
                  <Icon className="w-5 h-5 text-[#1575B3] group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold text-slate-900 leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
