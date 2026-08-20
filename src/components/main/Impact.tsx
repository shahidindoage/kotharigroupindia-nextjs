'use client';
import React from 'react';
import { Droplets, Users, Sprout, Handshake, MapPin } from 'lucide-react';
import { Reveal, CountUp } from './Reveal';

export const Impact: React.FC = () => {
  const impacts = [
    { value: 10, suffix: ' Lakh+', label: 'Farmers Empowered', description: 'Growing stronger harvests with smarter water use.', icon: Users },
    { value: 5, suffix: ' Lakh+', label: 'Hectares Under Irrigation', description: 'Land made productive with efficient drip & sprinkler systems.', icon: Sprout },
    { value: 5000, suffix: '+', label: 'Happy Channel Partners', description: 'A trusted network of dealers and distributors pan India.', icon: Handshake },
    { value: 23, suffix: '+ States', label: 'Pan India Presence', description: 'From farms to infrastructure, we are everywhere you build.', icon: MapPin }
  ];

  return (
    <section id="impact" className="relative overflow-hidden bg-[#1575B3] text-white py-16 sm:py-20 scroll-mt-20">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="absolute -top-24 left-1/4 w-80 h-80 rounded-lgl bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-lg bg-[#003F82]/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <Reveal className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-lg tracking-wider">
            <Droplets className="w-3.5 h-3.5" />
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-white">
            Numbers That Tell Our Story
          </h2>
          <p className="text-sm font-light text-white/80">
            Every pipe laid and every drop saved adds to the growth of Indian agriculture and infrastructure.
          </p>
        </Reveal>

        <Reveal>
          <div className="rounded-lg bg-white/5 backdrop-blur-md border border-white/15 shadow-2xl shadow-[#003F82]/30 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {impacts.map((imp, idx) => {
                const IconComp = imp.icon;
                return (
                  <Reveal key={idx} delay={idx * 90} className="h-full">
                    <div className="relative h-full flex flex-col items-center text-center p-7 sm:p-9 border-b border-white/15 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 hover:bg-white/10 transition-colors duration-300">
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#7CC4EE]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative">
                        <div className="w-14 h-14 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shadow-lg shadow-black/10">
                          <IconComp className="w-6 h-6" />
                        </div>
                      </div>

                      <CountUp
                        value={imp.value}
                        suffix={imp.suffix}
                        className="mt-5 text-4xl sm:text-[2.75rem] font-bold tracking-tight bg-gradient-to-r from-[#7CC4EE] to-white bg-clip-text text-transparent"
                      />

                      <h3 className="mt-3 text-sm font-medium text-white">{imp.label}</h3>
                      <p className="mt-1.5 text-[11px] font-light text-white/70 leading-relaxed max-w-[14rem]">
                        {imp.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};