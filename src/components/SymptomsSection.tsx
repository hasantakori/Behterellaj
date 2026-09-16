import React from 'react';
import { SYMPTOMS_CONDITIONS } from '../data/healthcareData';
import { SymptomCondition, Language } from '../types';
import { translations } from './UrduTranslations';
import { AlertCircle, ArrowRight, Activity, ShieldCheck } from 'lucide-react';

interface SymptomsSectionProps {
  onSelectCondition: (condition: SymptomCondition) => void;
  onFindSpecialist: (specialtyName: string) => void;
  currentLang: Language;
}

export const SymptomsSection: React.FC<SymptomsSectionProps> = ({
  onSelectCondition,
  onFindSpecialist,
  currentLang,
}) => {
  const t = translations[currentLang];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80" id="symptoms-conditions-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-bold text-[#1E60D5] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full">
              Symptom Guide & Clinical Conditions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2648]">
              {t.symptomsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6B7A]">
              {t.symptomsSubtitle}
            </p>
          </div>

          <div className="text-xs text-slate-500 max-w-xs self-start md:self-auto bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <span className="font-semibold text-slate-700 block">Need immediate advice?</span>
            Educational overview only. Consult a doctor for diagnostic confirmation.
          </div>
        </div>

        {/* Symptoms Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SYMPTOMS_CONDITIONS.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-5 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#1E60D5] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0F2648] leading-tight">
                  {currentLang === 'ur' ? item.titleUrdu : item.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Common Symptoms Bullets */}
                <div className="space-y-1 pt-1">
                  <span className="text-[11px] font-semibold text-slate-700 block">
                    Common Warning Signs:
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-600">
                    {item.commonSymptoms.slice(0, 2).map((sym, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1 shrink-0" />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Specialists & CTA */}
              <div className="pt-3 border-t border-slate-200/80 space-y-2">
                <div className="flex flex-wrap items-center gap-1 text-[10px]">
                  <span className="text-slate-500">Consult:</span>
                  {item.recommendedSpecialties.map((spec, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 text-slate-800 font-semibold px-1.5 py-0.5 rounded">
                      {spec}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onFindSpecialist(item.recommendedSpecialties[0])}
                  className="w-full py-2 bg-white hover:bg-[#1E60D5] text-[#0F2648] hover:text-white border border-slate-200 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Find a {item.recommendedSpecialties[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
