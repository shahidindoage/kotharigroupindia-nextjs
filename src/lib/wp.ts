const WP_URL = process.env.NEXT_PUBLIC_WP_URL || 'https://admin.kotharigroupindia.com';
const WP_API = process.env.NEXT_PUBLIC_WP_API_URL || 'https://admin.kotharigroupindia.com/wp-json';

export interface WpFaqItem { question: string; answer: string; }

export async function fetchWpProductFaqs(prodSlug: string, productName?: string): Promise<WpFaqItem[]> {
  // Try direct slug fetch via wp/v2/product
  const tryUrls = [
    `${WP_API}/wp/v2/product?slug=${encodeURIComponent(prodSlug)}`,
    `${WP_API}/wp/v2/product?slug=${encodeURIComponent(prodSlug.replace(/-solid-wall-uds$/, ''))}`,
  ];
  // Also try search by productName
  if (productName) {
    tryUrls.push(`${WP_API}/wp/v2/product?search=${encodeURIComponent(productName)}&per_page=3`);
  }

  for (const url of tryUrls) {
    try {
      const res = await fetch(url, { next: { revalidate: 600 } , headers: { 'User-Agent': 'Mozilla/5.0' } } as any);
      if (!res.ok) continue;
      const data = await res.json();
      const product = Array.isArray(data) ? data[0] : data;
      if (!product) continue;
      const acf = product.acf;
      if (!acf || typeof acf !== 'object') continue;
      const html: string = (acf as any).faq_content || (acf as any).faqContent || '';
      if (!html) {
        // boolean true but empty html means no faqs for this product
        if ((acf as any).product_faqs === true && !html) return [];
        continue;
      }
      const faqs = parseFaqHtml(html);
      if (faqs.length) return faqs;
    } catch (e) {
      // continue
    }
  }
  return [];
}

export function parseFaqHtml(html: string): WpFaqItem[] {
  if (!html) return [];
  const items: WpFaqItem[] = [];
  // Regex: <h4 ...><b>NUM. Question</b></h4> followed by <span>answer</span> or <p><span>answer</span>
  const re = /<h4[^>]*>\s*<b[^>]*>\s*(?:\d+\.?\s*)?([^<]+?)\s*<\/b>[\s\S]*?<\/h4>\s*(?:<p[^>]*>)?\s*<span[^>]*>([\s\S]*?)<\/span>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    let q = m[1].trim().replace(/^\d+\.\s*/, '').replace(/&nbsp;/g, ' ').trim();
    let a = m[2].trim()
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim();
    if (q && a) items.push({ question: q, answer: a });
  }
  // Fallback: try splitting by h4 blocks
  if (!items.length) {
    const h4Re = /<h4[^>]*>([\s\S]*?)<\/h4>\s*([\s\S]*?)(?=<h4|$)/gi;
    while ((m = h4Re.exec(html)) !== null) {
      let q = m[1].replace(/<[^>]+>/g, '').replace(/^\d+\.\s*/, '').trim();
      let a = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      if (q && a) items.push({ question: q, answer: a });
    }
  }
  return items;
}
