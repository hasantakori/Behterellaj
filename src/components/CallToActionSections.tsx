import React from 'react';
import { UserCheck, Stethoscope, Building2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from './UrduTranslations';

interface CallToActionSectionsProps {
  onOpenPatientReg: () => void;
  onOpenDoctorReg: () => void;
  onOpenPartnership: () => void;
  currentLang: Language;
}

export const CallToActionSections: React.FC<CallToActionSectionsProps> = ({
  onOpenPatientReg,
  onOpenDoctorReg,
  onOpenPartnership,
  currentLang,
}) => {
  const t = translations[currentLang];

  return (
    <section className="py-12 sm:py-16 bg-white" id="conversion-cta-sections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Patient Onboarding Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F2648] via-[#16365D] to-[#1E60D5] p-8 sm:p-12 text-white shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 bg-white/10 text-blue-200 text-xs font-bold rounded-full uppercase tracking-wider">
              Patient Access Ecosystem
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {t.patientCtaTitle}
            </h2>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
              {t.patientCtaDesc}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenPatientReg}
                className="px-6 py-3 bg-white hover:bg-slate-100 text-[#0F2648] font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
                id="cta-patient-account-btn"
              >
                <span>Create Patient Account</span>
                <ArrowRight className="w-4 h-4 text-[#1E60D5]" />
              </button>
            </div>
          </div>
          {/* Subtle Graphic Element */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-white/5 pointer-events-none transform skew-x-12 hidden lg:block" />
        </div>

        {/* Dual Provider & Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Doctor Card */}
          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between hover:border-[#1E60D5]/50 transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1E60D5] flex items-center justify-center">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2648]">
                {t.doctorCtaTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.doctorCtaDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500">
                Active PMDC License required
              </span>
              <button
                onClick={onOpenDoctorReg}
                className="px-4 py-2.5 bg-[#0F2648] hover:bg-[#1A365D] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
                id="cta-join-as-doctor-btn"
              >
                <span>Join as a Doctor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Corporate / Hospital Partnership Card */}
          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between hover:border-cyan-500/50 transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#0E7490] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2648]">
                {t.partnerCtaTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.partnerCtaDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500">
                Custom OPD & Wellness agreements
              </span>
              <button
                onClick={onOpenPartnership}
                className="px-4 py-2.5 bg-white hover:bg-slate-50 text-[#0F2648] border border-slate-300 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
                id="cta-partner-with-us-btn"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0E7490]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
