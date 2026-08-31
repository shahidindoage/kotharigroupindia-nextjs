import { ProductItem } from '@/lib/types';

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');
}

export function getCategorySlug(category: string): string {
  return slugify(category);
}

export function getProductSlug(product: ProductItem): string {
  return slugify(product.name);
}

export function getProductHref(product: ProductItem): string {
  return `/${getCategorySlug(product.category)}/${getProductSlug(product)}`;
}

export function findProductBySlugs(catSlug: string, prodSlug: string, products: ProductItem[]): ProductItem | undefined {
  return products.find(
    (p) => getCategorySlug(p.category) === catSlug && getProductSlug(p) === prodSlug
  );
}
