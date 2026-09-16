import React from 'react';
import { ShieldCheck, Star, MapPin, Calendar, Video, Clock, ArrowRight } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
  onViewProfile: (doctor: Doctor) => void;
  onBookAppointment: (doctor: Doctor) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  doctor,
  onViewProfile,
  onBookAppointment,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all p-4 sm:p-5 flex flex-col justify-between space-y-4 group">
      
      {/* Upper Info */}
      <div className="flex items-start gap-3.5">
        <div className="relative shrink-0">
          <img
            src={doctor.photoUrl}
            alt={doctor.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-slate-200 shadow-xs"
          />
          {doctor.isVerified && (
            <span
              className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-0.5 rounded-full shadow-xs"
              title="Verified by Pakistan Medical & Dental Council (PMDC)"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3
              onClick={() => onViewProfile(doctor)}
              className="font-bold text-sm sm:text-base text-[#0F2648] hover:text-[#1E60D5] cursor-pointer transition-colors truncate"
            >
              {doctor.name}
            </h3>
          </div>

          <p className="text-xs font-semibold text-[#1E60D5] truncate">
            {doctor.specialtyName}
          </p>

          <p className="text-[11px] text-slate-500 line-clamp-1">
            {doctor.qualification}
          </p>

          <div className="flex items-center gap-3 text-xs pt-0.5">
            <span className="font-semibold text-slate-700">
              {doctor.experienceYears}+ Yrs Exp.
            </span>
            <span className="flex items-center gap-0.5 text-amber-600 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {doctor.rating}
              <span className="text-slate-400 font-normal">({doctor.reviewsCount})</span>
            </span>
          </div>
        </div>
      </div>

      {/* Middle Location & Affiliation */}
      <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
        <div className="flex items-start gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
          <span className="line-clamp-1 font-medium text-slate-700">
            {doctor.clinicAddress}
          </span>
        </div>

        <div className="flex items-center justify-between text-[11px] pt-1">
          <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {doctor.availableToday ? 'Available Today' : doctor.nextAvailableSlot}
          </span>
          <span className="text-slate-500">
            Fee: <strong className="text-slate-900 text-xs">Rs. {doctor.consultationFeePkr.toLocaleString()}</strong>
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
        <button
          onClick={() => onViewProfile(doctor)}
          className="py-2 px-3 text-xs font-bold text-slate-700 hover:text-[#0F2648] bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors text-center"
        >
          View Profile
        </button>

        <button
          onClick={() => onBookAppointment(doctor)}
          className="py-2 px-3 text-xs font-bold text-white bg-[#1E60D5] hover:bg-blue-700 rounded-xl shadow-xs transition-colors text-center flex items-center justify-center gap-1"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>
      </div>

    </div>
  );
};
