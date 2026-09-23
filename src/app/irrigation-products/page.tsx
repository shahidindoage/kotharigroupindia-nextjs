import DivisionProductsPage from '@/components/products/DivisionProductsPage';

export const metadata = {
  title: 'Irrigation Products | Micro Irrigation Systems | Kothari Group',
  description:
    'Browse the complete Kothari Group irrigation division catalogue — drip irrigation systems, sprinklers, filters, injectors, automation and turnkey projects.',
};

export default function IrrigationProductsPage() {
  return (
    <DivisionProductsPage
      divisionSlug="irrigation-division"
      eyebrow="Irrigation Division"
      title="Irrigation Products"
      description="Explore our complete irrigation division catalogue — engineered for performance and reliability."
    />
  );
}