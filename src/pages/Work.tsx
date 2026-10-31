import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { Section, CaseStudyCard, BookCallBand } from '@/components/Blocks';
import { caseStudies } from '@/content/case-studies';
import { site } from '@/content/site';
import { platforms } from '@/content/platforms';
import { programs } from '@/content/programs';

type UsedFilter = 'All' | 'Content & delivery' | 'Platforms' | 'Programs';

const kindOf = (u: string): UsedFilter | null =>
  u === 'content' ? 'Content & delivery' : platforms.some((p) => p.slug === u) ? 'Platforms' : programs.some((p) => p.slug === u) ? 'Programs' : null;

function FilterRow<T extends string>({ label, options, active, onPick }: { label: string; options: T[]; active: T; onPick: (v: T) => void }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="t-xs font-grotesk font-bold uppercase tracking-[0.1em] text-navy/45 w-full sm:w-auto sm:min-w-[110px]">{label}</span>
      {options.map((o) => (
        <button
          key={o}
          aria-pressed={active === o}
          onClick={() => onPick(o)}
          className={`border-2 border-navy px-3 py-1 font-grotesk font-bold t-xs uppercase tracking-[0.06em] transition-colors ${
            active === o ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-paper'
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default function Work() {
  const visible = caseStudies.filter((c) => c.status === 'live' || site.showPlaceholders);
  const industries = ['All', ...Array.from(new Set(visible.map((c) => c.industry)))];
  const [active, setActive] = useState('All');
  const [used, setUsed] = useState<UsedFilter>('All');
  const list = visible
    .filter((c) => active === 'All' || c.industry === active)
    .filter((c) => used === 'All' || (c.uses ?? []).some((u) => kindOf(u) === used));
  const usedOptions: UsedFilter[] = ['All', ...(['Content & delivery', 'Platforms', 'Programs'] as const).filter((k) => visible.some((c) => (c.uses ?? []).some((u) => kindOf(u) === k)))];

  return (
    <>
      <PageHero
        eyebrow="OUR WORK"
        title={<>Work that changed what happens on the shop floor.</>}
        subtitle="Selected engagements across automotive and premium retail. Some clients are named; others prefer we describe them."
        image="/hero-work.webp"
        imageAlt="LearnTech case studies"
        accent="sky"
      />

      <Section tone="white">
        <div className="flex flex-col gap-3 mb-6 md:mb-8">
          <FilterRow label="Industry" options={industries} active={active} onPick={setActive} />
          {usedOptions.length > 2 && <FilterRow label="What we used" options={usedOptions} active={used} onPick={setUsed} />}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {list.map((c, i) => (
            <CaseStudyCard key={c.slug} c={c} index={i} />
          ))}
        </div>
        {list.length === 0 && <p className="text-navy/60 t-base">Nothing matches both filters yet.</p>}
      </Section>

      <BookCallBand heading="Have a similar problem?" />
    </>
  );
}
