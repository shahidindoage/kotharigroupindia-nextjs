'use client';

import AppShell from '@/components/AppShell';
import { Home3Header } from '@/components/Home3Header';
import { Home3Footer } from '@/components/Home3Footer';
import { Home3Hero } from '@/components/Home3Hero';
import { Home3Contact } from '@/components/Home3Contact';
import { AboutKothari } from '@/components/AboutKothari';
import { InvestorSection } from '@/components/InvestorSection';
import { SustainabilitySection } from '@/components/SustainabilitySection';
import { CareersSection } from '@/components/CareersSection';
import { HighlightedPoints } from '@/components/HighlightedPoints';
import { NewsAndArticles } from '@/components/NewsAndArticles';
import { ProductCategories } from '@/components/main/ProductCategories';
import { CropSolutions } from '@/components/main/CropSolutions';
import { WhyFarmers } from '@/components/main/WhyFarmers';
import { Callouts } from '@/components/main/Callouts';

export default function AgricultureDivisionPage() {
  return (
    <AppShell>
      <div className="text-left">
        <Home3Header />
        <Home3Hero />
        <AboutKothari />
        <ProductCategories />
        <HighlightedPoints variant="green" />
        <CropSolutions />
        <WhyFarmers />
        <Callouts />
        <SustainabilitySection />
        <InvestorSection />
        <CareersSection />
        <NewsAndArticles variant="green" />
        <Home3Contact />
        <Home3Footer />
      </div>
    </AppShell>
  );
}