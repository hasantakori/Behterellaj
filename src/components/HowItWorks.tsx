import React from 'react';
import { Search, SlidersHorizontal, CalendarCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from './UrduTranslations';

interface HowItWorksProps {
  currentLang: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const steps = [
    {
      num: '01',
      title: t.step1Title,
      desc: t.step1Desc,
      icon: Search,
      badgeColor: 'text-[#1E60D5] bg-blue-50 border-blue-200',
    },
    {
      num: '02',
      title: t.step2Title,
      desc: t.step2Desc,
      icon: SlidersHorizontal,
      badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
    {
      num: '03',
      title: t.step3Title,
      desc: t.step3Desc,
      icon: CalendarCheck,
      badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      num: '04',
      title: t.step4Title,
      desc: t.step4Desc,
      icon: HeartHandshake,
      badgeColor: 'text-rose-600 bg-rose-50 border-rose-200',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80" id="how-behter-ellaj-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-[#1E60D5] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
            Simple 4-Step Patient Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2648]">
            {t.howItWorks}
          </h2>
          <p className="text-xs sm:text-sm text-[#5F6B7A]">
            {currentLang === 'ur'
              ? 'تلاش سے لے کر ڈاکٹر کے معائنے تک، ایک شفاف اور آسان ترین ڈیجیٹل عمل'
              : 'From searching specialists to consulting in-clinic or online, Behter Ellaj makes healthcare frictionless.'}
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-extrabold px-2.5 py-1 rounded-lg border ${step.badgeColor}`}>
                      Step {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#0F2648]">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#5F6B7A] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#1E60D5]">
                  <span>Proceed with confidence</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
