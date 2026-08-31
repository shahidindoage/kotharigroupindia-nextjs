import { notFound } from 'next/navigation';
import AppShell from '@/components/AppShell';
import { HeaderDivison } from '@/components/HeaderDivision';
import { Footer } from '@/components/Footer';
import { ProductDetailPage } from '@/components/ProductDetailPage';
import { productsData } from '@/data/products';
import { findProductBySlugs, getCategorySlug, getProductSlug } from '@/lib/slug';
import { fetchWpProductFaqs } from '@/lib/wp';

type Params = { catSlug: string; prodSlug: string };

export function generateStaticParams() {
  return productsData.map((p) => ({
    catSlug: getCategorySlug(p.category),
    prodSlug: getProductSlug(p),
  }));
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }) {
  const { catSlug, prodSlug } = await Promise.resolve(params);
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
  const product = findProductBySlugs(catSlug, prodSlug, productsData);
  if (!product) notFound();

  // Fetch live FAQs from WordPress ACF (revalidate 600s)
  let wpFaqs: { question: string; answer: string }[] | undefined;
  try {
    wpFaqs = await fetchWpProductFaqs(prodSlug, product.name);
  } catch {
    wpFaqs = undefined;
  }

  return (
    <AppShell>
      <HeaderDivison solid />
      <ProductDetailPage product={product} wpFaqs={wpFaqs} />
      <Footer />
    </AppShell>
  );
}
