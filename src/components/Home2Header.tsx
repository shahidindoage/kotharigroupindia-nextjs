'use client';

import React, { useEffect, useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sprout, 
  Factory, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Building2,
  Users,
  Award,
  ArrowUp,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import {
  RECAPTCHA_SITE_KEY,
  getRecaptchaToken,
} from '@/lib/recaptcha-client';
import { useOtpVerification } from '@/lib/use-otp-verification';

const sections = [
  // { id: 'why-kothari', label: 'About Kothari Group' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'career', label: 'Career' },
  {id:"GST",label:'GST Details'}
];

const aboutUsItems = [
  {
    name: 'About Us',
    desc: 'Our legacy, vision & corporate ethos.',
    icon: Building2,
    accent: 'text-[#1575B3] bg-[#F5FAFF]',
    url: '/about-us'
  },
  {
    name: 'Our Board',
    desc: 'Leadership steering our growth.',
    icon: Users,
    accent: 'text-[#1575B3] bg-[#F5FAFF]',
    url: '/our-management'
  },
  {
    name: 'Capabilities & More',
    desc: 'Infrastructure & operational reach.',
    icon: Award,
    accent: 'text-[#1575B3] bg-[#F5FAFF]',
    url: '/capabilities-infrastructure'
  }
];

const divisions = [
  {
    id: 'solutions',
    name: 'Pipe Division',
    desc: 'Agri, plumbing & drainage pipes.',
    icon: Factory,
    accent: 'text-[#1575B3] bg-[#F5FAFF]',
    url: '/pipe-division'
  },
  {
    id: 'solutions',
    name: 'Irrigation Division',
    desc: 'Drip, sprinklers & micro irrigation.',
    icon: Sprout,
    accent: 'text-[#1E8E3E] bg-[#EAF8EF]',
    url: '/irrigation-division'
  },
];

const getIamOptions = (division: string) => {
  const isIrrigation = division === 'Irrigation Division';
  return [
    'Farmer',
    'Dealer',
    'Government',
    'Agri Professional',
    ...(isIrrigation ? ['Irrigation Consultant'] : ['MEP Consultant', 'Plumber']),
    'Other'
  ];
};

const requirements = [
  'Product Enquiry',
  'Quotation',
  'Dealer / Distributor Enquiry',
  'Project Requirement',
  'After-Sales Support',
  'Other'
];

const scrollToId = (id: string) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Home2Header: React.FC<{ solid?: boolean }> = ({ solid = false }) => {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [divOpen, setDivOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [heroRevealed, setHeroRevealed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const visibleSections = sections.filter(
    (item) => item.id !== 'GST' || pathname === '/contact-us'
  );

  const solidHeader = solid || isScrolled || mobileOpen;
  
  // Popup Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSending, setFormSending] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    division: 'Irrigation Division',
    iam: 'Farmer',
    requirement: 'Product Enquiry',
    otherRequirement: '',
  });
  const otp = useOtpVerification();
  const iamOptions = getIamOptions(formData.division);



  const [showTopButton, setShowTopButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowTopButton(window.scrollY > 300);
      };
      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  // Lock scroll when mobile menu or modal is active
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

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
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
    const ids = ['why-kothari', 'impact', 'solutions'];
    const onScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const pos = window.scrollY + 160;
      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= pos) current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    setDivOpen(false);
    setAboutOpen(false);
    scrollToId(id);
  };

  const handleOpenGetInTouch = () => {
    setMobileOpen(false);
    setDivOpen(false);
    setAboutOpen(false);
    setFormSubmitted(false);
    otp.resetOtp();
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formSending) return;
    if (otp.otpStatus !== 'verified') {
      setFormError('Please verify your phone number with the WhatsApp OTP first.');
      return;
    }
    setFormError('');
    setFormSending(true);
    try {
      const recaptchaToken = await getRecaptchaToken();
      const res = await fetch('/api/get-in-touch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        if (data?.verifyRequired) {
          otp.resetOtp();
          throw new Error(data?.error || 'Your OTP verification expired. Please verify again.');
        }
        throw new Error(data?.error || 'Could not send your enquiry.');
      }
      setFormSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setFormSubmitted(false);
        setFormError('');
        otp.resetOtp();
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          division: 'Irrigation Division',
          iam: 'Farmer',
          requirement: 'Product Enquiry',
          otherRequirement: '',
        });
      }, 2500);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Could not send your enquiry.');
    } finally {
      setFormSending(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out ${
          solidHeader
            ? 'bg-white backdrop-blur-md border-b border-[#DCEAF5] shadow-sm py-2'
            : 'bg-transparent border-b border-white/10 py-3'
        }`}
        style={{
          opacity: heroRevealed ? 1 : 0,
          pointerEvents: heroRevealed ? 'auto' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => handleNav('home')}
            className={`flex items-center shrink-0 transition-all duration-300 px-3 py-1 ${
              solidHeader ? 'bg-transparent' : 'bg-transparent'
            }`}
            aria-label="Kothari Group Home"
          >
            <img 
              src={`/logos/${solidHeader ? 'Kothari Group.png' : 'Kothari Group_W2.png'}`}
              alt="Kothari Group Logo"
              referrerPolicy="no-referrer"
              className="h-14 sm:h-16 object-contain max-w-[150px] sm:max-w-[180px] transition-all duration-300"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </Link>

          {/* Right Side: Nav + Actions */}
          <div className="ml-auto flex items-center gap-3">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Home Link */}
              <Link
              href="/"
                onClick={() => handleNav('home')}
                className={`px-3.5 py-2 text-[17px] font-medium transition-all duration-200 ${
                  active === '#'
                    ? 'text-[#1575B3]'
                    : solidHeader ? 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-[17px] font-medium transition-all duration-200 ${
                    active === 'why-kothari'
                      ? 'text-[#1575B3]'
                      : solidHeader ? 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  About
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>

                {aboutOpen && (
                  <div className="absolute left-0 top-full pt-2 w-72">
                    <div className="bg-white border border-[#DCEAF5] shadow-xl p-2 space-y-1">
                      {aboutUsItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <Link 
                            href={item.url}
                            key={i}
                            onClick={() => {
                              setAboutOpen(false);
                              setMobileOpen(false);
                            }}
                            className="w-full flex items-start gap-3 p-3 hover:bg-[#F5FAFF] transition-colors text-left"
                          >
                            <span className={`w-10 h-10 flex items-center justify-center shrink-0 ${item.accent}`}>
                              <Icon className="w-5 h-5" />
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-[#111111]">{item.name}</span>
                              <span className="block text-xs font-light text-[#5F6B7A] mt-0.5">{item.desc}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Remaining Sections */}
              {visibleSections.map((item) => (
                <Link
                  key={item.id}
                  href={`/${item.id}`}
                  className={`px-3.5 py-2 text-[17px] font-medium transition-all duration-200 ${
                    active === item.id || pathname === `/${item.id}`
                      ? 'text-[#1575B3]'
                      : solidHeader ? 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Our Divisions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDivOpen(true)}
                onMouseLeave={() => setDivOpen(false)}
              >
                <button
                  onClick={() => setDivOpen(!divOpen)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-[17px] font-medium transition-all duration-200 ${
                    active === 'solutions'
                      ? 'text-[#1575B3]'
                      : solidHeader ? 'text-[#5F6B7A] hover:text-[#1575B3] hover:bg-[#F5FAFF]/60'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Divisions
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${divOpen ? 'rotate-180' : ''}`} />
                </button>

                {divOpen && (
                  <div className="absolute right-0 top-full pt-2 w-72">
                    <div className="bg-white border border-[#DCEAF5] shadow-xl p-2 space-y-1">
                      {divisions.map((d, i) => {
                        const Icon = d.icon;
                        return (
                          <Link 
                            href={d.url}
                            key={i}
                            onClick={() => handleNav(d.id)}
                            className="w-full flex items-start gap-3 p-3 hover:bg-[#F5FAFF] transition-colors text-left"
                          >
                            <span className={`w-10 h-10 flex items-center justify-center shrink-0 ${d.accent}`}>
                              <Icon className="w-5 h-5" />
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-[#111111]">{d.name}</span>
                              <span className="block text-xs font-light text-[#5F6B7A] mt-0.5">{d.desc}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Get in Touch Button */}
            <button
              onClick={handleOpenGetInTouch}
className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all ${
                solidHeader
                  ? 'bg-[#1575B3] hover:bg-[#0E588A] text-white shadow-md shadow-[#1575B3]/15'
                  : 'bg-white hover:bg-white/90 text-black shadow-lg'
              }`}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setDivOpen(false);
                setAboutOpen(false);
              }}
              className={`lg:hidden p-2.5 border transition ${
                solidHeader
                  ? 'text-[#1575B3] bg-[#F5FAFF] border-[#DCEAF5] hover:bg-[#DCEAF5]/50'
                  : 'text-white bg-white/10 border-white/20 hover:bg-white/20'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Full-Screen Mobile Menu Overlay */}
        {mobileOpen && (
          <div className="lg:hidden fixed top-[65px] left-0 w-full h-[calc(100vh-65px)] bg-white z-[999] flex flex-col justify-between px-6 py-8 border-t border-[#DCEAF5] overflow-y-auto">
            <div className="space-y-3">
              {/* Mobile Home Link */}
              <button
                onClick={() => handleNav('home')}
                className="w-full text-left px-4 py-3.5 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] border border-transparent hover:border-[#DCEAF5] transition"
              >
                Home
              </button>

              {/* Mobile About Us Submenu */}
              <div className="space-y-1">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
                >
                  <span>About</span>
                  <ChevronDown className={`w-5 h-5 text-[#5F6B7A] transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {aboutOpen && (
                  <div className="pl-2 space-y-2 pt-1">
                    {aboutUsItems.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={i}
                          href={item.url}
                          onClick={() => {
                            setAboutOpen(false);
                            setMobileOpen(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3  transition text-left"
                        >
                          {/* <span className={`w-10 h-10 flex items-center justify-center shrink-0 ${item.accent}`}>
                            <Icon className="w-5 h-5" />
                          </span> */}
                          <span>
                            <span className="block text-sm font-medium text-[#5F6B7A]">{item.name}</span>
                            {/* <span className="block text-xs font-light text-[#5F6B7A] mt-0.5">{item.desc}</span> */}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Sections */}
              {visibleSections.map((item) => (
                <Link
                  key={item.id}
                  href={`/${item.id}`}
                  onClick={() => {
                    setMobileOpen(false);
                    setDivOpen(false);
                    setAboutOpen(false);
                  }}
                  className="w-full block text-left px-4 py-3.5 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] hover:text-[#1575B3] border border-transparent hover:border-[#DCEAF5] transition"
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Divisions Submenu */}
              <div className="space-y-1 pt-2">
                <button
                  onClick={() => setDivOpen(!divOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-base font-medium text-[#111111] hover:bg-[#F5FAFF] transition"
                >
                  <span>Divisions</span>
                  <ChevronDown className={`w-5 h-5 text-[#5F6B7A] transition-transform ${divOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {divOpen && (
                  <div className="pl-2 space-y-2 pt-1">
                    {divisions.map((d, i) => {
                      const Icon = d.icon;
                      return (
                        <Link
                          key={i}
                          href={d.url}
                          onClick={() => handleNav(d.id)}
                          className="w-full flex items-center gap-3 px-4 py-3  transition text-left"
                        >
                          {/* <span className={`w-10 h-10 flex items-center justify-center shrink-0 ${d.accent}`}>
                            <Icon className="w-5 h-5" />
                          </span> */}
                          <span>
                            <span className="block text-sm font-medium text-[#5F6B7A]">{d.name}</span>
                            {/* <span className="block text-xs font-light text-[#5F6B7A] mt-0.5">{d.desc}</span> */}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Action Area */}
            <div className="pt-6 border-t border-slate-100 mt-auto">
              <button
                onClick={handleOpenGetInTouch}
                className="w-full flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] text-white py-4 font-medium text-base shadow-sm transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      {/* Get in Touch Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Dark Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-white border border-[#DCEAF5] shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row">
            {/* Modal Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 text-[#5F6B7A] hover:text-[#111111] hover:bg-[#F5FAFF] transition border border-transparent hover:border-[#DCEAF5]"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Column */}
            <div className="hidden md:flex md:w-5/12 bg-[#0E588A] text-white p-6 sm:p-8 flex-col justify-between shrink-0">
              <div>
                <img
                  src="/logos/Kothari Group_W2.png"
                  alt="Kothari Group Logo"
                  referrerPolicy="no-referrer"
                  className="h-10 w-auto object-contain mb-5"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight text-white mb-4">
                  Get in Touch with Kothari Group. 
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-8">
                  Share your requirement with our piping and irrigation experts. We’ll get back to you with the right guidance. 
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
                    <span className="text-sm font-medium text-white">{formData.division === 'Pipe Division' ? 'sales.pipe@kotharigroupindia.com' : 'sales.irrigation@kotharigroupindia.com'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#82C3EC] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-white/60 uppercase">Headquarters</span>
                    <a href='https://maps.app.goo.gl/qCPHM3aF8EQkpaBw7' target="_blank" className="flex items-start gap-2 hover:text-white hover:underline ">Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413001, Maharashtra</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
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

                  <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,2.5fr)] gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
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
                      <div className="flex gap-2">
                        <input
                          type="tel"
                          required
                          placeholder="+91 "
                          value={formData.phone}
                          onChange={(e) => {
                            const next = e.target.value;
                            setFormData({ ...formData, phone: next });
                            if (next !== formData.phone) otp.resetOtp();
                          }}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                        />
                        {otp.otpStatus !== 'verified' && (
                          <button
                            type="button"
                            onClick={() => otp.sendOtp(formData.phone, formData.fullName || 'Website User')}
                            disabled={otp.otpStatus === 'sending' || otp.resendIn > 0}
                            className="shrink-0 px-3.5 py-2.5 text-xs font-semibold border border-[#1575B3] bg-white text-[#1575B3] hover:bg-[#F5FAFF] disabled:opacity-50 disabled:cursor-not-allowed transition active:scale-[0.98]"
                          >
                            {otp.otpStatus === 'sending'
                              ? 'Sending…'
                              : otp.resendIn > 0
                                ? `Resend ${otp.resendIn}s`
                                : otp.otpStatus === 'idle'
                                  ? 'Send OTP'
                                  : 'Resend OTP'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {otp.otpStatus === 'verified' && (
                    <div className="flex flex-wrap items-center justify-between gap-2 border border-[#1E8E3E]/30 bg-[#F4FBF6] px-3.5 py-2.5">
                      <span className="flex items-center gap-2 text-xs font-medium text-[#1E8E3E]">
                        <CheckCircle2 className="w-4 h-4" />
                        {formData.phone} verified on WhatsApp
                      </span>
                      <button
                        type="button"
                        onClick={otp.resetOtp}
                        className="text-xs font-medium text-[#1575B3] underline underline-offset-2 hover:text-[#0E588A]"
                      >
                        Change number
                      </button>
                    </div>
                  )}

                  {(otp.otpStatus === 'sent' || otp.otpStatus === 'verifying') && (
                    <div className="border border-[#DCEAF5] bg-[#F8FBFE] p-3.5 space-y-2.5">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          inputMode="numeric"
                          autoComplete="one-time-code"
                          maxLength={6}
                          placeholder="Enter 6-digit OTP"
                          value={otp.otp}
                          onChange={(e) => otp.setOtpField(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              otp.verifyOtp(formData.phone);
                            }
                          }}
                          className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition tracking-[0.4em] text-center font-semibold"
                        />
                        <button
                          type="button"
                          onClick={() => otp.verifyOtp(formData.phone)}
                          disabled={otp.otpStatus === 'verifying' || otp.otp.length !== 6}
                          className="shrink-0 px-4 py-2.5 text-xs font-semibold bg-[#1575B3] hover:bg-[#0E588A] disabled:opacity-60 disabled:cursor-not-allowed text-white transition active:scale-[0.98]"
                        >
                          {otp.otpStatus === 'verifying' ? (
                            <span className="flex items-center gap-1.5">
                              <Loader2 className="w-3.5 h-3.5 animate-spin" /> Verifying
                            </span>
                          ) : (
                            'Verify OTP'
                          )}
                        </button>
                      </div>
                      {otp.otpMsg && (
                        <p
                          className={`text-xs ${
                            otp.otpTone === 'error'
                              ? 'text-red-600'
                              : otp.otpTone === 'success'
                                ? 'text-[#1E8E3E]'
                                : 'text-[#5F6B7A]'
                          }`}
                        >
                          {otp.otpMsg}
                        </p>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Division Interest
                    </label>
                    <select
                      value={formData.division}
                      onChange={(e) => {
                        const nextDivision = e.target.value;
                        const nextIamOptions = getIamOptions(nextDivision);
                        setFormData((prev) => ({
                          ...prev,
                          division: nextDivision,
                          iam: nextIamOptions.includes(prev.iam) ? prev.iam : 'Farmer',
                        }));
                      }}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                    >
                      <option value="Irrigation Division">Irrigation Division (Drip & Irrigation)</option>
                      <option value="Pipe Division">Pipe Division (Agri, Plumbing & Drainage)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      I Am *
                    </label>
                    <select
                      required
                      value={formData.iam}
                      onChange={(e) => setFormData({ ...formData, iam: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                    >
                      {iamOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                      Requirement
                    </label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] focus:outline-none focus:border-[#1575B3] focus:bg-white transition"
                    >
                      {requirements.map((req) => (
                        <option key={req} value={req}>{req}</option>
                      ))}
                    </select>
                  </div>

                  {formData.requirement === 'Other' && (
                    <div>
                      <label className="block text-xs font-medium text-[#111111] uppercase tracking-wider mb-1.5">
                        Other Requirement
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please specify your requirement..."
                        value={formData.otherRequirement}
                        onChange={(e) => setFormData({ ...formData, otherRequirement: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F5F6F8] border border-[#DCEAF5] text-[#111111] placeholder:text-[#5F6B7A]/60 focus:outline-none focus:border-[#1575B3] focus:bg-white transition resize-none"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formSending || otp.otpStatus !== 'verified'}
                    className="w-full flex items-center justify-center gap-2 bg-[#1575B3] hover:bg-[#0E588A] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 font-medium text-sm transition-colors shadow-sm mt-2"
                  >
                    {formSending ? 'Submitting…' : otp.otpStatus !== 'verified' ? 'Verify OTP to Submit' : 'Submit Inquiry'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  {otp.otpStatus !== 'verified' && !formError && (
                    <p className="text-[11px] text-[#5F6B7A] -mt-2">
                      Verify your WhatsApp number with the OTP to enable submission.
                    </p>
                  )}
                  {formError && (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2">
                      {formError}
                    </p>
                  )}
                  {RECAPTCHA_SITE_KEY && (
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Protected by reCAPTCHA — the Google{' '}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-slate-500"
                      >
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-slate-500"
                      >
                        Terms of Service
                      </a>{' '}
                      apply.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}


      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[45] flex flex-col items-stretch gap-2">

       <Link
              href="/become-dealer"
        style={{ writingMode: 'vertical-rl' }}
        className="bg-[#1575B3] hover:bg-[#0E588A] text-white font-extrabold text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase py-4 sm:py-5 px-2.5 sm:px-3 shadow-[0_8px_30px_rgb(21,117,179,0.3)] hover:shadow-[0_8px_35px_rgb(21,117,179,0.5)] border-l-1 border-y border-[#fff] hover:border-[#fff] transition-all duration-300 ease-out active:scale-95 cursor-pointer select-none group flex items-center justify-center gap-2"
      >
        <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform duration-300 rotate-90" />
        <span className="whitespace-nowrap">Become Dealer</span>
      </Link>

      {pathname === '/career' && (
        <a
          href="https://wa.me/9545551945"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          className="bg-[#1575B3] hover:bg-[#0E588A] shadow-[#1575B3]/15 shadow-[0_8px_30px_rgb(21,117,179,0.3)] hover:shadow-[0_8px_35px_rgb(21,117,179,0.5)] border border-[#fff] transition-all duration-300 ease-out active:scale-95 cursor-pointer select-none group flex items-center justify-center px-3.5 py-5"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-5 h-5 sm:w-[22px] sm:h-[22px] fill-white group-hover:scale-110 transition-transform duration-300"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.945c0 2.096.549 4.142 1.595 5.945L0 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.585 0 11.946-5.359 11.949-11.945a11.87 11.87 0 0 0-3.42-8.494" />
          </svg>
        </a>
      )}
    </div> 


      {showTopButton && (
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  aria-label="Back to top"
                  title="Back to top"
                  className="fixed bottom-6 right-6 z-[45] w-11 h-11 bg-[#1575B3] hover:bg-[#0E588A] text-white shadow-lg flex items-center justify-center transition-all"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              )}
    </>
  );
};

