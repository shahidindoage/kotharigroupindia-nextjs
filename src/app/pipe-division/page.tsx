'use client';

import AppShell from '@/components/AppShell';
import { KnowledgeCentre } from '@/components/KnowledgeCentre';
import { HeroDivision } from '@/components/HeroDivision';
import { HeaderDivison } from '@/components/HeaderDivision';
import { Category } from '@/components/Category';
import { WhyKothariGroup } from '@/components/main/WhyKothariGroup';
import { Impact } from '@/components/main/Impact';
import { Footer } from '@/components/Footer';
import { NewsDivision } from '@/components/NewsDivision';


function PipeDivisionContent() {
  const heroData = {
    videoSrc: '/kothari-banner2.mp4',
    headline: <>Engineered for<br />unmatched flow</>,
    subtext: 'Delivering high-durability plumbing solutions designed for leak-free precision, flawless water delivery, and modern waste management.',
    ctaText: 'Explore Plumbing Systems',
    cardTitle: 'Plumbing & Fittings',
    cardDescription: 'Zero-leak technology engineered for seamless water delivery and long-term security.',
  };

   const footerData = {
    logo: 'https://kotharigroupindia.com/img/Kothariblue_logo.png',
    about: 'India\'s trusted leader with over 35 years of excellence in Plumbing Pipes & Fittings, Agri Pipes & Fittings, and Micro Irrigation Systems.',
    contact: {
      address: 'Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.',
      phone: '1800 120 4343',
      email: 'pipe@kotharigroupindia.com',
    },
    productSegments: [
      'Plumbing Pipes & fittings',
      'Agri Pipes & fittings',
      'Micro Irrigation System',
      'CPVC Hot & Cold Water',
      'Submersible Column Pipes',
    ],
    quickLinks: [
      'Home',
      'About Kothari Group',
      'Resources & Knowledge Centre',
      'Career Opportunities',
      'Contact Us',
    ],
    certifications: [
      'ISO 9001 Quality System',
      'BIS IS 15778 / IS 4985',
      'IS 13488 Micro Irrigation',
      'PMKSY Govt. Subsidy Certified',
      'RoHS Lead-Free Formulation',
    ],
    socialLinks: [
      {
        name: 'YouTube',
        icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />,
        href: '#',
      },
      {
        name: 'Facebook',
        icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />,
        href: '#',
      },
      {
        name: 'Twitter',
        icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />,
        href: '#',
      },
      {
        name: 'LinkedIn',
        icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />,
        href: '#',
      },
    ],
    newsletterPlaceholder: 'Enter your email address',
    newsletterButton: 'Subscribe',
    copyright: '© 2026 Kothari Group India. All Rights Reserved. Empowering Water Management Across 23+ States.',
    privacyPolicy: 'Privacy Policy',
    termsOfUse: 'Terms of Use',
  }

const productsMegaMenu = {
  headline: 'Our Products',
  description: 'CPVC pipes, fittings and solvent cement for hot and cold water systems.',
  segments: [
    {
      name: 'Plumbing Pipes & Fittings',
      desc: 'Complete hot & cold water piping systems for residential and commercial applications.',
      categories: [
        {
          name: 'CPVC',
          products: [
            { title: 'CPVC Pipes & Fittings – Hot & Cold Water Piping System', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/CPVC-PIPES-FITTINGS.webp' },
            { title: 'CPVC Solvent Cement', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/cpvc.webp' },
          
          ],
        },
        {
          name: 'UPVC',
          products: [
            { title: 'UPVC Pipes & Fittings', url: '/products/plumbing/upvc/pipes-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UPVC-PIPES-FITTINGS.webp' },
            { title: 'UPVC Solvent System', url: '/products/plumbing/upvc/solvent-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/UPVC-solvent-cement.webp' },
           
          ],
        },
       
      ],
    },
    {
      name: 'Sewerage Drainage Pipes and Fittings',
      desc: 'Durable SWR, underground and sewerage drainage pipes and fittings for efficient waste and rainwater management',
      categories: [
        {
          name: 'Soil, Waste & Rainwater Pipes and Fittings',
          products: [
            { title: 'SWR (Soil, Waste & Rainwater) Piping System', url: '/products/agri-pipes/ldpe/pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/SWR-PIPES-FITTINGS.webp' },
            { title: 'PP Low Noise Drainage System', url: '/products/agri-pipes/ldpe/drippers', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Low-Noise-Drainage-System.webp' },
        ],
        },
        {
          name: 'Underground Pipe and Fittings',
          products: [
            { title: 'UPVC Underground Drainage Piping System (solid wall UDS)', url: '/products/agri-pipes/hdpe/pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UDS-PIPES-FITTINGS.webp' },
            { title: 'Foamcore Underground Drainage Piping System', url: '/products/agri-pipes/hdpe/sprinkler-laterals', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/UDS-Foamcore.webp' },
            { title: 'Underground Double Wall Corrugated pipes(DWC)', url: '/products/agri-pipes/hdpe/compression-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/11/Underground-Double-Wall-Corrugated-pipesDWC.webp' },
            { title: 'HDPE (Sewerage IS: 14333)', url: '/products/agri-pipes/hdpe/end-plugs', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PE-Sewerage-Pipes-scaled.webp' },
          ],
        }
      
      ],
    },
    {
      name: 'Cable Protection',
      desc: 'Durable DWC and conduit pipes for reliable cable protection systems.',
      categories: [
        {
          name: 'Cable Protection',
          products: [
            { title: 'DWC Pipe for Cable Protection', url: '/products/irrigation/drip/laterals', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/DWC-Pipe-for-Cable-Protection.webp' },
            { title: 'Electric Conduit Pipes & Fittings', url: '/products/irrigation/drip/drippers', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/vayar.png' },
              ],
        },
       
      ],
    },
     {
      name: 'Agriculture Pipes & Fittings',
      desc: 'Durable PVC, HDPE and MDPE pipes, fittings and valves for agriculture.',
      categories: [
        {
          name: 'UPVC Pressure Pipes & Fittings',
          products: [
            { title: 'Self Fit PVC Pipe', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Selffit-pipe.webp' },
            { title: 'Ring Fit PVC Pipe', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Ringfit-pipe.webp' },
            { title: 'Agri PVC Moulded Fittings', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/molded-fittings-Product-Page.webp' },
            { title: 'Fabricated Fittings & Repair Coupler (Rubber Ring)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Fabricated-Fittings-Repair-Coupler.webp' },
            { title: 'PVC Solvent Cement', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/PVC-Solvent-Cement-1.webp' },
              ],
        },
        {
          name: 'PE Pipes & Fittings',
          products: [
            { title: 'HDPE Piping', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-PIPE-111.webp' },
            { title: 'HDPE Coils', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Coils.webp' },
            { title: 'HDPE Fittings', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Pipe-Fittings-1.webp' },
            { title: 'MDPE Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/08/MDPE-PIPE.webp' },
            { title: 'Compression Fittings', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/MDPE-Pipes-Fittings.webp' },
            { title: 'PE Power Spray Hose Pipe (Spray Pipe)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/PE-Power-Spray.webp' },
            { title: 'LD Krishi Pipe (Lay Flat Tubes)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/LD-Krishi.webp' },
              ],
        },
        {
          name: 'Valves',
          products: [
            { title: 'Single & Double Union PVC Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Single-Double-Union-PVC.webp' },
            { title: 'Double Union PP Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Union-Ball-Valve.webp' },
            { title: 'Plain White Blue Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Plain-white-blue-ball-valve.webp' },
            { title: 'Air Cum Vacuum Relief Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Air-Cum-Vacuum-Relief-Valve.webp' },
            { title: 'Butterfly Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Butterfly-Valve.webp' },
            { title: 'Flush Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flush-Valve-1.webp' },
              ],
        },
       
      ],
    },
    {
      name: 'Borewell Solution',
      desc: 'Reliable column, casing, ribbed and screen pipes for borewell and submersible pump applications.',
      categories: [
        {
          name: 'Column Pipes',
          products: [
            { title: 'Column Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/coloum-pipe.webp' },
            { title: 'PE Column Pipes For Submersible Pumps', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/coming-soon.webp' },
              ],
        },
        {
          name: 'Casing Pipes',
          products: [
            { title: 'Casing Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/CASING-PIPE.webp' },
            { title: 'Ribbed Casing Pipe', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Ribbed-Casing-Pipe.png' },
            { title: 'Screen Pipe/Slotted Pipe', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Screen-Pipe-Slotted-Pipe-n.webp' },
            { title: 'Casing SDR Agriculture Pipe', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/sdr-blue-casing-pipes-scaled.webp' },
              ],
        },
       
      ],
    },
     {
      name: 'Flexible Hose Pipes',
      desc: 'Flexible suction, garden, braided and high-pressure hose pipes for diverse applications.',
      categories: [
        {
          name: 'PVC Suction Hose Pipes',
          products: [
            { title: 'Suction Hose Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/suction-hose-pipes.webp' },
              ],
        },
        {
          name: 'PVC Tubing/Garden Pipes',
          products: [
            { title: 'Kothari Special', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/KOTHARI-SPECIAL-ORANGE-COLOR-2.webp' },
            { title: 'Mossfree', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/MOSSFREE-BLACK-COLOUR-2.webp' },
            { title: 'Zebra', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/ZEBRA.webp' },
            { title: 'OMD', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/OMD-2.webp' },
            { title: '50-50', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/50-50.webp' },
            { title: 'Milky', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Milky.webp' },
            { title: 'Halwa', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/HALWA-2.webp' },
            { title: 'CTP', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/CTP-2.webp' },
            { title: 'Black Zebra', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Black-garden.webp' },
              ],
        },
        {
          name: 'PVC Braided Hose Pipe',
          products: [
            { title: 'Braided Hose Pipe', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Braided-hose.webp' },
            { title: 'Industrial Braided Hose Pipe 3 Layer', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/KOTHARI-INDUSTRIAL-BRAIDED-HOSE-PIPE-3-LAYER.webp' },
            { title: 'Construction Hose Pipe 3 Layer', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/CONSTRUCTION-2.webp' },
            { title: 'High Pressure Power Spray Hose Pipe (5 Layer)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Power-Spray.webp' },
              ],
        },
       
      ],
    },
    
  ],
};

const items = [
  {
    title: 'Plumbing Systems',
    description: 'Comprehensive engineering documentation and technical specifications for CPVC and UPVC piping infrastructure. Features material thermal ratings, chemical resistance matrices, precise solvent welding joint protocols, flow rate optimization charts, and hydraulic pressure loss calculations tailored for high-performance residential, commercial, and industrial plumbing installations.',
    image: 'https://kotharigroupindia.com/img/images/Building_pipe.webp',
    link: '#plumbing'
  },
  {
    title: 'Agri & Borewell',
    description: 'Extensive field deployment manuals and practical technical guides covering subterranean UPVC agricultural main lines, HDPE coil layout optimization, surge pressure protection strategies, and precise structural torque thresholds engineered for high-depth borewell column pipe systems.',
    image: 'https://kotharigroupindia.com/img/images/Agri_Pipes.webp',
    link: '#agri'
  },
 
];
  return (
    <>
      <HeaderDivison productsMegaMenu={productsMegaMenu}/>
      <HeroDivision heroData={heroData} />
      <Category tab="pipes"/>
      <WhyKothariGroup />
      <Impact />
      <KnowledgeCentre itemData={items} />
      <NewsDivision />
      <Footer footerData={footerData}/>
    </>
  );
}

export default function PipeDivisionPage() {
  return (
    <AppShell>
      <PipeDivisionContent />
    </AppShell>
  );
}