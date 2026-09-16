import React from 'react';
import { HOSPITALS } from '../data/healthcareData';
import { Hospital, Language } from '../types';
import { translations } from './UrduTranslations';
import { Building2, MapPin, Phone, ShieldAlert, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HospitalsSectionProps {
  onViewHospital: (hospital: Hospital) => void;
  onViewAllHospitals: () => void;
  currentLang: Language;
}

export const HospitalsSection: React.FC<HospitalsSectionProps> = ({
  onViewHospital,
  onViewAllHospitals,
  currentLang,
}) => {
  const t = translations[currentLang];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80" id="hospitals-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-bold text-[#1E60D5] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full">
              Hospital Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2648]">
              {t.hospitalsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6B7A]">
              {t.hospitalsSubtitle}
            </p>
          </div>

          <button
            onClick={onViewAllHospitals}
            className="text-xs sm:text-sm font-bold text-[#1E60D5] hover:text-blue-800 flex items-center gap-1.5 self-start md:self-auto group"
          >
            <span>Explore All Partner Facilities</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Hospital Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOSPITALS.slice(0, 6).map((hosp) => (
            <div
              key={hosp.id}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              {/* Image & Emergency Status Badge */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={hosp.image}
                  alt={hosp.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {hosp.emergency247 && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <ShieldAlert className="w-3 h-3" />
                    24/7 Emergency
                  </span>
                )}

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-medium text-blue-200 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-400" />
                    {hosp.city}, Pakistan
                  </span>
                  <h3 className="font-bold text-base line-clamp-1 drop-shadow-xs">
                    {hosp.name}
                  </h3>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2 text-xs">
                  <p className="text-slate-600 line-clamp-2 leading-relaxed">
                    {hosp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {hosp.departments.slice(0, 3).map((dept, idx) => (
                      <span key={idx} className="bg-white border border-slate-200 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                        {dept}
                      </span>
                    ))}
                    {hosp.departments.length > 3 && (
                      <span className="text-[10px] text-slate-400 font-medium self-center">
                        +{hosp.departments.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer and Actions */}
                <div className="pt-3 border-t border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">
                      <strong>{hosp.doctorsCount}+</strong> Doctors Available
                    </span>
                    <span className="flex items-center gap-1 font-bold text-amber-600">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {hosp.rating}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onViewHospital(hosp)}
                      className="py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors text-center"
                    >
                      View Hospital
                    </button>
                    <button
                      onClick={() => onViewHospital(hosp)}
                      className="py-2 text-xs font-bold text-white bg-[#0F2648] hover:bg-[#1A365D] rounded-xl transition-colors text-center"
                    >
                      Hospital Details
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
