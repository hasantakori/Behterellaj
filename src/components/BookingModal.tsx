import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Video, CheckCircle2, ShieldCheck, User, Phone, Mail, FileText, AlertCircle } from 'lucide-react';
import { Doctor, AppointmentBooking } from '../types';

interface BookingModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
  onBookingSuccess: (booking: AppointmentBooking) => void;
  preselectedMode?: 'in-person' | 'video';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  doctor,
  isOpen,
  onClose,
  onBookingSuccess,
  preselectedMode = 'in-person',
}) => {
  const [mode, setMode] = useState<'in-person' | 'video'>(preselectedMode);
  const [selectedDate, setSelectedDate] = useState<string>('2026-09-15');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('05:30 PM');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [patientCity, setPatientCity] = useState<string>('Lahore');
  const [notes, setNotes] = useState<string>('');
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen || !doctor) return null;

  const datesList = [
    { label: 'Today', date: '2026-09-14', display: 'Sep 14, Mon' },
    { label: 'Tomorrow', date: '2026-09-15', display: 'Sep 15, Tue' },
    { label: 'Wed', date: '2026-09-16', display: 'Sep 16, Wed' },
    { label: 'Thu', date: '2026-09-17', display: 'Sep 17, Thu' },
    { label: 'Fri', date: '2026-09-18', display: 'Sep 18, Fri' },
  ];

  const timeSlots = [
    { time: '11:00 AM', period: 'Morning' },
    { time: '11:45 AM', period: 'Morning' },
    { time: '02:30 PM', period: 'Afternoon' },
    { time: '03:15 PM', period: 'Afternoon' },
    { time: '05:30 PM', period: 'Evening' },
    { time: '06:15 PM', period: 'Evening' },
    { time: '07:00 PM', period: 'Evening' },
    { time: '08:00 PM', period: 'Evening' },
  ];

  const currentFee = mode === 'video' ? (doctor.videoFeePkr || doctor.consultationFeePkr) : doctor.consultationFeePkr;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) {
      setErrorMsg('Please provide your full name and mobile phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    setTimeout(() => {
      const ref = `BE-${Math.floor(100000 + Math.random() * 900000)}`;
      const booking: AppointmentBooking = {
        id: `bk-${Date.now()}`,
        bookingRef: ref,
        doctorId: doctor.id,
        doctorName: doctor.name,
        doctorSpecialty: doctor.specialtyName,
        doctorPhoto: doctor.photoUrl,
        hospitalOrClinic: mode === 'in-person' ? doctor.clinicAddress : 'Behter Ellaj Telehealth HD Video Room',
        patientName,
        patientPhone,
        patientEmail: patientEmail || 'patient@behterellaj.com',
        patientCity,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        consultationType: mode,
        feePkr: currentFee,
        notes,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
      };

      setConfirmedBooking(booking);
      setIsSubmitting(false);
      onBookingSuccess(booking);
    }, 600);
  };

  const handleResetAndClose = () => {
    setConfirmedBooking(null);
    setPatientName('');
    setPatientPhone('');
    setPatientEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A1628]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#0F2648] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                {confirmedBooking ? 'Appointment Confirmed' : 'Book an Appointment'}
              </h3>
              <p className="text-xs text-blue-200">Behter Ellaj Instant Doctor Booking</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            id="close-booking-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmedBooking ? (
          /* Confirmation Success Screen */
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-[#1E60D5] text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
                Booking Reference: {confirmedBooking.bookingRef}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-[#0F2648]">
                Appointment Successfully Scheduled!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                A confirmation SMS and WhatsApp message with appointment instructions has been sent to <strong className="text-slate-800">{confirmedBooking.patientPhone}</strong>.
              </p>
            </div>

            {/* Summary Voucher Card */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 text-left space-y-3">
              <div className="flex items-center gap-3.5 pb-3 border-b border-slate-200">
                <img
                  src={doctor.photoUrl}
                  alt={doctor.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h5 className="font-bold text-slate-900 text-base">{doctor.name}</h5>
                  <p className="text-xs text-[#1E60D5] font-medium">{doctor.title}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Date & Time</span>
                  <span className="font-semibold text-slate-800">
                    {confirmedBooking.date} at {confirmedBooking.timeSlot}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Consultation Type</span>
                  <span className="font-semibold text-slate-800 capitalize flex items-center gap-1">
                    {confirmedBooking.consultationType === 'video' ? (
                      <Video className="w-3.5 h-3.5 text-blue-600" />
                    ) : (
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                    {confirmedBooking.consultationType === 'video' ? 'Online Video Call' : 'In-Person Clinic Visit'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Patient Name</span>
                  <span className="font-semibold text-slate-800">{confirmedBooking.patientName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Consultation Fee</span>
                  <span className="font-semibold text-emerald-700">Rs. {confirmedBooking.feePkr.toLocaleString()} (Pay at clinic / online)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 text-xs text-slate-600">
                <span className="font-medium text-slate-700">Location: </span>
                {confirmedBooking.hospitalOrClinic}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 bg-[#1E60D5] hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors"
                id="done-booking-btn"
              >
                Done & Return to Site
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Doctor Snapshot Card */}
            <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-3">
                <img
                  src={doctor.photoUrl}
                  alt={doctor.name}
                  className="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-xs"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-slate-900 text-sm">{doctor.name}</h4>
                    {doctor.isVerified && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] bg-blue-50 text-blue-700 font-semibold px-1.5 py-0.5 rounded border border-blue-200">
                        <ShieldCheck className="w-3 h-3 text-blue-600" />
                        PMDC Verified
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600">{doctor.specialtyName} • {doctor.experienceYears} Years Exp.</p>
                  <p className="text-[11px] text-slate-500 truncate max-w-xs">{doctor.clinicAddress}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-500 block">Fee</span>
                <span className="text-base font-bold text-[#0F2648]">
                  Rs. {currentFee.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Consultation Mode Switcher */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                1. Select Consultation Mode
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setMode('in-person')}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-medium transition-all ${
                    mode === 'in-person'
                      ? 'bg-blue-50/70 border-[#1E60D5] text-[#0F2648] ring-2 ring-blue-100'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-[#1E60D5]" />
                  <span>In-Person Clinic Visit</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode('video')}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-medium transition-all ${
                    mode === 'video'
                      ? 'bg-blue-50/70 border-[#1E60D5] text-[#0F2648] ring-2 ring-blue-100'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Video className="w-4 h-4 text-[#1E60D5]" />
                  <span>Online Video Call</span>
                </button>
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                2. Select Date
              </label>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {datesList.map((d) => (
                  <button
                    key={d.date}
                    type="button"
                    onClick={() => setSelectedDate(d.date)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium shrink-0 border transition-all text-center min-w-[90px] ${
                      selectedDate === d.date
                        ? 'bg-[#0F2648] text-white border-[#0F2648] shadow-xs'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="block font-bold text-sm">{d.label}</span>
                    <span className="text-[10px] opacity-80">{d.display}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                3. Select Time Slot ({selectedTimeSlot})
              </label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => setSelectedTimeSlot(slot.time)}
                    className={`py-2 px-1 text-center rounded-lg text-xs font-medium border transition-all ${
                      selectedTimeSlot === slot.time
                        ? 'bg-[#1E60D5] text-white border-[#1E60D5] shadow-xs'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Clock className="w-3 h-3 mx-auto mb-0.5 opacity-70" />
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>

            {/* Patient Details Form */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                4. Patient Information
              </label>

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-600 mb-1 block">Patient Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Usman"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-600 mb-1 block">Mobile / WhatsApp Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="0300 1234567"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-600 mb-1 block">Email Address (Optional)</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-600 mb-1 block">City</label>
                  <select
                    value={patientCity}
                    onChange={(e) => setPatientCity(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] focus:border-transparent outline-none bg-white"
                  >
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Peshawar">Peshawar</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-600 mb-1 block">Brief Health Concern / Symptoms</label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Chest tightness since 2 days, mild dizziness..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action Bar */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">Total Consultation Fee</span>
                <span className="text-lg font-extrabold text-[#0F2648]">
                  Rs. {currentFee.toLocaleString()}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#1E60D5] hover:bg-blue-700 disabled:opacity-60 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-2"
                  id="confirm-appointment-booking-btn"
                >
                  {isSubmitting ? 'Confirming...' : 'Confirm Appointment'}
                </button>
              </div>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
