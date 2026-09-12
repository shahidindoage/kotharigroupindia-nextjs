import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar } from 'lucide-react';
import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { getNewsBySlug } from '@/lib/news';

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return [
    { slug: 'most-trusted-brand-in-agriculture-sector' },
    { slug: 'mascot-smart-sathi-launching-2019' },
    { slug: 'pune-award-ceremony-2019' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return { title: 'News | Kothari Group' };
  const clean = item.info.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return {
    title: `${item.title} | Kothari Group`,
    description: clean.slice(0, 160),
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  return (
    <AppShell>
      <div className="text-left">
        <Home2Header solid />

        {/* Hero: original news image with glassy byline card */}
        <div className="w-full bg-[#F5F6F8] pt-20 sm:pt-22">
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />

            {/* Back to news button - top left */}
            <Link
              href="/news"
              className="hidden absolute top-4 sm:top-6 left-4 sm:left-6 lg:left-10 sm:inline-flex items-center gap-2 bg-[#1575B3] backdrop-blur-md shadow-lg hover:text-white text-[11px] sm:text-xs font-mono font-semibold tracking-wider uppercase px-4 py-2.5 text-white hover:bg-[#00568f] hover:border-[#1575B3] transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>

            {/* Glassy byline card - bottom right */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 lg:right-10">
              <div className="bg-white/15 backdrop-blur-md border border-white/30 shadow-lg px-2 sm:px-7 py-2 sm:py-5 flex flex-col gap-3.5">
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src="https://admin.kotharigroupindia.com/wp-content/uploads/2026/09/kotharigrp.jpg"
                  alt="Kothari News Author"
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 sm:w-10 sm:h-10 rounded-full object-cover border border-white/40"
                />
                <div>
                  <span className="block text-[6px] sm:text-[10px] font-mono tracking-[0.2em] uppercase text-white/70">
                    Written by
                  </span>
                  <span className="block text-[9px] sm:text-sm font-semibold text-white leading-snug">
                    Kothari News Author
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/20">
                <span className="block text-[6px] sm:text-[10px] font-mono tracking-[0.2em] uppercase text-white/70">
                 Published on
                </span>
                <span className="flex items-center gap-2 text-[8px] sm:text-sm font-semibold text-white">
                  <Calendar className="w-2 h-2 sm:w-4 sm:h-4 text-white/90" />
                  {item.date}
                </span>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Title / Meta */}
        <div className="w-full bg-white border-b border-slate-300/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-10 sm:pb-12">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.08] sm:leading-[1.04] m-0 p-0 max-w-7xl text-slate-900">
              {item.title}
            </h1>
          </div>
        </div>

        {/* Article Body */}
        <article className="w-full bg-white py-12 sm:py-16 border-b border-slate-300/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div
              className="wp-blog-content"
              dangerouslySetInnerHTML={{ __html: item.info ?? '' }}
            />
            <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between items-center gap-4">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#1575B3] hover:text-[#0E588A] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to news
              </Link>
            </div>
          </div>
        </article>

        <Home2Footer />
      </div>
    </AppShell>
  );
}