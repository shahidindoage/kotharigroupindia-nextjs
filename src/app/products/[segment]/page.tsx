import { Suspense } from 'react';
import { ProductsBrowser } from '@/components/products/ProductsBrowser';
import { ProductsPageLayout } from '@/components/products/ProductsPageLayout';
import { SegmentOverview, SegmentFaqs } from '@/components/products/SegmentSections';
import { fetchWpProductCards } from '@/lib/wp-products';
import { wpPageMetadata } from '@/lib/wp-seo';
import { segmentPageContent } from '@/data/segment-pages';

interface PageProps {
  params: Promise<{ segment: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { segment } = await Promise.resolve(params);
  const segmentSlug = decodeURIComponent(segment);
  return wpPageMetadata(
    segmentSlug,
    {
      title: `${slugToReadable(segmentSlug)} | Products | Kothari Group`,
      description: `Browse the full range of ${slugToReadable(segmentSlug).toLowerCase()} from Kothari Group — engineered for performance and reliability.`,
    }
  );
}

function slugToReadable(slug: string): string {
  return slug
    .replace(/[-_/]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function SegmentProductsPage({ params }: PageProps) {
  const { segment } = await Promise.resolve(params);
  const segmentSlug = decodeURIComponent(segment);

  const products = await fetchWpProductCards();

  const matched = products.find((p) => p.segmentSlug === segmentSlug);

  const segmentLabel = matched?.segmentName || slugToReadable(segmentSlug);
  const activeDivisionSlug =
    matched?.divisionSlug ||
    (segmentSlug
      ? products.find((p) => p.segmentSlug === segmentSlug)?.divisionSlug || ''
      : '');

  const content = segmentPageContent[segmentSlug];

  const heroTitle = segmentLabel;
  const heroDescription = `Browse our range of ${segmentLabel.toLowerCase()} — engineered for performance and reliability.`;

  return (
    <ProductsPageLayout divisionSlug={activeDivisionSlug}>
      {/* Page hero */}
      <div className="relative w-full min-h-[50dvh] bg-[#061E33] text-white font-sans overflow-hidden flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <img
            src="/heronew.jpg"
            alt="Kothari Group products"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/70 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full min-h-[50dvh] pt-28 sm:pt-32 pb-10 flex flex-col justify-between">
          <div className="flex flex-col gap-5 sm:gap-6 my-auto py-8">
            <span className="inline-block self-start text-[11px] font-mono tracking-[0.25em] uppercase text-white border border-white/25 bg-white/10 backdrop-blur-sm px-3 py-1.5">
              Products
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
              {heroTitle}
            </h1>
            <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
              {heroDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Segment overview */}
      {content && <SegmentOverview content={content} title={segmentLabel} />}

      {/* Products browser */}
      <div className="w-full bg-white py-14 sm:py-20 border-b border-slate-300/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="border-b border-slate-300 pb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight uppercase font-serif text-slate-900">
              Explore Products
            </h2>
          </div>
          <Suspense
            fallback={
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-72 bg-white border border-slate-200 animate-pulse"
                  />
                ))}
              </div>
            }
          >
            <ProductsBrowser
              products={products}
              initialDivision={activeDivisionSlug}
              initialSegment={segmentSlug}
              initialPage=""
            />
          </Suspense>
        </div>
      </div>

      {/* Segment FAQs */}
      {content && <SegmentFaqs content={content} />}
    </ProductsPageLayout>
  );
}