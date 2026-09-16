import React, { useState } from 'react';
import { DOCTORS } from '../data/healthcareData';
import { DoctorCard } from './DoctorCard';
import { Doctor, Language } from '../types';
import { translations } from './UrduTranslations';
import { ArrowRight, Filter } from 'lucide-react';

interface DoctorsSectionProps {
  onViewProfile: (doctor: Doctor) => void;
  onBookAppointment: (doctor: Doctor) => void;
  onViewAllDoctors: () => void;
  currentLang: Language;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({
  onViewProfile,
  onBookAppointment,
  onViewAllDoctors,
  currentLang,
}) => {
  const [selectedCityFilter, setSelectedCityFilter] = useState('All');
  const t = translations[currentLang];

  const cityTabs = ['All', 'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi'];

  const filteredDoctors = DOCTORS.filter((doc) => {
    if (selectedCityFilter === 'All') return true;
    return doc.city.toLowerCase() === selectedCityFilter.toLowerCase();
  }).slice(0, 6);

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80" id="featured-doctors-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and City Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-bold text-[#1E60D5] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full">
              Top Rated Healthcare Providers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2648]">
              {t.doctorsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#5F6B7A]">
              {t.doctorsSubtitle}
            </p>
          </div>

          {/* City Switcher Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 self-start md:self-auto">
            {cityTabs.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCityFilter(city)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                  selectedCityFilter === city
                    ? 'bg-[#0F2648] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {city === 'All' ? 'All Cities' : city}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDoctors.map((doc) => (
            <DoctorCard
              key={doc.id}
              doctor={doc}
              onViewProfile={onViewProfile}
              onBookAppointment={onBookAppointment}
            />
          ))}
        </div>

        {/* Bottom Explorer Action */}
        <div className="mt-10 text-center">
          <button
            onClick={onViewAllDoctors}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-[#0F2648] border border-slate-300 font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors group"
          >
            <span>Browse All 850+ Verified Doctors Across Pakistan</span>
            <ArrowRight className="w-4 h-4 text-[#1E60D5] transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
