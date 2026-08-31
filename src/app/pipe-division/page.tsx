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
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FeaturedProducts } from '@/components/FeaturedProducts';


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
      email: 'sales.pipe@kotharigroupindia.com',
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
    socialgroup:[
      {
        heading: 'Kothari Pipes',
        links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/KothariPipesAgri' },
      // { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Vb6myeSGU3BD6QbRqN3i' },
      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@kotharipipesagri' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kotharipipesagri/' },
    ]
      },
       {
        heading: 'Kothari Plumbing',
        links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/kotharipipesplumbing/' },

      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@kotharipipesplumbing' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kotharipipesplumbing/' },
          { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Vb6myeSGU3BD6QbRqN3i' },
    ]
      }
    ]
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
            { title: 'CPVC Pipes & Fittings – Hot & Cold Water Piping System', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/CPVC-PIPES-FITTINGS.webp', shortDesc: 'CPVC plumbing pipe offering durable, safe, efficient water flow.' },
            { title: 'CPVC Solvent Cement', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/cpvc.webp', shortDesc: 'Reliable adhesive providing strong, leak-proof joints for plumbing.'},
          
          ],
        },
        {
          name: 'UPVC',
          products: [
            { title: 'UPVC Pipes & Fittings', url: '/products/plumbing/upvc/pipes-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UPVC-PIPES-FITTINGS.webp',shortDesc: 'Lead-free, durable piping ensuring safe, efficient water supply systems.' },
            { title: 'UPVC Solvent System', url: '/products/plumbing/upvc/solvent-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/UPVC-solvent-cement.webp',shortDesc: 'Easy-to-apply adhesive creating durable, leak-proof plumbing joints.'},
           
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
            { title: 'SWR (Soil, Waste & Rainwater) Piping System', url: '/products/agri-pipes/ldpe/pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/SWR-PIPES-FITTINGS.webp',shortDesc: ' Durable, leak-proof SWR pipes for efficient drainage systems.' },
            { title: 'PP Low Noise Drainage System', url: '/products/agri-pipes/ldpe/drippers', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Low-Noise-Drainage-System.webp' ,shortDesc: 'Three-layer PP pipes offering quiet, durable, cost-effective drainage solutions. '},
        ],
        },
        {
          name: 'Underground Pipe and Fittings',
          products: [
            { title: 'UPVC Underground Drainage Piping System (solid wall UDS)', url: '/products/agri-pipes/hdpe/pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UDS-PIPES-FITTINGS.webp',shortDesc:'Lightweight, leak-proof uPVC pipes offering durable, abrasion-resistant performance.' },
            { title: 'Foamcore Underground Drainage Piping System', url: '/products/agri-pipes/hdpe/sprinkler-laterals', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/UDS-Foamcore.webp',shortDesc: 'Lightweight multi-layer pipes for reliable, leak-free sewage drainage.' },
            { title: 'Underground Double Wall Corrugated pipes(DWC)', url: '/products/agri-pipes/hdpe/compression-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/11/Underground-Double-Wall-Corrugated-pipesDWC.webp',shortDesc: 'Flexible, durable corrugated pipes for demanding underground applications.' },
            { title: 'HDPE (Sewerage IS: 14333)', url: '/products/agri-pipes/hdpe/end-plugs', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PE-Sewerage-Pipes-scaled.webp',shortDesc: 'Durable PE pipes offering chemical resistance and cost-effective installation.' },
            { title: 'Sub-Surface Drainage System', url: '/products/agri-pipes/hdpe/end-plugs', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/11/Sub-Surface-Drainage-System.webp',shortDesc: 'Flexible drainage pipes ensuring efficient water removal and durability.' },
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
            { title: 'DWC Pipe for Cable Protection', url: '/products/irrigation/drip/laterals', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/DWC-Pipe-for-Cable-Protection.webp',shortDesc: 'Strong, flexible HDPE ducts designed for reliable cable protection.' },
            { title: 'Electric Conduit Pipes & Fittings', url: '/products/irrigation/drip/drippers', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/vayar.png' , shortDesc: 'Lightproof, fire-resistant pipes providing durable protection for electrical wires.'},
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
            { title: 'Self Fit PVC Pipe', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Selffit-pipe.webp',shortDesc: 'Durable, flexible PVC distribution pipes for cost-effective irrigation.' },
            { title: 'Ring Fit PVC Pipe', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Ringfit-pipe.webp',shortDesc: 'Advanced irrigation pipes ensuring reliable, durable, easy installation.'},
            { title: 'Agri PVC Moulded Fittings', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/molded-fittings-Product-Page.webp' , shortDesc: 'High-quality PVC pipes delivering efficient flow and versatile performance.'},
            { title: 'Fabricated Fittings & Repair Coupler (Rubber Ring)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Fabricated-Fittings-Repair-Coupler.webp' ,shortDesc: 'Durable PVC pipes ensuring smooth flow and long-lasting performance.'},
            { title: 'PVC Solvent Cement', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/PVC-Solvent-Cement-1.webp' , shortDesc: 'High-strength solvent cement ensuring secure, leak-proof, durable pipe connections.'},
              ],
        },
        {
          name: 'PE Pipes & Fittings',
          products: [
            { title: 'HDPE Piping', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-PIPE-111.webp' ,shortDesc: 'Flexible PE pipes delivering durable, leak-free water flow performance.'},
            { title: 'HDPE Coils', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Coils.webp', shortDesc:'UV-resistant flexible pipes ensuring efficient, safe water distribution.' },
            { title: 'HDPE Fittings', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Pipe-Fittings-1.webp', shortDesc: 'Durable, flexible pipes offering secure, leak-proof fluid distribution.' },
            { title: 'MDPE Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/08/MDPE-PIPE.webp', shortDesc: 'Reliable MDPE pipes offering safe, corrosion-resistant water distribution.'},
            { title: 'Compression Fittings', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/MDPE-Pipes-Fittings.webp' ,shortDesc: 'Durable MDPE fittings ensuring safe, leak-free water connections.'},
            { title: 'PE Power Spray Hose Pipe (Spray Pipe)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/PE-Power-Spray.webp' , shortDesc: 'Flexible, UV-resistant PE pipes offering durable agricultural performance.' },
            { title: 'LD Krishi Pipe (Lay Flat Tubes)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/LD-Krishi.webp' , shortDesc: 'Lightweight tubing pipes with precise markings and quality options.' },
              ],
        },
        {
          name: 'Valves',
          products: [
            { title: 'Single & Double Union PVC Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Single-Double-Union-PVC.webp',shortDesc: 'Durable PVC valves ensuring effortless, leak-proof irrigation flow control.' },
            { title: 'Double Union PP Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Union-Ball-Valve.webp',shortDesc: 'Durable polypropylene valves offering reliable, leak-proof flow control.' },
            { title: 'Plain White Blue Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Plain-white-blue-ball-valve.webp',shortDesc: 'Compact, lightweight valves providing easy, leak-proof irrigation control.' },
            { title: 'Air Cum Vacuum Relief Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Air-Cum-Vacuum-Relief-Valve.webp', shortDesc: 'Compact disc valves offering quick operation and efficient flow control.' },
            { title: 'Butterfly Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Butterfly-Valve.webp',shortDesc:'Automatic air valve preventing vacuum, water hammer, and leakage.' },
            { title: 'Flush Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flush-Valve-1.webp', shortDesc:'Durable flushing valve enabling easy, leak-proof irrigation system cleaning.'},
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
            { title: 'Column Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/coloum-pipe.webp' , shortDesc: 'Impact-resistant uPVC column pipes with hygienic, secure locking system.'},
            { title: 'PE Column Pipes For Submersible Pumps', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/coming-soon.webp' , shortDesc: 'Coming Soon' },
              ],
        },
        {
          name: 'Casing Pipes',
          products: [
            { title: 'Casing Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/CASING-PIPE.webp', shortDesc: 'Durable, non-toxic borewell pipes ensuring efficient water flow.' },
            { title: 'Ribbed Casing Pipe', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Ribbed-Casing-Pipe.png' ,shortDesc: 'Strong, lightweight borewell pipes with durable, leak-proof threaded joints.'},
            { title: 'Screen Pipe/Slotted Pipe', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Screen-Pipe-Slotted-Pipe-n.webp', shortDesc: 'Durable slotted casing pipes ensuring clean, reliable borewell water.' },
            { title: 'Casing SDR Agriculture Pipe', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/sdr-blue-casing-pipes-scaled.webp' , shortDesc: 'Durable PVC-U borewell pipes ensuring clean, secure water delivery.'},
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
            { title: 'Suction Hose Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/suction-hose-pipes.webp', shortDesc: 'Flexible, high-pressure hoses offering durable chemical-resistant performance.' },
              ],
        },
        {
          name: 'PVC Tubing/Garden Pipes',
          products: [
            { title: 'Kothari Special', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/KOTHARI-SPECIAL-ORANGE-COLOR-2.webp',shortDesc: 'Flexible garden pipes with anti-twist technology and weather resistance.' },
            { title: 'Mossfree', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/MOSSFREE-BLACK-COLOUR-2.webp',shortDesc:'Durable, flexible garden pipes featuring anti-moss and anti-twist technology.' },
            { title: 'Zebra', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/ZEBRA.webp' , shortDesc: 'Durable, flexible Zebra pipes designed for heavy-duty garden irrigation.'},
            { title: 'OMD', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/OMD-2.webp' , shortDesc: 'Flexible, durable OMD garden pipes for reliable watering applications.'},
            { title: '50-50', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/50-50.webp', shortDesc: 'Reliable, flexible 50-50 garden pipes for efficient watering tasks.' },
            { title: 'Milky', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Milky.webp' ,shortDesc: 'Cost-effective, durable garden pipes with flexibility and anti-twist technology.'},
            { title: 'Halwa', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/HALWA-2.webp',shortDesc: 'Durable, flexible garden pipes offering pressure resistance and affordability.' },
            { title: 'CTP', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/CTP-2.webp' ,shortDesc: 'Flexible, durable garden pipes designed for easy, cost-effective watering.'},
            { title: 'Black Zebra', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Black-garden.webp', shortDesc:'Safe, leak-proof Black Zebra pipes for versatile watering applications.' },
              ],
        },
        {
          name: 'PVC Braided Hose Pipe',
          products: [
            { title: 'Braided Hose Pipe', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Braided-hose.webp' ,shortDesc: 'Reinforced braided pipes offering high-pressure, flexible, leak-proof performance.' },
            { title: 'Industrial Braided Hose Pipe 3 Layer', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/KOTHARI-INDUSTRIAL-BRAIDED-HOSE-PIPE-3-LAYER.webp',shortDesc: 'Three-layer PVC pipes offering flexible, high-pressure, anti-kink performance.' },
            { title: 'Construction Hose Pipe 3 Layer', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/CONSTRUCTION-2.webp', shortDesc:'Three-layer construction hoses offering durable, flexible, pressure-resistant performance.' },
            { title: 'High Pressure Power Spray Hose Pipe (5 Layer)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Power-Spray.webp', shortDesc:'Lightweight, flexible PVC-nylon hoses built for harsh conditions.' },
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



const FEATURE_PRODUCTS = [
  {
    id: '1',
    title: 'UPVC Pipes & Fittings',
    subtitle: 'Advanced Plumbing Matrix',
    description: 'A high-durability, lead-free thermoplastic engineered for safe, bacteria-resistant, and corrosion-free drinking water systems.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UPVC-PIPES-FITTINGS.webp',
    category: 'Plumbing Solutions',
    link: '#',
    spec: 'Temp Tolerance: Up to 93°C',
  },
  {
    id: '2',
    title: 'CPVC Pipes & Fittings – Hot & Cold Water Piping System',
    subtitle: 'Precision Yield Technology',
    description: 'A durable, eco-friendly virgin CPVC piping solution designed for safe hot and cold drinking water systems (0°C–93°C), featuring high UV resistance, low heat loss, and self-extinguishing safety.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/CPVC-PIPES-FITTINGS.webp',
    category: 'Micro Irrigation',
    link: '#',
    spec: 'Efficiency Rate: 98%',
  },
  {
    id: '3',
    title: 'SWR (Soil, Waste & Rainwater) Piping System',
    subtitle: 'Deep-Borehole Heavy Duty',
    description: 'A heavy-duty, leak-free, lead-free piping solution featuring a 10 kg/cm² push-fit rubber ring joint for maintenance-free, corrosion-resistant underground and sewer drainage.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/SWR-PIPES-FITTINGS.webp',
    category: 'Agri & Submersible',
    link: '#',
    spec: 'Load Capacity: High PSI',
  },
  {
    id: '4',
    title: 'UPVC Underground Drainage Piping System (solid wall UDS)',
    description: 'A lightweight, rodent-resistant uPVC piping system featuring leak-proof rubber ring joints and high impact resistance for easy installation and durable, clog-free drainage.',
    subtitle: 'High Pressure Carrier',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UDS-PIPES-FITTINGS.webp',
    category: 'Agri Solutions',
    link: '#',
    spec: 'UV & Chemical Resistant',
  },
  {
    id: '5',
    title: 'Kothari Special Garden Hose Pipes',
    subtitle: 'Climate Control Micro-Jet',
    description: 'A flexible, anti-twist garden hose made from 100% virgin raw material, offering superior durability, weather resistance, and easy installation for all gardening needs.',
    image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/KOTHARI-SPECIAL-ORANGE-COLOR-2.webp',
    category: 'Micro Irrigation',
    link: '#',
    spec: 'Coverage: 360° Uniformity',
  },
  {
    id: '6',
    title: 'PVC Pipes',
    subtitle: 'Climate Control Micro-Jet',
    description: 'Our PVC pipes are manufactured using premium raw materials, adhering to strict industry standards, and conducting rigorous testing. They ensure reliable and efficient, leak-resistant water supply to every farm.',
    image: 'https://kotharigroupindia.com/img/productsbanner/Subsection_Banner-PVCPipes.webp',
    category: 'Micro Irrigation',
    link: '#',
    spec: 'Coverage: 360° Uniformity',
  },
];
  return (
    <>
      <HeaderDivison productsMegaMenu={productsMegaMenu}/>
      <HeroDivision heroData={heroData} />
      <Category tab="pipes"/>
      <FeaturedProducts products={FEATURE_PRODUCTS}/>
      {/* <WhyKothariGroup /> */}
      {/* <Impact /> */}
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