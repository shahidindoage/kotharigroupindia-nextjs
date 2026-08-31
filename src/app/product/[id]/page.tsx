import { redirect, notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { getProductHref } from '@/lib/slug';

type Params = { id: string };

export default async function ProductIdPage({ params }: { params: Params | Promise<Params> }) {
  const { id } = await Promise.resolve(params);
  const product = productsData.find((p) => p.id === id);
  if (!product) notFound();
  redirect(getProductHref(product!));
}
