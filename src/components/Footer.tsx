'use client';
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Download, 
  CheckCircle2,
  FileCode2,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal?: () => void;
  onSelectSection?: (id: string) => void;
  onOpenContactModal?: () => void;
  onOpenCareerModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenQuoteModal,
  onSelectSection,
  onOpenContactModal,
  onOpenCareerModal
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#DCEAF5] pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
      

        {/* Main Footer Sitemap Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-22 flex items-center justify-center ">
                <img 
                  src="https://kotharigroupindia.com/img/Kothariblue_logo.png" 
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
              India's trusted leader with over 35 years of excellence in Plumbing Pipes & Fittings, Agri Pipes & Fittings, and Micro Irrigation Systems.
            </p>

            <div className="space-y-2 text-xs font-light text-[#5F6B7A]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1575B3]" />
                <span>Corporate HQ: 8516/11, Level 3,Sun Plaza, Subhash Chowk, Murarji Peth, Solapur - 413 001. Maharashtra.</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#1575B3]" />
                <span>Toll-Free Helpline: 1800 120 4343</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1575B3]" />
                <span>Email: enquiry@kotharigroupindia.com</span>
              </div>
            </div>
          </div>

          {/* Column 1: Product Segments */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">
              Core Segments
            </h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              <li>
                <button onClick={() => onSelectSection?.('categories')} className="hover:text-[#1575B3] transition">
                  Plumbing Pipes & fittings
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection?.('categories')} className="hover:text-[#1575B3] transition">
                  Agri Pipes & fittings
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection?.('categories')} className="hover:text-[#1575B3] transition">
                  Micro Irrigation System
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection?.('categories')} className="hover:text-[#1575B3] transition">
                  CPVC Hot & Cold Water
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection?.('categories')} className="hover:text-[#1575B3] transition">
                  Submersible Column Pipes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              <li>
                <button onClick={() => onSelectSection?.('hero')} className="hover:text-[#1575B3] transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection?.('why-kothari')} className="hover:text-[#1575B3] transition">
                  About Kothari Group
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection?.('knowledge-centre')} className="hover:text-[#1575B3] transition">
                  Resources & Knowledge Centre
                </button>
              </li>
              <li>
                <button onClick={onOpenCareerModal} className="hover:text-[#1575B3] transition">
                  Career Opportunities
                </button>
              </li>
              <li>
                <button onClick={onOpenContactModal} className="hover:text-[#1575B3] transition">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quality & Compliance */}
          <div className="space-y-3 text-xs">
            <h4 className="font-medium text-[#1575B3] text-sm">
              Certifications
            </h4>
            <ul className="space-y-2 font-light text-[#5F6B7A]">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1575B3]" />
                <span>ISO 9001 Quality System</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1575B3]" />
                <span>BIS IS 15778 / IS 4985</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1575B3]" />
                <span>IS 13488 Micro Irrigation</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1575B3]" />
                <span>PMKSY Govt. Subsidy Certified</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1575B3]" />
                <span>RoHS Lead-Free Formulation</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#DCEAF5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#5F6B7A]">
          <p>
            © 2026 Kothari Group India. All Rights Reserved. Empowering Water Management Across 23+ States.
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
