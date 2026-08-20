'use client';

import AppShell from '@/components/AppShell';
import { Home2Header } from '@/components/Home2Header';
import { Home2Footer } from '@/components/Home2Footer';
import { Hero } from '@/components/main/Hero';
import { Solutions } from '@/components/main/Solutions';
import { WhyKothari } from '@/components/main/WhyKothari';
import { Impact } from '@/components/main/Impact';
import { News } from '@/components/main/News';

export default function HomePage() {
  return (
    <AppShell>
      <div className="text-left">
        <Home2Header />
        <Hero />
        {/* <Solutions /> */}
        <WhyKothari />
        <Impact />
        <News />
        <Home2Footer />
      </div>
    </AppShell>
  );
}