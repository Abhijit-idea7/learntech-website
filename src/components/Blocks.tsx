// Shared building blocks for the re-laid-out pages.
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Car, Gem, Plug, Store, Rocket, Network, UserPlus, Target, Compass } from 'lucide-react';
import { site, bookingHref, bookingIsExternal } from '@/content/site';
import type { CaseStudy, Solution } from '@/lib/types';
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

/* ---------- industries ---------- */
const industryIcons = { car: Car, gem: Gem, plug: Plug, store: Store };

export function IndustriesGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
      {site.industries.map((ind, i) => {
        const Icon = industryIcons[ind.icon];
        return (
          <Reveal key={ind.name} delay={i * 60}>
            <div className="lt-card h-full">
              <Icon size={26} strokeWidth={1.75} className="text-crimson mb-3" />
              <h3 className="font-grotesk font-bold text-navy t-lg leading-snug mb-1.5">{ind.name}</h3>
              <p className="text-navy/70 t-sm2 leading-relaxed">{ind.desc}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ---------- solutions ---------- */
const solutionIcons = { launch: Rocket, network: Network, onboarding: UserPlus, sales: Target, strategy: Compass };

export function SolutionIcon({ name, className = '' }: { name: Solution['icon']; className?: string }) {
  const Icon = solutionIcons[name];
  return <Icon size={26} strokeWidth={1.75} className={className} />;
}

export function SolutionCard({ s, index = 0 }: { s: Solution; index?: number }) {
  return (
    <Reveal delay={index * 60}>
      <Link to={`/solutions/${s.slug}`} className="lt-card lt-card-link group flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <SolutionIcon name={s.icon} className="text-crimson" />
          <ArrowUpRight size={18} className="text-navy/40 group-hover:text-crimson transition-colors" />
        </div>
        <h3 className="font-grotesk font-bold text-navy t-xl leading-snug mb-2">{s.title}</h3>
        <p className="text-navy/70 t-sm2 leading-relaxed">{s.short}</p>
      </Link>
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

/* ---------- small "included" card used on solution pages ---------- */
export function MiniLinkCard({ kicker, title, desc, to }: { kicker: string; title: string; desc?: string; to: string }) {
  return (
    <Link to={to} className="lt-card lt-card-link group flex flex-col h-full !p-4 md:!p-5">
      <span className="font-grotesk font-bold t-xs uppercase tracking-[0.12em] text-navy/50 mb-1.5">{kicker}</span>
      <span className="font-grotesk font-bold text-navy t-base leading-snug flex items-start justify-between gap-2">
        {title}
        <ArrowUpRight size={16} className="text-navy/40 group-hover:text-crimson transition-colors shrink-0 mt-0.5" />
      </span>
      {desc && <span className="text-navy/65 t-sm2 leading-relaxed mt-1.5">{desc}</span>}
    </Link>
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
