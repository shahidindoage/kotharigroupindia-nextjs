'use client';
import React, { useEffect, useState } from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Facebook,
  Youtube,
  Instagram,
  X
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  onOpenQuoteModal?: () => void;
  onSelectSection?: (id: string) => void;
  onOpenContactModal?: () => void;
  onOpenCareerModal?: () => void;
  footerData?: any;
  socialGroups?: {
    heading?: string;
    title?: string;
    links: {
      label: string;
      url: string;
      icon: React.ElementType;
      hover: string;
    }[];
  }[];
}

const DEFAULT_SOCIAL_GROUPS = [
  {
    heading: 'Kothari Pipes',
    links: [
      { label: 'Facebook', icon: Facebook, hover: 'hover:bg-[#1877F2]', url: 'https://www.facebook.com/share/16ZVVqB5Ju/?mibextid=wwXIfr' },
      { label: 'WhatsApp', icon: FaWhatsapp, hover: 'hover:bg-[#25D366]', url: 'https://whatsapp.com/channel/0029Vb6myeSGU3BD6QbRqN3i' },
      { label: 'YouTube', icon: Youtube, hover: 'hover:bg-[#FF0000]', url: 'https://www.youtube.com/@kotharipipess' },
      { label: 'Instagram', icon: Instagram, hover: 'hover:bg-[#DD2A7B]', url: 'https://www.instagram.com/kotharipipess' },
    ],
  },
];

const appLinks = [
  {
    name: 'Kothari One',
    image:
      'https://play-lh.googleusercontent.com/iIwt0AzbKVaDYKXjqMgT84O25bKfu75CAKK2i0E5TUU9bF-7Bzur51kzW-yZvCOv9PAWb7Lx_8r-SHUg-82h=w480-h960-rw',
    url: 'https://play.google.com/store/apps/details?id=in.kotharione.sma',
  },
  {
    name: 'Kothari Rise',
    image:
      'https://play-lh.googleusercontent.com/i5hXmUu36Puuzwpj4Sfe625WnGpIOBcKczLS2Tp2kDlL8q-9vB_TU3ogAqGbjgEDeQ-Wlrbcby7CjmdQrZiB=w480-h960-rw',
    url: 'https://play.google.com/store/apps/details?id=com.kothariagritech.loyalty',
  },
];

