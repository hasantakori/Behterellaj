import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  // Dimensions
  const sizeMap = {
    sm: { icon: 34, textScale: 'text-sm' },
    md: { icon: 46, textScale: 'text-base' },
    lg: { icon: 60, textScale: 'text-xl' },
  };

  const currentSize = sizeMap[size];
  const isWhite = variant === 'white';

  const navyColor = isWhite ? '#FFFFFF' : '#0F2648';
  const redColor = '#E13838';
  const pillBg = isWhite ? '#2A4E80' : '#17365D';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} id="behter-ellaj-brand-logo">
      {/* Exact Vector Stethoscope / Human / Cross Icon from Provided Brand Image */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="Behter Ellaj Logo Icon"
      >
        {/* Outer Circular Loop of Stethoscope in Deep Navy */}
        <path
          d="M 100 24 C 130 38 144 76 132 110 C 122 136 94 150 68 144 C 44 138 28 116 28 92 C 28 62 48 34 80 26"
          stroke={navyColor}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Lower Left Red Diaphragm / Bell Chestpiece */}
        <circle cx="36" cy="120" r="14" fill={redColor} />
        <circle cx="36" cy="120" r="8" fill="white" />
        <circle cx="36" cy="120" r="4.5" fill={redColor} />

        {/* Stethoscope tube lead to chestpiece */}
        <path
          d="M 36 106 C 36 110 36 114 36 120"
          stroke={navyColor}
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Central Stethoscope U-Shape / Chest Curve */}
        <path
          d="M 46 64 C 42 76 52 108 72 120 C 80 125 90 122 96 114 C 104 102 110 74 104 64"
          stroke={navyColor}
          strokeWidth="5.5"
          strokeLinecap="round"
        />

        {/* Red Earpiece / Binaural Tubing flanking upper body */}
        <path
          d="M 50 64 C 42 62 40 76 44 94"
          stroke={redColor}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M 100 64 C 108 62 110 76 106 94"
          stroke={redColor}
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Human Head (Circle) in Deep Navy */}
        <circle cx="75" cy="40" r="8" fill={navyColor} />

        {/* Human Torso / V-Silhouette in Deep Navy */}
        <path
          d="M 64 54 C 69 57 81 57 86 54 L 75 80 Z"
          fill={navyColor}
        />

        {/* Medical Cross in Center */}
        <rect x="71" y="86" width="8" height="20" rx="1.5" fill={navyColor} />
        <rect x="65" y="92" width="20" height="8" rx="1.5" fill={navyColor} />
      </svg>

      {/* Brand Typography & Tagline Pill Badge */}
      {variant !== 'icon' && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`font-semibold tracking-[0.26em] text-[11px] sm:text-[13px] uppercase ${
              isWhite ? 'text-blue-100' : 'text-[#0F2648]'
            }`}
            style={{ letterSpacing: '0.28em' }}
          >
            BEHTER
          </span>
          <span
            className={`font-black text-[22px] sm:text-[27px] tracking-tight -mt-0.5 ${
              isWhite ? 'text-white' : 'text-[#0F2648]'
            }`}
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            ELLAJ
          </span>
          <div className="mt-1">
            <span
              className="inline-block text-[8px] sm:text-[9.5px] font-bold tracking-[0.14em] uppercase text-white px-2.5 py-0.5 rounded-md shadow-xs"
              style={{ backgroundColor: pillBg }}
            >
              PERFECT CARE
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
