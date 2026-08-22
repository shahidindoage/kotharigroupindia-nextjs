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
import { Home3Header } from '@/components/Home3Header';
import { Home2Header } from '@/components/Home2Header';
import { HeroOLD } from '@/components/main/HeroOLD';
import { HeroPipe } from '@/components/HeroPipe';
import { HeaderPipe } from '@/components/HeaderPipe';
import { WhyKothariOLD } from '@/components/main/WhyKothariOLD';
import { CategorySection } from '@/components/CategorySection';
import { Category } from '@/components/Category';
import { WhyKothariGroup } from '@/components/main/WhyKothariGroup';
import { Impact } from '@/components/main/Impact';
import { News } from '@/components/main/News';
import { Footer } from '@/components/Footer';
import { NewsPipe } from '@/components/NewsPipe';


function PipeDivisionContent() {
  const { openQuoteModal, scrollToSection } = useApp();

  return (
    <>
   <HeaderPipe />

      {/* <Hero
        onExploreProducts={() => scrollToSection('categories')}
        onOpenCalculator={() => scrollToSection('calculator')}
        onOpenQuoteModal={openQuoteModal}
      /> */}
      <HeroPipe/>
      {/* <AboutKothari variant="blue" /> */}
      <Category/>
      {/* <HomeCategories /> */}
      {/* <HighlightedPoints />
      <WhyKothari /> */}

      <WhyKothariGroup/>
              <Impact />
      {/* <MilestonesSection />
      <ManufacturingPlantsSection /> */}
      <KnowledgeCentre />
       <NewsPipe />
      {/* <SectorSolutions /> */}
      {/* <SustainabilitySection variant="blue" /> */}
      {/* <InvestorSection variant="blue" /> */}
      {/* <CareersSection variant="blue" /> */}
      {/* <NewsAndArticles /> */}
      {/* <Home3Contact variant="blue" /> */}
      <Footer/>
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