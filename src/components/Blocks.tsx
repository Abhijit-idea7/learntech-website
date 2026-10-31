// Shared building blocks for the re-laid-out pages.
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Rocket, Network, UserPlus, Cpu, Compass } from 'lucide-react';
import { site, bookingHref, bookingIsExternal } from '@/content/site';
import type { CaseStudy, Reason } from '@/lib/types';
import { caseStudies } from '@/content/case-studies';
import { platforms } from '@/content/platforms';
import { programs } from '@/content/programs';
import Placeholder from '@/components/Placeholder';
import Reveal from '@/components/Reveal';

/* ---------- section wrapper with optional title ---------- */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = 'paper',
  children,
  action,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  tone?: 'paper' | 'white' | 'navy';
  children: React.ReactNode;
  action?: { label: string; to: string };
}) {
  const bg = tone === 'navy' ? 'bg-navy text-white' : tone === 'white' ? 'bg-white' : 'bg-paper';
  const titleColor = tone === 'navy' ? 'text-white' : 'text-navy';
  const introColor = tone === 'navy' ? 'text-white/80' : 'text-navy/70';
  return (
    <section id={id} className={`${bg} py-12 md:py-16`}>
      <div className="wrap">
        {(eyebrow || title) && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6 md:mb-8">
            <div className="max-w-[720px]">
              {eyebrow && <span className={`eyebrow ${tone === 'navy' ? '!text-sky' : ''}`}>{eyebrow}</span>}
              {title && <h2 className={`font-grotesk font-bold ${titleColor} t-2xl leading-[1.15] mt-2`}>{title}</h2>}
              {intro && <p className={`${introColor} t-base leading-relaxed mt-2`}>{intro}</p>}
            </div>
            {action && (
              <Link to={action.to} className={`lt-link inline-flex items-center gap-1.5 shrink-0 ${tone === 'navy' ? '!text-white hover:!text-sky' : ''}`}>
                {action.label} <ArrowRight size={15} />
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/* ---------- "Book a call" button ---------- */
export function BookCallButton({ className = 'btn-primary', label = 'Book a 30-min call' }: { className?: string; label?: string }) {
  if (bookingIsExternal) {
    return (
      <a href={bookingHref} target="_blank" rel="noopener noreferrer" className={className}>
        {label} <ArrowRight size={17} className="ml-1.5" />
      </a>
    );
  }
  return (
    <Link to={bookingHref} className={className}>
      {label} <ArrowRight size={17} className="ml-1.5" />
    </Link>
  );
}

/* ---------- numbers band ---------- */
export function StatsBand({ tone = 'navy' }: { tone?: 'navy' | 'white' }) {
  const dark = tone === 'navy';
  return (
    <section className={dark ? 'bg-navy' : 'bg-white border-y border-navy/15'}>
      <div className="wrap py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {site.stats.map((s) =>
          s.value ? (
            <div key={s.label}>
              <div className={`font-grotesk font-bold t-3xl leading-none ${dark ? 'text-white' : 'text-navy'}`}>{s.value}</div>
              <div className={`t-sm2 mt-2 leading-snug ${dark ? 'text-white/70' : 'text-navy/70'}`}>{s.label}</div>
            </div>
          ) : (
            <Placeholder key={s.label} label={s.label} hint="Add the number in site.ts" className={dark ? '!bg-white' : ''} />
          ),
        )}
      </div>
    </section>
  );
}

/* ---------- the three ways we execute ---------- */
export const pillars = [
  {
    key: 'content' as const,
    num: '01',
    name: 'Content & Delivery',
    to: '/content',
    desc: 'Custom content in every format, delivered by our trainers in 20+ cities.',
    color: 'bg-crimson',
    text: 'text-crimson',
  },
  {
    key: 'platforms' as const,
    num: '02',
    name: 'Platforms',
    to: '/platforms',
    desc: 'Our own L&D technology for learning, training management, hiring and onboarding.',
    color: 'bg-sky',
    text: 'text-sky',
  },
  {
    key: 'programs' as const,
    num: '03',
    name: 'Programs',
    to: '/programs',
    desc: 'Workshops, simulations and games we have run many times, ready to book.',
    color: 'bg-moss',
    text: 'text-moss',
  },
];

const chipDot: Record<Reason['how'][number]['pillar'], string> = {
  content: 'bg-crimson',
  platforms: 'bg-sky',
  programs: 'bg-moss',
  talk: 'bg-navy',
};

/** A link chip coloured by pillar: crimson = content, sky = platforms, moss = programs. */
export function PillarChip({ pillar, label, to }: { pillar: keyof typeof chipDot; label: string; to: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 border-2 border-navy/20 bg-white px-2.5 py-1 font-grotesk font-bold t-xs uppercase tracking-[0.06em] text-navy hover:border-navy transition-colors"
    >
      <span className={`w-2 h-2 ${chipDot[pillar]} shrink-0`} aria-hidden />
      {label}
    </Link>
  );
}

/** What a case study used, as chips. 'content' or a platform / program slug. */
export function usesToChips(uses: string[] = []) {
  return uses
    .map((u) => {
      if (u === 'content') return { pillar: 'content' as const, label: 'Content & delivery', to: '/content' };
      const pl = platforms.find((p) => p.slug === u);
      if (pl) return { pillar: 'platforms' as const, label: pl.name, to: `/platforms/${pl.slug}` };
      const pr = programs.find((p) => p.slug === u);
      if (pr) return { pillar: 'programs' as const, label: pr.name, to: `/programs/${pr.slug}` };
      return null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);
}

export function PillarsBand() {
  return (
    <section className="bg-navy">
      <div className="wrap py-12 md:py-16">
        <span className="eyebrow !text-sky">HOW WE DELIVER</span>
        <h2 className="font-grotesk font-bold text-white t-2xl leading-[1.15] mt-2 mb-6 md:mb-8 max-w-[720px]">
          Every engagement is built from three things we do in-house.
        </h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.key} delay={i * 60}>
              <Link to={p.to} className="group flex flex-col h-full bg-white border-2 border-white p-5 md:p-6 hover:shadow-[6px_6px_0_#D8315B] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                <div className={`h-1.5 w-12 ${p.color} mb-4`} />
                <span className="font-grotesk font-bold text-navy/40 t-sm">{p.num}</span>
                <h3 className="font-grotesk font-bold text-navy t-xl leading-snug mt-1 mb-2">{p.name}</h3>
                <p className="text-navy/70 t-sm2 leading-relaxed flex-1">{p.desc}</p>
                <span className="lt-link inline-flex items-center gap-1.5 mt-4 group-hover:text-crimson">
                  See {p.name.split(' ')[0].toLowerCase()} <ArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- why clients come to us ---------- */
const reasonIcons = { launch: Rocket, network: Network, onboarding: UserPlus, tech: Cpu, strategy: Compass };

export function ReasonCard({ r, index = 0 }: { r: Reason; index?: number }) {
  const Icon = reasonIcons[r.icon];
  const cs = r.work ? caseStudies.find((c) => c.slug === r.work) : undefined;
  const showWork = cs && (cs.status === 'live' || site.showPlaceholders);
  return (
    <Reveal delay={index * 50}>
      <article id={r.slug} className="lt-card grid md:grid-cols-[1fr_1.15fr] gap-5 md:gap-8 scroll-mt-24">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Icon size={24} strokeWidth={1.75} className="text-crimson shrink-0" />
            <h3 className="font-grotesk font-bold text-navy t-xl leading-snug">{r.title}</h3>
          </div>
          <p className="text-navy/75 t-base leading-relaxed">{r.short}</p>
          {showWork && cs && (
            cs.status === 'live' ? (
              <Link to={caseHref(cs)} className="lt-link inline-flex items-center gap-1.5 mt-4 !text-crimson">
                See it in action <ArrowUpRight size={14} />
              </Link>
            ) : (
              <span className="inline-block mt-4 t-xs font-grotesk font-bold uppercase tracking-[0.1em] text-crimson/70 border border-dashed border-crimson/50 px-2 py-1">
                Case study link · content needed
              </span>
            )
          )}
        </div>
        <div className="md:border-l-2 md:border-navy/10 md:pl-8">
          <ul className="flex flex-col gap-2 mb-4">
            {r.points.map((pt) => (
              <li key={pt} className="flex gap-2 text-navy/85 t-sm2 leading-snug">
                <span className="text-crimson font-bold shrink-0">→</span>
                {pt}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-2">
            <span className="t-xs font-grotesk font-bold uppercase tracking-[0.1em] text-navy/45 mr-1">How we do it</span>
            {r.how.map((h) => (
              <PillarChip key={h.label} {...h} />
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ---------- case studies ---------- */
export const caseHref = (c: CaseStudy) => c.href || `/work/${c.slug}`;

export function CaseStudyCard({ c, index = 0 }: { c: CaseStudy; index?: number }) {
  if (c.status === 'draft') {
    if (!site.showPlaceholders) return null;
    return (
      <Reveal delay={index * 60}>
        <div className="lt-placeholder h-full p-5 md:p-6 flex flex-col">
          <span className="font-grotesk font-bold t-xs uppercase tracking-[0.12em] text-crimson mb-2">Case study · content needed</span>
          <span className="t-sm2 text-navy/60 mb-1">{c.client} · {c.industry}</span>
          <h3 className="font-grotesk font-bold text-navy t-lg leading-snug">{c.title}</h3>
        </div>
      </Reveal>
    );
  }
  return (
    <Reveal delay={index * 60}>
      <Link to={caseHref(c)} className="lt-card lt-card-link group !p-0 flex flex-col h-full overflow-hidden">
        {c.image ? (
          <div className="aspect-[16/9] border-b-2 border-navy overflow-hidden bg-paper">
            <img src={c.image} alt="" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
          </div>
        ) : null}
        <div className="p-5 md:p-6 flex flex-col flex-1">
          <span className="font-grotesk font-bold t-xs uppercase tracking-[0.12em] text-crimson mb-2">
            {c.industry} · {c.client}
          </span>
          <h3 className="font-grotesk font-bold text-navy t-lg leading-snug mb-2">{c.title}</h3>
          <p className="text-navy/70 t-sm2 leading-relaxed flex-1">{c.summary}</p>
          {c.uses && c.uses.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {usesToChips(c.uses).map((u) => (
                <span key={u.to} className="inline-flex items-center gap-1.5 t-xs font-grotesk font-bold uppercase tracking-[0.06em] text-navy/60">
                  <span className={`w-1.5 h-1.5 ${chipDot[u.pillar]}`} aria-hidden />
                  {u.label}
                </span>
              ))}
            </div>
          )}
          {c.results && c.results.length > 0 && (
            <div className="flex gap-5 mt-4 pt-4 border-t border-navy/15">
              {c.results.slice(0, 2).map((r) => (
                <div key={r.label}>
                  <div className="font-grotesk font-bold text-navy t-xl leading-none">{r.value}</div>
                  <div className="t-xs text-navy/60 mt-1 leading-snug">{r.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------- final call-to-action band ---------- */
export function BookCallBand({ heading = 'Tell us what you are trying to change.', sub = '30 minutes. No slide deck. We will tell you honestly whether we can help.' }: { heading?: string; sub?: string }) {
  return (
    <section className="wrap py-12 md:py-16">
      <div className="bg-navy border-2 border-navy shadow-[4px_4px_0_#D8315B] md:shadow-[6px_6px_0_#D8315B] p-6 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <h2 className="font-grotesk font-bold text-white t-2xl leading-[1.15]">{heading}</h2>
          <p className="text-white/75 t-base mt-2 max-w-[560px]">{sub}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <BookCallButton className="btn-nav-cta !px-5 !py-3" />
          <Link to="/contact" className="inline-flex items-center justify-center border-2 border-white text-white font-grotesk font-bold t-sm2 px-5 py-3 hover:bg-white/10 transition-colors">
            Send a message
          </Link>
        </div>
      </div>
    </section>
  );
}
