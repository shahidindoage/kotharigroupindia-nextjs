import type { MetadataRoute } from 'next';
import { abs } from '@/lib/schema';
import { awardsData } from '@/lib/awards';
import { solutionsData } from '@/data/solutions';
import { applicationDetails } from '@/data/applications';
import { segmentPageContentList } from '@/data/segment-pages';
import { productsData } from '@/data/products';
import { getProductHref } from '@/lib/slug';
import { fetchWpProductCards } from '@/lib/wp-products';
import { fetchWpBlogPosts, fetchWpNewsPosts, WP_CATEGORIES } from '@/lib/wp-posts';

type Entry = MetadataRoute.Sitemap[number];

const staticRoutes: Array<{
  path: string;
  priority: number;
  changeFrequency: Entry['changeFrequency'];
}> = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about-us', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/capabilities-infrastructure', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/sustainability', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/our-management', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/products', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/irrigation-products', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/pipe-products', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/irrigation-division', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pipe-division', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/applications', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/irrigation-applications', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pipe-applications', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/successstories', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/irrigation-successstories', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/pipe-successstories', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/blogs', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/press-release', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/knowledge-section', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/KothariTV', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/awards', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/career', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/become-dealer', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact-us', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/Download', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/GST', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/quality-policy', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-and-conditions', priority: 0.3, changeFrequency: 'yearly' },
];

// Collect every page of a paginated WP post category (fail-soft → []).
async function fetchAllPosts(categoryId: number): Promise<{ slug: string; date: string }[]> {
  try {
    const first = await fetchWpBlogPosts(1, 100, categoryId);
    let posts = first.posts;
    if (first.totalPages > 1) {
      const rest = await Promise.all(
        Array.from({ length: first.totalPages - 1 }, (_, i) => fetchWpBlogPosts(i + 2, 100, categoryId))
      );
      posts = posts.concat(...rest.map((r) => r.posts));
    }
    return posts.map((p) => ({ slug: p.slug, date: p.date }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: Entry[] = staticRoutes.map((r) => ({
    url: abs(r.path),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Local data-driven detail pages (always available, no network).
  for (const award of awardsData.awards) {
    entries.push({ url: abs(`/awards/${award.slug}`), lastModified: now, changeFrequency: 'yearly', priority: 0.5 });
  }
  for (const solution of solutionsData) {
    entries.push({ url: abs(`/solutions/${solution.slug}`), lastModified: now, changeFrequency: 'monthly', priority: 0.8 });
    for (const child of solution.childSolutions?.items ?? []) {
      entries.push({ url: abs(`/solutions/${solution.slug}/${child.slug}`), lastModified: now, changeFrequency: 'monthly', priority: 0.7 });
    }
  }
  for (const app of applicationDetails) {
    entries.push({ url: abs(`${app.parentHref}/${app.slug}`), lastModified: now, changeFrequency: 'monthly', priority: 0.7 });
  }
  for (const segment of segmentPageContentList) {
    entries.push({ url: abs(`/products/${segment.slug}`), lastModified: now, changeFrequency: 'weekly', priority: 0.8 });
  }

  // WordPress catalogue: products, blog posts, press releases, success stories.
  // Every fetch is fail-soft, so a WP outage only trims the sitemap.
  const [products, blogs, news, stories] = await Promise.all([
    fetchWpProductCards().catch(() => []),
    fetchAllPosts(WP_CATEGORIES.blogs),
    fetchWpNewsPosts(100).catch(() => []),
    fetchAllPosts(WP_CATEGORIES.successStory),
  ]);

  const seen = new Set(entries.map((e) => e.url));

  if (products.length) {
    for (const p of products) {
      if (!p.slug) continue;
      const path = p.divisionSlug ? `/${p.divisionSlug}/${p.slug}` : p.categorySlug ? `/${p.categorySlug}/${p.slug}` : '';
      if (!path) continue;
      const url = abs(path);
      if (seen.has(url)) continue;
      seen.add(url);
      entries.push({ url, lastModified: p.dateModified ? new Date(p.dateModified) : now, changeFrequency: 'weekly', priority: 0.7 });
    }
    const segments = new Set(products.map((p) => p.segmentSlug).filter(Boolean));
    for (const slug of segments) {
      const url = abs(`/products/${slug}`);
      if (seen.has(url)) continue;
      seen.add(url);
      entries.push({ url, lastModified: now, changeFrequency: 'weekly', priority: 0.8 });
    }
  } else {
    for (const p of productsData) {
      const url = abs(getProductHref(p));
      if (seen.has(url)) continue;
      seen.add(url);
      entries.push({ url, lastModified: now, changeFrequency: 'weekly', priority: 0.7 });
    }
  }

  for (const post of blogs) {
    if (!post.slug) continue;
    entries.push({ url: abs(`/blogs/${post.slug}`), lastModified: new Date(post.date), changeFrequency: 'monthly', priority: 0.6 });
  }
  for (const post of news) {
    if (!post.slug) continue;
    entries.push({ url: abs(`/press-release/${post.slug}`), lastModified: new Date(post.date), changeFrequency: 'monthly', priority: 0.6 });
  }
  for (const post of stories) {
    if (!post.slug) continue;
    entries.push({ url: abs(`/successstories/${post.slug}`), lastModified: new Date(post.date), changeFrequency: 'monthly', priority: 0.6 });
  }

  return entries;
}
