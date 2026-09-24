import { wpPageMetadataFor } from '@/lib/wp-seo';

export const generateMetadata = wpPageMetadataFor('irrigation-division', {
  title: 'Irrigation Division | Drip, Sprinkler & Micro Irrigation | Kothari Group',
  description:
    'Explore Kothari Group’s Irrigation Division — drip and micro irrigation systems, sprinklers, filters, fertigation and automation for water-efficient farming.',
});

export default function IrrigationDivisionLayout({ children }: { children: React.ReactNode }) {
  return children;
}