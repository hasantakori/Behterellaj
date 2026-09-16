import React, { useState } from 'react';
import { Language, Doctor, Hospital, HealthArticle, HealthService, SymptomCondition, PatientUser } from './types';
import { DOCTORS, HOSPITALS, HEALTH_SERVICES, SYMPTOMS_CONDITIONS, HEALTH_ARTICLES } from './data/healthcareData';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { HeroSearch } from './components/HeroSearch';
import { QuickAccessCards } from './components/QuickAccessCards';
import { TrustValueStrip } from './components/TrustValueStrip';
import { HowItWorks } from './components/HowItWorks';
import { SpecialtiesGrid } from './components/SpecialtiesGrid';
import { DoctorsSection } from './components/DoctorsSection';
import { HospitalsSection } from './components/HospitalsSection';
import { ServicesSection } from './components/ServicesSection';
import { SymptomsSection } from './components/SymptomsSection';
import { HealthLibrarySection } from './components/HealthLibrarySection';
import { CallToActionSections } from './components/CallToActionSections';
import { Footer } from './components/Footer';

// Modals
import { BookingModal } from './components/BookingModal';
import { DoctorProfileModal } from './components/DoctorProfileModal';
import { HospitalDetailModal } from './components/HospitalDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { DoctorRegistrationModal } from './components/DoctorRegistrationModal';
import { PatientAuthModal } from './components/PatientAuthModal';
import { CorporatePartnershipModal } from './components/CorporatePartnershipModal';

// Dedicated Views
import { SearchResultsView } from './components/SearchResultsView';
import { AboutView } from './components/AboutView';

