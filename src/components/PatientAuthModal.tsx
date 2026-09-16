import React, { useState } from 'react';
import { X, Phone, Lock, User, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { PatientUser } from '../types';

interface PatientAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: PatientUser) => void;
  initialMode?: 'login' | 'register';
}

export const PatientAuthModal: React.FC<PatientAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialMode = 'login',
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('Lahore');
  const [otpCode, setOtpCode] = useState('');
  const [step, setStep] = useState<'info' | 'otp'>('info');

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setStep('otp');
    setOtpCode('7891'); // Auto-filled demo OTP
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const user: PatientUser = {
      name: fullName || 'Verified Patient',
      phone,
      email: `${phone}@patient.behterellaj.com`,
      city,
      isLoggedIn: true,
    };
    onSuccess(user);
    onClose();
  };

  const handleClose = () => {
    setStep('info');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A1628]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#0F2648] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-base">
              {mode === 'login' ? 'Sign in to Behter Ellaj' : 'Create Patient Account'}
            </h3>
            <p className="text-xs text-blue-200">Manage appointments, history & video calls</p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="grid grid-cols-2 border-b border-slate-200 text-xs font-semibold text-center">
          <button
            onClick={() => {
              setMode('login');
              setStep('info');
            }}
            className={`py-3 border-b-2 transition-colors ${
              mode === 'login' ? 'border-[#1E60D5] text-[#1E60D5]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Patient Login
          </button>
          <button
            onClick={() => {
              setMode('register');
              setStep('info');
            }}
            className={`py-3 border-b-2 transition-colors ${
              mode === 'register' ? 'border-[#1E60D5] text-[#1E60D5]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            New Patient Register
          </button>
        </div>

        {step === 'info' ? (
          <form onSubmit={handleSendOtp} className="p-6 space-y-4 text-xs">
            {mode === 'register' && (
              <div>
                <label className="text-slate-700 font-semibold mb-1 block">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asma Tariq"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-slate-700 font-semibold mb-1 block">Mobile Number (Pakistan) *</label>
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
              <span className="text-[10px] text-slate-500 mt-1 block">
                We'll send a 4-digit verification code via SMS
              </span>
            </div>

            {mode === 'register' && (
              <div>
                <label className="text-slate-700 font-semibold mb-1 block">City</label>
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
                </select>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 bg-[#1E60D5] hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 mt-2"
            >
              <span>Continue with Mobile OTP</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-[10px] text-slate-500 pt-2 text-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Your medical records remain completely private and HIPAA-compliant</span>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="p-6 space-y-4 text-xs">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 bg-blue-50 text-[#1E60D5] rounded-full flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-[#0F2648]">Enter 4-Digit Verification Code</h4>
              <p className="text-slate-500 text-[11px]">
                Sent to <span className="font-semibold text-slate-700">{phone}</span>
              </p>
            </div>

            <div>
              <input
                type="text"
                maxLength={4}
                required
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                className="w-full py-2.5 text-center text-xl font-bold tracking-[0.4em] border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
              />
              <span className="text-[10px] text-emerald-600 text-center block mt-1">
                Demo code auto-populated: 7891
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#1E60D5] hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Verify & Access Dashboard</span>
            </button>

            <button
              type="button"
              onClick={() => setStep('info')}
              className="w-full text-center text-[11px] text-slate-500 hover:text-slate-800"
            >
              Change Mobile Number
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
