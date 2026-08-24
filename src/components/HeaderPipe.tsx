'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Mega Menu Data Configurations
const aboutMegaMenu = {
  category: 'About Us',
  headline: 'Building Sustainable Piping & Agriculture Solutions',
  description: 'Discover our journey of engineering excellence, strong corporate governance, and commitment to environmental stewardship.',
  items: [
    {
      title: 'Our Story',
      url: '/about/our-story',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Our Board',
      url: '/about/our-board',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Capabilities & More',
      url: '/about/capabilities',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Sustainability',
      url: '/about/sustainability',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80',
    },
  ],
};

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

const resourcesMegaMenu = {
  category: 'Resources',
  headline: 'Knowledge Base & Industry Insights',
  description: 'Explore our latest industry recognitions, thought-leadership articles, and technical learning modules.',
  items: [
    {
      title: 'Awards',
      url: '/resources/awards',
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'News',
      url: '/resources/news',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80',
    },{
      title: 'Blogs',
      url: '/resources/blogs',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Knowledge Section',
      url: '/resources/knowledge-section',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    },
  ],
};

const scrollToId = (id: string) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const HeaderPipe: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [heroRevealed, setHeroRevealed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
 const [activeProductSegment, setActiveProductSegment] = useState(0);
const [activeProductCategory, setActiveProductCategory] = useState(0);
const [openSegment, setOpenSegment] = useState<number | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    division: 'Agriculture Division',
    message: '',
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

const handleMouseEnter = (menuKey: string) => {
  if (timeoutRef.current) clearTimeout(timeoutRef.current);
  setActiveDropdown(menuKey);
  if (menuKey === 'products') {
    setActiveProductSegment(0);
    setActiveProductCategory(0);
    setOpenSegment(null);
  }
};
const handleSegmentClick = (segIdx: number) => {
  if (openSegment === segIdx) {
    setOpenSegment(null);
  } else {
    setOpenSegment(segIdx);
    setActiveProductSegment(segIdx);
    setActiveProductCategory(0);
  }
};
  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    if (mobileOpen || isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen, isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const show = () => setHeroRevealed(true);
    const hide = () => setHeroRevealed(false);
    window.addEventListener('hero:revealed', show);
    window.addEventListener('hero:hidden', hide);
    return () => {
      window.removeEventListener('hero:revealed', show);
      window.removeEventListener('hero:hidden', hide);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const handleOpenGetInTouch = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setFormSubmitted(false);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        division: 'Agriculture Division',
        message: '',
      });
    }, 2500);
  };

  const navItemStyle = `px-3 py-2 text-[16px] font-medium transition-all duration-200 flex items-center gap-1 ${
    isScrolled
      ? 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
      : 'text-white/90 hover:text-white hover:bg-white/10'
  }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out ${
          isScrolled || mobileOpen
            ? 'bg-white backdrop-blur-md border-b border-[#DCEAF5] shadow-sm py-2'
            : 'bg-transparent border-b border-white/10 py-3'
        }`}
        style={{
          opacity: heroRevealed ? 1 : 0,
          pointerEvents: heroRevealed ? 'auto' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => scrollToId('home')}
            className={`flex items-center shrink-0 transition-all duration-300 px-3 py-1 ${
              isScrolled || mobileOpen ? 'bg-transparent' : 'bg-white'
            }`}
            aria-label="Kothari Group Home"
          >
            <img
              src="https://kotharigroupindia.com/img/Kothariblue_logo.png"
              alt="Kothari Group Logo"
              referrerPolicy="no-referrer"
              className="h-14 sm:h-16 object-contain max-w-[150px] sm:max-w-[180px] transition-all duration-300"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </Link>

          {/* Right Side: Nav + Actions */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link href="/" className={navItemStyle}>
                Home
              </Link>

              <div
                className="static"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={navItemStyle}>
                  About
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === 'about' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'about' && (
                  <div className="absolute left-0 top-full w-full bg-white border-b border-[#DCEAF5] shadow-2xl py-10 px-8 sm:px-12 transition-all duration-300 z-50">
                    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-start">
                      {/* Left Column - Category Info + Descriptive Text */}
                      <div className="col-span-5 border-r border-[#DCEAF5] pr-10 flex flex-col justify-between h-full">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#1575b3] block mb-2">
                            {aboutMegaMenu.category}
                          </span>
                          <h3 className="text-5xl font-normal text-[#0f172b] leading-snug mb-3">
                            {aboutMegaMenu.headline}
                          </h3>
                          <p className="text-lg text-[#5F6B7A] leading-relaxed">
                            {aboutMegaMenu.description}
                          </p>
                        </div>
                
<div className="mt-8 pt-6 border-t border-[#DCEAF5] flex items-center gap-8">
  <div>
    <span className="text-3xl font-light text-[#1575b3] tracking-tight">35+</span>
    <span className="block text-xs font-medium text-[#5F6B7A] uppercase tracking-wider mt-0.5">Years Legacy</span>
  </div>
  <div className="w-px h-8 bg-[#DCEAF5]" />
  <div>
    <span className="text-3xl font-light text-[#1575b3] tracking-tight">800+</span>
    <span className="block text-xs font-medium text-[#5F6B7A] uppercase tracking-wider mt-0.5">Partners</span>
  </div>
</div>
                      </div>

                      {/* Right Column - 2 in a row Grid */}
                      <div className="col-span-7 grid grid-cols-2 gap-6">
                        {aboutMegaMenu.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.url}
                            onClick={handleNavClick}
                            className="group flex flex-col space-y-2.5"
                          >
                            <div className="overflow-hidden aspect-[16/9] bg-slate-100 ">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                              />
                            </div>
                            <div className="flex items-center gap-1.5 text-sm font-medium text-[#111111] group-hover:text-[#1575B3] transition-colors">
                              <span>{item.title}</span>
                              <ChevronRight className="w-4 h-4 text-[#5F6B7A] group-hover:text-[#1575B3] group-hover:translate-x-0.5 transition-all" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

             {/* Products Mega Menu */}
<div
  className="static"
  onMouseEnter={() => handleMouseEnter('products')}
  onMouseLeave={handleMouseLeave}
>
  <button className={navItemStyle}>
    Products
    <ChevronDown
      className={`w-4 h-4 transition-transform duration-300 ${
        activeDropdown === 'products' ? 'rotate-180' : ''
      }`}
    />
  </button>

  {activeDropdown === 'products' && (
    <div className="absolute left-0 top-full w-full bg-white border-b border-[#DCEAF5] shadow-2xl py-10 px-8 sm:px-12 transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-start">

        {/* LEFT — Product Cards 2×2 */}
        <div className="col-span-7 border-r border-[#DCEAF5] pr-10">
          <div
            key={`seg-${activeProductSegment}-cat-${activeProductCategory}`}
            className="grid grid-cols-2 gap-6"
            style={{ animation: 'fadeSlideIn 0.25s ease-out' }}
          >
            {productsMegaMenu.segments[activeProductSegment].categories[activeProductCategory].products.map((product, idx) => (
              <Link
                key={idx}
                href={product.url}
                onClick={handleNavClick}
                className="group flex flex-col space-y-2.5"
              >
                <div className="overflow-hidden aspect-[16/9] bg-slate-100 ">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="flex items-start gap-1.5 text-sm font-medium text-[#111111] group-hover:text-[#1575B3] transition-colors">
                  {/* <ChevronRight className="w-4 h-4 text-[#5F6B7A] group-hover:text-[#1575B3] group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" /> */}
                  <span>{product.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

     {/* RIGHT — Heading, Description, Accordion Segments */}
<div className="col-span-5 pl-2 flex flex-col h-full">
  <div>
    <span className="text-xs font-bold uppercase tracking-wider text-[#1575b3] block mb-2">
      Products
    </span>
    <h3 className="text-5xl font-normal text-[#0f172b] leading-snug mb-2">
      {productsMegaMenu.headline}
    </h3>
    <p className="text-sm text-[#5F6B7A] leading-relaxed mb-8 min-h-[2.5rem] transition-all duration-200">
      {productsMegaMenu.segments[activeProductSegment].desc}
    </p>

    {/* Accordion Segments — 2 in row, click to open */}
 <div className="grid grid-cols-2 gap-3">
  {productsMegaMenu.segments.map((segment, segIdx) => {
    const isOpen = openSegment === segIdx;
    return (
      <div
        key={segIdx}
        className={`relative border transition-all duration-200 ${
          isOpen
            ? 'border-[#1575B3] bg-[#F0F7FC] shadow-sm shadow-[#1575B3]/8 z-10'
            : 'border-[#E2EBF3] bg-white hover:border-[#1575B3]/25 hover:shadow-sm cursor-pointer'
        }`}
        onClick={() => handleSegmentClick(segIdx)}
      >
        {/* Segment header */}
        <div className="flex items-center justify-between px-4 py-3">
          <span
            className={`text-[13px] font-semibold tracking-wide transition-colors leading-snug ${
              isOpen ? 'text-[#1575B3]' : 'text-[#1E293B]'
            }`}
          >
            {segment.name}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-[#94A3B8] transition-transform duration-300 shrink-0 ml-2 ${
              isOpen ? 'rotate-180 text-[#1575B3]' : ''
            }`}
          />
        </div>

        {/* Categories dropdown */}
        <div
          className={`absolute left-[-1px] right-[-1px] top-full mt-1 bg-white  border border-[#DCEAF5] shadow-xl shadow-black/[0.05] transition-all duration-200 ease-out origin-top ${
            isOpen
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 scale-[0.97] -translate-y-1.5 pointer-events-none'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="py-1.5 px-1.5">
            {segment.categories.map((cat, catIdx) => {
              const isCatActive = activeProductSegment === segIdx && activeProductCategory === catIdx;
              return (
                <Link
                  key={catIdx}
                  href={cat.products[0]?.url || '#'}
                  onClick={handleNavClick}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setActiveProductSegment(segIdx);
                    setActiveProductCategory(catIdx);
                  }}
                  className={`flex items-center gap-2.5 px-3 py-2 transition-all duration-150 ${
                    isCatActive
                      ? 'bg-[#F0F7FC] text-[#1575B3]'
                      : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#1E293B]'
                  }`}
                >
                  <span className={`w-1 h-1  shrink-0 transition-colors ${
                    isCatActive ? 'bg-[#1575B3]' : 'bg-[#CBD5E1]'
                  }`} />
                  <span className={`text-[13px] ${isCatActive ? 'font-semibold' : 'font-medium'}`}>
                    {cat.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  })}
</div>
  </div>

  {/* Bottom link */}
  <div className="mt-8 pt-6 border-t border-[#DCEAF5]">
    <Link
      href={`/products/${productsMegaMenu.segments[activeProductSegment].name.toLowerCase().replace(/\s+/g, '-')}`}
      onClick={handleNavClick}
      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f172b] hover:text-[#1575B3] group transition-colors"
    >
      <span>View All {productsMegaMenu.segments[activeProductSegment].name}</span>
      <ChevronRight className="w-4 h-4 text-[#0f172b] group-hover:text-[#1575B3] group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
</div>

      </div>
    </div>
  )}
</div>

              <div
                className="static"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={navItemStyle}>
                  Resources
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === 'resources' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'resources' && (
                  <div className="absolute left-0 top-full w-full bg-white border-b border-[#DCEAF5] shadow-2xl py-10 px-8 sm:px-12 transition-all duration-300 z-50">
                    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-start">
                  
                      <div className="col-span-5 border-r border-[#DCEAF5] pr-10 flex flex-col justify-between h-full">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#1575b3] block mb-2">
                            {resourcesMegaMenu.category}
                          </span>
                          <h3 className="text-5xl font-normal text-[#0f172b] leading-snug mb-3">
                            {resourcesMegaMenu.headline}
                          </h3>
                          <p className="text-lg text-[#5F6B7A] leading-relaxed">
                            {resourcesMegaMenu.description}
                          </p>
                        </div>
                      {/* Resources Mega Menu: Text Action Link */}
<div className="mt-8 pt-6 border-t border-[#DCEAF5]">
  <Link 
    href="/resources/knowledge-section"
    onClick={handleNavClick}
    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f172b] hover:text-[#1575B3] group transition-colors"
  >
    <span>Explore Technical Specifications & Documentation</span>
    <ChevronRight className="w-4 h-4 text-[#0f172b] group-hover:text-[#1575B3] group-hover:translate-x-1 transition-transform" />
  </Link>
</div>
                      </div>

                      {/* Right Column - 2 in a row Grid */}
                      <div className="col-span-7 grid grid-cols-2 gap-6">
                        {resourcesMegaMenu.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.url}
                            onClick={handleNavClick}
                            className="group flex flex-col space-y-2.5"
                          >
                            <div className="overflow-hidden aspect-[16/9] bg-slate-100 ">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                              />
                            </div>
                            <div className="flex items-center gap-1.5 text-sm font-medium text-[#111111] group-hover:text-[#1575B3] transition-colors">
                              <span>{item.title}</span>
                              <ChevronRight className="w-4 h-4 text-[#5F6B7A] group-hover:text-[#1575B3] group-hover:translate-x-0.5 transition-all" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/careers" className={navItemStyle}>
                Career
              </Link>

              <Link href="/contact" className={navItemStyle}>
                Contact
              </Link>
            </nav>

            <button
              onClick={handleOpenGetInTouch}
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all ${
                isScrolled || activeDropdown
                  ? 'bg-[#1575B3] hover:bg-[#0E588A] text-white shadow-md shadow-[#1575B3]/15'
                  : 'bg-white hover:bg-white/90 text-black shadow-lg'
              }`}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2.5 border transition ${
                isScrolled || mobileOpen || activeDropdown
                  ? 'text-[#1575B3] bg-[#F5FAFF] border-[#DCEAF5] hover:bg-[#DCEAF5]/50'
                  : 'text-white bg-white/10 border-white/20 hover:bg-white/20'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden fixed top-[65px] left-0 w-full h-[calc(100vh-65px)] bg-white z-[999] flex flex-col justify-between px-6 py-6 border-t border-[#DCEAF5] overflow-y-auto">
            <div className="space-y-2">
              <Link
                href="/"
                onClick={handleNavClick}
                className="block w-full px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] transition"
              >
                Home
              </Link>

              {/* Mobile About Submenu */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
                >
                  <span>About</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5F6B7A] transition-transform ${
                      activeDropdown === 'about' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeDropdown === 'about' && (
                  <div className="pl-4 space-y-1 pt-1">
                    {aboutMegaMenu.items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.url}
                        onClick={handleNavClick}
                        className="block p-2.5 text-sm font-medium text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF] transition"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

         {/* Mobile Products Submenu */}
<div>
  <button
    onClick={() => {
      if (activeDropdown === 'products') {
        setActiveDropdown(null);
      } else {
        setActiveDropdown('products');
        setActiveProductSegment(0);
        setActiveProductCategory(0);
      }
    }}
    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
  >
    <span>Products</span>
    <ChevronDown
      className={`w-5 h-5 text-[#5F6B7A] transition-transform ${
        activeDropdown === 'products' ? 'rotate-180' : ''
      }`}
    />
  </button>
  {activeDropdown === 'products' && (
    <div className="pl-4 space-y-3 pt-1 pb-2">
      {productsMegaMenu.segments.map((segment, segIdx) => (
        <div key={segIdx}>
          <button
            onClick={() => {
              setActiveProductSegment(segIdx);
              setActiveProductCategory(0);
            }}
            className={`w-full text-left px-2.5 py-2 text-sm font-semibold transition-colors ${
              activeProductSegment === segIdx ? 'text-[#1575B3]' : 'text-[#111111]'
            }`}
          >
            {segment.name}
          </button>
          {activeProductSegment === segIdx && (
            <div className="pl-4 space-y-1.5">
              {segment.categories.map((cat, catIdx) => (
                <div key={catIdx}>
                  <button
                    onClick={() => setActiveProductCategory(catIdx)}
                    className={`w-full text-left px-2.5 py-1.5 text-sm font-medium transition-colors ${
                      activeProductCategory === catIdx ? 'text-[#1575B3]' : 'text-[#5F6B7A]'
                    }`}
                  >
                    {cat.name}
                  </button>
                  {activeProductCategory === catIdx && (
                    <div className="pl-4 space-y-0.5">
                      {cat.products.map((product, pIdx) => (
                        <Link
                          key={pIdx}
                          href={product.url}
                          onClick={handleNavClick}
                          className="block px-2.5 py-1.5 text-sm text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF] transition"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>

              {/* Mobile Resources Submenu */}
              <div>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5F6B7A] transition-transform ${
                      activeDropdown === 'resources' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeDropdown === 'resources' && (
                  <div className="pl-4 space-y-1 pt-1">
                    {resourcesMegaMenu.items.map((item, i) => (
                      <Link
                        key={i}
                        href={item.url}
                        onClick={handleNavClick}
                        className="block p-2.5 text-sm font-medium text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF] transition"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/careers"
                onClick={handleNavClick}
                className="block w-full px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] transition"
              >
                Career
              </Link>

              <Link
                href="/contact"
                onClick={handleNavClick}
                className="block w-full px-4 py-3 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] transition"
              >
                Contact
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-auto">
              <button
                onClick={handleOpenGetInTouch}
                className="w-full flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white py-3.5 font-medium text-base shadow-sm transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-4xl bg-white border border-[#DCEAF5] shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 text-[#5F6B7A] hover:text-[#111111] hover:bg-[#F5FAFF] transition border border-transparent hover:border-[#DCEAF5]"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="hidden md:flex md:w-5/12 bg-[#0E588A] text-white p-6 sm:p-8 flex-col justify-between shrink-0">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-white/70 block mb-2">
                  Kothari Group
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight text-white mb-4">
                  Let’s build sustainable solutions together.
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-8">
                  Reach out to our specialized agricultural and piping experts for consultations, product catalogs, or institutional queries.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/15">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Phone</span>
                    <span className="text-sm font-medium text-white">+91 1800 120 4343</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Email</span>
                    <span className="text-sm font-medium text-white">enquiry@kotharigroupindia.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Headquarters</span>
                    <span className="text-sm text-white/90">
                      Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413001, Maharashtra
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-7/12 p-6 sm:p-8 bg-white overflow-y-auto">
              {formSubmitted ? (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 bg-[#EAF8EF] text-[#1E8E3E] flex items-center justify-center mb-4 border border-[#1E8E3E]/20">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-semibold text-[#111111] mb-2">Inquiry Submitted</h4>
                  <p className="text-sm text-[#5F6B7A] max-w-md">
                    Thank you for reaching out. A representative from Kothari Group will contact you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#111111] mb-1">Get in Touch</h4>
                    <p className="text-xs text-[#5F6B7A] mb-4">
                      Fill out your details and select the division relevant to your request.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Division Interest
                    </label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                    >
                      <option value="Agriculture Division">Agriculture Division (Drip & Irrigation)</option>
                      <option value="Pipe Division">Pipe Division (Agri, Plumbing & Drainage)</option>
                      <option value="General Corporate">General Corporate Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Message / Requirement
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify product requirements, location, or general query..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white py-3.5 font-medium text-sm transition-colors shadow-sm mt-2"
                  >
                    Submit Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};