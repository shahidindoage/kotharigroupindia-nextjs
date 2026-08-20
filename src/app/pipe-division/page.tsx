'use client';

import AppShell, { useApp } from '@/components/AppShell';
import { Hero } from '@/components/Hero';
import { AboutKothari } from '@/components/AboutKothari';
import { HomeCategories } from '@/components/HomeCategories';
import { HighlightedPoints } from '@/components/HighlightedPoints';
import { WhyKothari } from '@/components/WhyKothari';
import { MilestonesSection } from '@/components/MilestonesSection';
import { ManufacturingPlantsSection } from '@/components/ManufacturingPlantsSection';
import { KnowledgeCentre } from '@/components/KnowledgeCentre';
import { SectorSolutions } from '@/components/SectorSolutions';
import { SustainabilitySection } from '@/components/SustainabilitySection';
import { InvestorSection } from '@/components/InvestorSection';
import { CareersSection } from '@/components/CareersSection';
import { NewsAndArticles } from '@/components/NewsAndArticles';
import { Home3Contact } from '@/components/Home3Contact';

function PipeDivisionContent() {
  const { openQuoteModal, scrollToSection } = useApp();

  return (
    <>
      <Hero
        onExploreProducts={() => scrollToSection('categories')}
        onOpenCalculator={() => scrollToSection('calculator')}
        onOpenQuoteModal={openQuoteModal}
      />
      <AboutKothari variant="blue" />
      <HomeCategories />
      <HighlightedPoints />
      <WhyKothari />
      <MilestonesSection />
      <ManufacturingPlantsSection />
      <KnowledgeCentre />
      <SectorSolutions />
      <SustainabilitySection variant="blue" />
      <InvestorSection variant="blue" />
      <CareersSection variant="blue" />
      <NewsAndArticles />
      <Home3Contact variant="blue" />
    </>
  );
}

export default function PipeDivisionPage() {
  return (
    <AppShell>
      <PipeDivisionContent />
    </AppShell>
  );
}