// Google Play (opens the app picker) + App Store buttons, shared by both
// division variants of the footer. `iconOnlyOnDesktop` hides the text labels
// from lg up, for the narrow irrigation column.
const DownloadAppButtons: React.FC<{ iconOnlyOnDesktop?: boolean }> = ({
  iconOnlyOnDesktop = false,
}) => {
  const [appsModalOpen, setAppsModalOpen] = useState(false);

  useEffect(() => {
    if (!appsModalOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setAppsModalOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [appsModalOpen]);

  const labelClass = `flex-col text-left leading-none ${
    iconOnlyOnDesktop ? 'flex lg:hidden' : 'flex'
  }`;

  return (
    <>
      <div className="flex flex-row gap-2">
        <button
          type="button"
          onClick={() => setAppsModalOpen(true)}
          aria-haspopup="dialog"
          aria-label="Open Google Play app options"
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-md border border-white/10 bg-[#0B1523] px-2.5 py-2 transition-colors hover:bg-[#14233A]"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
            <path d="M3.61 1.81 13.79 12 3.61 22.19A1.5 1.5 0 0 1 3 21V3a1.5 1.5 0 0 1 .61-1.19Z" fill="#00D7FE" />
            <path d="M13.79 12 3.61 1.81A1.5 1.5 0 0 1 5.6.91l12.19 7.09-4 4Z" fill="#00E676" />
            <path d="M13.79 12l4 4-12.19 7.09a1.5 1.5 0 0 1-1.99-.9L13.79 12Z" fill="#FF3A44" />
            <path d="M17.79 8l5.57 3.22a1.03 1.03 0 0 1 0 1.78L17.79 16l-4-4 4-4Z" fill="#FFCE00" />
          </svg>
          <span className={labelClass}>
            <span className="whitespace-nowrap text-[10px] font-light text-white/70">Download on the</span>
            <span className="mt-1 whitespace-nowrap text-[15px] font-medium text-white">Google Play</span>
          </span>
        </button>

        <a
          href="https://apps.apple.com/in/app/kothari-rise/id6443336876"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Kothari Rise on the App Store"
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-md border border-white/10 bg-[#0B1523] px-2.5 py-2 transition-colors hover:bg-[#14233A]"
        >
          <svg viewBox="0 0 384 512" className="h-6 w-6 shrink-0 text-white" aria-hidden="true">
            <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
          <span className={labelClass}>
            <span className="whitespace-nowrap text-[10px] font-light text-white/70">Download on the</span>
            <span className="mt-1 whitespace-nowrap text-[15px] font-medium text-white">App Store</span>
          </span>
        </a>
      </div>

      {appsModalOpen && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="apps-modal-title"
        >
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setAppsModalOpen(false)}
          />

          <div className="relative z-10 w-full max-w-lg bg-white text-[#111111] border border-[#DCEAF5] shadow-2xl my-auto">
            <button
              type="button"
              onClick={() => setAppsModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 text-[#5F6B7A] hover:text-[#111111] hover:bg-[#F5FAFF] transition border border-transparent hover:border-[#DCEAF5]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#1575B3]">
                Kothari Group
              </p>
              <h3 id="apps-modal-title" className="mt-2 text-2xl font-semibold leading-tight">
                Download our app
              </h3>
              <p className="mt-2 text-sm text-[#5F6B7A] leading-relaxed">
                Choose the Kothari app that fits your needs.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {appLinks.map((app) => (
                  <a
                    key={app.name}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center text-center border border-[#DCEAF5] bg-[#F0F7FC] p-5 transition-colors hover:border-[#1575B3] hover:bg-white"
                  >
                    <span className="relative block h-28 w-28 overflow-hidden border border-[#DCEAF5] bg-white">
                      <img
                        src={app.image}
                        alt={`${app.name} app`}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-contain"
                      />
                    </span>
                    <span className="mt-4 text-base font-semibold text-[#111111] group-hover:text-[#1575B3] transition-colors">
                      {app.name}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-2 bg-[#1575B3] group-hover:bg-[#0E588A] text-white text-[11px] font-mono tracking-widest uppercase px-3 py-1.5 transition-colors">
                      Google Play
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

 const pipepProductSegments = [
   {label:'Agriculture Pipes & Fittings',target:"/products/agriculture-pipes-and-fittings"},
{label:'Flexible Hose Pipes',target:"/products/flexible-hose-pipes"},
{label:'Sewerage Drainage Pipes and Fittings',target:"/products/sewerage-drainage-pipes-and-fittings"},
{label:'Borewell Solution',target:"/products/borewell-solution"},
{label:'Plumbing Pipes & Fittings',target:"/products/plumbing-pipes-and-fittings"},
{label:'Cable Protection',target:"/products/cable-protection"}
    
    ]
 const irrigationProductSegments = [
{label:'Drip Irrigation System',target:"/products/drip-irrigation-system"},
{label:'Automation System',target:"/products/automation-system"},
{label:'Sprinkler Irrigation system',target:"/products/sprinkler-irrigation-system"},
{label:'Filters & Injectors',target:"/products/filters-and-injectors"},
{label:'Micro & Mini Sprinklers',target:"/products/micro-and-mini-sprinklers"},
{label:'Turnkey Projects',target:"/products/turnkey-projects"}
    ]

export const Footer: React.FC<FooterProps> = ({
  onOpenQuoteModal,
  onSelectSection,
  onOpenContactModal,
  onOpenCareerModal,
  footerData,
  socialGroups
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const division = footerData?.productSegments?.[0]?.includes('Irrigation') ? 'irrigation-division' : 'pipe-division';
  const isIrrigation = division === 'irrigation-division';

  // Checks prop -> checks footerData.socialGroups or footerData.socialgroup -> fallback to defaults
  const activeSocialGroups = 
    (socialGroups && socialGroups.length > 0) ? socialGroups :
    (footerData?.socialGroups && footerData?.socialGroups.length > 0) ? footerData.socialGroups :
    (footerData?.socialgroup && footerData?.socialgroup.length > 0) ? footerData.socialgroup :
    DEFAULT_SOCIAL_GROUPS;

  const isMultipleSocialGroups = activeSocialGroups.length > 1;

  // Render function for social links block
  const renderSocialGroups = () => (
    <div className="space-y-4 text-xs">
      {/* Main Section Heading */}
      <h4 className="font-medium text-white text-sm">
        Connect with us
      </h4>

      {/* Social Groups */}
      <div className="space-y-3">
        {activeSocialGroups.map((group: any, groupIdx: number) => (
          <div key={groupIdx} className="space-y-1.5">
            {/* Render Group Title/Heading if it exists */}
            {(group.title || group.heading) && (
              <span className="text-xs font-light text-white/70 block">
                {group.title || group.heading}
              </span>
            )}

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {group.links?.map((s: any) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-9 h-9 bg-white/10 border border-white/20 text-white flex items-center justify-center transition-all hover:text-white hover:shadow-md ${s.hover}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const productSegments = isIrrigation? irrigationProductSegments: pipepProductSegments;

  return ( 
    // <footer className={`${isIrrigation ? 'bg-[#1E8E3E]' : 'bg-[#1575B3]'} pt-16 pb-8 text-left text-white`}>
    <footer className={`${isIrrigation ? 'bg-[#1575B3]' : 'bg-[#1575B3]'} pt-16 pb-8 text-left text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">

        {/* Main Footer Sitemap Columns */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${(isMultipleSocialGroups || isIrrigation) ? 'lg:grid-cols-6' : 'lg:grid-cols-5'} gap-8`}>

          {/* Brand Info Column: ALWAYS expanded to lg:col-span-2 */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-start">
                <Image
                  src={`${isIrrigation ? '/logos/Kothari Irrigation_W.png' : '/logos/Kothari Pipes_W.png'}`}
                  alt="Kothari Group Logo"
                  width={1673}
                  height={428}
                  sizes="140px"
                  referrerPolicy="no-referrer"
                  className="w-[140px] max-w-full h-auto block"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
            </div>

            <p className="text-xs font-light text-white/80 leading-relaxed max-w-sm">
              {isIrrigation?`Kothari Group has empowered farmers across India with innovative micro irrigation systems and reliable agricultural water management solutions, promoting efficient water use and sustainable farming.`:`Kothari Group delivers trusted Plumbing Pipes & Fittings and Agri Pipes & Fittings solutions, contributing to stronger infrastructure and a more sustainable India`}
            </p>

            <div className="space-y-2 text-xs font-light text-white/80">
              <a href='https://maps.app.goo.gl/qCPHM3aF8EQkpaBw7' target="_blank" className="flex items-start gap-2 hover:text-white hover:underline ">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Registered office address: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.</span>
              </a>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-white shrink-0" />
                {/* <span>Toll-Free Helpline: {footerData?.contact?.phone}</span> */}
          <span>{isIrrigation?  `For Irrigation Enquiry: +91-9307309582` : `For Pipe Enquiry: +91-9307309583`}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>Email: <a href={`mailto:${footerData?.contact?.email}`} className="text-white hover:underline transition">{footerData?.contact?.email}</a></span>
              </div>
            </div>
          </div>

          {/* Core Segments */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-white text-sm">
              Core Segments
            </h4>
            <ul className="space-y-2 font-light text-white/80">
              {productSegments?.map((segment: any, index: number) => (
                <li key={index}>
                  <Link href={segment.target} className="hover:text-white hover:underline transition text-left">
                    {segment.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-white text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 font-light text-white/80">
              {footerData?.quickLinks?.map((link: any, index: number) => (
                <li key={index}>
                  <Link href={link.target} className="hover:text-white hover:underline transition text-left">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications (+ Single Social Group attached below) */}
          <div className="space-y-6">
            <div className="space-y-3 text-xs">
              <h4 className="font-medium text-white text-sm">
                Certifications
              </h4>
              <ul className="space-y-2 font-light text-white/80">
                {footerData?.certifications?.map((certification: any, index: number) => (
                  <li key={index} className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>{certification}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download our app — shown below Certifications for Pipe division */}
            {!isIrrigation && (
              <div className="space-y-3 text-xs pt-2 border-t border-white/20">
                <h4 className="font-medium text-white text-sm">Download our app</h4>
                <DownloadAppButtons />
              </div>
            )}

            {/* SINGLE GROUP CONDITION: Rendered below Certifications (Pipe division only) */}
            {!isIrrigation && !isMultipleSocialGroups && (
              <div className="pt-2 border-t border-white/20">
                {renderSocialGroups()}
              </div>
            )}
          </div>

          {/* MULTIPLE GROUPS CONDITION: Placed in its own column (Pipe division only) */}
          {!isIrrigation && isMultipleSocialGroups && (
            <div>
              {renderSocialGroups()}
            </div>
          )}

          {/* IRRIGATION: Separate last column — Connect with us + Download our app */}
          {isIrrigation && (
            <div className="space-y-6">
              {renderSocialGroups()}
              <div className="space-y-3 text-xs pt-2 border-t border-white/20">
                <h4 className="font-medium text-white text-sm">Download our app</h4>
                <DownloadAppButtons iconOnlyOnDesktop />
              </div>
            </div>
          )}

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-white/80">
          <p>
            {/* {footerData?.copyright} */}
            © 2026 Kothari Agritech Private Limited. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
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