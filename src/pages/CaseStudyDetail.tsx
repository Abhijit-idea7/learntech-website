import { useParams } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Placeholder from '@/components/Placeholder';
import NotFound from '@/pages/NotFound';
import { Section, CaseStudyCard, BookCallBand, PillarChip, usesToChips } from '@/components/Blocks';
import { caseStudies } from '@/content/case-studies';
import { site } from '@/content/site';

// Standard case study template for /work/<slug>.
export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c || (c.status === 'draft' && !site.showPlaceholders)) return <NotFound />;

  const used = usesToChips(c.uses);
  const more = caseStudies.filter((x) => x.slug !== c.slug && x.status === 'live').slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`CASE STUDY · ${c.industry.toUpperCase()}`}
        title={<>{c.title}</>}
        subtitle={c.client}
        ctaLabel="Talk to us about a similar project →"
        ctaTo="/contact"
        image={c.image || '/hero-casestudy.webp'}
        imageAlt={c.title}
        accent="sky"
      />

      {c.results && c.results.length > 0 ? (
        <section className="bg-navy">
          <div className="wrap py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {c.results.map((r) => (
              <div key={r.label}>
                <div className="font-grotesk font-bold text-white t-3xl leading-none">{r.value}</div>
                <div className="text-white/70 t-sm2 mt-2">{r.label}</div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="wrap pt-8">
          <Placeholder label="Headline results (2–4 numbers)" />
        </section>
      )}

      <Section eyebrow="THE PROBLEM" tone="white">
        {c.problem ? (
          <p className="text-navy/80 t-lg leading-relaxed max-w-[820px]">{c.problem}</p>
        ) : (
          <Placeholder label="What the client was struggling with" hint="3–5 sentences" />
        )}
      </Section>

      <Section eyebrow="WHAT WE DID">
        {c.approach && c.approach.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {c.approach.map((a, i) => (
              <Reveal key={a} delay={i * 60}>
                <div className="lt-card h-full flex gap-4">
                  <span className="font-grotesk font-bold text-crimson t-xl leading-none">0{i + 1}</span>
                  <p className="text-navy t-base leading-relaxed">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Placeholder label="What we built and how we ran it" hint="3–5 short points, plus 1–2 visuals" />
        )}
      </Section>

      {used.length > 0 && (
        <Section eyebrow="WHAT WE USED" tone="white">
          <div className="flex flex-wrap gap-2">
            {used.map((u) => (
              <PillarChip key={u.to} {...u} />
            ))}
          </div>
        </Section>
      )}

      <BookCallBand heading="Have a similar problem?" />

      {more.length > 0 && (
        <Section eyebrow="MORE WORK" tone="white" action={{ label: 'All case studies', to: '/work' }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {more.map((m, i) => (
              <CaseStudyCard key={m.slug} c={m} index={i} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
