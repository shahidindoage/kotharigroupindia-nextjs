import { wpPageMetadataFor } from '@/lib/wp-seo';

export const generateMetadata = wpPageMetadataFor('pipe-division', {
  title: 'Pipe Division | PVC, UPVC & CPVC Pipes & Fittings | Kothari Group',
  description:
    'Explore Kothari Group’s Pipe Division — PVC, UPVC, CPVC pipes and fittings for plumbing, drainage, borewell, agriculture and cable protection applications.',
});

export default function PipeDivisionLayout({ children }: { children: React.ReactNode }) {
  return children;
}