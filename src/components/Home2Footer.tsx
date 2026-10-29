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
  { label: 'Our Legacy', target: '/about-us' },
  { label: 'Leadership', target: '/our-management' },
  { label: 'Career', target: '/career' },
  { label: 'Sustainability', target: '/sustainability' },
  { label: 'News & Articles', target: '/press-release' },
  { label: 'Blogs', target: '/blogs' },
  
{ label: 'Videos', target: '/KothariTV' },
{ label: 'Success Stories', target: '/successstories' },
{ label: 'Awards', target: '/awards' },
];

const divisionLinks = [
  { label: 'Pipe Division', sub: 'Agri Pipes, Plumbing Pipes & Fittings', target: 'solutions', icon: Factory, accent: 'text-[#1575B3] bg-[#F5FAFF]', url: '/pipe-division' },
  { label: 'Irrigation Division', sub: 'Micro Irrigation', target: 'solutions', icon: Sprout, accent: 'text-[#1E8E3E] bg-[#EAF8EF]', url: '/irrigation-division' },
];

const certificationLinks = [
  'ISO 9001 Quality System',
  'BIS IS 15778 / IS 4985',
  'IS 13488 Micro Irrigation',
  'PMKSY Govt. Subsidy Certified',
];

const supportLinks = [
  { label: 'Download', target: '/Download' },
  { label: 'Quality Policy', target: '/quality-policy' },
  { label: 'Become Dealer', target: '/become-dealer' },
  { label: 'Knowledge Centre', target: '/knowledge-section' },
  { label: 'Contact Us', target: '/contact-us' }
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
    <footer id="home2-footer" className="bg-[#1575B3] pt-16 pb-8 text-left text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">

        {/* Main Sitemap Columns (6 columns layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">

          {/* Brand Info (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-start">
              <img 
                src="/logos/Kothari Group_W2.png"
                alt="Kothari Group Logo"
                referrerPolicy="no-referrer"
                className="w-[160px] max-w-full h-auto block"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <p className="text-xs font-light text-white/80 leading-relaxed max-w-sm">
            Kothari Group is dedicated to transforming water management and strengthening infrastructure to build a more resilient and sustainable India.
            </p>

            <div className="space-y-2 text-xs font-light text-white/80">
              <a href='https://maps.app.goo.gl/qCPHM3aF8EQkpaBw7' target="_blank" className="flex items-start gap-2 hover:text-white hover:underline ">
                <MapPin className="w-6 h-6 text-white shrink-0" />
                <span>Registered office address: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.</span>
              </a>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-white shrink-0" />
                <span>Toll-Free Helpline: 1800 120 4343</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>Pipe Division: <a href="mailto:sales.pipe@kotharigroupindia.com" className="text-white hover:text-white hover:underline transition">sales.pipe@kotharigroupindia.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>Irrigation Division: <a href="mailto:sales.irrigation@kotharigroupindia.com" className="text-white hover:text-white hover:underline transition">sales.irrigation@kotharigroupindia.com</a></span>
              </div>
            </div>
          </div>

          {/* About Us Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-white text-sm">About Us</h4>
            <ul className="space-y-2 font-light text-white/80">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.target}  className="hover:text-white hover:underline transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Divisions */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-white text-sm">Our Divisions</h4>
            <ul className="space-y-3 font-light text-white/80">
              {divisionLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.url}
                      onClick={() => scrollToId(link.target)}
                      className="flex items-start gap-2 text-left hover:text-white transition group"
                    >
                      <span className="mt-0.5 w-6 h-6 flex items-center justify-center shrink-0 bg-white/15 text-white">
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <span>
                        <span className="block font-medium text-white group-hover:underline transition">{link.label}</span>
                        <span className="block text-[11px] font-light text-white/70">{link.sub}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Certifications placed right inside Our Divisions Column */}
            <div className="space-y-2 text-xs pt-2 border-t border-white/20">
              <h4 className="font-medium text-white text-sm">Certifications</h4>
              <ul className="space-y-2 font-light text-white/80">
                {certificationLinks.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support Column + Download our app below */}
          <div className="space-y-6">
            <div className="space-y-3 text-xs">
              <h4 className="font-medium text-white text-sm">Support</h4>
              <ul className="space-y-2 font-light text-white/80">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.target} className="hover:text-white hover:underline transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download our app placed right inside Support Column */}
            <div className="space-y-3 text-xs pt-2 border-t border-white/20">
              <h4 className="font-medium text-white text-sm">Download our app</h4>
              <a
                href="https://play.google.com/store/apps/details?id=in.kotharione.sma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Kothari One on Google Play"
                className="inline-flex w-fit items-center gap-2 rounded-md border border-white/10 bg-[#0B1523] px-2.5 py-2 transition-colors hover:bg-[#14233A]"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
                  <path d="M3.61 1.81 13.79 12 3.61 22.19A1.5 1.5 0 0 1 3 21V3a1.5 1.5 0 0 1 .61-1.19Z" fill="#00D7FE" />
                  <path d="M13.79 12 3.61 1.81A1.5 1.5 0 0 1 5.6.91l12.19 7.09-4 4Z" fill="#00E676" />
                  <path d="M13.79 12l4 4-12.19 7.09a1.5 1.5 0 0 1-1.99-.9L13.79 12Z" fill="#FF3A44" />
                  <path d="M17.79 8l5.57 3.22a1.03 1.03 0 0 1 0 1.78L17.79 16l-4-4 4-4Z" fill="#FFCE00" />
                </svg>
                <span className="flex flex-col text-left leading-none">
                  <span className="whitespace-nowrap text-[10px] font-light text-white/70">Download on the</span>
                  <span className="mt-1 whitespace-nowrap text-[15px] font-medium text-white">Google Play</span>
                </span>
              </a>
            </div>
          </div>

          {/* Connect with us (last column) */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-white text-sm">Connect with us</h4>
            <ul className="space-y-2.5 font-light text-white/80">
              {socialGroups[0].links.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                    >
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center border border-white/20 bg-white/10 transition-colors ${s.hover}`}>
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span>{s.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-white/80">
          <p>© 2026 Kothari Agritech Private Limited. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white hover:underline transition">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white hover:underline transition">
              Terms & Conditions
            </Link>
          
          </div>
        </div>

      </div>
    </footer>
  );
};