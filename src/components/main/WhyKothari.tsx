'use client';
import React from 'react';
import { Award, ArrowRight, ShieldCheck, Lightbulb, MapPin, Headphones } from 'lucide-react';
import { Reveal, SectionLabel } from './Reveal';

export const WhyKothari: React.FC = () => {
  const whyPoints = [
    {
      number: '01',
      title: 'Trusted Since 1988',
      description: 'Three decades of manufacturing leadership and dependable service across India.',
      icon: Award
    },
    {
      number: '02',
      title: 'High Quality Products',
      description: 'BIS & ISO certified piping engineered for durability and performance.',
      icon: ShieldCheck
    },
    {
      number: '03',
      title: 'Innovative Solutions',
      description: 'Smart, water-saving irrigation technology built for modern agriculture.',
      icon: Lightbulb
    },
    {
      number: '04',
      title: 'Pan India Presence',
      description: 'A robust dealer network spanning 23+ states with rapid delivery.',
      icon: MapPin
    },
    {
      number: '05',
      title: 'Customer First',
      description: 'Responsive support, quick delivery and relationships built on trust.',
      icon: Headphones
    }
  ];

  return (
    <section id="why-kothari" className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#DCEAF5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <Reveal className="text-center max-w-2xl mx-auto space-y-4">
          <SectionLabel icon={Award}>Why Kothari Group?</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-medium text-[#1575B3]">
            Built On Trust. Driven By Quality.
          </h2>
          <p className="text-sm font-light text-[#5F6B7A]">
            The values that have made Kothari Group a name farmers and builders trust for over three decades.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <Reveal className="lg:col-span-2">
            <div className="relative h-full rounded-lg overflow-hidden bg-gradient-to-br from-[#003F82] via-[#0B4E8C] to-[#1575B3] text-white p-8 sm:p-10 flex flex-col justify-between min-h-[24rem]">
              <div className="absolute inset-0 blueprint-grid opacity-40" />
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-lg bg-white/10 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-16 w-64 h-64 rounded-lg bg-[#003F82]/60 blur-3xl pointer-events-none" />

              <div className="relative space-y-6">
                <div className="w-14 h-14 rounded-lg bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Award className="w-7 h-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-semibold leading-snug">
                    Three Decades Of Trust, Rooted In Every Pipe.
                  </h3>
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                    From a single extrusion unit to a pan-India partner in water, we keep delivering strength for farms, homes and industries.
                  </p>
                </div>
              </div>

              <div className="relative grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4">
                  <p className="text-2xl sm:text-3xl font-bold">35+</p>
                  <p className="text-[11px] font-light text-white/75 mt-1 tracking-wider">Years of Excellence</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4">
                  <p className="text-2xl sm:text-3xl font-bold">23+</p>
                  <p className="text-[11px] font-light text-white/75 mt-1 tracking-wider">States Served</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3 space-y-4">
            {whyPoints.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <Reveal key={idx} delay={idx * 70}>
                  <div className="group flex items-start gap-5 p-5 sm:p-6 rounded-lg border border-[#DCEAF5] bg-[#F5FAFF] hover:bg-white hover:border-[#1575B3] hover:shadow-lg transition-all duration-300">
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-white border border-[#DCEAF5] text-[#1575B3] flex items-center justify-center group-hover:bg-[#1575B3] group-hover:text-white group-hover:scale-105 transition-all shadow-xs">
                        <IconComp className="w-7 h-7" />
                      </div>
                      <span className="absolute -top-2 -left-2 w-6 h-6 rounded-lg bg-[#2E9FE3] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                        {idx + 1}
                      </span>
                    </div>

                    <div className="flex-1 space-y-1.5 pt-1">
                      <h4 className="text-base font-medium text-[#111111] leading-snug">{pt.title}</h4>
                      <p className="text-xs font-light text-[#5F6B7A] leading-relaxed">{pt.description}</p>
                    </div>

                    <ArrowRight className="w-5 h-5 text-[#1575B3] shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-1" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};