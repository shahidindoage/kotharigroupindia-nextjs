'use client';

import React, { useEffect, useRef, useState } from 'react';
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

/* ── 6. LEGACY BRICKS + POPUP ──────────────────────────── */
export const AboutLegacy: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [gridVisible, setGridVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Scroll trigger: when the grid enters the viewport, bricks cascade one by one
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setGridVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selected]);

  const entry = selected !== null ? aboutLegacy.timeline[selected] : null;

  // Running-bond rows for the brick wall (desktop): even rows 4 bricks, odd rows 3 + 2 half-bricks
  const brickRows: number[][] = [];
  {
    let i = 0;
    let r = 0;
    while (i < aboutLegacy.timeline.length) {
      const take = r % 2 === 0 ? 4 : 3;
      const row: number[] = [];
      for (let k = 0; k < take && i < aboutLegacy.timeline.length; k++, i++) row.push(i);
      brickRows.push(row);
      r++;
    }
  }

  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title={aboutLegacy.heading}
          description="Four decades of milestones — tap any year to explore the story."
        />
        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-2.5 bg-slate-300 border border-slate-300 p-2 sm:p-2.5">
          {brickRows.map((row, ri) => (
            <div key={ri} className="contents">
              {/* Half-brick spacers create the running-bond offset on desktop */}
              {ri % 2 === 1 && (
                <div aria-hidden className="hidden lg:block bg-white/70 rounded-[2px]" />
              )}
              {row.map((idx) => {
                const item = aboutLegacy.timeline[idx];
                const isActive = selected === idx;
                return (
                  <button
                    key={item.year}
                    onClick={() => setSelected(idx)}
                    style={{ transitionDelay: gridVisible ? `${idx * 70}ms` : '0ms' }}
                    className={`group col-span-1 sm:col-span-2 p-4 sm:p-5 text-left rounded-[2px] transition-all duration-700 h-full w-full shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-3px_6px_rgba(15,23,42,0.08)] ${
                      gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
                    } ${
                      isActive
                        ? 'bg-[#1575B3] text-white'
                        : 'bg-[#1575B3] text-white'
                    }`}
                  >
                    <span
                      className={`block text-xl sm:text-2xl font-mono font-bold tracking-tight transition-colors ${
                        isActive ? 'text-white' : 'text-white'
                      }`}
                    >
                      {item.year}
                    </span>
                    <span
                      className={`block text-xs sm:text-sm font-medium mt-1 leading-snug transition-colors ${
                        isActive ? 'text-white' : 'text-white'
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 mt-3 text-[10px] font-mono tracking-widest uppercase transition-colors ${
                        isActive ? 'text-white/80' : 'text-white/80'
                      }`}
                    >
                      View Story
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </button>
                );
              })}
              {ri % 2 === 1 && (
                <div aria-hidden className="hidden lg:block bg-white/70 rounded-[2px]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Milestone Popup */}
      {entry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative bg-white w-full max-w-lg shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="bg-[#1575B3] px-6 sm:px-8 py-6 flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono tracking-[0.25em] text-white/70 uppercase">
                  Milestone
                </span>
                <h3 className="text-3xl sm:text-4xl font-mono font-semibold text-white tracking-tight mt-1">
                  {entry.year}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="w-9 h-9 shrink-0 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-3">
              <h4 className="text-xl font-serif font-normal text-slate-900">
                {entry.title}
              </h4>
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                {entry.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={() => setSelected((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))}
                  disabled={selected === 0}
                  className="inline-flex items-center gap-1 text-xs font-mono tracking-widest uppercase text-slate-500 hover:text-[#1575B3] transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  ← Prev
                </button>
                <span className="text-[11px] font-mono tracking-widest text-slate-400">
                  {(selected ?? 0) + 1} / {aboutLegacy.timeline.length}
                </span>
                <button
                  onClick={() =>
                    setSelected((prev) =>
                      prev !== null && prev < aboutLegacy.timeline.length - 1 ? prev + 1 : prev
                    )
                  }
                  disabled={selected === aboutLegacy.timeline.length - 1}
                  className="inline-flex items-center gap-1 text-xs font-mono tracking-widest uppercase text-slate-500 hover:text-[#1575B3] transition-colors disabled:opacity-30 disabled:pointer-events-none"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
