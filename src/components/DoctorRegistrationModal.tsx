import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Stethoscope, Building2, Award, Phone, Mail, User } from 'lucide-react';

interface DoctorRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DoctorRegistrationModal: React.FC<DoctorRegistrationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [pmdcNumber, setPmdcNumber] = useState('');
  const [specialty, setSpecialty] = useState('Cardiologist');
  const [city, setCity] = useState('Lahore');
  const [experience, setExperience] = useState('10');
  const [hospital, setHospital] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A1628]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#0F2648] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Stethoscope className="w-5 h-5 text-blue-300" />
            <div>
              <h3 className="font-bold text-base">Grow Your Practice with Behter Ellaj</h3>
              <p className="text-xs text-blue-200">Doctor Registration & Verification Portal</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/60">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-[#0F2648]">Application Submitted for PMDC Verification</h4>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>Dr. {fullName}</strong>. Our provider onboarding team will verify your PMDC registration (<span className="font-mono text-slate-800">{pmdcNumber}</span>) and contact you at <strong>{phone}</strong> within 24 business hours to finalize your clinic profile.
            </p>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-900 text-left space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Verification Checklist</span>
              </div>
              <p className="text-blue-800 text-[11px]">
                1. PMDC / PMC Active License verification • 2. Clinic timetable confirmation • 3. Direct appointment scheduling portal integration.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#1E60D5] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <p className="text-slate-600 leading-relaxed">
              Join Pakistan’s leading verified healthcare network. Connect with qualified patients, receive confirmed appointment slots, and offer secure tele-consultations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-slate-700 font-semibold mb-1 block">Full Name (with Title) *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Asad Ullah Khan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-700 font-semibold mb-1 block">PMDC / PMC Registration No. *</label>
                <div className="relative">
                  <ShieldCheck className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. PMDC-48192-P"
                    value={pmdcNumber}
                    onChange={(e) => setPmdcNumber(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-700 font-semibold mb-1 block">Primary Specialty *</label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none bg-white"
                >
                  <option value="General Physician">General Physician</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Gastroenterologist">Gastroenterologist</option>
                  <option value="ENT Specialist">ENT Specialist</option>
                  <option value="Psychiatrist">Psychiatrist</option>
                </select>
              </div>

              <div>
                <label className="text-slate-700 font-semibold mb-1 block">City of Practice *</label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none bg-white"
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

              <div>
                <label className="text-slate-700 font-semibold mb-1 block">Years of Post-Graduate Practice</label>
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
                />
              </div>

              <div>
                <label className="text-slate-700 font-semibold mb-1 block">Hospital / Clinic Affiliation</label>
                <input
                  type="text"
                  placeholder="e.g. Doctors Hospital / Private Clinic"
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
                />
              </div>

              <div>
                <label className="text-slate-700 font-semibold mb-1 block">WhatsApp / Mobile Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    placeholder="0300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-700 font-semibold mb-1 block">Email Address *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    required
                    placeholder="doctor@hospital.pk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                By submitting, you certify that you hold a valid, unencumbered PMDC/PMC license and authorize Behter Ellaj to verify registration against public medical registries.
              </span>
            </div>

            <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#1E60D5] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
              >
                Submit for Verification
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
