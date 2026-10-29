import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Program } from '@/lib/types';

// White card; colour is used only for the accent bar and number.
const accents = ['border-t-crimson text-crimson', 'border-t-sky text-sky', 'border-t-moss text-moss'];

export function ProgramCard({ program, index }: { program: Program; index: number }) {
  const accent = accents[index % accents.length];
  const formats = program.format.split('·').map((f) => f.trim()).filter(Boolean);
  return (
    <Link
      to={`/programs/${program.slug}`}
      className={`lt-card lt-card-link group border-t-[6px] ${accent.split(' ')[0]} flex flex-col h-full`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`font-grotesk font-bold t-2xl leading-none ${accent.split(' ')[1]}`}>{program.number}</span>
        <ArrowUpRight size={18} className="text-navy/40 group-hover:text-crimson transition-colors" />
      </div>
      <h3 className="font-grotesk font-bold text-navy t-lg leading-snug mb-1">{program.name}</h3>
      <p className="text-navy/70 t-sm2 leading-relaxed mb-4 flex-1">{program.topic}</p>
      <div className="flex flex-wrap gap-1.5">
        {formats.map((f) => (
          <span key={f} className="lt-tag">{f}</span>
        ))}
      </div>
    </Link>
  );
}
