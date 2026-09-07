import React from 'react';
import {
  Target,
  Droplets,
  Sprout,
  FlaskConical,
  CloudFog,
  Cpu,
  Waves,
  Zap,
  ShieldCheck,
  Filter,
  Gauge,
  Thermometer,
  Wrench,
  Building2,
  Volume2,
  Layers,
  Lock,
  Spline,
  Factory,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import type { SolutionPillar } from '@/data/solutions';

const ICONS: Record<string, React.ElementType> = {
  Target,
  Droplets,
  Sprout,
  FlaskConical,
  CloudFog,
  Cpu,
  Waves,
  Zap,
  ShieldCheck,
  Filter,
  Gauge,
  Thermometer,
  Wrench,
  Building2,
  Volume2,
  Layers,
  Lock,
  Spline,
  Factory,
};

export const SolutionPillars: React.FC<{ pillars: SolutionPillar[] }> = ({ pillars }) => {
  if (!pillars.length) return null;
  return (
    <section className="w-full bg-[#F5F6F8] py-16 sm:py-24 border-b border-slate-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <SectionHeader
          title="Key Pillars"
          description="The four engineering principles every system in this solution is built on."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {pillars.map((pillar) => {
            const Icon = ICONS[pillar.icon] || Droplets;
            return (
              <div key={pillar.label} className="bg-white p-6 space-y-4 hover:bg-slate-50/60 transition-colors">
                <div className="w-10 h-10 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#1575B3]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold text-slate-900 leading-snug">{pillar.label}</h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">{pillar.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
