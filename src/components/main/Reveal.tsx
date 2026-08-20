'use client';
import React, { useEffect, useRef, useState } from 'react';

export const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('revealed');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export const SectionLabel: React.FC<{ children: React.ReactNode; icon?: React.ComponentType<{ className?: string }> }> = ({ children, icon }) => {
  const Icon = icon;
  return (
    <span className="inline-flex items-center gap-2 bg-[#FFFFFF] border border-[#DCEAF5] text-[#1575B3] text-[11px] font-semibold px-3.5 py-1.5 rounded-lg tracking-wider shadow-xs">
      {Icon ? (
        <Icon className="w-3.5 h-3.5" />
      ) : (
        <span className="w-1.5 h-1.5 rounded-lg bg-[#1575B3]" />
      )}
      {children}
    </span>
  );
};

export const SectionLabelGreen: React.FC<{ children: React.ReactNode; icon?: React.ComponentType<{ className?: string }> }> = ({ children, icon }) => {
  const Icon = icon;
  return (
    <span className="inline-flex items-center gap-2 bg-[#FFFFFF] border border-[#BFE4CC] text-[#1E8E3E] text-[11px] font-semibold px-3.5 py-1.5 rounded-lg tracking-wider shadow-xs">
      {Icon ? (
        <Icon className="w-3.5 h-3.5" />
      ) : (
        <span className="w-1.5 h-1.5 rounded-lg bg-[#1E8E3E]" />
      )}
      {children}
    </span>
  );
};

export const CountUp: React.FC<{ value: number; suffix: string; className?: string }> = ({ value, suffix, className = '' }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
};