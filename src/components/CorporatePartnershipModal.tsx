import React, { useState } from 'react';
import { X, Building2, CheckCircle2, Phone, Mail, User, ShieldCheck } from 'lucide-react';

interface CorporatePartnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CorporatePartnershipModal: React.FC<CorporatePartnershipModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [partnerType, setPartnerType] = useState('Hospital / Medical Center');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

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
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#0F2648] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-5 h-5 text-blue-300" />
            <div>
              <h3 className="font-bold text-base">Healthcare Institutional Partnerships</h3>
              <p className="text-xs text-blue-200">Hospitals, Diagnostic Labs & Corporate Employers</p>
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
          <div className="p-8 text-center space-y-4 text-xs">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/60">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-[#0F2648]">Partnership Inquiry Received</h4>
            <p className="text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you for connecting. Our corporate relations head will reach out to <strong>{contactPerson}</strong> at <strong>{email || phone}</strong> within 1 business day.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#1E60D5] hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-xs">
            <div>
              <label className="text-slate-700 font-semibold mb-1 block">Organization / Company Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Shifa Diagnostic Center / Systems Ltd."
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
              />
            </div>

            <div>
              <label className="text-slate-700 font-semibold mb-1 block">Partnership Category *</label>
              <select
                value={partnerType}
                onChange={(e) => setPartnerType(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none bg-white"
              >
                <option value="Hospital / Medical Center">Hospital / Medical Center Listing</option>
                <option value="Diagnostic Laboratory">Diagnostic Laboratory Network</option>
                <option value="Corporate Health Plan">Corporate Employee Healthcare Coverage</option>
                <option value="Pharmacy Network">Pharmacy / Home Health Partner</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-slate-700 font-semibold mb-1 block">Focal Person Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Asad Qureshi"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-700 font-semibold mb-1 block">Phone / Mobile *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    required
                    placeholder="0321 9876543"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-slate-700 font-semibold mb-1 block">Official Corporate Email *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  required
                  placeholder="contact@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-slate-700 font-semibold mb-1 block">Partnership Requirements / Message</label>
              <textarea
                rows={3}
                placeholder="Describe your organization and how you'd like to collaborate with Behter Ellaj..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E60D5] outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#1E60D5] hover:bg-blue-700 text-white font-bold rounded-xl shadow-xs transition-colors"
              >
                Submit Partnership Request
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
