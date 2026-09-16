import React, { useState } from 'react';
import { X, ShieldCheck, MapPin, Calendar, Clock, Star, Phone, Award, GraduationCap, CheckCircle2, ChevronRight, HelpCircle, MessageSquare } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorProfileModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: (doctor: Doctor) => void;
}

export const DoctorProfileModal: React.FC<DoctorProfileModalProps> = ({
  doctor,
  isOpen,
  onClose,
  onBookAppointment,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'experience' | 'services' | 'locations' | 'reviews' | 'faqs'>('overview');

  if (!isOpen || !doctor) return null;

  const faqs = [
    {
      q: `What is the consultation fee for ${doctor.name}?`,
      a: `The in-person consultation fee is Rs. ${doctor.consultationFeePkr.toLocaleString()} and online video consultation is Rs. ${(doctor.videoFeePkr || doctor.consultationFeePkr).toLocaleString()}.`,
    },
    {
      q: `Where does ${doctor.name} practice?`,
      a: `${doctor.name} consults at ${doctor.clinicAddress} as well as affiliated partner hospitals: ${doctor.hospitalAffiliations.join(', ')}.`,
    },
    {
      q: `What are ${doctor.name}'s qualifications and experience?`,
      a: `${doctor.name} holds ${doctor.qualification} with ${doctor.experienceYears}+ years of clinical experience. Verified PMDC Reg: ${doctor.pmdcNumber}.`,
    },
    {
      q: 'Can I book an online video consultation?',
      a: `Yes, you can easily schedule a secure tele-consultation on Behter Ellaj from anywhere in Pakistan or abroad.`,
    },
  ];

  const mockReviews = [
    {
      name: 'Haji Muhammad Akram',
      date: 'Aug 24, 2026',
      rating: 5,
      comment: 'Very professional, polite, and thorough. Explained my diagnosis in simple Urdu without inducing panic.',
      tag: 'Verified Patient Visit',
    },
    {
      name: 'Dr. Shahida Parveen',
      date: 'Jul 19, 2026',
      rating: 5,
      comment: 'Excellent clinical judgment. Clinic waiting time was minimal and the treatment plan produced immediate results.',
      tag: 'Verified Clinic Visit',
    },
    {
      name: 'Kashif Mehmood',
      date: 'Jun 11, 2026',
      rating: 4.8,
      comment: 'The video consultation was crystal clear. Sent prescription via SMS right after the call.',
      tag: 'Verified Telehealth',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A1628]/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-4 max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-[#0F2648] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-wider uppercase text-blue-200 bg-white/10 px-2 py-0.5 rounded">
              Verified Specialist Profile
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            id="close-doctor-profile-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
          
          {/* Doctor Hero Card */}
          <div className="flex flex-col md:flex-row gap-6 items-start pb-6 border-b border-slate-200">
            <div className="relative shrink-0 mx-auto md:mx-0">
              <img
                src={doctor.photoUrl}
                alt={doctor.name}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-slate-100 shadow-md"
              />
              <span className="absolute -bottom-2 -right-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Verified
              </span>
            </div>

            <div className="flex-1 space-y-2 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0F2648]">{doctor.name}</h2>
                <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-800 font-semibold px-2 py-0.5 rounded-md border border-blue-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  {doctor.pmdcNumber}
                </span>
              </div>

              <p className="text-sm font-semibold text-[#1E60D5]">{doctor.title}</p>
              <p className="text-xs text-slate-600 font-medium">{doctor.qualification}</p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs text-slate-600">
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span><strong>{doctor.experienceYears}+ Years</strong> Experience</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span><strong>{doctor.rating}</strong> ({doctor.reviewsCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{doctor.city}, Pakistan</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                  Languages: {doctor.languages.join(', ')}
                </span>
                <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md font-medium">
                  {doctor.availableToday ? 'Available Today' : `Next: ${doctor.nextAvailableSlot}`}
                </span>
              </div>
            </div>

            {/* Quick Pricing Card on Desktop */}
            <div className="hidden lg:flex flex-col p-4 bg-slate-50 border border-slate-200 rounded-xl min-w-[220px] text-center space-y-2">
              <span className="text-xs text-slate-500">Consultation Fee</span>
              <span className="text-2xl font-extrabold text-[#0F2648]">
                Rs. {doctor.consultationFeePkr.toLocaleString()}
              </span>
              <button
                onClick={() => onBookAppointment(doctor)}
                className="w-full py-2.5 bg-[#1E60D5] hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors"
              >
                Book Appointment
              </button>
              <span className="text-[10px] text-slate-500">No advance booking charges</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-2 border-b border-slate-200 overflow-x-auto pb-1 text-xs font-semibold">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'experience', label: 'Experience & Degrees' },
              { id: 'services', label: 'Services & Treatments' },
              { id: 'locations', label: 'Hospitals & Timings' },
              { id: 'reviews', label: `Reviews (${doctor.reviewsCount})` },
              { id: 'faqs', label: 'FAQs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-2 border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#1E60D5] text-[#1E60D5]'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-[#0F2648] mb-1.5">Professional Summary</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{doctor.bio}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#0F2648] mb-2">Hospital Affiliations</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {doctor.hospitalAffiliations.map((hosp, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#1E60D5] shrink-0" />
                        <span>{hosp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#0F2648] mb-2">Key Highlights</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                      <span className="text-slate-500 block text-[11px]">Primary Specialty</span>
                      <strong className="text-slate-800">{doctor.specialtyName}</strong>
                    </div>
                    <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                      <span className="text-slate-500 block text-[11px]">Experience</span>
                      <strong className="text-slate-800">{doctor.experienceYears}+ Years</strong>
                    </div>
                    <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                      <span className="text-slate-500 block text-[11px]">Satisfaction Rate</span>
                      <strong className="text-emerald-700">98% Satisfied</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#0F2648] flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#1E60D5]" />
                  Education & Medical Training
                </h4>
                <div className="space-y-2.5">
                  {doctor.education.map((edu, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#1E60D5] mt-1.5 shrink-0" />
                      <span>{edu}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#0F2648]">Clinical Procedures & Expertise</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {doctor.services.map((srv, idx) => (
                    <div key={idx} className="p-3 border border-slate-200 rounded-lg text-xs text-slate-700 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'locations' && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#0F2648]">Clinic & Hospital Locations</h4>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs">
                  <div className="flex items-start justify-between">
                    <div>
                      <strong className="text-sm text-slate-900 block">{doctor.clinicAddress}</strong>
                      <span className="text-slate-500">OPD Clinic • {doctor.city}, Pakistan</span>
                    </div>
                    <span className="font-bold text-slate-900">Rs. {doctor.consultationFeePkr.toLocaleString()}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex items-center gap-4 text-slate-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Mon - Sat: 04:00 PM - 08:30 PM
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      042-111-234-890
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#0F2648]">Patient Experiences</h4>
                  <span className="text-xs text-slate-500">Based on verified patient appointments</span>
                </div>
                <div className="space-y-3">
                  {mockReviews.map((rev, idx) => (
                    <div key={idx} className="p-4 border border-slate-200 rounded-xl space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <strong className="text-xs text-slate-900 block">{rev.name}</strong>
                          <span className="text-[10px] text-slate-400">{rev.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          {rev.rating}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 italic">"{rev.comment}"</p>
                      <span className="inline-block text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium">
                        ✓ {rev.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#0F2648]">Frequently Asked Questions</h4>
                <div className="space-y-2.5">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="p-3.5 border border-slate-200 rounded-xl space-y-1">
                      <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-[#1E60D5] shrink-0" />
                        {faq.q}
                      </p>
                      <p className="text-xs text-slate-600 pl-5">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Persistent Sticky Footer Action Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 px-6 flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs text-slate-500 block">Consultation Fee</span>
            <span className="text-lg font-bold text-[#0F2648]">
              Rs. {doctor.consultationFeePkr.toLocaleString()}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookAppointment(doctor);
              }}
              className="px-6 py-2 bg-[#1E60D5] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              id="book-from-profile-btn"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
