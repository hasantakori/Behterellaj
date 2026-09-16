import React, { useState } from 'react';
import { Search, MapPin, Sparkles, CheckCircle2, Video, ArrowRight, ShieldCheck, Users, HeartPulse } from 'lucide-react';
import { Language } from '../types';
import { translations } from './UrduTranslations';
import { CITIES } from '../data/healthcareData';

interface HeroSearchProps {
  currentLang: Language;
  onSearch: (query: string, city: string) => void;
  onSelectSpecialty: (specialtyId: string) => void;
  onExploreHospitals: () => void;
  onFindDoctorDirect: () => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({
  currentLang,
  onSearch,
  onSelectSpecialty,
  onExploreHospitals,
  onFindDoctorDirect,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Lahore');
  const t = translations[currentLang];

  const popularSpecialtiesList = [
    { id: 'general-physician', label: currentLang === 'ur' ? 'عام معالج' : 'General Physician' },
    { id: 'cardiology', label: currentLang === 'ur' ? 'ماہر امراض قلب' : 'Cardiologist' },
    { id: 'gynecology', label: currentLang === 'ur' ? 'ماہر امراض نسواں' : 'Gynecologist' },
    { id: 'dermatology', label: currentLang === 'ur' ? 'ماہر امراض جلد' : 'Dermatologist' },
    { id: 'pediatrics', label: currentLang === 'ur' ? 'ماہر امراض اطفال' : 'Pediatrician' },
    { id: 'orthopedics', label: currentLang === 'ur' ? 'ماہر ہڈی و جوڑ' : 'Orthopedic Surgeon' },
    { id: 'neurology', label: currentLang === 'ur' ? 'ماہر اعصاب' : 'Neurologist' },
    { id: 'gastroenterology', label: currentLang === 'ur' ? 'ماہر معدہ' : 'Gastroenterologist' },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, selectedCity);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF3F8] via-[#F8FAFC] to-white pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-200/60" id="homepage-hero-section">
      {/* Background Soft Glow & Subtle Healthcare Grid Pattern */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-100/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Core Headline, Subtitle, Smart Search Box */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-[#0F2648]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[#1E60D5] font-bold">Behter Ellaj</span>
              <span className="text-slate-400">•</span>
              <span>{t.tagline}</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2648] tracking-tight leading-[1.18] ${
              currentLang === 'ur' ? 'font-urdu' : ''
            }`}>
              {t.heroHeadline}
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#5F6B7A] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.heroSubtitle}
            </p>

            {/* CENTERPIECE: Intelligent Search Module */}
            <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-200/90 text-left">
              <form onSubmit={handleFormSubmit} className="flex flex-col md:flex-row gap-2.5">
                
                {/* Input 1: Doctor / Specialty / Condition */}
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t.searchPlaceholder}
                    className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-slate-50 hover:bg-slate-50/80 focus:bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1E60D5] focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                    id="hero-main-search-input"
                  />
                </div>

                {/* Input 2: City Selector */}
                <div className="relative md:w-44 shrink-0">
                  <MapPin className="w-4 h-4 text-red-500 absolute left-3.5 top-3.5 pointer-events-none" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-10 pr-8 py-3 text-xs sm:text-sm bg-slate-50 hover:bg-slate-50/80 focus:bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1E60D5] focus:border-transparent outline-none transition-all font-medium text-slate-800 appearance-none cursor-pointer"
                    id="hero-city-select"
                  >
                    {CITIES.map((city) => (
                      <option key={city} value={city === 'All Cities' ? '' : city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-4 pointer-events-none text-slate-400 text-[10px]">
                    ▼
                  </div>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1E60D5] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                  id="hero-submit-search-btn"
                >
                  <Search className="w-4 h-4" />
                  <span>{t.searchBtn}</span>
                </button>
              </form>

              {/* Popular Specialties Quick Access Tags */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="font-semibold text-slate-500 text-[11px] mr-1">
                  {t.popularSpecialties}
                </span>
                {popularSpecialtiesList.map((spec) => (
                  <button
                    key={spec.id}
                    type="button"
                    onClick={() => onSelectSpecialty(spec.id)}
                    className="px-2.5 py-1 bg-slate-100/80 hover:bg-blue-50 hover:text-[#1E60D5] hover:border-blue-200 text-slate-600 rounded-lg text-[11px] font-medium border border-transparent transition-all"
                  >
                    {spec.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={onFindDoctorDirect}
                className="px-5 py-2.5 bg-[#0F2648] hover:bg-[#16365D] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center gap-2"
                id="hero-find-doctor-cta"
              >
                <span>Find a Doctor</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreHospitals}
                className="px-5 py-2.5 bg-white hover:bg-slate-50 text-[#0F2648] border border-slate-300 text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
                id="hero-explore-hospitals-cta"
              >
                Explore Hospitals
              </button>
            </div>

          </div>

          {/* Right Column: Premium Healthcare Visual & Trust Metric Overlays */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Realistic Healthcare Visual Frame */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-4/3 sm:aspect-5/4 relative group">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                  alt="Pakistani doctor consulting patient at hospital with care"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2648]/60 via-transparent to-transparent" />
                
                {/* Visual Label Tag */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold drop-shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Verified PMDC Medical Consultations</span>
                  </div>
                </div>
              </div>

              {/* Floating Verified Doctor Badge Card */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-[#0F2648] block">100% PMDC Verified</strong>
                  <span className="text-[11px] text-slate-500">Only credentialed doctors</span>
                </div>
              </div>

              {/* Floating Instant Video Care Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#1E60D5] flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs font-bold text-[#0F2648] block">24/7 Tele-Consultation</strong>
                  <span className="text-[11px] text-slate-500">In 15 mins from home</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
