'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import AppShell from '@/components/AppShell';
import ProductPageLayout from '@/components/ProductPageLayout';
import { ProductDetailSkeleton } from '@/components/ProductDetailSkeleton';

// Shown instantly on client-side navigation while the server
// component fetches WordPress data. Header/footer render at once
// (via ProductPageLayout) so the redirect feels instant.
export default function ProductLoading() {
  const params = useParams() as { catSlug?: string | string[] };
  const raw = params?.catSlug;
  const catSlug = Array.isArray(raw) ? raw[0] : raw ?? '';

  return (
    <AppShell>
      <ProductPageLayout catSlug={catSlug}>
        <ProductDetailSkeleton />
      </ProductPageLayout>
    </AppShell>
  );
}
