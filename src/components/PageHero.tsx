import { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
  image: string;
  imageAlt?: string;
  accent?: 'crimson' | 'sky' | 'moss';
}

const accents = {
  crimson: '#D8315B',
  sky: '#3AA5D4',
  moss: '#647439',
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaTo = '/contact',
  image,
  imageAlt = '',
  accent = 'crimson',
}: PageHeroProps) {
  const A = accents[accent];
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);
  const img = (
    <img
      src={image}
      alt={imageAlt}
      onLoad={() => setLoaded(true)}
      className={`w-full h-auto max-h-full object-contain select-none transition-all duration-700 ease-out ${loaded ? 'opacity-100 scale-100 translate-y-0 float-soft' : 'opacity-0 scale-95 translate-y-3'}`}
      draggable={false}
    />
  );

  return (
    <section className="bg-paper relative overflow-hidden">
      {/* Animated vector backdrop */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1260 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="hero-backdrop-lines" stroke="#0F2A5F" strokeWidth="2" fill="none" opacity="0.04">
          <path d="M0 120 Q315 60 630 120 T1260 120" />
          <path d="M0 200 Q315 260 630 200 T1260 200" />
          <path d="M0 320 Q315 240 630 320 T1260 320" />
          <path d="M0 440 Q315 520 630 440 T1260 440" />
        </g>
        <g className="hero-backdrop-dots" fill={A} opacity="0.08">
          <circle cx="100" cy="100" r="4" />
          <circle cx="300" cy="250" r="3" />
          <circle cx="500" cy="80" r="5" />
          <circle cx="700" cy="350" r="4" />
          <circle cx="900" cy="150" r="3" />
          <circle cx="1100" cy="300" r="5" />
          <circle cx="200" cy="450" r="4" />
          <circle cx="600" cy="500" r="3" />
          <circle cx="1000" cy="480" r="4" />
        </g>
      </svg>

      <div className="wrap py-12 md:py-16 relative z-10">
        <div className="grid md:grid-cols-[58%_42%] gap-6 md:gap-12 items-center">
          <div>
            <span className="font-grotesk font-bold text-crimson t-sm uppercase tracking-[0.16em] mb-4 md:mb-6 inline-block">
              {eyebrow}
            </span>
            <h1 className="font-grotesk font-bold text-navy t-4xl leading-[1.05] mb-4 md:mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-navy/80 t-xl leading-relaxed mb-6 md:mb-8 max-w-[560px]">
                {subtitle}
              </p>
            )}
            {ctaLabel && (
              <Link to={ctaTo} className="btn-primary inline-block">
                {ctaLabel}
              </Link>
            )}
          </div>
          <div className="relative h-[200px] md:h-[360px] flex items-center justify-center">
            {img}
          </div>
        </div>
      </div>
    </section>
  );
}
