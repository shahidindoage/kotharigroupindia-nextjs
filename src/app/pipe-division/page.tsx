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
      email: 'enquiry@kotharigroupindia.com',
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
  description: 'Comprehensive range of piping, irrigation, and agricultural solutions engineered for performance.',
  segments: [
    {
      name: 'Plumbing Pipes & Fittings',
      desc: 'Complete hot & cold water piping systems for residential and commercial applications.',
      categories: [
        {
          name: 'CPVC',
          products: [
            { title: 'CPVC Pipes & Fittings – Hot & Cold Water Piping System', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/CPVC-PIPES-FITTINGS.webp' },
            { title: 'CPVC Solvent Cement', url: '/products/plumbing/cpvc/solvent-cement', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/cpvc.webp' },
          
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
      desc: 'Durable pipes for irrigation, water transport, and borewell applications in agriculture.',
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
      desc: 'Precision drip, sprinkler, and micro-irrigation systems for maximum water efficiency.',
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
      desc: 'Precision drip, sprinkler, and micro-irrigation systems for maximum water efficiency.',
      categories: [
        {
          name: 'UPVC Pressure Pipes & Fittings',
          products: [
            { title: 'Self Fit PVC Pipe', url: '/products/irrigation/drip/laterals', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Selffit-pipe.webp' },
            { title: 'Ring Fit PVC Pipe', url: '/products/irrigation/drip/drippers', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Ringfit-pipe.webp' },
              ],
        },
        {
          name: 'PE Pipes & Fittings',
          products: [
            { title: 'HDPE Piping', url: '/products/irrigation/drip/laterals', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-PIPE-111.webp' },
            { title: 'HDPE Coils', url: '/products/irrigation/drip/drippers', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Coils.webp' },
              ],
        },
        {
          name: 'Valves',
          products: [
            { title: 'Single & Double Union PVC Ball Valve', url: '/products/irrigation/drip/laterals', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Single-Double-Union-PVC.webp' },
            { title: 'Double Union PP Ball Valve', url: '/products/irrigation/drip/drippers', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Union-Ball-Valve.webp' },
              ],
        },
       
      ],
    },
    
  ],
};

  return (
    <>
      <HeaderDivison productsMegaMenu={productsMegaMenu}/>
      <HeroDivision heroData={heroData} />
      <Category tab="pipes"/>
      <WhyKothariGroup />
      <Impact />
      <KnowledgeCentre />
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