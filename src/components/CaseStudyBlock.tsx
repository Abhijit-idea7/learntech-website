import { Link } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter';
import Reveal from './Reveal';

const metrics = [
  { value: '4,150', label: 'dealers on the platform' },
  { value: '4.4×', label: 'growth in active dealers' },
  { value: '72%', label: 'peak daily challenge participation' },
];

export default function CaseStudyBlock({ compact = false }: { compact?: boolean }) {
  return (
    <div className="bg-navy border-2 border-navy shadow-[4px_4px_0_#D8315B] md:shadow-[6px_6px_0_#D8315B] p-6 md:p-10">
      <div className={`grid ${compact ? 'md:grid-cols-2 gap-8 md:gap-10' : 'md:grid-cols-2 gap-8 md:gap-12'} items-center`}>
        <div>
          <div className="font-grotesk font-semibold text-sky t-sm uppercase tracking-[0.16em] mb-3 md:mb-4">
            CASE STUDY · A LARGE 2-WHEELER BRAND
          </div>
          <h3 className="font-grotesk font-bold text-white t-3xl leading-[1.1] mb-4 md:mb-5">
            Learning360 across 4,150 dealers, from 1,002.
          </h3>
          <p className="text-white/90 t-lg leading-relaxed mb-5 md:mb-6">
            We ran the full stack for a large 2-wheeler brand: platform, in-house content, adoption programme. Active dealers on Learning360 grew 4.4x over 15 months while the brand's dealer network kept scaling.
          </p>
          <Link
            to="/case-studies/tvs-learning360"
            className="inline-block font-grotesk font-bold text-sky t-base uppercase border-b-2 border-sky hover:opacity-80 transition-opacity"
          >
            Read the case study →
          </Link>
        </div>
        <div className="flex flex-col gap-4 md:gap-5">
          {metrics.map((m, i) => (
            <Reveal key={m.value} delay={i * 120}>
              <div className="bg-crimson border-2 border-white p-5 md:p-6">
                <div className="font-grotesk font-bold text-white t-3xl leading-none mb-1 md:mb-2">
                  <AnimatedCounter target={m.value} />
                </div>
                <div className="text-white t-sm leading-[1.3]">{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
