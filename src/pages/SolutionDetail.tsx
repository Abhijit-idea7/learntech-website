import { useParams } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Placeholder from '@/components/Placeholder';
import NotFound from '@/pages/NotFound';
import { Section, MiniLinkCard, CaseStudyCard, SolutionCard, BookCallBand } from '@/components/Blocks';
import { solutions } from '@/content/solutions';
import { consultingServices } from '@/content/consulting-services';
import { contentFormats } from '@/content/content-formats';
import { platforms } from '@/content/platforms';
import { programs } from '@/content/programs';
import { caseStudies } from '@/content/case-studies';

function pick<T extends { slug: string; published: boolean }>(all: T[], slugs?: string[]) {
  if (!slugs) return [];
  return slugs.map((s) => all.find((x) => x.slug === s && x.published)).filter((x): x is T => Boolean(x));
}

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const s = solutions.find((x) => x.slug === slug && x.published);
  if (!s) return <NotFound />;

  const inc = s.includes;
  const items = [
    ...pick(consultingServices, inc.consulting).map((c) => ({ kicker: 'Consulting', title: c.title, desc: c.short_desc, to: `/consulting/${c.slug}` })),
    ...pick(contentFormats, inc.formats).map((f) => ({ kicker: 'Content format', title: f.name, desc: f.tagline, to: '/content#content-design' })),
    ...pick(platforms, inc.platforms).map((p) => ({ kicker: 'Platform', title: p.name, desc: p.tagline, to: `/platforms/${p.slug}` })),
    ...pick(programs, inc.programs).map((p) => ({ kicker: 'Program', title: p.name, desc: p.topic, to: `/programs/${p.slug}` })),
  ];
  const work = (s.work ?? []).map((w) => caseStudies.find((c) => c.slug === w)).filter((c): c is NonNullable<typeof c> => Boolean(c));
  const others = solutions.filter((x) => x.published && x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`SOLUTIONS · ${s.title.toUpperCase()}`}
        title={<>{s.title}</>}
        subtitle={s.intro}
        ctaLabel="Book a 30-min call →"
        ctaTo="/contact"
        image={s.hero_image}
        imageAlt={s.title}
        accent="crimson"
      />

      <Section eyebrow="SOUND FAMILIAR?" title="The problems we usually walk into" tone="white">
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {s.challenges.map((c, i) => (
            <Reveal key={c} delay={i * 60}>
              <div className="flex gap-3 items-start border-l-[3px] border-crimson bg-paper px-4 py-3.5 h-full">
                <span className="font-grotesk font-bold text-crimson t-sm2 mt-0.5">0{i + 1}</span>
                <p className="text-navy t-base leading-snug">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="HOW WE SOLVE IT" title="Our approach">
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {s.approach.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <div className="lt-card h-full">
                <div className="font-grotesk font-bold text-crimson t-2xl leading-none mb-3">0{i + 1}</div>
                <h3 className="font-grotesk font-bold text-navy t-lg mb-1.5">{a.title}</h3>
                <p className="text-navy/70 t-sm2 leading-relaxed">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="WHAT'S INCLUDED" title="The pieces we put together for this" tone="white">
        {items.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {items.map((it) => (
              <MiniLinkCard key={it.kicker + it.title} {...it} />
            ))}
          </div>
        ) : (
          <Placeholder label="Pick the consulting services, formats, platforms and programs for this solution" hint="Edit 'includes' in solutions.ts" />
        )}
      </Section>

      <Section eyebrow="PROOF" title="Where we have done this">
        {work.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {work.map((c, i) => (
              <CaseStudyCard key={c.slug} c={c} index={i} />
            ))}
          </div>
        ) : (
          <Placeholder label="Link a case study to this solution" hint="Add slugs to 'work' in solutions.ts" />
        )}
      </Section>

      <BookCallBand heading={`Talk to us about ${s.title.toLowerCase()}.`} />

      <Section eyebrow="OTHER SOLUTIONS" tone="white">
        <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
          {others.map((o, i) => (
            <SolutionCard key={o.slug} s={o} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
