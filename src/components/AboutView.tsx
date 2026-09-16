import React from 'react';
import { ShieldCheck, Heart, Eye, Target, Award, Users, Stethoscope, Building2, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from './UrduTranslations';

interface AboutViewProps {
  currentLang: Language;
  onOpenDoctorReg: () => void;
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  currentLang,
  onOpenDoctorReg,
  onOpenBooking,
}) => {
  const t = translations[currentLang];

  return (
    <div className="py-12 bg-white" id="about-us-view">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#1E60D5] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
            Our Purpose & Heritage
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2648]">
            Transforming Healthcare Discovery Across Pakistan
          </h1>
          <p className="text-sm sm:text-base text-[#5F6B7A] leading-relaxed">
            Behter Ellaj was established to bridge the information gap in Pakistan's healthcare system. We empower patients and families with verified medical credentials, clear hospital access, and dignified clinical care.
          </p>
        </div>

        {/* Mission & Vision Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1E60D5] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0F2648]">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To make reliable, high-standard healthcare accessible to every Pakistani citizen by organizing doctors, hospitals, and diagnostic services into a transparent, patient-centric digital platform.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#0E7490] flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0F2648]">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be Pakistan’s most trusted healthcare infrastructure — where no patient delays care due to lack of information, and every practitioner is valued for clinical excellence.
            </p>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl font-bold text-[#0F2648] text-center">
            Our Healthcare Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Clinical Credibility',
                desc: 'Every registered consultant undergoes independent PMDC license verification.',
                icon: ShieldCheck,
              },
              {
                title: 'Price Transparency',
                desc: 'No hidden fees. Consultation charges and lab test pricing are stated upfront.',
                icon: Award,
              },
              {
                title: 'Patient Dignity',
                desc: 'Guaranteed appointment slots that respect patients’ time and privacy.',
                icon: Heart,
              },
              {
                title: 'Pan-Pakistan Reach',
                desc: 'Connecting metropolitan teaching hospitals with remote district communities via video care.',
                icon: Users,
              },
            ].map((pill, i) => {
              const Icon = pill.icon;
              return (
                <div key={i} className="p-5 bg-white border border-slate-200/80 rounded-2xl space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-[#1E60D5] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0F2648]">{pill.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{pill.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Join our movement banner */}
        <div className="bg-[#0F2648] text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold">Are you a qualified medical specialist?</h3>
            <p className="text-xs text-blue-200">Join Pakistan’s premier verified healthcare network today.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={onOpenDoctorReg}
              className="px-5 py-2.5 bg-[#1E60D5] hover:bg-blue-600 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              Doctor Registration
            </button>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-white hover:bg-slate-100 text-[#0F2648] font-bold text-xs rounded-xl transition-colors"
            >
              Book Care
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
