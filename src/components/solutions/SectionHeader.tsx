import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300">
      <div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
