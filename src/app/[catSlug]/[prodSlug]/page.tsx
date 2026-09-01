// src/app/[catSlug]/[prodSlug]/page.tsx

import { notFound } from 'next/navigation';
import AppShell from '@/components/AppShell';
import { ProductDetailPage } from '@/components/ProductDetailPage';
import ProductPageLayout from '@/components/ProductPageLayout';
import { productsData } from '@/data/products';
import { findProductBySlugs, getCategorySlug, getProductSlug } from '@/lib/slug';
import { fetchWpProductBySlug } from '@/lib/wp-product';

type Params = { catSlug: string; prodSlug: string };

export function generateStaticParams() {
  return productsData.map((p) => ({
    catSlug: getCategorySlug(p.category),
    prodSlug: getProductSlug(p),
  }));
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }) {
  const { catSlug, prodSlug } = await Promise.resolve(params);

  // Try WordPress first for SEO
  const wpProduct = await fetchWpProductBySlug(prodSlug);
  if (wpProduct) {
    return {
      title: `${wpProduct.name} | Kothari Group`,
      description: wpProduct.specificationsHtml
        ?.replace(/<[^>]*>/g, '')
        .slice(0, 160) || '',
      openGraph: {
        title: wpProduct.name,
        description: wpProduct.specificationsHtml
          ?.replace(/<[^>]*>/g, '')
          .slice(0, 160) || '',
        images: [wpProduct.mainImage],
      },
    };
  }

  // Fallback to static data
  const product = findProductBySlugs(catSlug, prodSlug, productsData);
  if (!product) return { title: 'Product Not Found | Kothari Group' };
  return {
    title: `${product.name} | Kothari Group`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default async function CategoryProductPage({ params }: { params: Params | Promise<Params> }) {
  const { catSlug, prodSlug } = await Promise.resolve(params);

  // Try fetch from WordPress first
  const wpProduct = await fetchWpProductBySlug(prodSlug);

  // Fallback to static data
  const staticProduct = findProductBySlugs(catSlug, prodSlug, productsData);

  if (!wpProduct && !staticProduct) notFound();

  return (
    <AppShell>
      <ProductPageLayout catSlug={catSlug}>
        <ProductDetailPage
          product={staticProduct || undefined}
          wp={wpProduct || undefined}
        />
      </ProductPageLayout>
    </AppShell>
  );
}
