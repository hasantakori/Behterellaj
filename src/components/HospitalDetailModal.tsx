import React from 'react';
import { X, MapPin, Phone, Building2, ShieldAlert, Star, ExternalLink, CheckCircle2, Users } from 'lucide-react';
import { Hospital } from '../types';

interface HospitalDetailModalProps {
  hospital: Hospital | null;
  isOpen: boolean;
  onClose: () => void;
  onFindHospitalDoctors: (hospitalName: string) => void;
}

export const HospitalDetailModal: React.FC<HospitalDetailModalProps> = ({
  hospital,
  isOpen,
  onClose,
  onFindHospitalDoctors,
}) => {
  if (!isOpen || !hospital) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A1628]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#0F2648] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-300" />
            <span className="text-sm font-bold tracking-wide">Healthcare Facility Profile</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hospital Banner Image */}
        <div className="relative h-48 sm:h-56 w-full bg-slate-900 overflow-hidden">
          <img
            src={hospital.image}
            alt={hospital.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
            <div className="text-white space-y-1">
              {hospital.emergency247 && (
                <span className="inline-flex items-center gap-1 text-[11px] bg-red-600 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1 shadow-sm">
                  <ShieldAlert className="w-3 h-3" />
                  24/7 Emergency & Trauma Active
                </span>
              )}
              <h3 className="text-xl sm:text-2xl font-bold">{hospital.name}</h3>
              <p className="text-xs text-slate-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                {hospital.address} • {hospital.city}, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto text-xs">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span className="text-slate-500 block text-[11px]">Bed Capacity</span>
              <strong className="text-sm text-slate-800">{hospital.bedsCount}+ Beds</strong>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span className="text-slate-500 block text-[11px]">Affiliated Doctors</span>
              <strong className="text-sm text-slate-800">{hospital.doctorsCount}+ Specialists</strong>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
              <span className="text-slate-500 block text-[11px]">Patient Rating</span>
              <strong className="text-sm text-amber-600 flex items-center justify-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                {hospital.rating} ({hospital.reviewsCount})
              </strong>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-[#0F2648] mb-1.5">About This Healthcare Center</h4>
            <p className="text-slate-600 leading-relaxed">{hospital.description}</p>
          </div>

          {/* Key Departments */}
          <div>
            <h4 className="text-sm font-bold text-[#0F2648] mb-2">Departments & Specialties</h4>
            <div className="flex flex-wrap gap-2">
              {hospital.departments.map((dept, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-blue-50 text-[#0F2648] font-semibold rounded-lg border border-blue-100">
                  {dept}
                </span>
              ))}
            </div>
          </div>

          {/* Accreditations & Key Facilities */}
          <div>
            <h4 className="text-sm font-bold text-[#0F2648] mb-2">Accreditations & Key Facilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {hospital.featuredServices.map((feat, idx) => (
                <div key={idx} className="p-2.5 bg-emerald-50/60 border border-emerald-100 rounded-lg text-emerald-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency & Direct Helpline */}
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-red-800 font-bold block text-sm">Direct Hospital & Emergency Helpline</span>
              <span className="text-red-600 text-[11px]">Available 24 hours a day, 7 days a week</span>
            </div>
            <a
              href={`tel:${hospital.phone}`}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {hospital.phone}
            </a>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 px-6 flex items-center justify-between">
          {hospital.website && (
            <a
              href={hospital.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-[#1E60D5] flex items-center gap-1"
            >
              Visit Official Website
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <div className="flex gap-2 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onFindHospitalDoctors(hospital.name);
              }}
              className="px-5 py-2 bg-[#1E60D5] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Users className="w-4 h-4" />
              View Doctors at {hospital.name.split(' ')[0]}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
