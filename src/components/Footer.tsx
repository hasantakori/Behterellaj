import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, Heart, AlertTriangle } from 'lucide-react';
import { Language } from '../types';
import { translations } from './UrduTranslations';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
  onOpenDoctorReg: () => void;
  onOpenPartnership: () => void;
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenDoctorReg,
  onOpenPartnership,
  currentLang,
}) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-[#0A1628] text-slate-300 pt-16 pb-12 border-t border-slate-800" id="behter-ellaj-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Brand, Overview & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="white" size="lg" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Pakistan’s modern digital healthcare ecosystem connecting patients with PMDC-verified doctors, recognized hospital facilities, and accessible health diagnostics across all major cities.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs">
              <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                PMDC Verified Network
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-blue-300 font-semibold">
                ISO / HIPAA Data Safeguards
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Patient Helpline & Support
              </span>
              <a
                href="tel:042111234890"
                className="text-lg font-extrabold text-blue-300 hover:text-white flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>042-111-ELLAJ (35525)</span>
              </a>
              <p className="text-[11px] text-slate-400">
                Mon - Sat: 08:00 AM - 11:00 PM PKT
              </p>
            </div>

            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Email & Corporate Offices
              </span>
              <a
                href="mailto:support@behterellaj.com"
                className="text-sm font-semibold text-slate-200 hover:text-white flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>support@behterellaj.com</span>
              </a>
              <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Gulberg III, Lahore / Clifton Block 4, Karachi</span>
              </p>
            </div>
          </div>
        </div>

        {/* 5 Footer Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-xs">
          
          {/* Column 1: Behter Ellaj */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Behter Ellaj
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Us & Mission
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  Executive Leadership
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  Press & Media
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  Careers at Behter Ellaj
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Patients */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              For Patients
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('doctors')} className="hover:text-white transition-colors">
                  Find a Doctor
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hospitals')} className="hover:text-white transition-colors">
                  Find a Hospital
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-white transition-colors">
                  Book Appointment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Diagnostic Blood Tests
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('library')} className="hover:text-white transition-colors">
                  Health Library Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Healthcare Professionals */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Medical Providers
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onOpenDoctorReg} className="hover:text-white transition-colors text-blue-300 font-medium">
                  Join as Doctor (PMDC)
                </button>
              </li>
              <li>
                <button onClick={onOpenDoctorReg} className="hover:text-white transition-colors">
                  Doctor Login & Portal
                </button>
              </li>
              <li>
                <button onClick={onOpenPartnership} className="hover:text-white transition-colors">
                  Hospital Affiliations
                </button>
              </li>
              <li>
                <button onClick={onOpenPartnership} className="hover:text-white transition-colors">
                  Diagnostic Lab Partners
                </button>
              </li>
              <li>
                <button onClick={onOpenPartnership} className="hover:text-white transition-colors">
                  Corporate Wellness Plans
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Health Resources
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onNavigate('library')} className="hover:text-white transition-colors">
                  Medical Articles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('symptoms')} className="hover:text-white transition-colors">
                  Health Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('symptoms')} className="hover:text-white transition-colors">
                  Symptom Checker
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('specialties')} className="hover:text-white transition-colors">
                  All Specialties
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  Patient FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Social Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Official Channels
            </h4>
            <div className="space-y-2.5">
              <a
                href="https://www.facebook.com/BehterEllaj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors p-2 bg-slate-900/60 rounded-lg border border-slate-800"
              >
                <svg className="w-4 h-4 fill-blue-500" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow on Facebook</span>
              </a>

              <a
                href="https://www.youtube.com/@Behterellaj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors p-2 bg-slate-900/60 rounded-lg border border-slate-800"
              >
                <svg className="w-4 h-4 fill-red-500" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>Watch on YouTube</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <span className="block">Privacy Policy • Terms & Conditions</span>
              <span className="block">Cookie Policy • PMDC Ethics</span>
            </div>
          </div>

        </div>

        {/* Section 49: Prominent Responsible Medical Disclaimer */}
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-start gap-3 text-xs text-slate-400">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-300">Mandatory Medical Disclaimer: </strong>
            {t.footerDisclaimer}
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Behter Ellaj (Pvt) Ltd. All rights reserved. Pakistan.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Secured with 256-Bit SSL</span>
            <span>•</span>
            <span>Healthcare Made Accessible for Every Pakistani</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
