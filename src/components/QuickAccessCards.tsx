import React from 'react';
import { UserCheck, Building2, Calendar, Video, FlaskConical, BookOpen, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';

interface QuickAccessCardsProps {
  onNavigate: (view: string) => void;
  onOpenBooking: () => void;
  currentLang: Language;
}

export const QuickAccessCards: React.FC<QuickAccessCardsProps> = ({
  onNavigate,
  onOpenBooking,
  currentLang,
}) => {
  const cards = [
    {
      id: 'doctors',
      icon: UserCheck,
      iconColor: 'text-[#1E60D5]',
      bgColor: 'bg-blue-50/70',
      title: currentLang === 'ur' ? 'ڈاکٹر تلاش کریں' : 'Find a Doctor',
      desc: currentLang === 'ur' ? 'شعبہ، تجربہ، فیس اور مقام کے مطابق ڈاکٹرز تلاش کریں۔' : 'Discover qualified doctors by specialty, experience, location & clinic availability.',
      action: () => onNavigate('doctors'),
    },
    {
      id: 'hospitals',
      icon: Building2,
      iconColor: 'text-[#0E7490]',
      bgColor: 'bg-cyan-50/70',
      title: currentLang === 'ur' ? 'ہسپتال تلاش کریں' : 'Find a Hospital',
      desc: currentLang === 'ur' ? 'پاکستان کے نامور ہسپتال اور ایمرجنسی مراکز دیکھیں۔' : 'Discover top tertiary care hospitals, trauma units, and medical facilities across Pakistan.',
      action: () => onNavigate('hospitals'),
    },
    {
      id: 'book',
      icon: Calendar,
      iconColor: 'text-[#1E60D5]',
      bgColor: 'bg-indigo-50/70',
      title: currentLang === 'ur' ? 'وقت لیں (بکنگ)' : 'Book an Appointment',
      desc: currentLang === 'ur' ? 'کلینک کے دستیاب اوقات دیکھیں اور فوری وقت بک کریں۔' : 'View real-time verified calendar slots & book guaranteed OPD clinic appointments.',
      action: onOpenBooking,
    },
    {
      id: 'telehealth',
      icon: Video,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50/70',
      title: currentLang === 'ur' ? 'آن لائن مشاورت' : 'Online Consultation',
      desc: currentLang === 'ur' ? 'گھر بیٹھے ویڈیو کال پر مستند ڈاکٹر سے مشورہ لیں۔' : 'Connect with PMDC-registered doctors remotely via high-definition secure video call.',
      action: () => onNavigate('doctors?filter=video'),
    },
    {
      id: 'services',
      icon: FlaskConical,
      iconColor: 'text-amber-600',
      bgColor: 'bg-amber-50/70',
      title: currentLang === 'ur' ? 'طبی اور لیب سروسز' : 'Health & Lab Services',
      desc: currentLang === 'ur' ? 'گھر پر خون کے ٹیسٹ، الٹراساؤنڈ اور ایم آر آئی کی سہولت۔' : 'Explore home blood sample collection, advanced MRI/CT imaging, and wellness packages.',
      action: () => onNavigate('services'),
    },
    {
      id: 'library',
      icon: BookOpen,
      iconColor: 'text-violet-600',
      bgColor: 'bg-violet-50/70',
      title: currentLang === 'ur' ? 'صحت کے رہنما اصول' : 'Health Information',
      desc: currentLang === 'ur' ? 'مستند ڈاکٹرز کے تصدیق شدہ مضامین اور علامات کی رہنمائی۔' : 'Read medically reviewed clinical guides, symptom checks, and prevention strategies.',
      action: () => onNavigate('library'),
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white" id="quick-access-actions-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                onClick={card.action}
                className="text-left group p-4 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] hover:bg-white hover:border-[#1E60D5]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl ${card.bgColor} ${card.iconColor} flex items-center justify-center transition-transform group-hover:scale-105`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F2648] group-hover:text-[#1E60D5] transition-colors flex items-center justify-between">
                      <span>{card.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1E60D5] opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                    </h3>
                    <p className="text-[11px] text-[#5F6B7A] mt-1 leading-snug line-clamp-3">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
