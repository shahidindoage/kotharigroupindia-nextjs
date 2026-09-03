'use client';
import React from 'react';
import { HeaderDivison, pipeSolutionsMegaMenu, irrigationSolutionsMegaMenu } from '@/components/HeaderDivision';
import { Footer } from '@/components/Footer';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const PipefooterData = {
  logo: 'https://kotharigroupindia.com/img/Kothariblue_logo.png',
  about: "India's trusted leader with over 35 years of excellence in Plumbing Pipes & Fittings, Agri Pipes & Fittings, and Micro Irrigation Systems.",
  contact: {
    address: 'Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.',
    phone: '1800 120 4343',
    email: 'sales.pipe@kotharigroupindia.com',
  },
  productSegments: ['Plumbing Pipes & fittings','Agri Pipes & fittings','Micro Irrigation System','CPVC Hot & Cold Water','Submersible Column Pipes'],
  quickLinks: ['Home','About Kothari Group','Resources & Knowledge Centre','Career Opportunities','Contact Us'],
  certifications: ['ISO 9001 Quality System','BIS IS 15778 / IS 4985','IS 13488 Micro Irrigation','PMKSY Govt. Subsidy Certified','RoHS Lead-Free Formulation'],
  socialLinks: [
    { name: 'YouTube', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
    { name: 'Facebook', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
    { name: 'Twitter', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
    { name: 'LinkedIn', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
  ],
  newsletterPlaceholder: 'Enter your email address',
  newsletterButton: 'Subscribe',
  copyright: '© 2026 Kothari Group India. All Rights Reserved. Empowering Water Management Across 23+ States.',
  privacyPolicy: 'Privacy Policy',
  termsOfUse: 'Terms of Use',
  socialgroup:[
    { heading: 'Kothari Pipes', links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/KothariPipesAgri' },
      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@kotharipipesagri' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kotharipipesagri/' },
    ]},
    { heading: 'Kothari Plumbing', links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/kotharipipesplumbing/' },
      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@kotharipipesplumbing' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kotharipipesplumbing/' },
      { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Vb6myeSGU3BD6QbRqN3i' },
    ]}
  ]
};

const IrrigationfooterData = {
  logo: 'https://kotharigroupindia.com/img/Kothariblue_logo.png',
  about: 'For over four decades, Kothari Group has empowered farmers and builders with water-wise micro irrigation systems, agri pipes and premium plumbing solutions across India.',
  contact: {
    address: 'Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.',
    phone: '1800 120 4343',
    email: 'sales.irrigation@kotharigroupindia.com',
  },
  productSegments: ['Drip Irrigation Systems','Sprinkler Irrigation','Filters & Fertigation','Crop Based Solutions','Accessories & Fittings'],
  quickLinks: ['Home','About Kothari Group','Resources & Knowledge Centre','Career Opportunities','Contact Us'],
  certifications: ['ISO 9001 Quality System','BIS IS 15778 / IS 4985','IS 13488 Micro Irrigation','PMKSY Govt. Subsidy Certified','RoHS Lead-Free Formulation'],
  socialLinks: [
    { name: 'YouTube', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
    { name: 'Facebook', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
    { name: 'Twitter', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
    { name: 'LinkedIn', icon: <div className="w-4 h-4 bg-[#1575B3] rounded-full" />, href: '#' },
  ],
  newsletterPlaceholder: 'Enter your email address',
  newsletterButton: 'Subscribe',
  copyright: '© 2026 Kothari Group India. All Rights Reserved. Empowering Water Management Across 23+ States.',
  privacyPolicy: 'Privacy Policy',
  termsOfUse: 'Terms of Use',
  socialgroup:[
    { links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/kothariirrigation/' },
      { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Va6OjqKA89MhSFoEY32l' },
      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@KothariIrrigation' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kothariirrigation_/' },
    ]}
  ]
};

const PipeproductsMegaMenu = {
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
            { title: 'CPVC Pipes & Fittings', url: '/cpvc/cpvc-hot-and-cold-water-piping-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/CPVC-PIPES-FITTINGS.webp', shortDesc: 'Hot & Cold Water Piping System' },
            { title: 'CPVC Solvent Cement', url: '/cpvc/cpvc-solvent-cement', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/cpvc.webp', shortDesc: 'Strong, Leak-Proof CPVC Water Joints'},
          
          ],
        },
        {
          name: 'UPVC',
          products: [
            { title: 'UPVC Pipes & Fittings', url: '/upvc/upvc-astm-plumbing-piping-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UPVC-PIPES-FITTINGS.webp',shortDesc: 'Trusted Cold Water Plumbing Pipe' },
            { title: 'UPVC Solvent System', url: '/upvc/upvc-solvent-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/UPVC-solvent-cement.webp',shortDesc: 'Strong, Leak-Proof UPVC Water Joints.'},
           
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
            { title: 'SWR (Soil, Waste & Rainwater) Piping System', url: '/soil-waste-and-rainwater-pipes-and-fittings/swr-pipes-and-fittings-for-drainage-systems', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/SWR-PIPES-FITTINGS.webp',shortDesc: 'Complete Soil, Waste & Rainwater Drainage.' },
            { title: 'PP Low Noise Drainage System', url: '/soil-waste-and-rainwater-pipes-and-fittings/pp-low-noise-drainage-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Low-Noise-Drainage-System.webp' ,shortDesc: 'Silent-Flow Underground Drainage Pipe'},
        ],
        },
        {
          name: 'Underground Pipe and Fittings',
          products: [
            { title: 'UPVC Underground Drainage Piping System (solid wall UDS)', url: '/underground-pipe-and-fittings/upvc-underground-drainage-piping-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/UDS-PIPES-FITTINGS.webp',shortDesc:'Solid Wall Pipe for Underground Drainage.' },
            { title: 'Foamcore Underground Drainage Piping System', url: '/underground-pipe-and-fittings/foamcore-underground-drainage-piping-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/UDS-Foamcore.webp',shortDesc: 'Lightweight Three Layer Drainage Solution.' },
            { title: 'Underground Double Wall Corrugated pipes(DWC)', url: '/underground-pipe-and-fittings/underground-double-wall-corrugated-pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/11/Underground-Double-Wall-Corrugated-pipesDWC.webp',shortDesc: 'Flexible, Durable Underground Drainage Pipe.' },
            { title: 'HDPE (Sewerage IS: 14333)', url: '/underground-pipe-and-fittings/hdpe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PE-Sewerage-Pipes-scaled.webp',shortDesc: 'Rugged Underground Sewerage Pipe.' },
            { title: 'Sub-Surface Drainage System', url: '/underground-pipe-and-fittings/sub-surface-drainage-system', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/11/Sub-Surface-Drainage-System.webp',shortDesc: 'Perforated Pipe for Smart Field Drainage.' },
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
            { title: 'DWC Pipe for Cable Protection', url: '/cable-protection/dwc-pipe-for-cable-protection', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/DWC-Pipe-for-Cable-Protection.webp',shortDesc: 'Rugged Underground Cable Duct Pipe' },
            { title: 'Electric Conduit Pipes & Fittings', url: '/cable-protection/electric-conduit-pipes-and-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/vayar.png' , shortDesc: 'Fire-Safe Electrical Wire Protection.'},
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
            { title: 'Self Fit PVC Pipe', url: '/upvc-pressure-pipes-fittings/self-fit-pvc-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Selffit-pipe.webp',shortDesc: 'No-Drill Flexible Irrigation Pipe.' },
            { title: 'Ring Fit PVC Pipe', url: '/upvc-pressure-pipes-fittings/ring-fit-pvc-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Ringfit-pipe.webp',shortDesc: 'Leak-Proof Underground Irrigation Pipeline.'},
            { title: 'Agri PVC Moulded Fittings', url: '/upvc-pressure-pipes-fittings/agri-pvc-moulded-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/molded-fittings-Product-Page.webp' , shortDesc: 'Complete Range of Irrigation Fittings'},
            { title: 'Fabricated Fittings & Repair Coupler (Rubber Ring)', url: '/upvc-pressure-pipes-fittings/fabricated-fittings-and-repair-coupler', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Fabricated-Fittings-Repair-Coupler.webp' ,shortDesc: 'Fast-Fix Irrigation Repair Fittings.'},
            { title: 'PVC Solvent Cement', url: '/upvc-pressure-pipes-fittings/pvc-solvent-cement', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/PVC-Solvent-Cement-1.webp' , shortDesc: 'Strong, Leak-Proof Pipe Bonding'},
              ],
        },
        {
          name: 'PE Pipes & Fittings',
          products: [
            { title: 'HDPE Piping', url: '/pe-pipes-and-fittings/hdpe-piping', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-PIPE-111.webp' ,shortDesc: 'Durable Multi-Grade Irrigation Pipe.'},
            { title: 'HDPE Coils', url: '/pe-pipes-and-fittings/hdpe-coils', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Coils.webp', shortDesc:'Flexible Pipe for Smooth Pumping.' },
            { title: 'HDPE Fittings', url: '/pe-pipes-and-fittings/hdpe-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Pipe-Fittings-1.webp', shortDesc: 'Reliable Fittings for Every Application.' },
            { title: 'MDPE Pipes', url: '/pe-pipes-and-fittings/compression-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/08/MDPE-PIPE.webp', shortDesc: 'Safe, Corrosion-Free Water Supply Pipe.'},
            { title: 'Compression Fittings', url: '/pe-pipes-and-fittings/compression-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/MDPE-Pipes-Fittings.webp' ,shortDesc: 'Leak-Proof Water & Gas Fittings.'},
            { title: 'PE Power Spray Hose Pipe (Spray Pipe)', url: '/pe-pipes-and-fittings/pe-power-spray-hose-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/PE-Power-Spray.webp' , shortDesc: 'Chemical-Resistant Precision Spray Pipe.' },
            { title: 'LD Krishi Pipe (Lay Flat Tubes)', url: '/pe-pipes-and-fittings/ld-krishi-pipe-lay-flat-tubes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/LD-Krishi.webp' , shortDesc: 'Lightweight Pipe for Field Water Delivery.' },
              ],
        },
        {
          name: 'Valves',
          products: [
            { title: 'Single & Double Union PVC Ball Valve', url: '/valves/single-and-double-union-pvc-ball-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Single-Double-Union-PVC.webp',shortDesc: 'Easy-Maintenance Irrigation Flow Valve.' },
            { title: 'Double Union PP Ball Valve', url: '/valves/double-union-pp-ball-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Union-Ball-Valve.webp',shortDesc: 'Rugged, Chemical-Resistant Flow Valve.' },
            { title: 'Plain White Blue Ball Valve', url: '/valves/plain-white-blue-ball-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Plain-white-blue-ball-valve.webp',shortDesc: 'Reliable Everyday Irrigation Valve.' },
            { title: 'Air Cum Vacuum Relief Valve', url: '/valves/air-cum-vacuum-relief-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Air-Cum-Vacuum-Relief-Valve.webp', shortDesc: 'Smart Pipeline Pressure Protection.' },
            { title: 'Butterfly Valve', url: '/valves/butterfly-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Butterfly-Valve.webp',shortDesc:'Quick-Turn High-Pressure Flow Valve.' },
            { title: 'Flush Valve', url: '/valves/flush-valve', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flush-Valve-1.webp', shortDesc:'Clog-Free Submain Flushing Valve.'},
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
            { title: 'Column Pipes', url: '/column-pipes/column-pipes-with-ss', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/coloum-pipe.webp' , shortDesc: 'Locking Column Pipe for Borewells.'},
            { title: 'PE Column Pipes For Submersible Pumps', url: '/column-pipes/pe-column-pipes-for-submersible-pumps', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/coming-soon.webp' , shortDesc: 'Flexible Column Pipe for Submersible Pumps.' },
              ],
        },
        {
          name: 'Casing Pipes',
          products: [
            { title: 'Casing Pipes', url: '/casing-pipes/casing-pipes-fittings', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/CASING-PIPE.webp', shortDesc: 'Trusted Borewell Protection Pipe.' },
            { title: 'Ribbed Casing Pipe', url: '/casing-pipes/ribbed-casing-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Ribbed-Casing-Pipe.png' ,shortDesc: 'Rugged Pipe for Aggressive Groundwater.'},
            { title: 'Screen Pipe/Slotted Pipe', url: '/casing-pipes/screen-pipe-slotted-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Screen-Pipe-Slotted-Pipe-n.webp', shortDesc: 'Clean Water, Protected Pump Systems.' },
            { title: 'Casing SDR Agriculture Pipe', url: '/casing-pipes/casing-sdr-agriculture-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/sdr-blue-casing-pipes-scaled.webp' , shortDesc: 'Reliable Water from Every Depth.'},
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
            { title: 'Suction Hose Pipes', url: '/pvc-suction-hose-pipes/suction-hose-pipes', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/suction-hose-pipes.webp', shortDesc: 'Heavy-Duty Suction & Delivery Hose.' },
              ],
        },
        {
          name: 'PVC Tubing/Garden Pipes',
          products: [
            { title: 'Kothari Special', url: '/pvc-tubing-garden-pipes/kothari-special', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/KOTHARI-SPECIAL-ORANGE-COLOR-2.webp',shortDesc: 'Legacy Garden Watering Hose.' },
            { title: 'Mossfree', url: '/pvc-tubing-garden-pipes/mossfree', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/MOSSFREE-BLACK-COLOUR-2.webp',shortDesc:'Anti-Moss Garden Hose Pipe.' },
            { title: 'Zebra', url: '/pvc-tubing-garden-pipes/zebra', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/ZEBRA.webp' , shortDesc: 'Rugged Hose for Heavy Garden Use.'},
            { title: 'OMD', url: '/pvc-tubing-garden-pipes/omd', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/OMD-2.webp' , shortDesc: 'Everyday Garden Watering Hose.'},
            { title: '50-50', url: '/pvc-tubing-garden-pipes/kothari-garden-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/05/50-50.webp', shortDesc: 'Trusted Garden Hose, Every Season.' },
            { title: 'Milky', url: '/pvc-tubing-garden-pipes/milky', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Milky.webp' ,shortDesc: 'Everyday Reliable Garden Hose.'},
            { title: 'Halwa', url: '/pvc-tubing-garden-pipes/halwa', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/HALWA-2.webp',shortDesc: 'Everyday Reliable Garden Hose.' },
            { title: 'CTP', url: '/pvc-tubing-garden-pipes/ctp', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/CTP-2.webp' ,shortDesc: 'Flexible All-Purpose Garden Hose.'},
            { title: 'Black Zebra', url: '/pvc-tubing-garden-pipes/black-zebra', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Black-garden.webp', shortDesc:'Safe, Low-Migration Garden Hose.' },
              ],
        },
        {
          name: 'PVC Braided Hose Pipe',
          products: [
            { title: 'Braided Hose Pipe', url: '/pvc-braided-hose-pipe/braided-hose-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Braided-hose.webp' ,shortDesc: 'High-Pressure Reinforced Hose Pipe.' },
            { title: 'Industrial Braided Hose Pipe 3 Layer', url: '/pvc-braided-hose-pipe/industrial-braided-hose-pipe-three-layer', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/KOTHARI-INDUSTRIAL-BRAIDED-HOSE-PIPE-3-LAYER.webp',shortDesc: 'Rugged Reinforced Industrial Hose.' },
            { title: 'Construction Hose Pipe 3 Layer', url: '/pvc-braided-hose-pipe/construction-hose-pipe-three-layer', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/CONSTRUCTION-2.webp', shortDesc:'Tough Hose Built for Job Sites' },
            { title: 'High Pressure Power Spray Hose Pipe (5 Layer)', url: '/pvc-braided-hose-pipe/high-pressure-power-spray-hose-pipe', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Power-Spray.webp', shortDesc:'Reinforced Hose for Spray Applications.' },
              ],
        },
       
      ],
    },
    
  ],
  };

const IrrigationproductsMegaMenu = {
  headline: 'Our Products',
  description: 'CPVC pipes, fittings and solvent cement for hot and cold water systems.',
  segments: [
    { name: 'Drip Irrigation System', desc: 'Complete drip irrigation solutions with driplines, drippers, polytubes, fittings, accessories and valves.', categories: [{ name: 'Dripline', products: [{ title: 'Dripline K-Gol NPC', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-GOL-NPC.webp',shortDesc: 'Clog-resistant dripline tubing delivering uniform, efficient crop irrigation.' },{ title: 'Dripline K-Gol PC', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-GOL-PC-1.webp',shortDesc: 'Pressure-compensating dripline ensuring uniform, efficient irrigation across slopes.' },{ title: 'Dripline K-Lin NPC', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-1.webp' ,shortDesc:'Advanced LLDPE dripline ensuring uniform, clog-resistant irrigation performance.'},{ title: 'Dripline K-Lin PCAS', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-PCAS-1.webp', shortDesc: 'Anti-siphon dripline providing precise, uniform, root-protected irrigation.'},{ title: 'Dripline K-Lin PCND', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-LIN-PCND-1.webp',shortDesc:'Advanced PCND dripline ensuring stable, uniform, root-protected irrigation.' }]},{ name: 'Polyfittings & Accessories', products: [{ title: 'Drip Poly Fittings', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIP-POLY-FITTINGS.webp',shortDesc:'Reinforced PPCP fittings providing durable, leak-proof, UV-resistant connections.' },{ title: 'Drip Winder', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/Drip-Winder.webp' , shortDesc:'Portable metal reel enabling quick, efficient dripline handling and storage.'}]},{ name: 'Drip Tubes (Polytube)', products: [{ title: 'Polytube', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/POLYTUBE.webp',shortDesc: 'Advanced LLDPE tubing delivering uniform flow and weather-resistant durability.' }]},{ name: 'Emitters (Drippers)', products: [{ title: 'Turbo Dripper', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/TURBO-DRIPPER-1.webp' ,shortDesc: 'Clog-resistant drippers ensuring precise, uniform, low-waste irrigation performance.'},{ title: 'PC Dripper', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PC-DRIPPER.webp',shortDesc:'Pressure-compensating dripper ensuring clog-resistant, uniform water distribution.' }]},{ name: 'Thinwall Drip Line', products: [{ title: 'Thin Wall Dripline K-Super', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SUPER.webp',shortDesc: 'Cylindrical drippers delivering uniform, clog-resistant irrigation across larger fields.' },{ title: 'Thin Wall Dripline K-Smar', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SMART.webp' , shortDesc: 'Durable dripline tubing ensuring precise, uniform, high-efficiency irrigation.'},{ title: 'Thin Wall Dripline K-Slim', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SLIM-ULTRA.webp',shortDesc: 'Precision dripline tubing delivering steady, efficient, clog-resistant irrigation.' },{ title: 'Thinwall Dripline K-Slim Ultra', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/DRIPLINE-K-SLIM.webp' , shortDesc: 'Reliable 10mil dripline tubing ensuring uniform, clog-resistant water distribution.'},{ title: 'K-Smart Screen Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/K-Smart-Screen-Filter.webp' ,shortDesc: 'Durable 130-micron filters providing cost-effective irrigation water filtration.'},{ title: 'Thinwall Drip Poly Fittings', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/08/Thinwall-Drip-Accessories.webp',shortDesc:'Durable barb fittings providing leak-free, UV- and chemical-resistant connections.' }]},{ name: 'Valves', products: [{ title: 'Single & Double Union PVC Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Single-Double-Union-PVC.webp',shortDesc: 'Durable PVC valves ensuring effortless, leak-proof irrigation flow control.' },{ title: 'Double Union PP Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/PP-Union-Ball-Valve.webp' ,shortDesc: 'Durable polypropylene valves offering reliable, leak-proof flow control.'},{ title: 'Plain White Blue Ball Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Plain-white-blue-ball-valve.webp',shortDesc: 'Compact, lightweight valves providing easy, leak-proof irrigation control.' },{ title: 'Butterfly Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Butterfly-Valve.webp' ,shortDesc: 'Compact disc valves offering quick operation and efficient flow control.'},{ title: 'Throttle Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Throttle-valve.webp' ,shortDesc: 'Durable irrigation valve enabling precise, visual water flow control.'},{ title: 'Air Cum Vacuum Relief Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Air-Cum-Vacuum-Relief-Valve.webp',shortDesc: 'Automatic air valve preventing vacuum, water hammer, and leakage.' },{ title: 'Flush Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flush-Valve-1.webp' ,shortDesc:'Durable flushing valve enabling easy, leak-proof irrigation system cleaning.'},{ title: 'Check Valve (Non-Return Valve)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Check-Valve-Non-Return-Valve.webp',shortDesc: 'Heavy-duty backflow preventer ensuring reliable, durable irrigation system protection.' }]},{ name: 'Drip Agri PVC Pipes', products: [{ title: 'UPVC Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PVC-Selffit-pipe.webp' ,shortDesc:'Durable HDPE distribution pipes for flexible, cost-effective irrigation.'}]},{ name: 'Drip Gravity Kits', products: [{ title: 'Gravity Drip Kit', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/KOTHARI-GRAVITY-DRIP-KIT.webp',shortDesc:'Pump-free drip irrigation kits enabling easy, efficient low-pressure watering.' }]},{ name: 'Mulching', products: [{ title: 'Mulch Films', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mulch.webp' ,shortDesc:'Mulching film conserves moisture, controls weeds, and promotes healthier crops.'}]}]},
    { name: 'Filters & Injectors', desc: 'Efficient filtration and fertilizer injection solutions with filters, dosing pumps and injectors.', categories: [{ name: 'Filters', products: [{ title: 'Hydrocyclone Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Hydrocyclone-Filter.webp' ,shortDesc:'Hydrodynamic filter providing efficient particle separation and extended filtration.'},{ title: 'Sand Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/SAND-FILTER-1.webp',shortDesc:'Advanced sand filters delivering ultra-fine, low-loss water filtration.' },{ title: 'Screen Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Screen-Filter.webp' ,shortDesc:'Durable screen filters offering efficient filtration and easy maintenance.'},{ title: 'Twin Screen Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Twin-Screen-Filter.webp' ,shortDesc:'Dual screen filter providing high-flow, durable, versatile filtration performance.'},{ title: 'Semi Automatic Screen Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Semi-Automatic-Screen-Filter-1.webp',shortDesc:'High-capacity filters offering easy maintenance and real-time clogging indication.' },{ title: 'Disc Filter & Twin Disc Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Disc-Filter-Twin-Disc-Filter-1.webp' ,shortDesc: 'Grooved disc filters delivering fine, efficient, low-maintenance water filtration.'},{ title: 'Mini Sigma Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mini-Sigma-Filter.webp' ,shortDesc:'Compact self-cleaning filters delivering efficient, automatic low-pressure filtration.'},{ title: 'Filtomat Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Filtomat-Filter.webp',shortDesc:'Power-free automatic filters ensuring continuous, efficient, water-saving filtration.' }]},{ name: 'Dosing pumps & Fertilizer Injectors', products: [{ title: 'HDPE Header Manifold', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/HDPE-Header-Manifold.webp' ,shortDesc:'Durable HDPE manifolds offering leak-proof, high-pressure irrigation performance.'},{ title: 'PP Header Assembly', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/PP-Header-Assembly.webp',shortDesc:'Durable PP manifolds with sturdy support and precise pressure monitoring.' },{ title: 'Venturi Injector', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Venturi-Injector.webp',shortDesc:'Efficient Venturi fertilizer injector ensuring uniform, energy-free crop nutrition.' },{ title: 'Dosing Pump', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/DOZING-PUMP.webp' ,shortDesc:'Adjustable fertilizer injector delivering precise, efficient nutrient application for irrigation.'}]}]},
    { name: 'Automation System', desc: 'Smart irrigation automation with fertigation machines, controllers, filters and control valves.', categories: [{ name: 'Fertigation Machines', products: [{ title: 'Nutrijet Fertigation Machines', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/NUTRIJET.webp' ,shortDesc:'IoT-enabled fertigation system delivering precise, automated nutrient management.'}]},{ name: 'Controllers', products: [{ title: 'Irribeat Controllers', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/IRRIBEAT.webp' ,shortDesc:'Smart IoT irrigation controller enabling remote, expandable multi-zone management.'},{ title: 'GSI (Galcon Smart Irrigation) Controller', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/GSI-Galcon-Smart-Irrigation.webp',shortDesc:'Compact IoT controller enabling remote, customizable irrigation and fertigation.' },{ title: 'Galpro Controller (AC/DC)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Galpro-AC-DC.webp',shortDesc:'Smart irrigation controller enabling automated, water-saving fertigation and scheduling.' }]},{ name: 'Automatic Filters & Accessories', products: [{ title: 'Mini Sigma Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Mini-Sigma-Filter.webp' ,shortDesc:'Compact self-cleaning filters delivering efficient, automatic low-pressure filtration.'},{ title: 'Filtomat Filter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Filtomat-Filter.webp' ,shortDesc:'Power-free automatic filters ensuring continuous, efficient, water-saving filtration.'},{ title: 'Solenoid Control Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Solenoid-Control-Valve.webp',shortDesc:'Hydraulic control valves enabling automated, high-flow irrigation water management.' },{ title: 'Pressure Reducing Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Pressure-Reducing-Valve.webp' ,shortDesc:'Hydraulic pressure regulator ensuring smooth, precise, energy-efficient irrigation control.'},{ title: 'Pressure Sustaining Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/Pressure-Sustaining-Valve.webp',shortDesc:'Hydraulic pressure-sustaining valve ensuring reliable, efficient irrigation flow control.' },{ title: 'Quick Pressure Relief Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/QUICK-PRESSURE.webp' ,shortDesc:'Automatic pressure relief valve protecting irrigation systems from overpressure.'},{ title: 'Filter Auto Backwash Valve', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/FILTER-BACKWASH.png.webp',shortDesc:'Compact automatic backwash valves enabling efficient, low-maintenance filtration control.' },{ title: 'Water Meter', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/WATER-METER.webp' ,shortDesc:'Durable magnetic flow meter providing accurate, versatile water measurement. '}]}]},
    { name: 'Micro & Mini Sprinklers', desc: 'Efficient micro and mini sprinklers, sprayers, misters and foggers for irrigation applications.', categories: [{ name: 'Micro Sprinklers & Assemblies', products: [{ title: 'K-Mic Excel', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Mic-Excel.webp',shortDesc:'Efficient micro sprinklers providing uniform, durable irrigation coverage.' },{ title: 'K-Mic Micro Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Mic-Micro-Sprinkler.webp',shortDesc:'High-pressure mist sprinklers providing gentle, customizable crop irrigation.' },{ title: 'K-Tuff Micro Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K-Tuff-Micro-Sprinkler.webp' ,shortDesc:'Low-pressure micro sprinklers delivering smooth, gentle, insect-protected irrigation.'}]},{ name: 'Mini Sprinklers & Assemblies', products: [{ title: 'Mini Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/MINI-SPRINKLER.png' ,shortDesc:'Adjustable mini sprinklers delivering uniform, flexible, weather-resistant crop irrigation.'}]},{ name: 'Micro Jets & assemblies', products: [{ title: 'Micro Sprayer', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/MICRO-SPRAYER.webp',shortDesc:'Versatile mini sprinklers delivering uniform, adjustable spray patterns.' }]},{ name: 'Misters & Assemblies', products: [{ title: 'K-Mist', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K%E2%80%93Fogger-K%E2%80%93Fogger.webp' ,shortDesc:'Efficient sprinklers providing gentle, water-saving coverage for large fields.'}]},{ name: 'Foggers & Assemblies', products: [{ title: 'K-Fogger', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/K%E2%80%93Fogger-K%E2%80%93Fogger.webp' ,shortDesc:'Fine-mist sprinklers delivering efficient cooling, humidity control, and uniform coverage.'}]}]},
    { name: 'Sprinkler Irrigration system', desc: 'Complete sprinkler irrigation solutions with sprinklers, pipes, connectors, rainguns and accessories.', categories: [{ name: 'Metal Sprinklers', products: [{ title: 'Metal Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/06/METAL-SPRINKLER.webp' ,shortDesc:'Durable ISI-certified impact sprinkler delivering uniform, wide-area coverage.'}]},{ name: 'Plastic Sprinklers', products: [{ title: 'Mini Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/MINI-SPRINKLER.png',shortDesc:'Adjustable plastic sprinklers delivering uniform, durable, flexible crop irrigation.' }]},{ name: 'HDPE Sprinklers Pipes (QCPE)', products: [{ title: 'Sprinklers Pipes (QCPE)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/07/QCPE-Spinklar-pipe.webp',shortDesc:'UV-resistant HDPE clamps ensuring smooth flow and flexible installation.' }]},{ name: 'Sprinkler Connectors & Accessories', products: [{ title: 'HDPE Pipe Sprinkler Set', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/HDPE-Pipe-Sprinkler-Set-1.webp',shortDesc:'HDPE sprinkler set with brass nozzle for precise, wide-area irrigation.' }]},{ name: 'Raingun & Accessories', products: [{ title: 'Raingun and Accessories', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Rainguns.webp' ,shortDesc:'Portable raingun sprinkler providing wide coverage and adjustable watering.'}]},{ name: 'Garden & Landscape Sprinklers', products: [{ title: 'Pop-up Spray Heads and Rotors', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Pop-up-spray-heads-rotors.png',shortDesc:'Gear-driven rotor sprinkler delivering uniform, gentle, long-lasting irrigation coverage.' },{ title: 'Swing Joint', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Swing-joint-1.png' ,shortDesc:'Flexible pop-up fittings protecting nozzles from pressure and damage.'},{ title: 'Quick Coupling Valve (QCV)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Quick-Coupling-Valve-QCV.webp' ,shortDesc:'Key-operated irrigation valves ensuring secure, portable, high-pressure connections.'}]},{ name: 'K-Eco Rain Pipes & K- Flex Submain Pipes', products: [{ title: 'K-Eco Sprinkler', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/K-Eco-sprinkler.webp',shortDesc:'Laser-perforated flat pipe delivering uniform, filter-free irrigation coverage.' },{ title: 'K-Flex Submain Pipes', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/04/Flexsubmain.webp' ,shortDesc:'Durable HDPE flat pipes offering flexible, cost-effective irrigation distribution.'}]}]},
    { name: 'Turnkey Projects', desc: 'Complete turnkey irrigation projects including PDN and CI solutions for efficient water management.', categories: [{ name: 'Turnkey Projects', products: [{ title: 'Turnkey Projects (PDN & CI)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/turnkey-projects-scaled.webp',shortDesc:'Coming Soon' },{ title: 'Turnkey Projects (Infra)', url: '#', image: 'https://admin.kotharigroupindia.com/wp-content/uploads/2025/10/coming-soon.webp',shortDesc:'Coming Soon' }]}]},
  ],
};

export default function ProductPageLayout({ catSlug, children }: { catSlug: string; children: React.ReactNode }) {
  const isPipe = ['cpvc','upvc','soil-waste-and-rainwater-pipes-and-fittings','underground-pipe-and-fittings','cable-protection','upvc-pressure-pipes-fittings','pe-pipes-and-fittings','valves','column-pipes','casing-pipes','pvc-suction-hose-pipes','pvc-tubing-garden-pipes','pvc-braided-hose-pipe','plumbing-pipes-and-fittings','agri-pipes-and-fittings','plumbing-pipes-fittings'].includes(catSlug);
  const megaMenu = isPipe ? PipeproductsMegaMenu : IrrigationproductsMegaMenu;
  const footerData = isPipe ? PipefooterData : IrrigationfooterData;
  const solutionsMenu = isPipe ? pipeSolutionsMegaMenu : irrigationSolutionsMegaMenu;
  return (
    <>
      <HeaderDivison solid productsMegaMenu={megaMenu} solutionsMegaMenu={solutionsMenu} />
      {children}
      <Footer footerData={footerData} />
    </>
  );
}
