'use client';
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Facebook,
  Youtube,
  Instagram
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

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
      <h4 className="font-medium text-[#1575B3] text-sm">
        Connect with us
      </h4>

      {/* Social Groups */}
      <div className="space-y-3">
        {activeSocialGroups.map((group: any, groupIdx: number) => (
          <div key={groupIdx} className="space-y-1.5">
            {/* Render Group Title/Heading if it exists */}
            {(group.title || group.heading) && (
              <span className="text-xs font-light text-[#5F6B7A] block">
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
                    className={`w-9 h-9 bg-[#F5F6F8] border border-[#DCEAF5] text-[#1575B3] flex items-center justify-center transition-all hover:text-white hover:shadow-md ${s.hover}`}
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

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#DCEAF5] pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Main Footer Sitemap Columns */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${isMultipleSocialGroups ? 'lg:grid-cols-6' : 'lg:grid-cols-5'} gap-8`}>
          
          {/* Brand Info Column: ALWAYS expanded to lg:col-span-2 */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-22 flex items-center justify-center">
                <img 
                  src={footerData?.logo}
                  alt="Kothari Group Logo" 
                  referrerPolicy="no-referrer"
                  className="h-22 w-auto object-contain max-w-[140px]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

            <p className="text-xs font-light text-[#5F6B7A] leading-relaxed max-w-sm">
              {footerData?.about}
            </p>

            <div className="space-y-2 text-xs font-light text-[#5F6B7A]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1575B3] shrink-0 mt-0.5" />
                <span>Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#1575B3] shrink-0" />
                <span>Toll-Free Helpline: {footerData?.contact?.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1575B3] shrink-0" />
                <span>Email: <a href={`mailto:${footerData?.contact?.email}`} className="hover:text-[#1575B3] transition">{footerData?.contact?.email}</a></span>
              </div>
            </div>
          </div>

          {/* Core Segments */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">
              Core Segments
            </h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              {footerData?.productSegments?.map((segment: any, index: number) => (
                <li key={index}>
                  <button onClick={() => onSelectSection?.('categories')} className="hover:text-[#1575B3] transition text-left">
                    {segment}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              {footerData?.quickLinks?.map((link: any, index: number) => (
                <li key={index}>
                  <button onClick={() => onSelectSection?.(link.toLowerCase().replace(/\s/g, '-'))} className="hover:text-[#1575B3] transition text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications (+ Single Social Group attached below) */}
          <div className="space-y-6">
            <div className="space-y-3 text-xs">
              <h4 className="font-medium text-[#1575B3] text-sm">
                Certifications
              </h4>
              <ul className="space-y-2 font-light text-[#5F6B7A]">
                {footerData?.certifications?.map((certification: any, index: number) => (
                  <li key={index} className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1575B3] shrink-0" />
                    <span>{certification}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SINGLE GROUP CONDITION: Rendered below Certifications */}
            {!isMultipleSocialGroups && (
              <div className="pt-2 border-t border-slate-100">
                {renderSocialGroups()}
              </div>
            )}
          </div>

          {/* MULTIPLE GROUPS CONDITION: Placed in its own column */}
          {isMultipleSocialGroups && (
            <div>
              {renderSocialGroups()}
            </div>
          )}

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#DCEAF5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#5F6B7A]">
          <p>
            {footerData?.copyright}
          </p>

          <div className="flex items-center gap-6">
            <button onClick={() => onSelectSection?.('why-kothari')} className="hover:text-[#1575B3] transition">
              Quality Assurance Policy
            </button>
            <button onClick={onOpenQuoteModal} className="text-[#1575B3] font-medium hover:underline">
              Get Quotation
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};