'use client';

import React from 'react';
import { ShieldCheck, Award, Lightbulb, Globe, Handshake } from 'lucide-react';

export const WhyKothariGroup = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
            Why Kothari Group?
          </h2>
          <p className="text-sm text-slate-500 max-w-md font-normal leading-relaxed">
            Over three decades of manufacturing leadership, precision polymer engineering, and trust across millions of Indian farms and structures.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* 1. Feature Hero Box (Since 1988) - Spans 5 columns */}
          <div className="lg:col-span-5 relative bg-slate-950 text-white rounded-none p-8 lg:p-10 flex flex-col justify-between overflow-hidden group shadow-lg min-h-[320px]">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{ backgroundImage: `url('/heronew3.jpg')` }}
            />
            
            {/* Blue-Tinted Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-[#0E588A]/80 to-[#1575B3]/40 z-10 transition-opacity duration-500 group-hover:opacity-90" />

            {/* Watermark Number */}
            {/* <span className="absolute -right-2 -top-4 text-8xl font-serif font-bold text-white/[0.08] pointer-events-none select-none z-10">
              01
            </span> */}

            {/* Top Icon */}
            <div className="relative z-20 flex items-center justify-between">
              <div className="w-12 h-12 rounded-none bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                <ShieldCheck className="w-6 h-6 text-sky-300 stroke-[1.75]" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-20 mt-12">
              <span className="text-4xl sm:text-5xl font-serif font-light text-white block mb-1">
                1988
              </span>
              <h3 className="text-xl font-serif font-medium text-slate-100">
                Trusted Since 1988
              </h3>
              <p className="text-xs text-slate-200 font-normal leading-relaxed mt-2 max-w-xs">
                35+ years of operational integrity and unwavering reliability across infrastructure networks.
              </p>
            </div>
          </div>

          {/* Right 7-Column Grid (4 Cards in 2x2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* 2. High Quality Products */}
            <div className="relative bg-slate-50 border border-slate-200/90 rounded-none p-6 sm:p-8 flex flex-col justify-between h-[220px] hover:bg-white hover:border-[#1575B3] hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group overflow-hidden">
              {/* <span className="absolute -right-2 -bottom-4 text-7xl sm:text-8xl font-serif font-bold text-slate-900/[0.04] group-hover:text-[#1575B3]/[0.08] transition-colors pointer-events-none select-none z-0">
                02
              </span> */}

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-none bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] transition-all duration-300 shadow-sm">
                  <Award className="w-6 h-6 text-slate-700 group-hover:text-white stroke-[1.75] transition-colors" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-normal text-slate-900 group-hover:text-[#1575B3] transition-colors">
                  High Quality
                </h3>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mt-1">
                  Products
                </span>
              </div>
            </div>

            {/* 3. Innovative Solutions */}
            <div className="relative bg-slate-50 border border-slate-200/90 rounded-none p-6 sm:p-8 flex flex-col justify-between h-[220px] hover:bg-white hover:border-[#1575B3] hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group overflow-hidden">
              {/* <span className="absolute -right-2 -bottom-4 text-7xl sm:text-8xl font-serif font-bold text-slate-900/[0.04] group-hover:text-[#1575B3]/[0.08] transition-colors pointer-events-none select-none z-0">
                03
              </span> */}

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-none bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] transition-all duration-300 shadow-sm">
                  <Lightbulb className="w-6 h-6 text-slate-700 group-hover:text-white stroke-[1.75] transition-colors" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-normal text-slate-900 group-hover:text-[#1575B3] transition-colors">
                  Innovative
                </h3>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mt-1">
                  Solutions
                </span>
              </div>
            </div>

            {/* 4. Pan India Presence */}
            <div className="relative bg-slate-50 border border-slate-200/90 rounded-none p-6 sm:p-8 flex flex-col justify-between h-[220px] hover:bg-white hover:border-[#1575B3] hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group overflow-hidden">
              {/* <span className="absolute -right-2 -bottom-4 text-7xl sm:text-8xl font-serif font-bold text-slate-900/[0.04] group-hover:text-[#1575B3]/[0.08] transition-colors pointer-events-none select-none z-0">
                04
              </span> */}

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-none bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] transition-all duration-300 shadow-sm">
                  <Globe className="w-6 h-6 text-slate-700 group-hover:text-white stroke-[1.75] transition-colors" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-normal text-slate-900 group-hover:text-[#1575B3] transition-colors">
                  Pan India
                </h3>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mt-1">
                  Presence
                </span>
              </div>
            </div>

            {/* 5. Customer First */}
            <div className="relative bg-slate-50 border border-slate-200/90 rounded-none p-6 sm:p-8 flex flex-col justify-between h-[220px] hover:bg-white hover:border-[#1575B3] hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group overflow-hidden">
              {/* <span className="absolute -right-2 -bottom-4 text-7xl sm:text-8xl font-serif font-bold text-slate-900/[0.04] group-hover:text-[#1575B3]/[0.08] transition-colors pointer-events-none select-none z-0">
                05
              </span> */}

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-none bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] transition-all duration-300 shadow-sm">
                  <Handshake className="w-6 h-6 text-slate-700 group-hover:text-white stroke-[1.75] transition-colors" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-normal text-slate-900 group-hover:text-[#1575B3] transition-colors">
                  Customer
                </h3>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mt-1">
                  First Approach
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};