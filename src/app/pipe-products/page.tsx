import DivisionProductsPage from '@/components/products/DivisionProductsPage';

export const metadata = {
  title: 'Pipe Products | Pipes, Fittings & Plumbing | Kothari Group',
  description:
    'Browse the complete Kothari Group pipe division catalogue — plumbing pipes and fittings, agricultural pipes, sewerage and drainage systems, borewell solutions and more.',
};

export default function PipeProductsPage() {
  return (
    <DivisionProductsPage
      divisionSlug="pipe-division"
      eyebrow="Pipe Division"
      title="Pipe Products"
      description="Explore our complete pipe division catalogue — engineered for performance and reliability."
    />
  );
}