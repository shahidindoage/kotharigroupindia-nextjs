'use client';
import React from 'react';
import { TrendingUp, Sprout, Droplets, Zap, HandCoins, ShieldCheck, Headphones } from 'lucide-react';
import { Reveal, SectionLabelGreen } from './Reveal';

const benefits = [
  {
    value: 'Lower Power',
    label: 'Energy Saving',
    description: 'Efficient pumps and low-pressure systems cut energy costs.',
    icon: Zap
  },
  {
    value: 'PMKSY',
    label: 'Government Subsidy Support',
    description: 'We guide you through subsidy applications and documentation.',
    icon: HandCoins
  },
  {
    value: 'ISI Mark',
    label: 'Certified Quality',
    description: 'ISI-marked, BIS-approved products built to last for years.',
    icon: ShieldCheck
  },
  {
    value: '24x7',
    label: 'Expert Support',
    description: 'Agronomists and engineers support you at every stage.',
    icon: Headphones
  }
];

export const WhyFarmers: React.FC = () => {
  return (
    <section id="why" className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-[#F2FBF4] via-[#FFFFFF] to-[#EAF8EF] border-b border-[#BFE4CC] scroll-mt-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <Reveal className="text-center max-w-2xl mx-auto space-y-4">
          <SectionLabelGreen icon={TrendingUp}>Why Farmers Choose Us</SectionLabelGreen>
          <h2 className="text-3xl sm:text-4xl font-medium text-[#0F6B2B]">
            Irrigation That Pays For Itself.
          </h2>
          <p className="text-sm font-light text-[#5F6B7A]">
            Practical, measurable benefits farmers feel season after season.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <Reveal className="lg:col-span-2 h-full">
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-lg bg-gradient-to-br from-[#0F6B2B] via-[#1E8E3E] to-[#1575B3] text-white p-8 sm:p-10 flex flex-col justify-between">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-lg bg-white/10 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-lg bg-[#0B3D2E]/70 blur-3xl pointer-events-none" />

              <div className="relative space-y-6">
                <div className="w-14 h-14 rounded-lg bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Sprout className="w-7 h-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-semibold leading-snug">
                    Less Water.<br />More Crop. Every Season.
                  </h3>
                  <p className="text-sm font-light text-white/80 leading-relaxed">
                    Precision delivery keeps soil moisture ideal, so plants thrive and bills shrink — season after season, for over 10 lakh farmers.
                  </p>
                </div>
              </div>

              <div className="relative grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4">
                  <Droplets className="w-5 h-5 text-white/80" />
                  <p className="text-2xl sm:text-3xl font-bold mt-2">60%</p>
                  <p className="text-[11px] font-light text-white/75 mt-1 tracking-wider">Water Saved</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4">
                  <TrendingUp className="w-5 h-5 text-white/80" />
                  <p className="text-2xl sm:text-3xl font-bold mt-2">30%</p>
                  <p className="text-[11px] font-light text-white/75 mt-1 tracking-wider">Higher Yield</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            {benefits.map((ben, idx) => {
              const IconComp = ben.icon;
              return (
                <Reveal key={ben.label} delay={idx * 70} className="h-full">
                  <div className="group bg-[#FFFFFF] rounded-lg border border-[#BFE4CC] p-5 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-11 h-11 rounded-lg bg-[#F2FBF4] border border-[#BFE4CC] text-[#1E8E3E] flex items-center justify-center group-hover:bg-[#1E8E3E] group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#1E8E3E] bg-[#F2FBF4] border border-[#BFE4CC] rounded-lg px-2.5 py-1 leading-none">
                        {ben.value}
                      </span>
                    </div>
                    <h3 className="mt-4 text-sm font-medium text-[#111111] leading-snug">{ben.label}</h3>
                    <p className="mt-1.5 text-xs font-light text-[#5F6B7A] leading-relaxed">{ben.description}</p>
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