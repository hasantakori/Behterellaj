import React from 'react';
import {
  Stethoscope,
  HeartPulse,
  Baby,
  Sparkles,
  Smile,
  Bone,
  Brain,
  Activity,
  ShieldAlert,
  Volume2,
  Eye,
  ShieldCheck,
  Zap,
  Wind,
  Thermometer,
  Apple,
  ArrowRight,
} from 'lucide-react';
import { SPECIALTIES } from '../data/healthcareData';
import { Language } from '../types';
import { translations } from './UrduTranslations';

interface SpecialtiesGridProps {
  onSelectSpecialty: (specialtyId: string) => void;
  currentLang: Language;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Stethoscope,
  HeartPulse,
  Baby,
  Sparkles,
  Smile,
  Bone,
  Brain,
  Activity,
  ShieldAlert,
  Volume2,
  Eye,
  ShieldCheck,
  Zap,
  Wind,
  Thermometer,
  Apple,
};

export const SpecialtiesGrid: React.FC<SpecialtiesGridProps> = ({
  onSelectSpecialty,
  currentLang,
}) => {
  const t = translations[currentLang];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80" id="specialties-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-bold text-[#1E60D5] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full">
              Medical Specialties
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2648]">
              {t.specialtiesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6B7A]">
              {t.specialtiesSubtitle}
            </p>
          </div>

          <button
            onClick={() => onSelectSpecialty('')}
            className="text-xs sm:text-sm font-bold text-[#1E60D5] hover:text-blue-800 flex items-center gap-1.5 self-start md:self-auto group"
          >
            <span>View All Specialties</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* 16 Specialties Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-4">
          {SPECIALTIES.map((spec) => {
            const IconComponent = iconMap[spec.iconName] || Stethoscope;
            return (
              <button
                key={spec.id}
                onClick={() => onSelectSpecialty(spec.id)}
                className="p-4 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] hover:bg-white hover:border-[#1E60D5]/50 hover:shadow-md transition-all text-left group flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50/80 border border-blue-100 text-[#1E60D5] flex items-center justify-center transition-transform group-hover:scale-105">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F2648] group-hover:text-[#1E60D5] transition-colors leading-tight">
                      {currentLang === 'ur' ? spec.nameUrdu : spec.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-[#1E60D5] block mt-0.5">
                      {spec.doctorsCount}+ Verified Doctors
                    </span>
                  </div>

                  <p className="text-[11px] text-[#5F6B7A] leading-normal line-clamp-2">
                    {spec.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-500 group-hover:text-[#1E60D5]">
                  <span>View Doctors</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
