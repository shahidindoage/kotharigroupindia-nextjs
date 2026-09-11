import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { Reveal } from '@/components/main/Reveal';
import { SectionHeader } from '@/components/solutions/SectionHeader';

export const metadata = {
  title: 'Quality Policy | Kothari Group',
  description:
    'Discover the Kothari Group\u2019s commitment to quality \u2014 our standards for materials, manufacturing, inspection and service in irrigation and agricultural solutions.',
};

const QUALITY_IMAGE = 'https://kotharigroupindia.com/img/images/quality-policy.webp';

const HERO_STATS = [
  { value: '35+', label: 'Years of Excellence' },
  { value: '7500+', label: 'Channel Partners' },
  { value: 'ISO 9001', label: 'Certified Quality' },
];

const PRINCIPLES = [
  'Quality Excellence \u2013 Meeting and exceeding global standards.',
  'Process Innovation \u2013 Embracing digital transformation and automation.',
  'Sustainable Growth \u2013 Minimizing environmental impact through responsible sourcing and production.',
  'Risk-Based Thinking \u2013 Proactively identifying and mitigating quality-related risks.',
  'Employee Development \u2013 Empowering our workforce with the latest industry skills.',
];

const OBJECTIVES = [
  'Achieve zero major quality defects through continuous monitoring and preventive actions.',
  'Enhance supplier quality performance to improve overall product standards.',
  'Achieve a 10% annual reduction in resource wastage (materials, water, and energy).',
  'Implement real-time quality monitoring using IoT and automation for predictive maintenance.',
  'Establish a customer feedback-driven improvement process to enhance satisfaction.',
  'Maintain a strong focus on workplace safety and regulatory compliance.',
];

export default function QualityPolicyPage() {
  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />

        <div className="relative w-full min-h-[100dvh] bg-black text-white font-sans overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src="/plant_quality_lab_1784719742717.jpg"
              alt="Quality Policy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/50 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full min-h-[100dvh] pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col justify-between">
            <div className="w-full flex flex-col gap-5 sm:gap-6 my-auto py-8">
              <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
                Kothari Group
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
                Quality Policy
              </h1>
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
                Our commitment to excellence in every material, process and product.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10 w-full border-t border-white/20 pt-6 mt-auto max-w-2xl">
              {HERO_STATS.map((stat) => (
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

        <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-300/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <SectionHeader
              title="Overview"
              description="At Kothari Agritech Private Limited, we are committed to delivering high-quality, eco-friendly, and technologically advanced products that ensure maximum customer satisfaction."
            />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7 space-y-7 lg:space-y-9">
                <Reveal>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    Our approach is built on the following key principles:
                  </p>
                </Reveal>

                <Reveal delay={90}>
                  <ul className="space-y-3.5">
                    {PRINCIPLES.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed"
                      >
                        <span aria-hidden className="mt-[0.62em] w-1.5 h-1.5 shrink-0 bg-[#1575B3]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light uppercase tracking-tight text-slate-900 leading-snug border-l-2 border-[#1575B3] pl-4">
                    Quality Objectives
                  </h2>
                </Reveal>

                <Reveal delay={90}>
                  <ul className="space-y-3.5">
                    {OBJECTIVES.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed"
                      >
                        <span aria-hidden className="mt-[0.62em] w-1.5 h-1.5 shrink-0 bg-[#1575B3]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <Reveal delay={120}>
                  <div className="relative border border-[#F5F6F8] p-3 sm:p-4">
                    <img
                      src={QUALITY_IMAGE}
                      alt="Quality Policy"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-auto object-contain"
                    />
                   
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <Home2Footer />
      </div>
    </AppShell>
  );
}