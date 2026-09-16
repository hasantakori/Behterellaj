import React from 'react';
import { ShieldCheck, Building2, MapPin, Headphones, Award, Stethoscope } from 'lucide-react';
import { Language } from '../types';
import { translations } from './UrduTranslations';

interface TrustValueStripProps {
  currentLang: Language;
}

export const TrustValueStrip: React.FC<TrustValueStripProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const metrics = [
    {
      icon: ShieldCheck,
      iconColor: 'text-[#1E60D5]',
      title: t.trustVerified,
      subtitle: currentLang === 'ur' ? 'ہر ڈاکٹر کا لائسنس تصدیق شدہ ہے' : 'Active PMC/PMDC credential validation',
    },
    {
      icon: Building2,
      iconColor: 'text-[#0E7490]',
      title: t.trustHospitals,
      subtitle: currentLang === 'ur' ? 'معروف ہسپتال اور کلینکس' : 'Partnering with JCI & ISO accredited facilities',
    },
    {
      icon: MapPin,
      iconColor: 'text-red-500',
      title: t.trustCities,
      subtitle: currentLang === 'ur' ? 'لاہور، کراچی، اسلام آباد، پشاور وغیرہ' : 'Lahore, Karachi, Islamabad, Peshawar & more',
    },
    {
      icon: Headphones,
      iconColor: 'text-emerald-600',
      title: t.trustSupport,
      subtitle: currentLang === 'ur' ? 'مفت ہیلپ لائن اور رہنمائی' : 'Free telephone assistance for booking help',
    },
  ];

  return (
    <section className="bg-[#0F2648] text-white py-8 border-y border-blue-950" id="trust-metrics-strip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 p-2">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-blue-200/80 leading-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
