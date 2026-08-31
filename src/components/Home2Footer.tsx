'use client';
import React from 'react';
import {
  MapPin,
  PhoneCall,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Sprout,
  Factory
} from 'lucide-react';
import Link from 'next/link';

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const aboutLinks = [
  { label: 'Our Legacy', target: 'why-kothari' },
  { label: 'Leadership', target: 'why-kothari' },
  { label: 'Careers', target: 'home2-footer' },
  { label: 'Sustainability', target: 'impact' },
  { label: 'News & Media', target: 'news' }
];

const divisionLinks = [
  { label: 'Pipe Division', sub: 'Agri Pipes, Plumbing Pipes & Fittings', target: 'solutions', icon: Factory, accent: 'text-[#1575B3] bg-[#F5FAFF]', url: '/pipe-division' },
  { label: 'Irrigation Division', sub: 'Micro Irrigation', target: 'solutions', icon: Sprout, accent: 'text-[#1E8E3E] bg-[#EAF8EF]', url: '/irrigation-division' },
];

const supportLinks = [
  { label: 'Downloads', target: 'home2-footer' },
  { label: 'Dealer Locator', target: 'home2-footer' },
  { label: 'FAQs', target: 'home2-footer' },
  { label: 'Contact Us', target: 'home2-footer' }
];

const socialGroups = [
  {
    links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/share/1A8KDDBqTx/?mibextid=wwXIfr' },
      { label: 'LinkedIn', icon: Linkedin, hover: 'hover:bg-[#0A66C2]', url: 'https://www.linkedin.com/company/kotharigroupindia/' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kotharigroup_?igsh=MzJ0Ympyb3VoYmk1&utm_source=qr' },
    ],
  },
];

export const Home2Footer: React.FC<{ variant?: 'blue' | 'green' }> = ({ variant = 'blue' }) => {
  return (
    <footer id="home2-footer" className="bg-[#FFFFFF] border-t border-[#DCEAF5] pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">

        {/* Main Sitemap Columns (5 columns layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="h-18 flex items-center">
              <img
                src="https://kotharigroupindia.com/img/Kothariblue_logo.png"
                alt="Kothari Group Logo"
                referrerPolicy="no-referrer"
                className="h-18 w-auto object-contain max-w-[160px]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <p className="text-xs font-light text-[#5F6B7A] leading-relaxed max-w-sm">
              Kothari Group is a leading piping solutions provider with a strong focus on quality, innovation and sustainability.
            </p>

            <div className="space-y-2 text-xs font-light text-[#5F6B7A]">
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[#1575B3]" />
                <span>Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#1575B3]" />
                <span>Toll-Free Helpline: 1800 120 4343</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1575B3]" />
                <span>Pipe Division: <a href="mailto:sales.pipe@kotharigroupindia.com" className="hover:text-[#1575B3] transition">sales.pipe@kotharigroupindia.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1575B3] invisible" />
                <span>Irrigation Division: <a href="mailto:sales.irrigation@kotharigroupindia.com" className="hover:text-[#1575B3] transition">sales.irrigation@kotharigroupindia.com</a></span>
              </div>
            </div>
          </div>

          {/* About Us Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">About Us</h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollToId(link.target)} className="hover:text-[#1575B3] transition">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Divisions */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">Our Divisions</h4>
            <ul className="space-y-3 font-light text-[#5F6B7A]">
              {divisionLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.url}
                      onClick={() => scrollToId(link.target)}
                      className="flex items-start gap-2 text-left hover:text-[#1575B3] transition group"
                    >
                      <span className={`mt-0.5 w-6 h-6 flex items-center justify-center shrink-0 ${link.accent}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <span>
                        <span className="block font-medium text-[#111111] group-hover:text-[#1575B3] transition">{link.label}</span>
                        <span className="block text-[11px] font-light text-[#5F6B7A]">{link.sub}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Support Column + Connect with us below */}
          <div className="space-y-6">
            <div className="space-y-3 text-xs">
              <h4 className="font-medium text-[#1575B3] text-sm">Support</h4>
              <ul className="space-y-2 font-light text-[#5F6B7A]">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <button onClick={() => scrollToId(link.target)} className="hover:text-[#1575B3] transition">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect with us placed right inside Support Column */}
            <div className="space-y-2.5 text-xs pt-2 border-t border-slate-100">
              <h4 className="font-medium text-[#1575B3] text-sm">Connect with us</h4>
              {socialGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="flex items-center gap-2.5">
                  {group.links.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className={`w-9 h-9 bg-[#F5F6F8] border border-[#DCEAF5] text-[#1575B3] flex items-center justify-center transition-all hover:text-white hover:shadow-md ${s.hover}`}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#DCEAF5] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-[#5F6B7A]">
          <p>© 2026 Kothari Group. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <button onClick={() => scrollToId('home2-footer')} className="hover:text-[#1575B3] transition">
              Privacy Policy
            </button>
            <button onClick={() => scrollToId('home2-footer')} className="hover:text-[#1575B3] transition">
              Terms & Conditions
            </button>
            <button onClick={() => scrollToId('home2-footer')} className="hover:text-[#1575B3] transition">
              Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};