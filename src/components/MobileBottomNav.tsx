import React from 'react';
import { Home, Search, Calendar, BookOpen, User } from 'lucide-react';
import { Language } from '../types';

interface MobileBottomNavProps {
  activeNav: string;
  onNavigate: (nav: string) => void;
  onOpenBooking: () => void;
  onOpenAuth: () => void;
  currentLang: Language;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeNav,
  onNavigate,
  onOpenBooking,
  onOpenAuth,
  currentLang,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg px-2 py-1.5 flex items-center justify-around">
      <button
        onClick={() => onNavigate('home')}
        className={`flex flex-col items-center py-1 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${
          activeNav === 'home' ? 'text-[#1E60D5]' : 'text-slate-500'
        }`}
      >
        <Home className="w-5 h-5 mb-0.5" />
        <span>{currentLang === 'ur' ? 'ہوم' : 'Home'}</span>
      </button>

      <button
        onClick={() => onNavigate('doctors')}
        className={`flex flex-col items-center py-1 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${
          activeNav === 'doctors' ? 'text-[#1E60D5]' : 'text-slate-500'
        }`}
      >
        <Search className="w-5 h-5 mb-0.5" />
        <span>{currentLang === 'ur' ? 'ڈاکٹرز' : 'Search'}</span>
      </button>

      {/* Center Primary Floating Action for Booking */}
      <button
        onClick={onOpenBooking}
        className="flex flex-col items-center -mt-5 bg-[#1E60D5] text-white p-2.5 rounded-full shadow-lg hover:bg-blue-700 transition-transform active:scale-95"
        title="Book Appointment"
      >
        <Calendar className="w-5 h-5" />
      </button>

      <button
        onClick={() => onNavigate('library')}
        className={`flex flex-col items-center py-1 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${
          activeNav === 'library' ? 'text-[#1E60D5]' : 'text-slate-500'
        }`}
      >
        <BookOpen className="w-5 h-5 mb-0.5" />
        <span>{currentLang === 'ur' ? 'آگاہی' : 'Health'}</span>
      </button>

      <button
        onClick={onOpenAuth}
        className={`flex flex-col items-center py-1 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${
          activeNav === 'account' ? 'text-[#1E60D5]' : 'text-slate-500'
        }`}
      >
        <User className="w-5 h-5 mb-0.5" />
        <span>{currentLang === 'ur' ? 'اکاؤنٹ' : 'Account'}</span>
      </button>
    </div>
  );
};
