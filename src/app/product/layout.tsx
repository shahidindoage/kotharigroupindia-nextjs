import type { Metadata } from 'next';
import { abs } from '@/lib/schema';

export const metadata: Metadata = {
  alternates: { canonical: abs('/product') },
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}