export default function App() {
  // Localization
  const [currentLang, setCurrentLang] = useState<Language>('en');

  // Navigation State: 'home' | 'doctors' | 'hospitals' | 'specialties' | 'services' | 'symptoms' | 'library' | 'about'
  const [activeNav, setActiveNav] = useState<string>('home');

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchCity, setSearchCity] = useState<string>('Lahore');
  const [selectedSpecialtyFilter, setSelectedSpecialtyFilter] = useState<string>('');

  // User State
  const [currentUser, setCurrentUser] = useState<PatientUser | null>({
    name: 'Asad Khan',
    phone: '0300 1234567',
    city: 'Lahore',
    isLoggedIn: false,
  });

  // Modal States
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState<Doctor | undefined>(undefined);
  const [bookingHospitalName, setBookingHospitalName] = useState<string | undefined>(undefined);

  const [doctorProfileOpen, setDoctorProfileOpen] = useState(false);
  const [selectedDoctorForProfile, setSelectedDoctorForProfile] = useState<Doctor | null>(null);

  const [hospitalModalOpen, setHospitalModalOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

  const [articleModalOpen, setArticleModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<HealthArticle | null>(null);

  const [doctorRegOpen, setDoctorRegOpen] = useState(false);
  const [patientAuthOpen, setPatientAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [partnershipOpen, setPartnershipOpen] = useState(false);

  // Success Booking Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  // Handlers
  const handleToggleLang = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'ur' : 'en'));
  };

  const handleHeroSearch = (query: string, city: string) => {
    setSearchQuery(query);
    setSearchCity(city);
    setActiveNav('doctors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSpecialtySelect = (specialtyId: string) => {
    setSelectedSpecialtyFilter(specialtyId);
    setActiveNav('doctors');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDoctorProfile = (doctor: Doctor) => {
    setSelectedDoctorForProfile(doctor);
    setDoctorProfileOpen(true);
  };

  const handleOpenBooking = (doctor?: Doctor, hospitalName?: string) => {
    setBookingDoctor(doctor || DOCTORS[0]);
    setBookingHospitalName(hospitalName);
    setBookingModalOpen(true);
  };

  const handleOpenHospitalDetail = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    setHospitalModalOpen(true);
  };

  const handleOpenArticle = (article: HealthArticle) => {
    setSelectedArticle(article);
    setArticleModalOpen(true);
  };

  const handleAuthSuccess = (user: PatientUser) => {
    setCurrentUser(user);
    triggerToast(`Welcome, ${user.name}! You are now signed in.`);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    triggerToast('You have successfully signed out.');
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900 ${
        currentLang === 'ur' ? 'font-urdu' : 'font-sans'
      }`}
      dir={currentLang === 'ur' ? 'rtl' : 'ltr'}
      id="behter-ellaj-app-root"
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-[#0F2648] text-white px-5 py-3 rounded-2xl shadow-2xl border border-blue-400/30 text-xs font-bold flex items-center gap-2.5 animate-in slide-in-from-top-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Sticky & Responsive Header */}
      <Header
        currentLang={currentLang}
        onToggleLang={handleToggleLang}
        activeNav={activeNav}
        onNavigate={(nav) => {
          setActiveNav(nav);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={() => handleOpenBooking()}
        onOpenDoctorReg={() => setDoctorRegOpen(true)}
        onOpenAuth={(mode) => {
          setAuthMode(mode);
          setPatientAuthOpen(true);
        }}
        user={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Content Area Driven By Active Navigation */}
      <main className="flex-1 pb-16 lg:pb-0">
        {activeNav === 'home' && (
          <>
            {/* Section 6 & 7: Hero with Smart Multi-Parameter Search */}
            <HeroSearch
              currentLang={currentLang}
              onSearch={handleHeroSearch}
              onSelectSpecialty={handleSpecialtySelect}
              onExploreHospitals={() => {
                setActiveNav('hospitals');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onFindDoctorDirect={() => {
                setActiveNav('doctors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 8: 6 Core Quick Action Cards */}
            <QuickAccessCards
              currentLang={currentLang}
              onNavigate={(view) => {
                setActiveNav(view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Section 9: Verified Trust Value Strip */}
            <TrustValueStrip currentLang={currentLang} />

            {/* Section 10: How Behter Ellaj Works (4 Steps) */}
            <HowItWorks currentLang={currentLang} />

            {/* Section 11: Specialties Directory Grid */}
            <SpecialtiesGrid
              currentLang={currentLang}
              onSelectSpecialty={handleSpecialtySelect}
            />

            {/* Section 12: Featured Doctors Showcase */}
            <DoctorsSection
              currentLang={currentLang}
              onViewProfile={handleOpenDoctorProfile}
              onBookAppointment={(doc) => handleOpenBooking(doc)}
              onViewAllDoctors={() => {
                setActiveNav('doctors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 13: Premier Hospitals Directory */}
            <HospitalsSection
              currentLang={currentLang}
              onViewHospital={handleOpenHospitalDetail}
              onViewAllHospitals={() => {
                setActiveNav('hospitals');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 14: Diagnostic & Healthcare Services */}
            <ServicesSection
              currentLang={currentLang}
              onSelectService={(srv) => {
                triggerToast(`Diagnostic service requested: ${srv.title}. Our team will call you.`);
              }}
            />

            {/* Section 18: Symptoms & Clinical Conditions Guide */}
            <SymptomsSection
              currentLang={currentLang}
              onSelectCondition={(cond) => {
                setSelectedSpecialtyFilter(cond.recommendedSpecialties[0]);
                setActiveNav('doctors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onFindSpecialist={(specialty) => {
                setSelectedSpecialtyFilter(specialty);
                setActiveNav('doctors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 19: Medically Reviewed Health Library */}
            <HealthLibrarySection
              currentLang={currentLang}
              onReadArticle={handleOpenArticle}
              onViewAllArticles={() => {
                setActiveNav('library');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 26, 27, 28: CTAs for Patients, Doctors, and Institutional Partners */}
            <CallToActionSections
              currentLang={currentLang}
              onOpenPatientReg={() => {
                setAuthMode('register');
                setPatientAuthOpen(true);
              }}
              onOpenDoctorReg={() => setDoctorRegOpen(true)}
              onOpenPartnership={() => setPartnershipOpen(true)}
            />
          </>
        )}

        {/* View 2: Marketplace Doctor & Hospital Search Results View */}
        {activeNav === 'doctors' && (
          <SearchResultsView
            initialQuery={searchQuery}
            initialCity={searchCity}
            initialSpecialty={selectedSpecialtyFilter}
            onViewDoctorProfile={handleOpenDoctorProfile}
            onBookAppointment={(doc) => handleOpenBooking(doc)}
            onViewHospital={handleOpenHospitalDetail}
            currentLang={currentLang}
          />
        )}

        {/* View 3: Dedicated Hospitals Directory */}
        {activeNav === 'hospitals' && (
          <div className="py-6">
            <HospitalsSection
              currentLang={currentLang}
              onViewHospital={handleOpenHospitalDetail}
              onViewAllHospitals={() => {}}
            />
          </div>
        )}

        {/* View 4: Specialties Grid */}
        {activeNav === 'specialties' && (
          <div className="py-6">
            <SpecialtiesGrid
              currentLang={currentLang}
              onSelectSpecialty={handleSpecialtySelect}
            />
          </div>
        )}

        {/* View 5: Clinical Services */}
        {activeNav === 'services' && (
          <div className="py-6">
            <ServicesSection
              currentLang={currentLang}
              onSelectService={(srv) => {
                triggerToast(`Diagnostic service requested: ${srv.title}. Our team will call you.`);
              }}
            />
          </div>
        )}

        {/* View 6: Symptoms & Conditions */}
        {activeNav === 'symptoms' && (
          <div className="py-6">
            <SymptomsSection
              currentLang={currentLang}
              onSelectCondition={(cond) => {
                setSelectedSpecialtyFilter(cond.recommendedSpecialties[0]);
                setActiveNav('doctors');
              }}
              onFindSpecialist={(spec) => {
                setSelectedSpecialtyFilter(spec);
                setActiveNav('doctors');
              }}
            />
          </div>
        )}

        {/* View 7: Health Library */}
        {activeNav === 'library' && (
          <div className="py-6">
            <HealthLibrarySection
              currentLang={currentLang}
              onReadArticle={handleOpenArticle}
              onViewAllArticles={() => {}}
            />
          </div>
        )}

        {/* View 8: About Us & Mission */}
        {activeNav === 'about' && (
          <AboutView
            currentLang={currentLang}
            onOpenDoctorReg={() => setDoctorRegOpen(true)}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Section 31: Comprehensive 5-Column Deep Navy Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={(view) => {
          setActiveNav(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={() => handleOpenBooking()}
        onOpenDoctorReg={() => setDoctorRegOpen(true)}
        onOpenPartnership={() => setPartnershipOpen(true)}
      />

      {/* Section 37: Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        activeNav={activeNav}
        onNavigate={(nav) => {
          setActiveNav(nav);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={() => handleOpenBooking()}
        onOpenAuth={() => {
          setAuthMode('login');
          setPatientAuthOpen(true);
        }}
        currentLang={currentLang}
      />

      {/* MODAL 1: Appointment Booking Workflow */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        doctor={bookingDoctor}
        initialHospital={bookingHospitalName}
        onBookingComplete={(apt) => {
          triggerToast(
            `Appointment confirmed with ${apt.doctorName} on ${apt.date} at ${apt.timeSlot}! (Token: ${apt.tokenNumber})`
          );
        }}
      />

      {/* MODAL 2: Doctor Profile Modal with Tabs */}
      <DoctorProfileModal
        isOpen={doctorProfileOpen}
        onClose={() => setDoctorProfileOpen(false)}
        doctor={selectedDoctorForProfile}
        onBookAppointment={(doc, hosp) => {
          setDoctorProfileOpen(false);
          handleOpenBooking(doc, hosp);
        }}
      />

      {/* MODAL 3: Hospital Detail & Trauma Center Modal */}
      <HospitalDetailModal
        isOpen={hospitalModalOpen}
        onClose={() => setHospitalModalOpen(false)}
        hospital={selectedHospital}
        onBookDoctor={(docName) => {
          setHospitalModalOpen(false);
          const foundDoctor = DOCTORS.find((d) => d.name === docName);
          handleOpenBooking(foundDoctor || DOCTORS[0], selectedHospital?.name);
        }}
      />

      {/* MODAL 4: Health Article Reader */}
      <ArticleDetailModal
        isOpen={articleModalOpen}
        onClose={() => setArticleModalOpen(false)}
        article={selectedArticle}
        onFindDoctor={(spec) => {
          setArticleModalOpen(false);
          setSelectedSpecialtyFilter(spec);
          setActiveNav('doctors');
        }}
      />

      {/* MODAL 5: Doctor Onboarding Registration Modal */}
      <DoctorRegistrationModal
        isOpen={doctorRegOpen}
        onClose={() => setDoctorRegOpen(false)}
      />

      {/* MODAL 6: Patient Login & Registration Modal */}
      <PatientAuthModal
        isOpen={patientAuthOpen}
        onClose={() => setPatientAuthOpen(false)}
        onSuccess={handleAuthSuccess}
        initialMode={authMode}
      />

      {/* MODAL 7: Corporate & Institutional Partnership Modal */}
      <CorporatePartnershipModal
        isOpen={partnershipOpen}
        onClose={() => setPartnershipOpen(false)}
      />
    </div>
  );
}
