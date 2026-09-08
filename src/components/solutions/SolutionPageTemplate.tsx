import React from 'react';
import type { Solution } from '@/data/solutions';
import { SolutionHero } from './SolutionHero';
import { SolutionOverview } from './SolutionOverview';
import { SolutionPillars } from './SolutionPillars';
import { SolutionWhyChoose } from './SolutionWhyChoose';
import { SolutionApplications } from './SolutionApplications';
import { SolutionRelatedProducts } from './SolutionRelatedProducts';

export const SolutionPageTemplate: React.FC<{ solution: Solution }> = ({ solution }) => {
  return (
    <>
      <SolutionHero solution={solution} />
      <SolutionOverview overview={solution.overview} />
      <SolutionPillars pillars={solution.pillars} />
      <SolutionWhyChoose points={solution.whyChoose} />
      <SolutionApplications applications={solution.applications} />
      <SolutionRelatedProducts products={solution.relatedProducts} />
    </>
  );
};
