// Manufacturing units content sourced from units.txt
export interface ManufacturingUnit {
  img: string;
  name: string;
}

export interface ManufacturingUnitsData {
  heading: string;
  description: string;
  units: ManufacturingUnit[];
}

export const manufacturingUnitsData: ManufacturingUnitsData = {
  heading: 'Our Manufacturing Units',
  description:
    "The foundation of strong products lies in effective manufacturing processes. Kothari Group has 8 manufacturing units where various kinds of pipes such as PVC, UPVC, HDPE and CPVC along with irrigation systems are manufactured. Thanks to our manufacturing capabilities, we are able to cater to the requirements of agriculture, residential, commercial and infrastructure projects. We use our manufacturing experience, strive to produce the best products available in India and deliver quality services at an affordable cost.",
  units: [
    { 
        img: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/1997.jpg', 
        name: 'PVC Pipes & Fittings (Mohol, Solapur-MH)' 
    },
    { img: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/1999.png', 
      name: 'Hose Pipes (Mohol, Solapur-MH)' 
    },
    { img: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/2003.png', 
      name: 'HDPE Pipes & Fittings (Mohol, Solapur-MH)' 
    },
    { img: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/2004.png',
      name: 'Irrigation Systems (Mohol, Solapur-MH)' 
    },
    {
      img: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/2015.png',
      name: 'Submersible Cables & Wires (Chincholi, Solapur-MH)',
    },
    {
      img: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/2019.png',
      name: 'PVC Pipes & Irrigation Systems (Kukarwada, Mehsana-GJ)',
    },
    {
      img: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/2023.png',
      name: 'Plumbing Pipes & Fittings (Yawali, Solapur-MH)',
    },
    {
      img: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/2025.png',
      name: 'PVC, DWC & HDPE (Pithampur, Dhar-MP)',
    },
    {
      img: 'https://admin.kotharigroupindia.com/wp-content/uploads/2026/11/Under-Development.png',
      name: 'PVC, HDPE, DWC Pipes & Fittings (Gandrajupalle, Chittoor-AP)',
    },
  ],
};

// Split "PVC Pipes & Fittings 1997 (Mohol-MH)" into product / year / location.
export function parseUnitName(name: string): {
  product: string;
  year: string;
  location: string;
} {
  const yearMatch = name.match(/\b(19|20)\d{2}\b/);
  const locationMatch = name.match(/\(([^)]+)\)/);
  const year = yearMatch?.[0] ?? '';
  const location = locationMatch?.[1] ?? '';
  const product = name
    .replace(year, '')
    .replace(locationMatch?.[0] ?? '', '')
    .replace(/\s+/g, ' ')
    .trim();
  return { product, year, location };
}
