import { useState } from 'react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { ProgramCard } from '@/components/ProgramCard';
import { Section, BookCallBand } from '@/components/Blocks';
import { programs } from '@/content/programs';

const norm = (s: string) => s.trim().toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());

export default function Programs() {
  const list = programs.filter((p) => p.published);
  const formats = ['All', ...Array.from(new Set(list.flatMap((p) => p.format.split('·').map(norm)))).filter(Boolean).sort()];
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? list : list.filter((p) => p.format.split('·').map(norm).includes(active));

  return (
    <>
      <PageHero
        eyebrow="PROGRAMS"
        title={<>Ready-to-run programs for managers and frontline teams.</>}
        subtitle="Workshops, simulations and board games we have run many times. Book one off the shelf or have it adapted to your business."
        ctaLabel="Browse the library ↓"
        ctaTo="#library"
        image="/hero-content.webp"
        imageAlt="LearnTech program library"
        accent="moss"
      />

      <Section id="library" eyebrow={`THE LIBRARY · ${list.length} PROGRAMS`} tone="white">
        <div className="flex flex-wrap gap-2 mb-6 md:mb-8" role="tablist" aria-label="Filter by format">
          {formats.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={`border-2 border-navy px-3.5 py-1.5 font-grotesk font-bold t-sm uppercase tracking-[0.06em] transition-colors ${
                active === f ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-paper'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 6) * 50}>
              <ProgramCard program={p} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="HOW IT WORKS" title="From enquiry to session">
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {[
            { t: 'Pick a program', d: 'Tell us the audience, group size and what you want to change.' },
            { t: 'We adapt it', d: 'Examples, case material and role-plays tuned to your business.' },
            { t: 'We run it', d: 'In person or virtual, with a facilitator pack and follow-up.' },
          ].map((s, i) => (
            <div key={s.t} className="lt-card h-full">
              <div className="font-grotesk font-bold text-crimson t-2xl leading-none mb-3">0{i + 1}</div>
              <h3 className="font-grotesk font-bold text-navy t-lg mb-1.5">{s.t}</h3>
              <p className="text-navy/70 t-sm2 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <BookCallBand heading="Want one of these for your team?" sub="Tell us the program, audience and dates. We reply within 1 working day." />
    </>
  );
}
