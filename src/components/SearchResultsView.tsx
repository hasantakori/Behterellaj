import React, { useState, useMemo } from 'react';
import { Search, MapPin, Filter, SlidersHorizontal, UserCheck, Building2, FlaskConical, Star, Calendar, ShieldCheck, X } from 'lucide-react';
import { DOCTORS, HOSPITALS, HEALTH_SERVICES, CITIES, SPECIALTIES } from '../data/healthcareData';
import { Doctor, Hospital, HealthService, Language } from '../types';
import { DoctorCard } from './DoctorCard';
import { translations } from './UrduTranslations';

interface SearchResultsViewProps {
  initialQuery?: string;
  initialCity?: string;
  initialSpecialty?: string;
  onViewDoctorProfile: (doctor: Doctor) => void;
  onBookAppointment: (doctor: Doctor) => void;
  onViewHospital: (hospital: Hospital) => void;
  currentLang: Language;
}

export const SearchResultsView: React.FC<SearchResultsViewProps> = ({
  initialQuery = '',
  initialCity = '',
  initialSpecialty = '',
  onViewDoctorProfile,
  onBookAppointment,
  onViewHospital,
  currentLang,
}) => {
  const [activeTab, setActiveTab] = useState<'doctors' | 'hospitals' | 'services'>('doctors');
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [cityFilter, setCityFilter] = useState(initialCity || '');
  const [specialtyFilter, setSpecialtyFilter] = useState(initialSpecialty || '');
  const [genderFilter, setGenderFilter] = useState<'all' | 'male' | 'female'>('all');
  const [consultationMode, setConsultationMode] = useState<'all' | 'in-person' | 'video'>('all');
  const [availableTodayOnly, setAvailableTodayOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'recommended' | 'experience' | 'fee-low' | 'fee-high' | 'rating'>('recommended');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filtered Doctors
  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter((doc) => {
      // Query search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = doc.name.toLowerCase().includes(q);
        const matchSpec = doc.specialtyName.toLowerCase().includes(q);
        const matchHosp = doc.hospitalAffiliations.some((h) => h.toLowerCase().includes(q));
        const matchQual = doc.qualification.toLowerCase().includes(q);
        if (!matchName && !matchSpec && !matchHosp && !matchQual) return false;
      }

      // City filter
      if (cityFilter && doc.city.toLowerCase() !== cityFilter.toLowerCase()) {
        return false;
      }

      // Specialty filter
      if (specialtyFilter && doc.specialtyId !== specialtyFilter) {
        return false;
      }

      // Gender filter
      if (genderFilter !== 'all' && doc.gender !== genderFilter) {
        return false;
      }

      // Availability filter
      if (availableTodayOnly && !doc.availableToday) {
        return false;
      }

      // Video consultation filter
      if (consultationMode === 'video' && !doc.videoFeePkr) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'experience') return b.experienceYears - a.experienceYears;
      if (sortBy === 'fee-low') return a.consultationFeePkr - b.consultationFeePkr;
      if (sortBy === 'fee-high') return b.consultationFeePkr - a.consultationFeePkr;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isVerified ? 1 : 0) - (a.isVerified ? 1 : 0);
    });
  }, [searchQuery, cityFilter, specialtyFilter, genderFilter, availableTodayOnly, consultationMode, sortBy]);

  // Filtered Hospitals
  const filteredHospitals = useMemo(() => {
    return HOSPITALS.filter((hosp) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = hosp.name.toLowerCase().includes(q);
        const matchDept = hosp.departments.some((d) => d.toLowerCase().includes(q));
        if (!matchName && !matchDept) return false;
      }
      if (cityFilter && hosp.city.toLowerCase() !== cityFilter.toLowerCase()) {
        return false;
      }
      return true;
    });
  }, [searchQuery, cityFilter]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setCityFilter('');
    setSpecialtyFilter('');
    setGenderFilter('all');
    setConsultationMode('all');
    setAvailableTodayOnly(false);
    setSortBy('recommended');
  };

  return (
    <div className="py-8 bg-[#F8FAFC] min-h-screen" id="marketplace-search-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Search Controls Strip */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search doctors, hospitals, specialties or symptoms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
              />
            </div>

            {/* City Dropdown */}
            <div className="relative md:w-52">
              <MapPin className="w-4 h-4 text-red-500 absolute left-3.5 top-3 pointer-events-none" />
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none cursor-pointer appearance-none"
              >
                <option value="">All Pakistan Cities</option>
                {CITIES.filter((c) => c !== 'All Cities').map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Specialty Dropdown */}
            <div className="relative md:w-56">
              <select
                value={specialtyFilter}
                onChange={(e) => setSpecialtyFilter(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none cursor-pointer appearance-none"
              >
                <option value="">All Medical Specialties</option>
                {SPECIALTIES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.doctorsCount})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Result Tabs & Mobile Filter Button */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 flex-wrap gap-2">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('doctors')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 ${
                  activeTab === 'doctors'
                    ? 'bg-[#0F2648] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Doctors ({filteredDoctors.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('hospitals')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 ${
                  activeTab === 'hospitals'
                    ? 'bg-[#0F2648] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Hospitals ({filteredHospitals.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('services')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 ${
                  activeTab === 'services'
                    ? 'bg-[#0F2648] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <FlaskConical className="w-3.5 h-3.5" />
                <span>Diagnostics & Services ({HEALTH_SERVICES.length})</span>
              </button>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 rounded-xl flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Marketplace 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Filters Sidebar (Desktop & Mobile Drawer) */}
          <aside className={`lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-5 ${
            mobileFilterOpen ? 'block' : 'hidden lg:block'
          }`}>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-[#0F2648] uppercase tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-[#1E60D5]" />
                Filter Results
              </span>
              <button
                onClick={clearAllFilters}
                className="text-[11px] text-[#1E60D5] hover:underline font-semibold"
              >
                Reset All
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 block">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full p-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
              >
                <option value="recommended">Recommended (Verified First)</option>
                <option value="experience">Experience (High to Low)</option>
                <option value="rating">Patient Rating (Highest)</option>
                <option value="fee-low">Fee (Low to High)</option>
                <option value="fee-high">Fee (High to Low)</option>
              </select>
            </div>

            {/* Availability Filter */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-800 block">Availability</label>
              <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={availableTodayOnly}
                  onChange={(e) => setAvailableTodayOnly(e.target.checked)}
                  className="rounded text-[#1E60D5] focus:ring-[#1E60D5]"
                />
                <span>Available Today</span>
              </label>
            </div>

            {/* Consultation Mode */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-800 block">Consultation Mode</label>
              <div className="space-y-1.5 text-xs text-slate-700">
                {[
                  { id: 'all', label: 'All Modes' },
                  { id: 'in-person', label: 'In-Clinic Visit' },
                  { id: 'video', label: 'Online Video Call' },
                ].map((m) => (
                  <label key={m.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="consultationMode"
                      value={m.id}
                      checked={consultationMode === m.id}
                      onChange={() => setConsultationMode(m.id as any)}
                      className="text-[#1E60D5] focus:ring-[#1E60D5]"
                    />
                    <span>{m.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Doctor Gender */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-800 block">Doctor Gender</label>
              <div className="space-y-1.5 text-xs text-slate-700">
                {[
                  { id: 'all', label: 'Any Gender' },
                  { id: 'female', label: 'Female Doctor' },
                  { id: 'male', label: 'Male Doctor' },
                ].map((g) => (
                  <label key={g.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="genderFilter"
                      value={g.id}
                      checked={genderFilter === g.id}
                      onChange={() => setGenderFilter(g.id as any)}
                      className="text-[#1E60D5] focus:ring-[#1E60D5]"
                    />
                    <span>{g.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Verification Guarantee */}
            <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl space-y-1 text-[11px] text-blue-900">
              <div className="flex items-center gap-1 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Verified Provider Network</span>
              </div>
              <p className="text-blue-800/80">
                All registered consultants possess active PMDC credentials and verified hospital privileges.
              </p>
            </div>
          </aside>

          {/* Right Column: Search Results Feed */}
          <main className="lg:col-span-9 space-y-4">
            
            {/* Active Filters Pill Bar */}
            <div className="flex items-center justify-between text-xs text-slate-500">
              <p>
                Showing{' '}
                <strong className="text-slate-900 font-bold">
                  {activeTab === 'doctors'
                    ? filteredDoctors.length
                    : activeTab === 'hospitals'
                    ? filteredHospitals.length
                    : HEALTH_SERVICES.length}
                </strong>{' '}
                {activeTab} across Pakistan
              </p>
            </div>

            {/* Tab 1: Doctors Results */}
            {activeTab === 'doctors' && (
              <div className="space-y-4">
                {filteredDoctors.length === 0 ? (
                  <div className="bg-white p-10 rounded-2xl border border-slate-200 text-center space-y-3">
                    <p className="text-sm font-semibold text-slate-700">
                      No doctors matching your specific filter criteria.
                    </p>
                    <button
                      onClick={clearAllFilters}
                      className="px-4 py-2 bg-[#1E60D5] text-white text-xs font-bold rounded-xl"
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredDoctors.map((doc) => (
                      <DoctorCard
                        key={doc.id}
                        doctor={doc}
                        onViewProfile={onViewDoctorProfile}
                        onBookAppointment={onBookAppointment}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Tab 2: Hospitals Results */}
            {activeTab === 'hospitals' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredHospitals.map((hosp) => (
                  <div
                    key={hosp.id}
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="h-44 w-full bg-slate-100 overflow-hidden relative">
                      <img src={hosp.image} alt={hosp.name} className="w-full h-full object-cover" />
                      {hosp.emergency247 && (
                        <span className="absolute top-2.5 left-2.5 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                          24/7 Emergency
                        </span>
                      )}
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-bold text-base text-[#0F2648]">{hosp.name}</h3>
                      <p className="text-xs text-slate-500">{hosp.address} • {hosp.city}</p>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {hosp.departments.slice(0, 3).map((d, i) => (
                          <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                            {d}
                          </span>
                        ))}
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-700">
                          {hosp.doctorsCount}+ Specialists
                        </span>
                        <button
                          onClick={() => onViewHospital(hosp)}
                          className="px-4 py-1.5 bg-[#0F2648] hover:bg-[#1A365D] text-white text-xs font-bold rounded-xl"
                        >
                          View Hospital
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Services Results */}
            {activeTab === 'services' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {HEALTH_SERVICES.map((srv) => (
                  <div
                    key={srv.id}
                    className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {srv.category}
                      </span>
                      {srv.homeSampleAvailable && (
                        <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                          Home Sample Available
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-sm text-[#0F2648]">{srv.title}</h3>
                    <p className="text-xs text-slate-600">{srv.description}</p>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Starting from</span>
                        <strong className="text-slate-900 font-bold">
                          Rs. {srv.priceStartingPkr.toLocaleString()}
                        </strong>
                      </div>
                      <button
                        onClick={() => alert(`Service requested: ${srv.title}. Our diagnostic coordination team will contact you.`)}
                        className="px-4 py-2 bg-[#1E60D5] hover:bg-blue-700 text-white font-bold rounded-xl"
                      >
                        Book Test
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </main>

        </div>

      </div>
    </div>
  );
};
