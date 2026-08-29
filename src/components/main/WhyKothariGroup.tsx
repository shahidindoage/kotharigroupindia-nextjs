'use client';

import React from 'react';
import { ShieldCheck, Award, Lightbulb, Globe, Handshake } from 'lucide-react';

export const WhyKothariGroup = () => {
  const featureCards = [
    {
      id: '02',
      title: 'High Quality',
      subtitle: 'Products & Materials',
      description: `We deliver durable, high-quality products designed to perform reliably in India's diverse rural and urban needs`,
      icon: Award,
    },
    {
      id: '03',
      title: 'Innovative',
      subtitle: 'Precision Solutions',
      description: 'We lead through innovation with cutting-edge, affordable, and sustainable water management technologies.',
      icon: Lightbulb,
    },
    {
      id: '04',
      title: 'Pan India',
      subtitle: 'Distribution Presence',
      description: 'Our extensive dealer and distributor network, spanning 23+ states, ensures wide accessibility and quick delivery of our products.',
      icon: Globe,
    },
    {
      id: '05',
      title: 'Customer-First',
      subtitle: 'Driven Approach',
      description: 'Quick delivery, responsive after-sales support, and a customer-first approach ensure strong, long-lasting relationships unmatched by competitors.',
      icon: Handshake,
    },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200 mb-12">
          <div>
           
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
              Why Kothari Group?
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md font-normal leading-relaxed">
            Over three decades of manufacturing leadership, precision polymer engineering, and trust across millions of Indian farms and structures.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1. Feature Hero Box (Since 1988) - Spans 5 columns */}
          <div className="lg:col-span-5 relative bg-slate-950 text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-500 min-h-[380px] lg:min-h-[auto]">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{ backgroundImage: `url('/heronew3.jpg')` }}
            />
            
            {/* Dark Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-[#0E588A]/85 to-[#1575B3]/40 z-10 transition-opacity duration-500 group-hover:opacity-95" />

            {/* Top Icon & Tag */}
            <div className="relative z-20 flex items-center justify-between">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-inner">
                <ShieldCheck className="w-6 h-6 text-sky-300 stroke-[1.75]" />
              </div>
              <span className="text-xs font-mono tracking-widest text-sky-200/80 uppercase bg-white/10 px-3 py-1 border border-white/10">
                Est. 1988
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-20 mt-16 sm:mt-24">
              <span className="text-5xl sm:text-6xl font-serif font-light text-white block mb-2 tracking-tight">
                1988
              </span>
              <h3 className="text-2xl font-serif font-medium text-slate-100 tracking-wide">
                Trusted Since 1988
              </h3>
              <p className="text-sm text-slate-200/90 font-normal leading-relaxed mt-3 max-w-sm">
                35+ years of operational integrity, infrastructure expansion, and unwavering quality across national distribution pipelines.
              </p>
            </div>
          </div>

          {/* Right 7-Column Grid (4 Rich Cards in 2x2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featureCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="relative bg-white border border-slate-200 p-7 sm:p-8 flex flex-col justify-between h-auto min-h-[250px] transition-all duration-300 group hover:border-[#1575B3] hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1"
                >
                  {/* Top Highlight Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-100 group-hover:bg-[#1575B3] transition-colors duration-300" />

                  {/* Header Row: Icon + Index Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-[#1575B3] group-hover:border-[#1575B3] transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-slate-700 group-hover:text-white stroke-[1.75] transition-colors" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-[#1575B3] transition-colors">
                      {card.id}
                    </span>
                  </div>

                  {/* Content Body */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-normal text-slate-900 group-hover:text-[#1575B3] transition-colors">
                        {card.title}
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mt-0.5">
                        {card.subtitle}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-3 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};