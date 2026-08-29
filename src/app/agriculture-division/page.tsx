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
      email: 'irrigation@kotharigroupindia.com',
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
  description: 'CPVC pipes, fittings and solvent cement for hot and cold water systems.',
  segments: [
    {
      name: 'Drip Irrigation System',
      desc: 'Complete drip irrigation solutions with driplines, drippers, polytubes, fittings, accessories and valves.',
      categories: [
        {
          name: 'Dripline',
          products: [
            { title: 'Dripline K-Gol NPC', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-GOL-NPC.webp' },
            { title: 'Dripline K-Gol PC', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-GOL-PC-1.webp' },
            { title: 'Dripline K-Lin NPC', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-1.webp' },
            { title: 'Dripline K-Lin PCAS', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-PCAS-1.webp' },
            { title: 'Dripline K-Lin PCND', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-PCND-1.webp' },
          
          ],
        },
        {
          name: 'Polyfittings & Accessories',
          products: [
            { title: 'Drip Poly Fittings', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIP-POLY-FITTINGS.webp' },
            { title: 'Drip Winder', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Drip-Winder.webp' },
           
          ],
        },
        {
          name: 'Drip Tubes (Polytube)',
          products: [
            { title: 'Polytube', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/POLYTUBE.webp' },
           
          ],
        },
        {
          name: 'Emitters (Drippers)',
          products: [
            { title: 'Turbo Dripper', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/TURBO-DRIPPER-1.webp' },
            { title: 'PC Dripper', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PC-DRIPPER.webp' },
           
          ],
        },
        {
          name: 'Thinwall Drip Line',
          products: [
            { title: 'Thin Wall Dripline K-Super', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SUPER.webp' },
            { title: 'Thin Wall Dripline K-Smar', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SMART.webp' },
            { title: 'Thin Wall Dripline K-Slim', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SLIM-ULTRA.webp' },
            { title: 'Thinwall Dripline K-Slim Ultra', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SLIM.webp' },
            { title: 'K-Smart Screen Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/K-Smart-Screen-Filter.webp' },
            { title: 'Thinwall Drip Poly Fittings', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/08/Thinwall-Drip-Accessories.webp' },
           
          ],
        },
        {
          name: 'Valves',
          products: [
            { title: 'Single & Double Union PVC Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Single-Double-Union-PVC.webp' },
            { title: 'Double Union PP Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Union-Ball-Valve.webp' },
            { title: 'Plain White Blue Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Plain-white-blue-ball-valve.webp' },
            { title: 'Butterfly Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Butterfly-Valve.webp' },
            { title: 'Throttle Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Throttle-valve.webp' },
            { title: 'Air Cum Vacuum Relief Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Air-Cum-Vacuum-Relief-Valve.webp' },
            { title: 'Flush Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flush-Valve-1.webp' },
            { title: 'Check Valve (Non-Return Valve)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Check-Valve-Non-Return-Valve.webp' },
           
          ],
        },
        {
          name: 'Drip Agri PVC Pipes',
          products: [
            { title: 'UPVC Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Selffit-pipe.webp' },
           
          ],
        },
        {
          name: 'Drip Gravity Kits',
          products: [
            { title: 'Gravity Drip Kit', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/KOTHARI-GRAVITY-DRIP-KIT.webp' },
           
          ],
        },
        {
          name: 'Mulching',
          products: [
            { title: 'Mulch Films', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mulch.webp' },
           
          ],
        },
       
      ],
    },
    {
      name: 'Filters & Injectors',
      desc: 'Efficient filtration and fertilizer injection solutions with filters, dosing pumps and injectors.',
      categories: [
        {
          name: 'Filters',
          products: [
            { title: 'Hydrocyclone Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Hydrocyclone-Filter.webp' },
            { title: 'Sand Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/SAND-FILTER-1.webp' },
            { title: 'Screen Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Screen-Filter.webp' },
            { title: 'Twin Screen Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Twin-Screen-Filter.webp' },
            { title: 'Semi Automatic Screen Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Semi-Automatic-Screen-Filter-1.webp' },
            { title: 'Disc Filter & Twin Disc Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Disc-Filter-Twin-Disc-Filter-1.webp' },
            { title: 'Mini Sigma Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mini-Sigma-Filter.webp' },
            { title: 'Filtomat Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Filtomat-Filter.webp' },
        ],
        },
        {
          name: 'Dosing pumps & Fertilizer Injectors',
          products: [
            { title: 'HDPE Header Manifold', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Header-Manifold.webp' },
            { title: 'PP Header Assembly', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PP-Header-Assembly.webp' },
            { title: 'Venturi Injector', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Venturi-Injector.webp' },
            { title: 'Dosing Pump', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/DOZING-PUMP.webp' },
          ],
        }
      
      ],
    },
    {
      name: 'Automation System',
      desc: 'Smart irrigation automation with fertigation machines, controllers, filters and control valves.',
      categories: [
        {
          name: 'Fertigation Machines',
          products: [
            { title: 'Nutrijet Fertigation Machines', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/NUTRIJET.webp' },
              ],
        },
        {
          name: 'Controllers',
          products: [
            { title: 'Irribeat Controllers', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/IRRIBEAT.webp' },
            { title: 'GSI (Galcon Smart Irrigation) Controller', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/GSI-Galcon-Smart-Irrigation.webp' },
            { title: 'Galpro Controller (AC/DC)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Galpro-AC-DC.webp' },
              ],
        },
        {
          name: 'Automatic Filters & Accessories',
          products: [
            { title: 'Mini Sigma Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mini-Sigma-Filter.webp' },
            { title: 'Filtomat Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Filtomat-Filter.webp' },
            { title: 'Solenoid Control Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Solenoid-Control-Valve.webp' },
            { title: 'Pressure Reducing Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Pressure-Reducing-Valve.webp' },
            { title: 'Pressure Sustaining Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Pressure-Sustaining-Valve.webp' },
            { title: 'Quick Pressure Relief Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/QUICK-PRESSURE.webp' },
            { title: 'Filter Auto Backwash Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/FILTER-BACKWASH.png.webp' },
            { title: 'Water Meter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/WATER-METER.webp' },
              ],
        },
       
      ],
    },
     {
      name: 'Micro & Mini Sprinklers',
      desc: 'Efficient micro and mini sprinklers, sprayers, misters and foggers for irrigation applications.',
      categories: [
        {
          name: 'Micro Sprinklers & Assemblies',
          products: [
            { title: 'K-Mic Excel', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Mic-Excel.webp' },
            { title: 'K-Mic Micro Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Mic-Micro-Sprinkler.webp' },
            { title: 'K-Tuff Micro Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Tuff-Micro-Sprinkler.webp' },
              ],
        },
        {
          name: 'Mini Sprinklers & Assemblies',
          products: [
            { title: 'Mini Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/MINI-SPRINKLER.png' },
              ],
        },
        {
          name: 'Micro Jets & assemblies',
          products: [
            { title: 'Micro Sprayer', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/MICRO-SPRAYER.webp' },
              ],
        },
        {
          name: 'Misters & Assemblies',
          products: [
            { title: 'K-Mist', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K%E2%80%93Fogger-K%E2%80%93Fogger.webp' },
              ],
        },
        {
          name: 'Foggers & Assemblies',
          products: [
            { title: 'K-Fogger', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K%E2%80%93Fogger-K%E2%80%93Fogger.webp' },
              ],
        },
       
      ],
    },
    {
      name: 'Sprinkler Irrigration system',
      desc: 'Complete sprinkler irrigation solutions with sprinklers, pipes, connectors, rainguns and accessories.',
      categories: [
        {
          name: 'Metal Sprinklers',
          products: [
            { title: 'Metal Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/METAL-SPRINKLER.webp' },
              ],
        },
        {
          name: 'Plastic Sprinklers',
          products: [
            { title: 'Mini Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/MINI-SPRINKLER.png' },
              ],
        },
        {
          name: 'HDPE Sprinklers Pipes (QCPE)',
          products: [
            { title: 'Sprinklers Pipes (QCPE)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/QCPE-Spinklar-pipe.webp' },
              ],
        },
        {
          name: 'Sprinkler Connectors & Accessories',
          products: [
            { title: 'HDPE Pipe Sprinkler Set', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/HDPE-Pipe-Sprinkler-Set-1.webp' },
              ],
        },
        {
          name: 'Raingun & Accessories',
          products: [
            { title: 'Raingun and Accessories', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Rainguns.webp' },
              ],
        },
        {
          name: 'Garden & Landscape Sprinklers',
          products: [
            { title: 'Pop-up Spray Heads and Rotors', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Pop-up-spray-heads-rotors.png' },
            { title: 'Swing Joint', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Swing-joint-1.png' },
            { title: 'Quick Coupling Valve (QCV)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Quick-Coupling-Valve-QCV.webp' },
              ],
        },
        {
          name: 'K-Eco Rain Pipes & K- Flex Submain Pipes',
          products: [
            { title: 'K-Eco Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/K-Eco-sprinkler.webp' },
            { title: 'K-Flex Submain Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flexsubmain.webp' },
              ],
        },
       
      ],
    },
     {
      name: 'Turnkey Projects',
      desc: 'Complete turnkey irrigation projects including PDN and CI solutions for efficient water management.',
      categories: [
        {
          name: 'Turnkey Projects',
          products: [
            { title: 'Turnkey Projects (PDN & CI)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/turnkey-projects-scaled.webp' },
            { title: 'Turnkey Projects (Infra)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/coming-soon.webp' },
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