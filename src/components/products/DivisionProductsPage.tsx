import { Suspense } from 'react';
import { ProductsBrowser } from '@/components/products/ProductsBrowser';
import { ProductsPageLayout } from '@/components/products/ProductsPageLayout';
import { fetchWpProductCards } from '@/lib/wp-products';

interface DivisionProductsPageProps {
  divisionSlug: string;
  eyebrow: string;
  title: string;
  description: string;
}

export default async function DivisionProductsPage({
  divisionSlug,
  eyebrow,
  title,
  description,
}: DivisionProductsPageProps) {
  const products = await fetchWpProductCards();

  return (
    <ProductsPageLayout divisionSlug={divisionSlug}>
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
              {eyebrow}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] sm:leading-[1.02] lg:leading-[0.98] drop-shadow-xl m-0 p-0 max-w-5xl">
              {title}
            </h1>
            <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed max-w-3xl drop-shadow-sm">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Products browser */}
      <div className="w-full bg-white py-14 sm:py-20 border-b border-slate-300/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
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
              initialDivision={divisionSlug}
              initialSegment=""
              initialPage=""
            />
          </Suspense>
        </div>
      </div>
    </ProductsPageLayout>
  );
}