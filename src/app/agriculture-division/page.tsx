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
import { Home3Footer } from '@/components/Home3Footer';


function AgricultureDivisionContent() {
  const heroData = {
    videoSrc: '/kothari-banner2.mp4',
   headline: <>Four decades of<br />smart irrigation</>,
    subtext: 'Empowering millions of farmers with intelligent micro-irrigation systems designed for peak crop vitality and water conservation.',
    ctaText: 'View Micro Irrigation',
    cardTitle: 'Micro Irrigation Systems',
    cardDescription: 'Intelligent drip and micro-flow technology maximizing yield with minimal water wastage.',
  };

  const footerData = {
    logo: 'https://kotharigroupindia.com/img/Kothariblue_logo.png',
    about: 'For over four decades, Kothari Group has empowered farmers and builders with water-wise micro irrigation systems, agri pipes and premium plumbing solutions across India.',
    contact: {
      address: 'Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.',
      phone: '1800 120 4343',
      email: 'enquiry@kotharigroupindia.com',
    },
    productSegments: [
      'Drip Irrigation Systems',
      'Sprinkler Irrigation',
      'Filters & Fertigation',
      'Crop Based Solutions',
      'Accessories & Fittings',
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
  const items = [
    {
      title: 'Banana Guides',
      description: 'Expert banana cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fruit quality.',
      image: 'https://images.pexels.com/photos/4399936/pexels-photo-4399936.jpeg',
      link: '#banana'
    },
    {
      title: 'Chilli Guides',
      description: 'Expert chilli cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and fruit quality.',
      image: 'https://images.pexels.com/photos/34111554/pexels-photo-34111554.jpeg',
      link: '#chilli'
    },
    {
      title: 'Onion Guides',
      description: 'Expert onion cultivation guidance on spacing, irrigation, fertigation, and pest management for better yield and bulb quality.',
      image: 'https://images.pexels.com/photos/7129153/pexels-photo-7129153.jpeg',
      link: '#onion'
    }
  ];
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
            { title: 'CPVC Pipes & Fittings – Hot & Cold Water System', url: '/products/plumbing/cpvc/pipes-fittings', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80' },
            { title: 'CPVC Solvent Cement', url: '/products/plumbing/cpvc/solvent-cement', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
            { title: 'CPVC Transition Fittings', url: '/products/plumbing/cpvc/transition-fittings', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80' },
            { title: 'CPVC Ball Valves', url: '/products/plumbing/cpvc/ball-valves', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'UPVC',
          products: [
            { title: 'UPVC Pipes & Fittings', url: '/products/plumbing/upvc/pipes-fittings', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80' },
            { title: 'UPVC Solvent System', url: '/products/plumbing/upvc/solvent-system', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80' },
            { title: 'UPVC Elbows & Tees', url: '/products/plumbing/upvc/elbows-tees', image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=600&q=80' },
            { title: 'UPVC End Caps', url: '/products/plumbing/upvc/end-caps', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'SWR',
          products: [
            { title: 'SWR Pipes & Fittings', url: '/products/plumbing/swr/pipes-fittings', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
            { title: 'SWR Ventilation Systems', url: '/products/plumbing/swr/ventilation', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80' },
            { title: 'SWR Trap Assemblies', url: '/products/plumbing/swr/trap-assemblies', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80' },
            { title: 'SWR Inspection Chambers', url: '/products/plumbing/swr/inspection-chambers', image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80' },
          ],
        },
      ],
    },
    {
      name: 'Agricultural Pipes',
      desc: 'Durable pipes for irrigation, water transport, and borewell applications in agriculture.',
      categories: [
        {
          name: 'LDPE',
          products: [
            { title: 'LDPE Pipes', url: '/products/agri-pipes/ldpe/pipes', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80' },
            { title: 'LDPE Drippers', url: '/products/agri-pipes/ldpe/drippers', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80' },
            { title: 'LDPE Laterals', url: '/products/agri-pipes/ldpe/laterals', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80' },
            { title: 'LDPE Connectors', url: '/products/agri-pipes/ldpe/connectors', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'HDPE',
          products: [
            { title: 'HDPE Pipes', url: '/products/agri-pipes/hdpe/pipes', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
            { title: 'HDPE Sprinkler Laterals', url: '/products/agri-pipes/hdpe/sprinkler-laterals', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80' },
            { title: 'HDPE Compression Fittings', url: '/products/agri-pipes/hdpe/compression-fittings', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
            { title: 'HDPE End Plugs', url: '/products/agri-pipes/hdpe/end-plugs', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'PVC Casing',
          products: [
            { title: 'PVC Casing Pipes', url: '/products/agri-pipes/casing/pipes', image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=600&q=80' },
            { title: 'PVC Screen Pipes', url: '/products/agri-pipes/casing/screen-pipes', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
            { title: 'PVC Shrouds', url: '/products/agri-pipes/casing/shrouds', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
            { title: 'PVC Centralizers', url: '/products/agri-pipes/casing/centralizers', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80' },
          ],
        },
      ],
    },
    {
      name: 'Irrigation Systems',
      desc: 'Precision drip, sprinkler, and micro-irrigation systems for maximum water efficiency.',
      categories: [
        {
          name: 'Drip Irrigation',
          products: [
            { title: 'Drip Laterals', url: '/products/irrigation/drip/laterals', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80' },
            { title: 'Drippers & Emitters', url: '/products/irrigation/drip/drippers', image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80' },
            { title: 'Inline Driplines', url: '/products/irrigation/drip/inline-driplines', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80' },
            { title: 'Filter Units', url: '/products/irrigation/drip/filters', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'Sprinkler Irrigation',
          products: [
            { title: 'Impact Sprinklers', url: '/products/irrigation/sprinkler/impact', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80' },
            { title: 'Pop-up Sprinklers', url: '/products/irrigation/sprinkler/popup', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80' },
            { title: 'Sprinkler Nozzles', url: '/products/irrigation/sprinkler/nozzles', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
            { title: 'Rain Guns', url: '/products/irrigation/sprinkler/rain-guns', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'Micro Irrigation',
          products: [
            { title: 'Micro Sprinklers', url: '/products/irrigation/micro/sprinklers', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
            { title: 'Foggers & Misters', url: '/products/irrigation/micro/foggers', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80' },
            { title: 'Micro Tubes', url: '/products/irrigation/micro/tubes', image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=600&q=80' },
            { title: 'Mini Valves', url: '/products/irrigation/micro/mini-valves', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80' },
          ],
        },
      ],
    },
    {
      name: 'Fittings & Valves',
      desc: 'Compression, threaded, and specialty fittings along with valves for complete system integration.',
      categories: [
        {
          name: 'Compression Fittings',
          products: [
            { title: 'Compression Couplers', url: '/products/fittings/compression/couplers', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
            { title: 'Compression Elbows', url: '/products/fittings/compression/elbows', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80' },
            { title: 'Compression Tees', url: '/products/fittings/compression/tees', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80' },
            { title: 'End Caps & Plugs', url: '/products/fittings/compression/end-caps', image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'Threaded Fittings',
          products: [
            { title: 'Threaded Adapters', url: '/products/fittings/threaded/adapters', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80' },
            { title: 'Threaded Nipples', url: '/products/fittings/threaded/nipples', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80' },
            { title: 'Threaded Unions', url: '/products/fittings/threaded/unions', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80' },
            { title: 'Threaded Plugs', url: '/products/fittings/threaded/plugs', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80' },
          ],
        },
        {
          name: 'Valves',
          products: [
            { title: 'Ball Valves', url: '/products/fittings/valves/ball', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
            { title: 'Gate Valves', url: '/products/fittings/valves/gate', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80' },
            { title: 'Non-Return Valves', url: '/products/fittings/valves/non-return', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80' },
            { title: 'Butterfly Valves', url: '/products/fittings/valves/butterfly', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80' },
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
      <Category tab="agriculture"/>
      <WhyKothariGroup />
      <Impact />
      <KnowledgeCentre itemData={items}/>
      <NewsDivision />
      <Footer footerData={footerData}/>
    </>
  );
}

export default function AgricultureDivisionPage() {
  return (
    <AppShell>
      <AgricultureDivisionContent />
    </AppShell>
  );
}