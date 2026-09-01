'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';

// Add this import at top
import { WpProductData } from '@/lib/wp-product';
import Link from 'next/link';
import {
  Download, ShieldCheck, CheckCircle2, ChevronRight,
  Send, Sparkles, Layers, HelpCircle, Award, Search,
  ArrowUpRight, Factory, ChevronDown, ChevronUp
} from 'lucide-react';
import { productsData } from '@/data/products';
import { ProductItem } from '@/lib/types';
import { getProductHref, findProductBySlugs } from '@/lib/slug';

const FALLBACK_FITTINGS: { name: string; image: string }[] = [
  { name: 'Square Gully Trap with Jali', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Square-Gully-Trap-with-Jali-1-300x300.webp' },
  { name: 'Selfit Single Y 45°', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Single-Y-45-300x300.webp' },
  { name: 'Selfit Single Tee 87.5°', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Single-Tee-87.5-300x300.webp' },
  { name: 'Selfit Reducing Y 45°', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Reducing-Y-45-300x300.webp' },
  { name: 'Selfit Reducing Tee 87.5°', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Reducing-Tee-87.5-300x300.webp' },
  { name: 'Selfit Eccentric Reducer', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Eccentric-Reducer-300x300.webp' },
  { name: 'Selfit Double Y', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Double-Y-300x300.webp' },
  { name: 'Selfit Cross Tee', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Cross-Tee-300x300.webp' },
  { name: 'Selfit Coupler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Coupler-300x300.webp' },
  { name: 'Selfit Bend 87.5°', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Bend-87.5-300x300.webp' },
  { name: 'Selfit Bend 45°', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Selfit-Bend-45-300x300.webp' },
  { name: 'Fabricated Coupler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Fabricated-Coupler-300x300.webp' },
];

type HeroTab = 'FEATURES' | 'SPECIFICATIONS' | 'APPLICATIONS' | 'CERTIFICATES' | 'FAQs';

export const ProductDetailPage: React.FC<{
  product?: ProductItem;
  wpFaqs?: { question: string; answer: string }[];
  wp?: WpProductData;   // ← NEW
}> = ({ product: productProp, wpFaqs, wp }) => {
  const params = useParams() as Record<string, string | undefined>;
  const router = useRouter();
  const id = params.id;
  const catSlug = params.catSlug;
  const prodSlug = params.prodSlug;

  const resolvedProduct: ProductItem | undefined = (() => {
    if (productProp) return productProp;
    if (id) return productsData.find((p) => p.id === id);
    if (catSlug && prodSlug) return findProductBySlugs(catSlug, prodSlug, productsData);
    return undefined;
  })();

  const product: ProductItem = resolvedProduct || productsData.find((p) => p.id === 'prod-kothari-cpvc') || productsData[0];

// ── WP data resolution (add after product assignment) ──
  const isWp = !!wp;
  const displayName = wp?.name || product.name;
  const displayCategory = wp?.category || product.category;
  const displayImage = wp?.mainImage || product.image;
  const displayShortDesc = product.shortDescription; // keep static as requested
  const displayFeaturesHtml = wp?.featuresHtml || '';
  const displaySpecsHtml = wp?.specificationsHtml || '';
  const displayAppsHtml = wp?.applicationsHtml || '';
  const displayFaqs = wp?.faqs || wpFaqs || product.faqs;
  const displayCertImages = wp?.certificateImages || [];
  const displayPdfUrl = wp?.pdfUrl || '';
  const displayPdfName = wp?.pdfName || product.brochureName || 'Technical-Catalogue.pdf';
  const displayPdfSize = wp?.pdfSize || 0;
  const displayDescriptionHtml = wp?.descriptionHtml || '';
  const displayRelated = wp?.relatedProducts || [];

  const [heroTab, setHeroTab] = useState<HeroTab>('FEATURES');
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [fittingModal, setFittingModal] = useState<{ name: string; image?: string } | null>(null);
  const [dimensionSearch, setDimensionSearch] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [enquiry, setEnquiry] = useState({ name: '', email: '', phone: '' });
  const [enquirySent, setEnquirySent] = useState(false);
  const [formError, setFormError] = useState('');

  // Hide tabs if content missing — SPECIFICATIONS/CERTIFICATES always visible (show placeholder)
  const visibleTabs: { key: HeroTab; label: string }[] = useMemo(() => {
    const hasFeatures = isWp ? !!displayFeaturesHtml : !!(product.keyFeatures && product.keyFeatures.length > 0);
    const hasApps = isWp ? !!displayAppsHtml : !!(product.applications && product.applications.length > 0);
    const hasFaqs = !!(displayFaqs && (displayFaqs as any).length > 0);
    return [
      ...(hasFeatures ? [{ key: 'FEATURES' as HeroTab, label: 'Features' }] : []),
      { key: 'SPECIFICATIONS' as HeroTab, label: 'Specifications' },
      ...(hasApps ? [{ key: 'APPLICATIONS' as HeroTab, label: 'Applications' }] : []),
      { key: 'CERTIFICATES' as HeroTab, label: 'Certificates' },
      ...(hasFaqs ? [{ key: 'FAQs' as HeroTab, label: 'FAQs' }] : []),
    ];
  }, [isWp, displayFeaturesHtml, displayAppsHtml, displayFaqs, product.keyFeatures, product.applications]);

  const filteredDimensions = (product.dimensionsTable || []).filter((row) =>
    dimensionSearch.trim() === ''
      ? true
      : row.size.toString().includes(dimensionSearch.trim()) ||
        `${row.minOuterDia}-${row.maxOuterDia}`.includes(dimensionSearch.trim())
  );

  const fittingsToShow: { name: string; image: string }[] =
    product.fittingsList && product.fittingsList.length > 0
      ? product.fittingsList.map((f) => ({ name: f.name, image: f.image || FALLBACK_FITTINGS[0].image }))
      : FALLBACK_FITTINGS;

  const related = productsData.filter((p) => p.id !== product.id).slice(0, 3);
  const faqsToShow = wpFaqs && wpFaqs.length ? wpFaqs : product.faqs;
  const relatedToShow: any[] = isWp ? (displayRelated as any[]) : related;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setDimensionSearch('');
    const first = visibleTabs[0]?.key || 'FEATURES';
    setHeroTab(first);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, catSlug, prodSlug, productProp?.id, isWp, displayFeaturesHtml, displaySpecsHtml, displayAppsHtml, displayCertImages.length, (displayFaqs as any)?.length]);

  useEffect(() => {
    if (!visibleTabs.find((t) => t.key === heroTab) && visibleTabs.length) {
      setHeroTab(visibleTabs[0].key);
    }
  }, [heroTab, visibleTabs]);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiry.name.trim() || !enquiry.email.trim() || !enquiry.phone.trim()) {
      setFormError('All fields are required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email.trim())) {
      setFormError('Enter a valid email address.');
      return;
    }
    if (!/^\+?[0-9 ]{8,15}$/.test(enquiry.phone.trim())) {
      setFormError('Enter a valid phone number.');
      return;
    }
    setFormError('');
    setEnquirySent(true);
    setTimeout(() => {
      setEnquirySent(false);
      setEnquiry({ name: '', email: '', phone: '' });
    }, 5000);
  };

  const scrollToEnquiry = () => {
    document.getElementById('product-enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 text-left font-sans antialiased">
      {/* PRODUCT HERO — left image, right tabs */}
      <section className="w-full bg-white border-b border-slate-200 pt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-10">
          {/* Breadcrumb — category from catSlug */}
          <nav className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase text-slate-500 overflow-x-auto whitespace-nowrap mb-4">
            <Link href="/" className="hover:text-[#1575B3] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <Link href="/pipe-division" className="hover:text-[#1575B3] transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-semibold">
              {catSlug
                ? catSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()).replace(/\bAnd\b/g, '&')
                : product.category}
            </span>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
                        {/* In breadcrumb — change product.name to displayName */}
            <span className="text-slate-900 font-semibold truncate max-w-[220px] sm:max-w-[320px]" title={displayName}>{displayName}</span>
          </nav>

          {/* Title row — no badges */}
          <div className="pb-6 border-b border-slate-200 mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light tracking-tight uppercase text-[#1575B3] leading-tight">
              {displayName}
            </h1>
            {/* <p className="text-sm text-slate-600 max-w-3xl leading-relaxed mt-3">
              {product.shortDescription} — {product.fullDescription.slice(0, 160)}...
            </p> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:items-stretch items-start">
            {/* LEFT — single image only */}
            <div className="lg:col-span-4 flex flex-col h-full">
              <div className="group relative border border-slate-200 overflow-hidden  flex-1 flex items-center justify-center min-h-[280px] lg:min-h-0">
                <img
                  src={displayImage}
                  alt={displayName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain max-h-[380px] lg:max-h-none lg:h-full transition-transform duration-500 group-hover:scale-105"
                />
                {displayPdfUrl && (
                  <button
                    onClick={() => window.open(displayPdfUrl, '_blank')}
                    aria-label="Download Product Brochure"
                    title="Download Product Brochure"
                    className="absolute top-3 left-3 w-9 h-9 bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#1575B3] hover:text-white hover:border-[#1575B3] group-hover:bg-[#1575B3] group-hover:text-white group-hover:border-[#1575B3] transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT — tabbed panel */}
            <div className="lg:col-span-8 border border-slate-200 bg-white flex flex-col h-full">
              {/* Tab bar — scrollable on mobile */}
              <div className="flex gap-0 border-b border-slate-200 bg-white overflow-x-auto scrollbar-none -mx-px">
                {visibleTabs.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setHeroTab(t.key)}
                    className={`flex-1 min-w-[110px] sm:min-w-0 whitespace-nowrap py-3 px-2 text-sm font-mono tracking-widest uppercase border transition-colors ${
                      heroTab === t.key
                        ? 'bg-[#1575B3] text-white border-[#1575B3]'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="p-4 sm:p-6 flex-1 min-h-[300px] sm:min-h-[340px] flex flex-col">
                              {heroTab === 'FEATURES' && (
                  <div className="space-y-4">
                    {/* <h3 className="text-xs font-mono tracking-widest uppercase text-slate-500 flex items-center gap-2"><Sparkles className="w-4 h-4 text-[#1575B3]" /> Features</h3> */}
                    {displayFeaturesHtml ? (
                      <div className="text-sm text-slate-700 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:marker:text-[#1575B3] [&_b]:text-slate-900 [&_b]:text-xs [&_b]:font-semibold">
                        <div dangerouslySetInnerHTML={{ __html: displayFeaturesHtml }} />
                      </div>
                    ) : (
                      <ul className="space-y-2.5">
                        {(product.keyFeatures.length
                          ? product.keyFeatures.map((f) => ({ title: f, desc: '' }))
                          : [
                              { title: 'Leak proof', desc: 'Advanced rubber ring technology provides a secure and long-lasting fit.' },
                              { title: 'Anti-rodent', desc: 'Special uPVC composition & smooth outer surface deters rodents.' },
                              { title: 'Light weight', desc: 'Simplifies handling, loading and trench laydown.' },
                              { title: 'Easy installation', desc: 'Designed for quick jointing, even in wet conditions.' },
                              { title: 'High impact resistance', desc: 'Resists soil load & external pressure for decades.' },
                              { title: 'Abrasion resistant', desc: 'Smooth bore minimises friction & sediment build-up.' },
                            ]
                        ).map((item, idx) => (
                          <li key={idx} className="flex gap-3 items-start text-xs leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-[#1575B3] rounded-full shrink-0" />
                            <div>
                              <span className="block text-base font-semibold text-slate-900">{item.title}</span>
                              {item.desc && <span className="block text-xs text-slate-600 leading-relaxed mt-0.5">{item.desc}</span>}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                              {heroTab === 'SPECIFICATIONS' && (
                  <div className="space-y-4">
                    {isWp ? (
                      displaySpecsHtml ? (
                        <div className="text-sm text-slate-700 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:marker:text-[#1575B3] [&_b]:text-slate-900 [&_b]:text-xs [&_b]:font-semibold">
                          <div dangerouslySetInnerHTML={{ __html: displaySpecsHtml }} />
                        </div>
                      ) : (
                        <p className="text-xs text-slate-500 py-10 text-center">No specifications available</p>
                      )
                    ) : displaySpecsHtml ? (
                      <div className="text-xs text-slate-700 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:marker:text-[#1575B3] [&_b]:text-slate-900 [&_b]:text-xs [&_b]:font-semibold">
                        <div dangerouslySetInnerHTML={{ __html: displaySpecsHtml }} />
                      </div>
                    ) : (
                      <ul className="space-y-2.5">
                        {[
                          { label: 'Diameter Range', value: product.specs.diameterRange },
                          { label: 'Pressure Rating', value: product.specs.pressureRating },
                          { label: 'Temperature', value: product.specs.temperatureRange },
                          { label: 'Standard Length', value: product.specs.standardLength },
                          { label: 'Jointing', value: product.specs.joiningMethod },
                          { label: 'Material Grade', value: product.specs.materialGrade },
                        ].map((s) => (
                          <li key={s.label} className="flex gap-3 items-start text-xs leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-[#1575B3] rounded-full shrink-0" />
                            <div>
                              <span className="text-xs font-semibold text-slate-900">{s.label}: </span>
                              <span className="text-xs text-slate-600">{s.value}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                             {heroTab === 'APPLICATIONS' && (
                  <div className="space-y-4">
                    {displayAppsHtml ? (
                      <div className="text-sm text-slate-700 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:marker:text-[#1575B3] [&_b]:text-slate-900 [&_b]:text-xs [&_b]:font-semibold">
                        <div dangerouslySetInnerHTML={{ __html: displayAppsHtml }} />
                      </div>
                    ) : (
                      <ul className="space-y-2.5">
                        {product.applications.map((a) => (
                          <li key={a} className="flex gap-3 items-start text-xs leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-[#1575B3] rounded-full shrink-0" />
                            <span className="text-xs text-slate-700">{a}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                               {heroTab === 'CERTIFICATES' && (
                  <div className="space-y-4">
                    {isWp ? (
                      displayCertImages.length > 0 ? (
                        <div className="grid grid-cols-2 gap-4">
                          {displayCertImages.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setFittingModal({ name: 'Certificate', image: img.src })}
                              className="h-56 bg-white p-2 flex items-center justify-center hover:opacity-90 transition-opacity"
                            >
                              <img src={img.src} alt="Certificate" referrerPolicy="no-referrer" className="max-h-52 max-w-full w-auto h-auto object-contain" />
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-slate-500 py-10 text-center">No certificates available</p>
                      )
                    ) : displayCertImages.length > 0 ? (
                      <div className="grid grid-cols-2 gap-4">
                        {displayCertImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setFittingModal({ name: 'Certificate', image: img.src })}
                            className="h-56 bg-white p-2 flex items-center justify-center hover:opacity-90 transition-opacity"
                          >
                            <img src={img.src} alt="Certificate" referrerPolicy="no-referrer" className="max-h-52 max-w-full w-auto h-auto object-contain" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(product.specs.certifications.length
                          ? product.specs.certifications
                          : ['IS 15328:2003', 'IS 13592:2013', 'EN 1404-1', 'ISO 9001:2015']
                        ).map((cert) => (
                          <div key={cert} className="border border-slate-200 bg-[#F5F6F8] p-4 flex items-center gap-3">
                            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                            <div>
                              <span className="block text-xs font-semibold text-slate-900">{cert}</span>
                              <span className="block text-[10px] font-mono uppercase text-slate-500">Bureau of Indian Standards</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                              {heroTab === 'FAQs' && (
                  <div className="space-y-3">
                    {/* <h3 className="text-xs font-mono tracking-widest uppercase text-slate-500 flex items-center gap-2"><HelpCircle className="w-4 h-4 text-[#1575B3]" /> FAQs</h3> */}
                    <div className="space-y-2">
                      {(displayFaqs && displayFaqs.length > 0
                        ? displayFaqs
                        : [
                            { question: 'What is the service lifespan?', answer: '...' },
                            { question: 'Are these BIS / ISO certified?', answer: '...' },
                            { question: 'Which SN class for heavy traffic?', answer: '...' },
                          ]
                      ).map((faq, idx) => {
                        const open = expandedFaq === idx;
                        return (
                          <div key={idx} className="border border-slate-200">
                            <button onClick={() => setExpandedFaq(open ? null : idx)} className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 bg-[#F5F6F8] hover:bg-white transition-colors">
                              <span className="text-sm font-medium text-slate-900">{faq.question}</span>
                              {open ? <ChevronUp className="w-4 h-4 text-[#1575B3] shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                            </button>
                            {open && <div className="px-4 py-3 text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-200">{faq.answer}</div>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


 {/* ENQUIRY / BOQ FORM — short, left-aligned, inline fields */}
      <section id="product-enquiry" className="w-full bg-[#1575B3] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="space-y-2 text-left">
            <h2 className="text-xl sm:text-4xl font-serif font-light tracking-tight uppercase text-white text-left">Request a Quote</h2>
            <p className="text-xs sm:text-lg text-white/80 leading-relaxed text-left">Tell us what you need — our engineering team will respond within 4 hours.</p>
          </div>

          {enquirySent ? (
            <div className="mt-4 bg-white text-slate-900 px-6 py-4 flex items-center gap-3 border border-white max-w-4xl">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <p className="text-sm text-slate-700">Thank you, <span className="font-semibold">{enquiry.name}</span> — our team will contact you on {enquiry.phone} shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleEnquiry} className="mt-4">
              <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-end">
                <div className="flex-1 w-full lg:w-auto">
                  <input value={enquiry.name} onChange={(e) => setEnquiry({ ...enquiry, name: e.target.value })} placeholder="Name *" className="w-full bg-white border border-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50" />
                </div>
                <div className="flex-1 w-full lg:w-auto">
                  <input type="email" value={enquiry.email} onChange={(e) => setEnquiry({ ...enquiry, email: e.target.value })} placeholder="Email *" className="w-full bg-white border border-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50" />
                </div>
                <div className="flex-1 w-full lg:w-auto">
                  <input value={enquiry.phone} onChange={(e) => setEnquiry({ ...enquiry, phone: e.target.value })} placeholder="Phone *" className="w-full bg-white border border-white px-3.5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50" />
                </div>
                <button type="submit" className="w-full lg:w-auto shrink-0 bg-slate-900 hover:bg-black text-white text-sm font-mono tracking-widest uppercase px-8 py-3.5 inline-flex items-center justify-center gap-2 transition-colors">
                  <Send className="w-4 h-4" /> Submit
                </button>
              </div>
              {formError && <p className="mt-3 text-xs text-white bg-red-600/90 border border-white/30 px-3 py-2 inline-block">{formError}</p>}
            </form>
          )}
        </div>
      </section>


            {/* ── PRODUCT DESCRIPTION (from WP) — replaces static tables ── */}
           {displayDescriptionHtml ? (
         <section className="w-full bg-[#ffffff] py-6 sm:py-10 lg:py-14 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
            
            <div className="text-slate-800 leading-relaxed [&_table]:block [&_table]:overflow-x-auto sm:[&_table]:table sm:[&_table]:overflow-visible sm:[&_table]:max-w-full [&_table]:overscroll-x-contain [&_table]:max-w-full [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:border [&_table]:border-slate-300 [&_table]:whitespace-nowrap sm:[&_table]:whitespace-normal [&_table]:touch-pan-x [&_table]:[scrollbar-width:thin] sm:[&_table]:[scrollbar-width:auto] [&_table]:[scrollbar-color:#94a3b8_#f1f5f9] [&_table::-webkit-scrollbar]:block sm:[&_table::-webkit-scrollbar]:hidden [&_table::-webkit-scrollbar]:h-[8px] [&_table::-webkit-scrollbar-track]:bg-slate-100 [&_table::-webkit-scrollbar-thumb]:bg-slate-300 [&_table::-webkit-scrollbar-thumb]:rounded-full hover:[&_table::-webkit-scrollbar-thumb]:bg-slate-400 [&_thead]:bg-[#1575B3] [&_th]:text-white [&_th]:text-xs [&_th]:py-3 [&_th]:px-4 [&_th]:text-center [&_th]:border [&_th]:border-[#f2f2f2] [&_td]:text-xs [&_td]:py-3 [&_td]:px-4 [&_td]:border [&_td]:border-slate-200 [&_td]:text-slate-800 [&_h2]:text-xl sm:[&_h2]:text-4xl [&_h2]:font-light [&_h2]:uppercase [&_h2]:mt-6 [&_h2]:mb-3 [&_h4]:text-base [&_h4]:font-semibold [&_h4]:mt-4 [&_h4]:mb-2 [&_p]:text-sm [&_p>strong]:text-xl sm:[&_p>strong]:text-4xl [&_p>strong]:font-light [&_p>strong]:uppercase [&_p]:leading-relaxed [&_p]:mb-3 [&_.product-grid]:grid [&_.product-grid]:grid-cols-2 [&_.product-grid]:sm:grid-cols-4 [&_.product-grid]:gap-3 [&_.product-item]:border [&_.product-item]:border-slate-200 [&_.product-item]:bg-white [&_.product-item]:p-3 [&_.product-item]:text-center [&_.product-item]:flex [&_.product-item]:flex-col [&_.product-item]:items-center [&_.product-item]:justify-center [&_.product-item]:cursor-pointer [&_.product-item]:transition-all [&_.product-item]:duration-300 [&_.product-item]:hover:border-[#1575B3] [&_.product-item]:hover:shadow-md [&_.product-item_p]:text-center [&_.product-item_p]:w-full [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-sm [&_li]:text-slate-700">
              <div dangerouslySetInnerHTML={{ __html: displayDescriptionHtml }} />
            </div>
          </div>
        </section>
      ) : (
        <>
         
         
        </>
      )}

      {/* SPECIFICATIONS — heading + table only */}
      {/* {product.pipeStandardsTable && product.pipeStandardsTable.length > 0 && (
        <section className="w-full bg-[#F5F6F8] py-10 lg:py-14 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
            <div className="pb-4 border-b border-slate-300">
              <h2 className="text-2xl sm:text-3xl font-serif font-light tracking-tight uppercase text-slate-900">Specifications</h2>
            </div>
            <div className="bg-white border border-slate-200 overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-[#1575B3] text-white font-mono text-[11px] tracking-widest uppercase">
                    <th colSpan={3} className="py-3 px-4 text-center border-r border-[#0E588A]">Pipes Specifications</th>
                    <th colSpan={3} className="py-3 px-4 text-center">Fittings Specifications</th>
                  </tr>
                  <tr className="bg-[#F5F6F8] text-[#1575B3] font-mono text-[11px] tracking-widest uppercase border-y border-slate-200">
                    <th className="py-2.5 px-4 border-r border-slate-200">Size (mm)</th>
                    <th className="py-2.5 px-4 border-r border-slate-200">Standard</th>
                    <th className="py-2.5 px-4 border-r border-slate-200">End Connection</th>
                    <th className="py-2.5 px-4 border-r border-slate-200">Size (mm)</th>
                    <th className="py-2.5 px-4 border-r border-slate-200">Standard</th>
                    <th className="py-2.5 px-4">End Connection</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {product.pipeStandardsTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F5F6F8] text-slate-800">
                      <td className="py-3 px-4 border-r border-slate-200 font-semibold text-[#1575B3]">{row.sizeRange}</td>
                      <td className="py-3 px-4 border-r border-slate-200">{row.standard}</td>
                      <td className="py-3 px-4 border-r border-slate-200">{row.endConnection}</td>
                      {idx === 0 && (
                        <>
                          <td rowSpan={product.pipeStandardsTable!.length} className="py-3 px-4 border-r border-slate-200 font-semibold text-[#1575B3] align-middle text-center">110 & 160</td>
                          <td rowSpan={product.pipeStandardsTable!.length} className="py-3 px-4 border-r border-slate-200 align-middle text-center">EN-1404-1</td>
                          <td rowSpan={product.pipeStandardsTable!.length} className="py-3 px-4 align-middle">Elastomeric Sealing Ring Joint & Solvent Joint</td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )} */}

      {/* DIMENSIONS — heading + table only */}
      {/* {product.dimensionsTable && product.dimensionsTable.length > 0 && (
        <section className="w-full bg-white py-10 lg:py-14 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-300">
              <h2 className="text-2xl sm:text-3xl font-serif font-light tracking-tight uppercase text-slate-900">Dimensions</h2>
              <div className="relative w-full sm:w-64 shrink-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by size e.g. 110"
                  value={dimensionSearch}
                  onChange={(e) => setDimensionSearch(e.target.value)}
                  className="w-full bg-[#F5F6F8] border border-slate-200 pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-[#1575B3] placeholder:text-slate-400"
                />
              </div>
            </div>
            <div className="overflow-x-auto border border-slate-200">
              <table className="w-full text-xs text-center border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-[#F5F6F8] text-[#1575B3] font-mono text-[11px] tracking-widest uppercase border-b border-slate-200">
                    <th rowSpan={2} className="py-3 px-4 border-r border-slate-200 text-left">Nominal Size (OD)</th>
                    <th colSpan={2} className="py-2 px-4 border-r border-slate-200">Mean Outside Dia</th>
                    <th colSpan={2} className="py-2 px-4 border-r border-slate-200 bg-sky-50 text-sky-900">SN 2 (SDR 51)</th>
                    <th colSpan={2} className="py-2 px-4 border-r border-slate-200 bg-blue-50 text-blue-900">SN 4 (SDR 41)</th>
                    <th colSpan={2} className="py-2 px-4 bg-[#1575B3]/10 text-[#1575B3]">SN 8 (SDR 34)</th>
                  </tr>
                  <tr className="bg-[#1575B3] text-white font-mono text-[10px] tracking-widest uppercase border-b border-[#0E588A]">
                    <th className="py-2 px-3 border-r border-[#0E588A]">Min (mm)</th>
                    <th className="py-2 px-3 border-r border-[#0E588A]">Max (mm)</th>
                    <th className="py-2 px-3 border-r border-[#0E588A]">Min (mm)</th>
                    <th className="py-2 px-3 border-r border-[#0E588A]">Max (mm)</th>
                    <th className="py-2 px-3 border-r border-[#0E588A]">Min (mm)</th>
                    <th className="py-2 px-3 border-r border-[#0E588A]">Max (mm)</th>
                    <th className="py-2 px-3 border-r border-[#0E588A]">Min (mm)</th>
                    <th className="py-2 px-3">Max (mm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredDimensions.length === 0 ? (
                    <tr><td colSpan={9} className="py-8 text-slate-500">No dimensions match “{dimensionSearch}”.</td></tr>
                  ) : filteredDimensions.map((row) => (
                    <tr key={row.size} className="hover:bg-[#F5F6F8] text-slate-800">
                      <td className="py-3 px-4 border-r border-slate-200 text-left font-semibold text-[#1575B3]">{row.size} mm</td>
                      <td className="py-3 px-3 border-r border-slate-200">{row.minOuterDia.toFixed(2)}</td>
                      <td className="py-3 px-3 border-r border-slate-200">{row.maxOuterDia.toFixed(2)}</td>
                      <td className="py-3 px-3 border-r border-slate-200 bg-sky-50/40">{row.sn2Min}</td>
                      <td className="py-3 px-3 border-r border-slate-200 bg-sky-50/40">{row.sn2Max}</td>
                      <td className="py-3 px-3 border-r border-slate-200 bg-blue-50/40">{row.sn4Min}</td>
                      <td className="py-3 px-3 border-r border-slate-200 bg-blue-50/40">{row.sn4Max}</td>
                      <td className="py-3 px-3 border-r border-slate-200 bg-[#1575B3]/5 font-semibold">{row.sn8Min}</td>
                      <td className="py-3 px-3 bg-[#1575B3]/5 font-semibold">{row.sn8Max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )} */}

      {/* FITTINGS CATALOG — heading + grid (image + title) */}
      {/* <section className="w-full bg-[#F5F6F8] py-10 lg:py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="pb-4 border-b border-slate-300">
            <h2 className="text-2xl sm:text-3xl font-serif font-light tracking-tight uppercase text-slate-900">Fittings Catalog</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-slate-200 border border-slate-200">
            {fittingsToShow.map((fit) => (
              <button
                key={fit.name}
                onClick={() => setFittingModal(fit)}
                className="bg-white p-4 text-center hover:bg-slate-50 transition-colors group flex flex-col items-center gap-3"
              >
                <div className="aspect-square w-full bg-[#F5F6F8] border border-slate-200 p-3 flex items-center justify-center overflow-hidden">
                  <img src={fit.image} alt={fit.name} referrerPolicy="no-referrer" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="text-xs font-medium text-slate-900 leading-tight line-clamp-2">{fit.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section> */}

     

           {/* RELATED PRODUCTS — hide if none */}
      {relatedToShow.length > 0 && (
        <section className="w-full bg-[#F5F6F8] py-16 border-b border-slate-300/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300">
            <div>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight uppercase font-serif text-slate-900">
                Related Products
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
              Complementary systems for seamless integration and lasting performance.
            </p>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedToShow.map((rel: any) => {
                const isWpRel = !!rel.slug && !!rel.categorySlug;
                const href = isWpRel ? `/${rel.categorySlug}/${rel.slug}` : getProductHref(rel);
                const Wrapper: any = isWpRel ? Link : 'button';
                const wrapperProps = isWpRel ? { href } : { onClick: () => router.push(href) };
                return (
                  <Wrapper
                    key={rel.id}
                    {...wrapperProps}
                    className="group relative bg-white border border-slate-200/90 flex flex-col h-full shadow-sm hover:shadow-xl hover:border-[#1575B3] transition-all duration-500 overflow-hidden text-left"
                  >
                    <div className={`relative aspect-[16/10] overflow-hidden border-b border-slate-200 ${isWpRel ? '' : 'bg-slate-900'}`}>
                      <img src={rel.image} alt={rel.name} referrerPolicy="no-referrer" className={`w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out ${isWpRel ? 'object-contain' : 'object-cover'}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                      {rel.category && (
                        <span className="absolute top-3 left-3 bg-[#1575B3] text-white text-[10px] font-mono tracking-widest uppercase px-2.5 py-1">
                          {rel.category}
                        </span>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                      <div className="space-y-3">
                        <h3 className="text-lg font-serif font-normal text-slate-900 leading-snug tracking-tight group-hover:text-[#1575B3] transition-colors duration-300 line-clamp-2">
                          {rel.name}
                        </h3>
                        <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                          {rel.shortDescription}
                        </p>
                      </div>
                      <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold tracking-wider text-slate-800 uppercase group-hover:text-[#1575B3] transition-colors">
                        <span>View Product</span>
                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Brochure modal */}
           {brochureOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setBrochureOpen(false)} />
          <div className="relative bg-white border border-slate-200 max-w-md w-full shadow-2xl">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="w-10 h-10 bg-[#F5F6F8] border border-slate-200 flex items-center justify-center"><Download className="w-5 h-5 text-[#1575B3]" /></div>
              <div>
                <h3 className="text-lg font-serif text-slate-900">Technical Catalog</h3>
                <p className="text-xs text-slate-600 mt-1">Official Kothari PDF specification sheet for {displayName}.</p>
              </div>
              <div className="bg-[#F5F6F8] border border-slate-200 p-3 space-y-1">
                <span className="block text-xs font-mono font-semibold text-[#1575B3]">{displayPdfName}</span>
                <span className="block text-[11px] text-slate-500">
                  PDF · {displayPdfSize ? `${(displayPdfSize / 1048576).toFixed(1)} MB` : '—'}
                </span>
              </div>
              <div className="flex gap-3 pt-2">
                {displayPdfUrl ? (
                  <a
                    href={displayPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#1575B3] hover:bg-[#0E588A] text-white text-xs font-mono tracking-widest uppercase py-3 inline-flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                ) : (
                  <button onClick={() => setBrochureOpen(false)} className="flex-1 bg-[#1575B3] hover:bg-[#0E588A] text-white text-xs font-mono tracking-widest uppercase py-3 inline-flex items-center justify-center gap-1.5">
                    <Download className="w-4 h-4" /> Download PDF
                  </button>
                )}
                <button onClick={() => setBrochureOpen(false)} className="px-6 bg-[#F5F6F8] border border-slate-200 text-xs font-mono tracking-widest uppercase hover:bg-slate-100">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fitting modal — image + title only */}
      {fittingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setFittingModal(null)} />
          <div className="relative bg-white border border-slate-200 max-w-sm w-full shadow-2xl">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-widest uppercase text-slate-500">Fitting</span>
                <button onClick={() => setFittingModal(null)} className="text-slate-500 hover:text-slate-900 text-sm">✕</button>
              </div>
              <div className="aspect-square bg-[#F5F6F8] border border-slate-200 p-6 flex items-center justify-center">
                <img src={fittingModal.image} alt={fittingModal.name} referrerPolicy="no-referrer" className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 text-center">{fittingModal.name}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
