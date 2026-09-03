'use client';

import AppShell from '@/components/AppShell';
import { KnowledgeCentre } from '@/components/KnowledgeCentre';
import { HeroDivision } from '@/components/HeroDivision';
import { HeaderDivison, irrigationSolutionsMegaMenu } from '@/components/HeaderDivision';
import { Category } from '@/components/Category';
import { WhyKothariGroup } from '@/components/main/WhyKothariGroup';
import { Impact } from '@/components/main/Impact';
import { Footer } from '@/components/Footer';
import { NewsDivision } from '@/components/NewsDivision';
import { Home3Footer } from '@/components/Home3Footer';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FeaturedProducts } from '@/components/FeaturedProducts';


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
      email: 'sales.irrigation@kotharigroupindia.com',
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
    socialgroup:[
      {
        links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/kothariirrigation/' },
      { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Va6OjqKA89MhSFoEY32l' },
      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@KothariIrrigation' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kothariirrigation_/' },
    ]
      }
    ]
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
            { title: 'Dripline K-Gol NPC', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-GOL-NPC.webp',shortDesc: 'Clog-resistant dripline tubing delivering uniform, efficient crop irrigation.' },
            { title: 'Dripline K-Gol PC', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-GOL-PC-1.webp',shortDesc: 'Pressure-compensating dripline ensuring uniform, efficient irrigation across slopes.' },
            { title: 'Dripline K-Lin NPC', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-1.webp' ,shortDesc:'Advanced LLDPE dripline ensuring uniform, clog-resistant irrigation performance.'},
            { title: 'Dripline K-Lin PCAS', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-PCAS-1.webp', shortDesc: 'Anti-siphon dripline providing precise, uniform, root-protected irrigation.'},
            { title: 'Dripline K-Lin PCND', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-PCND-1.webp',shortDesc:'Advanced PCND dripline ensuring stable, uniform, root-protected irrigation.' },
          
          ],
        },
        {
          name: 'Polyfittings & Accessories',
          products: [
            { title: 'Drip Poly Fittings', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIP-POLY-FITTINGS.webp',shortDesc:'Reinforced PPCP fittings providing durable, leak-proof, UV-resistant connections.' },
            { title: 'Drip Winder', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Drip-Winder.webp' , shortDesc:'Portable metal reel enabling quick, efficient dripline handling and storage.'},
           
          ],
        },
        {
          name: 'Drip Tubes (Polytube)',
          products: [
            { title: 'Polytube', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/POLYTUBE.webp',shortDesc: 'Advanced LLDPE tubing delivering uniform flow and weather-resistant durability.' },
           
          ],
        },
        {
          name: 'Emitters (Drippers)',
          products: [
            { title: 'Turbo Dripper', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/TURBO-DRIPPER-1.webp' ,shortDesc: 'Clog-resistant drippers ensuring precise, uniform, low-waste irrigation performance.'},
            { title: 'PC Dripper', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PC-DRIPPER.webp',shortDesc:'Pressure-compensating dripper ensuring clog-resistant, uniform water distribution.' },
           
          ],
        },
        {
          name: 'Thinwall Drip Line',
          products: [
            { title: 'Thin Wall Dripline K-Super', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SUPER.webp',shortDesc: 'Cylindrical drippers delivering uniform, clog-resistant irrigation across larger fields.' },
            { title: 'Thin Wall Dripline K-Smar', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SMART.webp' , shortDesc: 'Durable dripline tubing ensuring precise, uniform, high-efficiency irrigation.'},
            { title: 'Thin Wall Dripline K-Slim', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SLIM-ULTRA.webp',shortDesc: 'Precision dripline tubing delivering steady, efficient, clog-resistant irrigation.' },
            { title: 'Thinwall Dripline K-Slim Ultra', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SLIM.webp' , shortDesc: 'Reliable 10mil dripline tubing ensuring uniform, clog-resistant water distribution.'},
            { title: 'K-Smart Screen Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/K-Smart-Screen-Filter.webp' ,shortDesc: 'Durable 130-micron filters providing cost-effective irrigation water filtration.'},
            { title: 'Thinwall Drip Poly Fittings', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/08/Thinwall-Drip-Accessories.webp',shortDesc:'Durable barb fittings providing leak-free, UV- and chemical-resistant connections.' },
           
          ],
        },
        {
          name: 'Valves',
          products: [
            { title: 'Single & Double Union PVC Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Single-Double-Union-PVC.webp',shortDesc: 'Durable PVC valves ensuring effortless, leak-proof irrigation flow control.' },
            { title: 'Double Union PP Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Union-Ball-Valve.webp' ,shortDesc: 'Durable polypropylene valves offering reliable, leak-proof flow control.'},
            { title: 'Plain White Blue Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Plain-white-blue-ball-valve.webp',shortDesc: 'Compact, lightweight valves providing easy, leak-proof irrigation control.' },
            { title: 'Butterfly Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Butterfly-Valve.webp' ,shortDesc: 'Compact disc valves offering quick operation and efficient flow control.'},
            { title: 'Throttle Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Throttle-valve.webp' ,shortDesc: 'Durable irrigation valve enabling precise, visual water flow control.'},
            { title: 'Air Cum Vacuum Relief Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Air-Cum-Vacuum-Relief-Valve.webp',shortDesc: 'Automatic air valve preventing vacuum, water hammer, and leakage.' },
            { title: 'Flush Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flush-Valve-1.webp' ,shortDesc:'Durable flushing valve enabling easy, leak-proof irrigation system cleaning.'},
            { title: 'Check Valve (Non-Return Valve)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Check-Valve-Non-Return-Valve.webp',shortDesc: 'Heavy-duty backflow preventer ensuring reliable, durable irrigation system protection.' },
           
          ],
        },
        {
          name: 'Drip Agri PVC Pipes',
          products: [
            { title: 'UPVC Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Selffit-pipe.webp' ,shortDesc:'Durable HDPE distribution pipes for flexible, cost-effective irrigation.'},
           
          ],
        },
        {
          name: 'Drip Gravity Kits',
          products: [
            { title: 'Gravity Drip Kit', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/KOTHARI-GRAVITY-DRIP-KIT.webp',shortDesc:'Pump-free drip irrigation kits enabling easy, efficient low-pressure watering.' },
           
          ],
        },
        {
          name: 'Mulching',
          products: [
            { title: 'Mulch Films', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mulch.webp' ,shortDesc:'Mulching film conserves moisture, controls weeds, and promotes healthier crops.'},
           
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
            { title: 'Hydrocyclone Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Hydrocyclone-Filter.webp' ,shortDesc:'Hydrodynamic filter providing efficient particle separation and extended filtration.'},
            { title: 'Sand Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/SAND-FILTER-1.webp',shortDesc:'Advanced sand filters delivering ultra-fine, low-loss water filtration.' },
            { title: 'Screen Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Screen-Filter.webp' ,shortDesc:'Durable screen filters offering efficient filtration and easy maintenance.'},
            { title: 'Twin Screen Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Twin-Screen-Filter.webp' ,shortDesc:'Dual screen filter providing high-flow, durable, versatile filtration performance.'},
            { title: 'Semi Automatic Screen Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Semi-Automatic-Screen-Filter-1.webp',shortDesc:'High-capacity filters offering easy maintenance and real-time clogging indication.' },
            { title: 'Disc Filter & Twin Disc Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Disc-Filter-Twin-Disc-Filter-1.webp' ,shortDesc: 'Grooved disc filters delivering fine, efficient, low-maintenance water filtration.'},
            { title: 'Mini Sigma Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mini-Sigma-Filter.webp' ,shortDesc:'Compact self-cleaning filters delivering efficient, automatic low-pressure filtration.'},
            { title: 'Filtomat Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Filtomat-Filter.webp',shortDesc:'Power-free automatic filters ensuring continuous, efficient, water-saving filtration.' },
        ],
        },
        {
          name: 'Dosing pumps & Fertilizer Injectors',
          products: [
            { title: 'HDPE Header Manifold', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Header-Manifold.webp' ,shortDesc:'Durable HDPE manifolds offering leak-proof, high-pressure irrigation performance.'},
            { title: 'PP Header Assembly', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PP-Header-Assembly.webp',shortDesc:'Durable PP manifolds with sturdy support and precise pressure monitoring.' },
            { title: 'Venturi Injector', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Venturi-Injector.webp',shortDesc:'Efficient Venturi fertilizer injector ensuring uniform, energy-free crop nutrition.' },
            { title: 'Dosing Pump', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/DOZING-PUMP.webp' ,shortDesc:'Adjustable fertilizer injector delivering precise, efficient nutrient application for irrigation.'},
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
            { title: 'Nutrijet Fertigation Machines', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/NUTRIJET.webp' ,shortDesc:'IoT-enabled fertigation system delivering precise, automated nutrient management.'},
              ],
        },
        {
          name: 'Controllers',
          products: [
            { title: 'Irribeat Controllers', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/IRRIBEAT.webp' ,shortDesc:'Smart IoT irrigation controller enabling remote, expandable multi-zone management.'},
            { title: 'GSI (Galcon Smart Irrigation) Controller', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/GSI-Galcon-Smart-Irrigation.webp',shortDesc:'Compact IoT controller enabling remote, customizable irrigation and fertigation.' },
            { title: 'Galpro Controller (AC/DC)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Galpro-AC-DC.webp',shortDesc:'Smart irrigation controller enabling automated, water-saving fertigation and scheduling.' },
              ],
        },
        {
          name: 'Automatic Filters & Accessories',
          products: [
            { title: 'Mini Sigma Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mini-Sigma-Filter.webp' ,shortDesc:'Compact self-cleaning filters delivering efficient, automatic low-pressure filtration.'},
            { title: 'Filtomat Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Filtomat-Filter.webp' ,shortDesc:'Power-free automatic filters ensuring continuous, efficient, water-saving filtration.'},
            { title: 'Solenoid Control Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Solenoid-Control-Valve.webp',shortDesc:'Hydraulic control valves enabling automated, high-flow irrigation water management.' },
            { title: 'Pressure Reducing Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Pressure-Reducing-Valve.webp' ,shortDesc:'Hydraulic pressure regulator ensuring smooth, precise, energy-efficient irrigation control.'},
            { title: 'Pressure Sustaining Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Pressure-Sustaining-Valve.webp',shortDesc:'Hydraulic pressure-sustaining valve ensuring reliable, efficient irrigation flow control.' },
            { title: 'Quick Pressure Relief Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/QUICK-PRESSURE.webp' ,shortDesc:'Automatic pressure relief valve protecting irrigation systems from overpressure.'},
            { title: 'Filter Auto Backwash Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/FILTER-BACKWASH.png.webp',shortDesc:'Compact automatic backwash valves enabling efficient, low-maintenance filtration control.' },
            { title: 'Water Meter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/WATER-METER.webp' ,shortDesc:'Durable magnetic flow meter providing accurate, versatile water measurement. '},
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
            { title: 'K-Mic Excel', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Mic-Excel.webp',shortDesc:'Efficient micro sprinklers providing uniform, durable irrigation coverage.' },
            { title: 'K-Mic Micro Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Mic-Micro-Sprinkler.webp',shortDesc:'High-pressure mist sprinklers providing gentle, customizable crop irrigation.' },
            { title: 'K-Tuff Micro Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Tuff-Micro-Sprinkler.webp' ,shortDesc:'Low-pressure micro sprinklers delivering smooth, gentle, insect-protected irrigation.'},
              ],
        },
        {
          name: 'Mini Sprinklers & Assemblies',
          products: [
            { title: 'Mini Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/MINI-SPRINKLER.png' ,shortDesc:'Adjustable mini sprinklers delivering uniform, flexible, weather-resistant crop irrigation.'},
              ],
        },
        {
          name: 'Micro Jets & assemblies',
          products: [
            { title: 'Micro Sprayer', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/MICRO-SPRAYER.webp',shortDesc:'Versatile mini sprinklers delivering uniform, adjustable spray patterns.' },
              ],
        },
        {
          name: 'Misters & Assemblies',
          products: [
            { title: 'K-Mist', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K%E2%80%93Fogger-K%E2%80%93Fogger.webp' ,shortDesc:'Efficient sprinklers providing gentle, water-saving coverage for large fields.'},
              ],
        },
        {
          name: 'Foggers & Assemblies',
          products: [
            { title: 'K-Fogger', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K%E2%80%93Fogger-K%E2%80%93Fogger.webp' ,shortDesc:'Fine-mist sprinklers delivering efficient cooling, humidity control, and uniform coverage.'},
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
            { title: 'Metal Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/METAL-SPRINKLER.webp' ,shortDesc:'Durable ISI-certified impact sprinkler delivering uniform, wide-area coverage.'},
              ],
        },
        {
          name: 'Plastic Sprinklers',
          products: [
            { title: 'Mini Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/MINI-SPRINKLER.png',shortDesc:'Adjustable plastic sprinklers delivering uniform, durable, flexible crop irrigation.' },
              ],
        },
        {
          name: 'HDPE Sprinklers Pipes (QCPE)',
          products: [
            { title: 'Sprinklers Pipes (QCPE)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/QCPE-Spinklar-pipe.webp',shortDesc:'UV-resistant HDPE clamps ensuring smooth flow and flexible installation.' },
              ],
        },
        {
          name: 'Sprinkler Connectors & Accessories',
          products: [
            { title: 'HDPE Pipe Sprinkler Set', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/HDPE-Pipe-Sprinkler-Set-1.webp',shortDesc:'HDPE sprinkler set with brass nozzle for precise, wide-area irrigation.' },
              ],
        },
        {
          name: 'Raingun & Accessories',
          products: [
            { title: 'Raingun and Accessories', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Rainguns.webp' ,shortDesc:'Portable raingun sprinkler providing wide coverage and adjustable watering.'},
              ],
        },
        {
          name: 'Garden & Landscape Sprinklers',
          products: [
            { title: 'Pop-up Spray Heads and Rotors', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Pop-up-spray-heads-rotors.png',shortDesc:'Gear-driven rotor sprinkler delivering uniform, gentle, long-lasting irrigation coverage.' },
            { title: 'Swing Joint', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Swing-joint-1.png' ,shortDesc:'Flexible pop-up fittings protecting nozzles from pressure and damage.'},
            { title: 'Quick Coupling Valve (QCV)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Quick-Coupling-Valve-QCV.webp' ,shortDesc:'Key-operated irrigation valves ensuring secure, portable, high-pressure connections.'},
              ],
        },
        {
          name: 'K-Eco Rain Pipes & K- Flex Submain Pipes',
          products: [
            { title: 'K-Eco Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/K-Eco-sprinkler.webp',shortDesc:'Laser-perforated flat pipe delivering uniform, filter-free irrigation coverage.' },
            { title: 'K-Flex Submain Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flexsubmain.webp' ,shortDesc:'Durable HDPE flat pipes offering flexible, cost-effective irrigation distribution.'},
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
            { title: 'Turnkey Projects (PDN & CI)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/turnkey-projects-scaled.webp',shortDesc:'Coming Soon' },
            { title: 'Turnkey Projects (Infra)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/coming-soon.webp',shortDesc:'Coming Soon' },
              ],
        },
       
      
       
      ],
    },
    
  ],
};

const FEATURE_PRODUCTS = [
  {
    id: '1',
    title: 'Dripline',
    subtitle: 'Advanced Plumbing Matrix',
    description: 'Dripline from Kothari Group is a cylindrical integral non-pressure compensating emitting pipe designed for uniform irrigation. As a key agri drip irrigation product, it is engineered to provide efficient and uniform irrigation, promoting better crop yields and water conservation',
    image: 'https://kotharigroupindia.com/img/productsbanner/Subsection_Banner-HDPE.webp',
    category: 'Plumbing Solutions',
    link: '#',
    spec: 'Temp Tolerance: Up to 93°C',
  },
  {
    id: '2',
    title: 'Fertigation Machines',
    subtitle: 'Precision Yield Technology',
    description: 'Kothari’s fertigation machines are automated systems for nutrient supply through irrigation. They are engineered for precise and uniform fertilizer application, enhancing crop growth and maximising yields.',
    image: 'https://kotharigroupindia.com/img/product-banners/nutrijet.webp',
    category: 'Micro Irrigation',
    link: '#',
    spec: 'Efficiency Rate: 98%',
  },
  {
    id: '3',
    title: 'Micro Sprinklers & Assemblies',
    subtitle: 'Deep-Borehole Heavy Duty',
    description: 'Kothari engineered microsprinklers and assemblies after understanding the challenges farmers face in arid areas. These devices are built for uniform and gentle watering.',
    image: 'https://kotharigroupindia.com/img/product-banners/micro-sprinklers-and-assemblies.webp',
    category: 'Agri & Submersible',
    link: '#',
    spec: 'Load Capacity: High PSI',
  },
  {
    id: '4',
    title: 'Filters',
    description: `Kothari Group's extensive range of irrigation system filters and injectors, proudly manufactured in-house under the 'Make in India' initiative, are reliable safeguards against clogging hazards. Our filters are specifically engineered to ensure smooth operation of your irrigation system.`,
    subtitle: 'High Pressure Carrier',
    image: 'https://kotharigroupindia.com/img/product-banners/filters.webp',
    category: 'Agri Solutions',
    link: '#',
    spec: 'UV & Chemical Resistant',
  },
  {
    id: '5',
    title: 'Valves Drip Irrigation',
    subtitle: 'Climate Control Micro-Jet',
    description: 'Kothari’s valves for drip irrigation are used to control, stop, or direct water flow in drip irrigation lines. These valves ensure easy control of water flow.',
    image: 'https://kotharigroupindia.com/img/product-banners/valves.webp',
    category: 'Micro Irrigation',
    link: '#',
    spec: 'Coverage: 360° Uniformity',
  },
];
  return (
    <>
      <HeaderDivison productsMegaMenu={productsMegaMenu} solutionsMegaMenu={irrigationSolutionsMegaMenu}/>
      <HeroDivision heroData={heroData} />
      <Category tab="agriculture"/>
      <FeaturedProducts products={FEATURE_PRODUCTS}/>
      {/* <WhyKothariGroup /> */}
      {/* <Impact /> */}
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