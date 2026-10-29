interface IconProps {
  name: string;
  className?: string;
  accent?: 'crimson' | 'sky' | 'moss';
}

const accents = {
  crimson: '#D8315B',
  sky: '#3AA5D4',
  moss: '#647439',
};

const N = '#0F2A5F';
const SW = 2.5;

export default function BrandIcon({ name, className = 'w-12 h-12', accent = 'crimson' }: IconProps) {
  const A = accents[accent];

  const icons: Record<string, JSX.Element> = {
    // Pillar icons
    consulting: (
      <g>
        <circle cx="24" cy="24" r="18" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M24 14 L27 22 L24 34 L21 22 Z" fill={A} stroke={N} strokeWidth={SW} strokeLinejoin="round" />
        <circle cx="24" cy="24" r="2.5" fill={N} />
      </g>
    ),
    content: (
      <g>
        <rect x="8" y="8" width="32" height="32" rx="2" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M14 16 L34 16 M14 22 L34 22 M14 28 L28 28" stroke={N} strokeWidth={SW} strokeLinecap="round" />
        <path d="M30 34 L38 42" stroke={A} strokeWidth={SW} strokeLinecap="round" />
        <rect x="34" y="30" width="10" height="14" rx="1" transform="rotate(45 39 37)" fill={A} stroke={N} strokeWidth={SW} />
      </g>
    ),
    platforms: (
      <g>
        <rect x="6" y="10" width="36" height="22" rx="2" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M6 28 L42 28" stroke={N} strokeWidth={SW} />
        <path d="M18 38 L30 38" stroke={N} strokeWidth={SW} strokeLinecap="round" />
        <path d="M24 32 L24 38" stroke={N} strokeWidth={SW} />
        <circle cx="24" cy="20" r="4" fill={A} stroke={N} strokeWidth={2} />
      </g>
    ),
    // Why LearnTech icons
    speed: (
      <g>
        <path d="M24 6 L20 24 L28 24 L22 42" stroke={N} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M14 18 L10 22" stroke={A} strokeWidth={SW} strokeLinecap="round" />
        <path d="M34 18 L38 22" stroke={A} strokeWidth={SW} strokeLinecap="round" />
        <path d="M10 28 L6 30" stroke={A} strokeWidth={SW} strokeLinecap="round" />
        <path d="M38 28 L42 30" stroke={A} strokeWidth={SW} strokeLinecap="round" />
      </g>
    ),
    frameworks: (
      <g>
        <rect x="8" y="8" width="14" height="14" stroke={N} strokeWidth={SW} fill="none" />
        <rect x="26" y="8" width="14" height="14" stroke={N} strokeWidth={SW} fill={A} fillOpacity="0.2" />
        <rect x="8" y="26" width="14" height="14" stroke={N} strokeWidth={SW} fill={A} fillOpacity="0.2" />
        <rect x="26" y="26" width="14" height="14" stroke={N} strokeWidth={SW} fill="none" />
      </g>
    ),
    'platform-delivery': (
      <g>
        <circle cx="14" cy="14" r="6" stroke={N} strokeWidth={SW} fill="none" />
        <circle cx="34" cy="14" r="6" stroke={N} strokeWidth={SW} fill={A} fillOpacity="0.25" />
        <circle cx="24" cy="34" r="6" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M19 16 L29 16 M16 19 L22 29 M32 19 L26 29" stroke={N} strokeWidth={SW} strokeLinecap="round" />
      </g>
    ),
    performance: (
      <g>
        <circle cx="24" cy="24" r="18" stroke={N} strokeWidth={SW} fill="none" />
        <circle cx="24" cy="24" r="11" stroke={N} strokeWidth={SW} fill="none" />
        <circle cx="24" cy="24" r="5" fill={A} stroke={N} strokeWidth={SW} />
        <circle cx="24" cy="24" r="1.5" fill={N} />
      </g>
    ),
    // Format tile icons
    ilt: (
      <g>
        <rect x="6" y="10" width="36" height="24" rx="2" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M14 22 L26 22 M14 28 L22 28" stroke={N} strokeWidth={SW} strokeLinecap="round" />
        <circle cx="34" cy="22" r="5" fill={A} stroke={N} strokeWidth={2} />
        <path d="M18 38 L30 38" stroke={N} strokeWidth={SW} strokeLinecap="round" />
      </g>
    ),
    elearning: (
      <g>
        <rect x="6" y="8" width="36" height="26" rx="2" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M16 20 L22 24 L16 28 Z" fill={A} stroke={N} strokeWidth={2} strokeLinejoin="round" />
        <path d="M26 20 L32 20 M26 26 L32 26" stroke={N} strokeWidth={SW} strokeLinecap="round" />
        <path d="M18 40 L30 40" stroke={N} strokeWidth={SW} strokeLinecap="round" />
      </g>
    ),
    videos: (
      <g>
        <circle cx="24" cy="24" r="18" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M19 16 L33 24 L19 32 Z" fill={A} stroke={N} strokeWidth={2} strokeLinejoin="round" />
      </g>
    ),
    animations: (
      <g>
        <path d="M8 24 Q14 12 20 24 T32 24 T40 24" stroke={N} strokeWidth={SW} fill="none" strokeLinecap="round" />
        <path d="M8 32 Q14 20 20 32 T32 32 T40 32" stroke={A} strokeWidth={SW} fill="none" strokeLinecap="round" />
        <circle cx="36" cy="14" r="3" fill={A} stroke={N} strokeWidth={2} />
      </g>
    ),
    'product-guides': (
      <g>
        <path d="M12 8 L12 40 L36 40 L36 8 Z" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M12 8 L24 16 L36 8" stroke={N} strokeWidth={SW} fill="none" strokeLinejoin="round" />
        <path d="M18 24 L30 24 M18 30 L30 30" stroke={A} strokeWidth={SW} strokeLinecap="round" />
      </g>
    ),
    'competition-tools': (
      <g>
        <path d="M14 30 L14 38 L34 38 L34 30" stroke={N} strokeWidth={SW} fill="none" strokeLinejoin="round" />
        <path d="M18 30 L18 20 L30 20 L30 30" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M22 20 L22 14 L26 14 L26 20" stroke={N} strokeWidth={SW} fill="none" />
        <circle cx="24" cy="14" r="4" fill={A} stroke={N} strokeWidth={2} />
        <path d="M14 38 L10 42 M34 38 L38 42" stroke={N} strokeWidth={SW} strokeLinecap="round" />
      </g>
    ),
    'ojt-kits': (
      <g>
        <rect x="8" y="16" width="32" height="26" rx="2" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M18 16 L18 10 L30 10 L30 16" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M16 28 L32 28" stroke={A} strokeWidth={SW} strokeLinecap="round" />
        <circle cx="24" cy="28" r="5" fill={A} fillOpacity="0.25" stroke={N} strokeWidth={2} />
      </g>
    ),
    'mobile-micro': (
      <g>
        <rect x="16" y="6" width="16" height="36" rx="3" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M20 12 L28 12" stroke={A} strokeWidth={SW} strokeLinecap="round" />
        <circle cx="24" cy="36" r="2" fill={N} />
        <path d="M22 20 L26 24 L22 28" stroke={N} strokeWidth={2} strokeLinecap="round" fill="none" />
      </g>
    ),
    // Delivery format icons
    'delivery-ilt': (
      <g>
        <circle cx="14" cy="12" r="5" stroke={N} strokeWidth={SW} fill={A} fillOpacity="0.2" />
        <path d="M6 40 L6 28 Q6 20 14 20 Q22 20 22 28 L22 40" stroke={N} strokeWidth={SW} fill="none" strokeLinecap="round" />
        <circle cx="34" cy="12" r="5" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M26 40 L26 28 Q26 20 34 20 Q42 20 42 28 L42 40" stroke={N} strokeWidth={SW} fill="none" strokeLinecap="round" />
      </g>
    ),
    'delivery-ojt': (
      <g>
        <path d="M30 8 L40 18 L36 22 L26 12 Z" stroke={N} strokeWidth={SW} fill={A} fillOpacity="0.2" strokeLinejoin="round" />
        <path d="M26 12 L14 24 Q10 28 14 32 Q18 36 22 32 L34 20" stroke={N} strokeWidth={SW} fill="none" strokeLinejoin="round" />
        <path d="M12 34 L6 40" stroke={N} strokeWidth={SW} strokeLinecap="round" />
      </g>
    ),
    'delivery-digital': (
      <g>
        <rect x="6" y="10" width="36" height="26" rx="2" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M14 20 L22 20 M14 26 L30 26" stroke={N} strokeWidth={SW} strokeLinecap="round" />
        <circle cx="34" cy="23" r="4" fill={A} stroke={N} strokeWidth={2} />
        <path d="M16 40 L32 40" stroke={N} strokeWidth={SW} strokeLinecap="round" />
      </g>
    ),
    'delivery-virtual': (
      <g>
        <circle cx="24" cy="24" r="18" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M6 24 L42 24 M24 6 Q14 24 24 42 Q34 24 24 6" stroke={N} strokeWidth={SW} fill="none" />
        <circle cx="24" cy="24" r="5" fill={A} stroke={N} strokeWidth={2} />
      </g>
    ),
    // Delivery edge icons
    'trainer-reach': (
      <g>
        <path d="M24 6 Q14 18 24 30 Q34 18 24 6" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M24 30 L24 42" stroke={N} strokeWidth={SW} strokeLinecap="round" />
        <circle cx="24" cy="20" r="5" fill={A} stroke={N} strokeWidth={2} />
        <path d="M12 36 L16 40 M36 36 L32 40" stroke={N} strokeWidth={SW} strokeLinecap="round" />
      </g>
    ),
    engaging: (
      <g>
        <path d="M24 8 L27 20 L39 20 L29 28 L33 40 L24 32 L15 40 L19 28 L9 20 L21 20 Z" stroke={N} strokeWidth={SW} fill={A} fillOpacity="0.2" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="3" fill={N} />
      </g>
    ),
    governance: (
      <g>
        <rect x="10" y="8" width="28" height="36" rx="2" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M18 8 L18 4 L30 4 L30 8" stroke={N} strokeWidth={SW} fill="none" />
        <path d="M16 18 L24 26 L34 16" stroke={A} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M16 32 L32 32" stroke={N} strokeWidth={SW} strokeLinecap="round" />
      </g>
    ),
    // SME step icons
    'sme-interview': (
      <g>
        <path d="M8 10 L40 10 L40 30 L24 30 L16 38 L16 30 L8 30 Z" stroke={N} strokeWidth={SW} fill="none" strokeLinejoin="round" />
        <circle cx="18" cy="20" r="2" fill={A} />
        <circle cx="24" cy="20" r="2" fill={A} />
        <circle cx="30" cy="20" r="2" fill={A} />
      </g>
    ),
    'sme-draft': (
      <g>
        <path d="M8 40 L8 34 L30 12 L36 18 L14 40 Z" stroke={N} strokeWidth={SW} fill="none" strokeLinejoin="round" />
        <path d="M26 16 L32 22" stroke={A} strokeWidth={SW} strokeLinecap="round" />
        <path d="M8 40 L14 40" stroke={N} strokeWidth={SW} strokeLinecap="round" />
      </g>
    ),
    'sme-review': (
      <g>
        <path d="M24 8 A16 16 0 1 1 23.9 8" stroke={N} strokeWidth={SW} fill="none" strokeLinecap="round" />
        <path d="M18 24 L22 28 L30 20" stroke={A} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    ),
  };

  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {icons[name] ?? null}
    </svg>
  );
}
