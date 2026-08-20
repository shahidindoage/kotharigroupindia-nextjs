'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import { QuoteBuilderModal } from './QuoteBuilderModal';
import { ProductDetailModal } from './ProductDetailModal';
import { ContactModal } from './ContactModal';
import { CareerModal } from './CareerModal';
import { ProductItem } from '@/lib/types';

interface AppContextValue {
  openQuoteModal: () => void;
  openContactModal: () => void;
  openCareerModal: () => void;
  scrollToSection: (sectionId: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within an <AppShell>');
  return ctx;
}

// Module-level flag so the loader only plays once per browser session
// (mirrors the original Vite app, which showed the loader on first mount only).
let loaderPlayedOnce = false;

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isStandalone = pathname === '/' || pathname === '/agriculture-division';

  const [loading, setLoading] = useState(!loaderPlayedOnce);
  const [activeSection, setActiveSection] = useState('hero');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);
  const [specList, setSpecList] = useState<string[]>([]);

  useEffect(() => {
    if (!loaderPlayedOnce) {
      loaderPlayedOnce = true;
      const timeout = setTimeout(() => setLoading(false), 2800);
      return () => clearTimeout(timeout);
    }
    setLoading(false);
  }, []);

  const handleScrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleToggleSpecItem = (productId: string) => {
    setSpecList((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const contextValue: AppContextValue = {
    openQuoteModal: () => setQuoteModalOpen(true),
    openContactModal: () => setContactModalOpen(true),
    openCareerModal: () => setCareerModalOpen(true),
    scrollToSection: handleScrollToSection,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-[#F5FAFF] text-[#111111] font-['Outfit',sans-serif] flex flex-col antialiased">

        {loading && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#003F82]">
            <div className="flex flex-col items-center gap-6" style={{ animation: 'logoReveal 1s ease-out forwards' }}>
              <img
                src="https://kotharigroupindia.com/img/kothari-logo.png"
                alt="Kothari Group"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
              <div className="w-48 h-1 rounded-lg bg-white/10 overflow-hidden relative">
                <div
                  className="h-full rounded-lg bg-white/60"
                  style={{ animation: 'loadBar 2.8s ease-in-out forwards' }}
                />
                <div
                  className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  style={{ animation: 'shimmer 1.8s 0.5s ease-in-out infinite' }}
                />
              </div>
              <span
                className="text-white/50 text-xs font-medium tracking-[0.25em] uppercase"
                style={{ animation: 'fadeSlideUp 0.8s 0.3s both' }}
              >
                Loading
              </span>
            </div>
          </div>
        )}

        {!isStandalone && (
          <Header
            onSelectTab={handleScrollToSection}
            activeSection={activeSection}
            onOpenQuoteModal={() => setQuoteModalOpen(true)}
            onOpenContactModal={() => setContactModalOpen(true)}
            onOpenCareerModal={() => setCareerModalOpen(true)}
          />
        )}

        <main className="flex-1">{children}</main>

        {!isStandalone && (
          <Footer
            onOpenQuoteModal={() => setQuoteModalOpen(true)}
            onSelectSection={handleScrollToSection}
            onOpenContactModal={() => setContactModalOpen(true)}
            onOpenCareerModal={() => setCareerModalOpen(true)}
          />
        )}

        <QuoteBuilderModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          initialSpecCount={specList.length}
        />

        <ProductDetailModal
          product={selectedProductModal}
          onClose={() => setSelectedProductModal(null)}
          inSpecList={selectedProductModal ? specList.includes(selectedProductModal.id) : false}
          onToggleSpecItem={handleToggleSpecItem}
          onOpenQuoteModal={() => setQuoteModalOpen(true)}
        />

        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />

        <CareerModal
          isOpen={careerModalOpen}
          onClose={() => setCareerModalOpen(false)}
        />

      </div>
    </AppContext.Provider>
  );
}