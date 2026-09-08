'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronUp, Linkedin } from 'lucide-react';
import { SectionHeader } from '../solutions/SectionHeader';
import { Reveal } from '../main/Reveal';
import { boardHero, boardOfDirectors, youngLeadership, type BoardMember } from '@/data/board';

/* ── HERO ────────────────────────────────────────────── */
export const BoardHero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[100dvh] bg-black text-white font-sans overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <img
          src="heronew.jpg"
          alt="Kothari Group leadership"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/50 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full min-h-[100dvh] pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col justify-between">
        {/* <nav className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-white/60 overflow-x-auto whitespace-nowrap shrink-0">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-white/90">Our Board</span>
        </nav> */}

        <div className="w-full flex flex-col gap-5 sm:gap-6 my-auto py-8">
          <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
            {boardHero.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
            {boardHero.heading}
          </h1>
          <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
            {boardHero.description}
          </p>
        </div>

        {/* <div className="w-full border-t border-white/20 pt-6 mt-auto" /> */}
      </div>
    </div>
  );
};

/* ── MEMBER CARD ─────────────────────────────────────── */
const MemberCard: React.FC<{ member: BoardMember }> = ({ member }) => {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = member.readMoreContent.split('\n').map((p) => p.trim()).filter(Boolean);
  const preview = member.description || paragraphs[0] || '';

  return (
    <article className="group relative bg-white border border-slate-200/90 flex flex-col h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500 overflow-hidden">
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 border-b border-slate-200">
        <img
          src={member.imageUrl}
          alt={member.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70 pointer-events-none" />
        {member.linkedin && member.linkedinUrl && (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            onClick={(e) => e.stopPropagation()}
            className="absolute top-4 right-4 w-9 h-9 bg-white/95 text-[#0A66C2] flex items-center justify-center shadow-md hover:bg-[#0A66C2] hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-serif font-normal text-white leading-snug tracking-tight drop-shadow-md">
            {member.name}
          </h3>
          <p className="text-[11px] font-mono tracking-widest uppercase text-sky-200 mt-1">
            {member.designation}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        {!expanded ? (
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            {preview}
          </p>
        ) : (
          <div className="space-y-3">
            {paragraphs.map((para, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase hover:text-[#1575B3] transition-colors w-full"
        >
          <span>{expanded ? 'Read Less' : 'Read More'}</span>
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>
    </article>
  );
};

/* ── BOARD OF DIRECTORS ──────────────────────────────── */
export const BoardDirectors: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title="Board of Directors"
          description="The founders and stewards guiding Kothari Group's vision and growth."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {boardOfDirectors.map((member, idx) => (
            <Reveal key={member.name} delay={idx * 90} className="h-full">
              <MemberCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── YOUNG LEADERSHIP ────────────────────────────────── */
export const BoardYoungLeadership: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title={youngLeadership.heading}
          description={youngLeadership.description}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {youngLeadership.members.map((member, idx) => (
            <Reveal key={member.name} delay={(idx % 3) * 90} className="h-full">
              <MemberCard member={member} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
