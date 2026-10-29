import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { Section, CaseStudyCard, BookCallBand } from '@/components/Blocks';
import { caseStudies } from '@/content/case-studies';
import { site } from '@/content/site';

export default function Work() {
  const visible = caseStudies.filter((c) => c.status === 'live' || site.showPlaceholders);
  const industries = ['All', ...Array.from(new Set(visible.map((c) => c.industry)))];
  const [active, setActive] = useState('All');
  const list = active === 'All' ? visible : visible.filter((c) => c.industry === active);

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
        <div className="flex flex-wrap gap-2 mb-6 md:mb-8" role="tablist" aria-label="Filter by industry">
          {industries.map((ind) => (
            <button
              key={ind}
              role="tab"
              aria-selected={active === ind}
              onClick={() => setActive(ind)}
              className={`border-2 border-navy px-3.5 py-1.5 font-grotesk font-bold t-sm uppercase tracking-[0.06em] transition-colors ${
                active === ind ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-paper'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {list.map((c, i) => (
            <CaseStudyCard key={c.slug} c={c} index={i} />
          ))}
        </div>
      </Section>

      <BookCallBand heading="Have a similar problem?" />
    </>
  );
}
