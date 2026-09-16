import React, { useState } from 'react';
import { Logo } from './Logo';
import { Search, Calendar, Globe, Menu, X, User, ShieldCheck, Stethoscope, Building2, PhoneCall, ChevronDown } from 'lucide-react';
import { Language, PatientUser } from '../types';
import { translations } from './UrduTranslations';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: () => void;
  activeNav: string;
  onNavigate: (nav: string) => void;
  onOpenBooking: () => void;
  onOpenDoctorReg: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  user: PatientUser | null;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  activeNav,
  onNavigate,
  onOpenBooking,
  onOpenDoctorReg,
  onOpenAuth,
  user,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const navLinks = [
    { id: 'home', label: currentLang === 'ur' ? 'ہوم' : 'Home' },
    { id: 'doctors', label: t.findDoctor },
    { id: 'hospitals', label: t.findHospital },
    { id: 'specialties', label: t.specialties },
    { id: 'services', label: t.services },
    { id: 'library', label: t.library },
    { id: 'about', label: t.aboutUs },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs" id="behter-ellaj-header">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#0F2648] text-white text-[11px] py-1.5 px-4 sm:px-8 flex items-center justify-between border-b border-blue-950/40">
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 font-medium text-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Pakistan’s Trusted Healthcare Discovery & Care Access Platform
          </span>
          <span className="sm:hidden font-medium text-blue-200">
            Behter Ellaj • Better Healthcare Access
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:042111234890"
            className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-emerald-400" />
            <span className="font-semibold">042-111-ELLAJ</span>
          </a>

          <div className="h-3 w-px bg-white/20" />

          {/* Bilingual Urdu / English Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 text-blue-200 hover:text-white font-semibold transition-colors px-1.5 py-0.5 rounded hover:bg-white/10"
            id="lang-toggle-btn"
            title="Switch Language / زبان تبدیل کریں"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'اردو' : 'English'}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="text-left focus:outline-none shrink-0"
          id="brand-home-link"
        >
          <Logo size="md" />
        </button>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all ${
                activeNav === link.id
                  ? 'text-[#1E60D5] bg-blue-50/80 font-bold'
                  : 'text-slate-700 hover:text-[#0F2648] hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          {/* Join as Doctor CTA */}
          <button
            onClick={onOpenDoctorReg}
            className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#0F2648] hover:bg-slate-100 rounded-xl transition-colors flex items-center gap-1.5 border border-slate-200"
            id="header-for-doctors-btn"
          >
            <Stethoscope className="w-3.5 h-3.5 text-[#1E60D5]" />
            <span>{t.forDoctors}</span>
          </button>

          {/* User Auth or Profile */}
          {user && user.isLoggedIn ? (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-blue-600" />
                {user.name.split(' ')[0]}
              </span>
              <button
                onClick={onLogout}
                className="text-[11px] text-slate-500 hover:text-red-600 font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <button
                onClick={() => onOpenAuth('login')}
                className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#0F2648] rounded-xl hover:bg-slate-50 transition-colors"
                id="header-login-btn"
              >
                {t.login}
              </button>
              <button
                onClick={() => onOpenAuth('register')}
                className="px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#0F2648] rounded-xl hover:bg-slate-50 transition-colors"
                id="header-register-btn"
              >
                {t.register}
              </button>
            </div>
          )}

          {/* Primary Action Button */}
          <button
            onClick={onOpenBooking}
            className="px-4 py-2.5 bg-[#1E60D5] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs hover:shadow transition-all flex items-center gap-1.5"
            id="header-book-appointment-btn"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.bookAppointment}</span>
          </button>
        </div>

        {/* Mobile Hamburger & Quick Action */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="sm:hidden px-3 py-2 bg-[#1E60D5] text-white text-xs font-bold rounded-xl flex items-center gap-1 shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
            id="mobile-menu-toggle-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#0F2648]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  activeNav === link.id
                    ? 'bg-blue-50 text-[#1E60D5] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                onOpenDoctorReg();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 text-[#0F2648] text-xs font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <Stethoscope className="w-4 h-4 text-[#1E60D5]" />
              <span>{t.forDoctors} (Join Practice Network)</span>
            </button>

            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#1E60D5] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookAppointment}</span>
            </button>

            <div className="flex gap-2 pt-1">
              <button
                onClick={() => {
                  onOpenAuth('login');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 text-xs font-bold text-slate-700 border border-slate-200 rounded-xl"
              >
                {t.login}
              </button>
              <button
                onClick={() => {
                  onOpenAuth('register');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 text-xs font-bold text-[#1E60D5] bg-blue-50 border border-blue-200 rounded-xl"
              >
                {t.register}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
