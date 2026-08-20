'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const ArrowIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
  >
    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const slides = [
  {
    bgImage: '/heronew.jpg',
    cardImage: '/heronew.jpg',
    headline: <>Engineered for<br />unmatched flow</>,
    subtext: 'Delivering high-durability plumbing solutions designed for leak-free precision, flawless water delivery, and modern waste management.',
    ctaText: 'Explore Plumbing Systems',
    cardTitle: 'Plumbing & Fittings',
    cardDescription: 'Zero-leak technology engineered for seamless water delivery and long-term security.',
  },
  {
    bgImage: '/heronew2.jpg',
    cardImage: '/heronew2.jpg',
    headline: <>Powering India’s<br />green revolution</>,
    subtext: 'Building heavy-duty agricultural piping systems that optimize every drop, protecting crops and maximizing harvest yields nationwide.',
    ctaText: 'Discover Agri Solutions',
    cardTitle: 'Agri Piping Networks',
    cardDescription: 'Robust field-tested piping crafted for sustainable, high-volume farm irrigation.',
  },
  {
    bgImage: '/heronew3.jpg',
    cardImage: '/heronew3.jpg',
    headline: <>Four decades of<br />smart irrigation</>,
    subtext: 'Empowering millions of farmers with intelligent micro-irrigation systems designed for peak crop vitality and water conservation.',
    ctaText: 'View Micro Irrigation',
    cardTitle: 'Micro Irrigation Systems',
    cardDescription: 'Intelligent drip and micro-flow technology maximizing yield with minimal water wastage.',
  },
];

const stats = [
  { value: '35+', label: 'Years of excellence' },
  { value: '23+', label: 'States served pan-India' },
  { value: '2L+', label: 'Farmers empowered *' },
  { value: '800+', label: 'Channel partners *' },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bgRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const cardImageRef = useRef(null);
  const cardContentRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;

      gsap.timeline()
        .to(
          [bgRef.current, headlineRef.current, subtextRef.current, cardImageRef.current, cardContentRef.current], 
          {
            opacity: 0.2,
            duration: 0.4,
            ease: 'power1.out',
            onComplete: () => {
              setCurrentSlide(nextSlide);
            },
          }
        )
        .to(
          [bgRef.current, headlineRef.current, subtextRef.current, cardImageRef.current, cardContentRef.current], 
          {
            opacity: 1,
            duration: 0.6,
            ease: 'power1.in',
          }
        );
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const active = slides[currentSlide];

  return (
    <div className="relative w-full min-h-screen lg:h-screen bg-black text-white font-sans overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div ref={bgRef} className="relative w-full h-full">
          <Image
            src={active.bgImage}
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
        
        {/* Base Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        
        {/* Additional Top Gradient Overlay for Header & Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/70 pointer-events-none" />
      </div>

      {/* Primary Content Container - Max Width 7XL */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen lg:min-h-0 flex flex-col justify-between pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10">
        
        {/* Middle Section (Main Headline, Subtext & CTA) */}
        <div className="flex-grow flex flex-col lg:flex-row lg:justify-between lg:items-start pt-8 sm:pt-12 lg:pt-16 gap-8 lg:gap-0">
          
          {/* Main Headline (Left) */}
          <div className="w-full lg:w-2/3">
            <h1 ref={headlineRef} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.02] lg:leading-[0.95] drop-shadow-sm">
              {active.headline}
            </h1>
          </div>

          {/* Dynamic Subtext and Button (Right) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-5 sm:gap-6 lg:pl-12">
            <p ref={subtextRef} className="text-white/90 text-base sm:text-lg leading-relaxed max-w-xl lg:max-w-none">
              {active.subtext}
            </p>
            <a 
              href="#" 
              className="group inline-flex items-center self-start lg:self-end bg-white text-black px-6 sm:px-7 py-3.5 sm:py-4 font-semibold text-sm sm:text-base lg:text-lg hover:bg-white/90 transition-colors shrink-0"
            >
              {active.ctaText}
              <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Bottom Section (Stats Left & Dynamic Callout Card Right) */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-stretch lg:items-end gap-6 sm:gap-8 lg:gap-12 w-full pt-8 lg:pt-0">
          
          {/* Left Side: Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 border-t border-white/20 pt-6 w-full lg:w-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-white/80 leading-snug mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right Side: Compact Callout Card */}
          <div className="w-full lg:w-auto lg:max-w-[340px] shrink-0">
            <div className="bg-black/40 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 rounded-sm shadow-2xl">
              <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[72px_1fr] gap-3.5">
                
                {/* Dynamic Card Thumbnail */}
                <div ref={cardImageRef} className="relative aspect-square">
                  <Image
                    src={active.cardImage}
                    alt={active.cardTitle}
                    fill
                    className="object-cover rounded-xs"
                  />
                </div>
                
                {/* Dynamic Card Text */}
                <div ref={cardContentRef} className="flex flex-col justify-center gap-1">
                  <p className="font-semibold text-sm text-white leading-snug">{active.cardTitle}</p>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {active.cardDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};