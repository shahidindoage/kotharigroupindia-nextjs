import React from 'react';

export const SolutionApplications: React.FC<{ applications: string[] }> = ({ applications }) => {
  if (!applications.length) return null;
  return (
    <section className="w-full bg-[#015CAA] py-24 lg:py-32 text-white overflow-hidden relative">

      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="max-w-7xl mx-auto h-full border-x border-white/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* Editorial Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/20">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight uppercase text-white">
              Applications
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-sky-100/80 max-w-sm font-light leading-relaxed">
            Where this solution delivers measurable efficiency and lifecycle value.
          </p>
        </div>

        {/* Minimalist Editorial Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {applications.map((app, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={app}
                className="group relative pt-8 border-b border-white/15  sm:border-b-0 sm:border-r sm:border-white/15"
              >
                {/* Large Stylized Background Number */}
                <span className="absolute -top-10 left-0 text-8xl font-mono font-bold text-white/[0.05] group-hover:text-white/[0.08] transition-colors duration-500 pointer-events-none select-none">
                  {num}
                </span>

                <div className="relative z-10 space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-white tracking-tight leading-tight">
                    {app}
                  </h3>

                  {/* Bottom Accent Line */}
                  <div className="invisible mt-6 flex items-center gap-2 pt-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/40 group-hover:bg-sky-300 group-hover:scale-125 transition-all duration-300" />
                    <span className="h-[1px] w-8 bg-white/20 group-hover:w-16 group-hover:bg-sky-300/50 transition-all duration-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
