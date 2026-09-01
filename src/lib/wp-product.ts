// src/lib/wp-product.ts

const WP_API = process.env.NEXT_PUBLIC_WP_API_URL; // https://admin.kotharigroupindia.com/wp-json
const WOO_ADMIN = `${WP_API}/wc/v3/products`;
const WP_MEDIA = `${WP_API}/wp/v2/media`;

// Auth for Admin API (server-side only)
function getAuthHeaders(): HeadersInit {
  const key = process.env.WOO_CONSUMER_KEY;
  const secret = process.env.WOO_CONSUMER_SECRET;
  if (!key || !secret) return {};
  return {
    Authorization: 'Basic ' + Buffer.from(`${key}:${secret}`).toString('base64'),
  };
}

// Helper: find value in meta_data array by key
function getMeta(meta: { key: string; value: unknown }[], key: string): unknown {
  return meta?.find((m) => m.key === key)?.value;
}

// Helper: get string from meta
function getMetaString(meta: { key: string; value: unknown }[], key: string): string {
  const v = getMeta(meta, key);
  if (typeof v === 'string') return v;
  return '';
}

// Helper: get array from meta
function getMetaArray(meta: { key: string; value: unknown }[], key: string): string[] {
  const v = getMeta(meta, key);
  if (Array.isArray(v)) return v.filter((x) => typeof x === 'string' && x !== '');
  return [];
}

// Parsed WP Product — exactly what ProductDetailPage needs
export interface WpProductData {
  // Basic
  id: number;
  name: string;
  slug: string;
  category: string;

  // Images
  mainImage: string;
  certificateImages: { src: string; alt: string; thumbnail: string }[];

  // Tab content (HTML)
  featuresHtml: string;
  specificationsHtml: string;
  applicationsHtml: string;

  // FAQ (parsed from HTML)
  faqs: { question: string; answer: string }[];

  // PDF
  pdfUrl: string;
  pdfName: string;
  pdfSize: number;

  // Description (replaces static tables section)
  descriptionHtml: string;

  // Related products
  relatedProducts: {
    id: number;
    name: string;
    slug: string;
    image: string;
    shortDescription: string;
    category: string;
    categorySlug: string;
  }[];
}

// Parse FAQ HTML into structured array
// Input: <h4><b>1. Question?</b></h4><span>Answer...</span>...
function parseFaqHtml(html: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  // Split by <h4> tags
  const parts = html.split(/<h4>/i).filter(Boolean);
  for (const part of parts) {
    // Extract question: everything inside <b>...</b>
    const qMatch = part.match(/<b>(.*?)<\/b>/i);
    // Extract answer: everything after </h4> until next <h4> or end
    const aMatch = part.match(/<\/h4>\s*([\s\S]*?)(?=<h4>|$)/i);
    if (qMatch) {
      faqs.push({
        question: qMatch[1].replace(/^\d+\.\s*/, '').trim(),
        answer: aMatch
          ? aMatch[1]
              .replace(/<[^>]*>/g, '')
              .replace(/&amp;/g, '&')
              .replace(/&nbsp;/g, ' ')
              .trim()
          : '',
      });
    }
  }
  return faqs;
}

// Main fetch function
export async function fetchWpProductBySlug(
  slug: string
): Promise<WpProductData | null> {
  try {
    // Step 1: Fetch product by slug from Admin API
    const res = await fetch(`${WOO_ADMIN}?slug=${slug}&per_page=1`, {
      headers: { ...getAuthHeaders() },
      next: { revalidate: 600 }, // cache 10 min
    });

    if (!res.ok) return null;

    const products = await res.json();
    if (!products.length) return null;

    const raw = products[0];
    const meta = raw.meta_data || [];

    // Step 2: Extract tab content from meta_data
    const featuresHtml = getMetaString(meta, '_woodmart_product_custom_tab_content');
    const applicationsHtml = getMetaString(meta, '_woodmart_product_custom_tab_content_2');
    const specificationsHtml = raw.short_description || '';
    const faqRawHtml = getMetaString(meta, 'faq_content');
    const faqs = faqRawHtml ? parseFaqHtml(faqRawHtml) : [];

    // Step 3: Images — first image = main, rest = certificates
    const images = raw.images || [];
    const mainImage = images[0]?.src || '';
    const certificateImages = images
      .slice(1)
      .map((img: { src: string; alt: string; thumbnail: string }) => ({
        src: img.src,
        alt: img.alt || raw.name,
        thumbnail: img.thumbnail || img.src,
      }));

    // Step 4: Category name
    const category = raw.categories?.[0]?.name || '';

    // Step 5: PDF — get media ID from meta, then fetch actual URL
    const pdfMediaIds = getMetaArray(meta, 'wcpoa_attachment_url');
    const pdfNames = getMetaArray(meta, 'wcpoa_attachment_name');

    let pdfUrl = '';
    let pdfName = 'Technical-Catalogue.pdf';
    let pdfSize = 0;

    if (pdfMediaIds.length > 0 && pdfMediaIds[0]) {
      try {
        const mediaRes = await fetch(`${WP_MEDIA}/${pdfMediaIds[0]}`, {
          headers: { ...getAuthHeaders() },
          next: { revalidate: 3600 },
        });
        if (mediaRes.ok) {
          const media = await mediaRes.json();
          pdfUrl = media.source_url || '';
          pdfName = media.filename || pdfNames[0] || 'Technical-Catalogue.pdf';
          pdfSize = media.filesize || 0;
        }
      } catch {
        // PDF fetch failed, continue without it
      }
    }

    // Step 6: Description HTML (replaces static tables)
    const descriptionHtml = raw.description || '';

     // Step 7: Related products
    const relatedIds: number[] = raw.related_ids || [];
    const relatedProducts = await fetchRelatedProducts(relatedIds);

    return {
      id: raw.id,
      name: raw.name,
      slug: raw.slug,
      category,
      mainImage,
      certificateImages,
      featuresHtml,
      specificationsHtml,
      applicationsHtml,
      faqs,
      pdfUrl,
      pdfName,
      pdfSize,
      descriptionHtml,
      relatedProducts,   
    };
  } catch (error) {
    console.error('[wp-product] Fetch failed for slug:', slug, error);
    return null;
  }
}

// Fetch related products by IDs
async function fetchRelatedProducts(
  ids: number[]
): Promise<WpProductData['relatedProducts']> {
  if (!ids.length) return [];

  try {
    const idsParam = ids.join(',');
    const res = await fetch(`${WOO_ADMIN}?include=${idsParam}&per_page=10`, {
      headers: { ...getAuthHeaders() },
      next: { revalidate: 600 },
    });

    if (!res.ok) return [];

    const products = await res.json();

    return products.map((p: {
      id: number;
      name: string;
      slug: string;
      images: { src: string }[];
      short_description: string;
      categories: { name: string; slug: string }[];
    }) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      image: p.images?.[0]?.src || '',
      shortDescription: p.short_description
        ?.replace(/<[^>]*>/g, '')
        .slice(0, 120) || '',
      category: p.categories?.[0]?.name || '',
      categorySlug: p.categories?.[0]?.slug || '',
    }));
  } catch (error) {
    console.error('[wp-product] Related products fetch failed:', error);
    return [];
  }
}