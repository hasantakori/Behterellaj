import React from 'react';
import { HEALTH_SERVICES } from '../data/healthcareData';
import { HealthService, Language } from '../types';
import { translations } from './UrduTranslations';
import { Video, FlaskConical, ScanLine, Heart, Activity, Building2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: HealthService) => void;
  currentLang: Language;
}

const serviceIconMap: Record<string, React.FC<{ className?: string }>> = {
  Video,
  FlaskConical,
  ScanLine,
  Heart,
  Activity,
  Building2,
  Sparkles,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  currentLang,
}) => {
  const t = translations[currentLang];

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-[#1E60D5] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
            Clinical & Diagnostic Facilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2648]">
            {t.servicesTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#5F6B7A]">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {HEALTH_SERVICES.map((srv) => {
            const Icon = serviceIconMap[srv.iconName] || Activity;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1E60D5] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    {srv.popular && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 uppercase tracking-wider">
                        Popular
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {srv.category}
                    </span>
                    <h3 className="font-bold text-sm text-[#0F2648] group-hover:text-[#1E60D5] transition-colors leading-snug">
                      {srv.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#5F6B7A] leading-relaxed line-clamp-2">
                    {srv.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Starting from</span>
                      <strong className="text-sm font-bold text-[#0F2648]">
                        Rs. {srv.priceStartingPkr.toLocaleString()}
                      </strong>
                    </div>
                    {srv.homeSampleAvailable && (
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        ✓ Home Sample
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectService(srv)}
                    className="w-full py-2 bg-slate-50 hover:bg-[#1E60D5] text-slate-700 hover:text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
