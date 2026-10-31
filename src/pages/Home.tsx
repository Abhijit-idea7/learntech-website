import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { useState } from 'react';
import ClientStrip from '@/components/ClientStrip';
import Reveal from '@/components/Reveal';
import { Section, StatsBand, ReasonCard, PillarsBand, CaseStudyCard, BookCallButton, BookCallBand } from '@/components/Blocks';
import { reasons } from '@/content/reasons';
import { caseStudies } from '@/content/case-studies';
import { site } from '@/content/site';

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const list = reasons.filter((r) => r.published);
  const work = [...caseStudies.filter((c) => c.status === 'live'), ...(site.showPlaceholders ? caseStudies.filter((c) => c.status === 'draft') : [])].slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-paper relative overflow-hidden">
        <svg aria-hidden className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1260 600" preserveAspectRatio="xMidYMid slice">
          <g className="hero-backdrop-lines" stroke="#0F2A5F" strokeWidth="2" fill="none" opacity="0.04">
            <path d="M0 120 Q315 60 630 120 T1260 120" />
            <path d="M0 200 Q315 260 630 200 T1260 200" />
            <path d="M0 320 Q315 240 630 320 T1260 320" />
            <path d="M0 440 Q315 520 630 440 T1260 440" />
          </g>
        </svg>
        <div className="wrap py-10 md:py-16 relative z-10">
          <div className="grid md:grid-cols-[58%_42%] gap-8 md:gap-10 items-center">
            <div>
              <h1 className="font-grotesk font-bold text-navy t-5xl leading-[0.98] mb-5 md:mb-6">
                Empowering
                <br />
                the <span className="highlight-crimson">frontline.</span>
                <br />
                Enabling
                <br />
                the <span className="highlight-sky">brand.</span>
              </h1>
              <p className="text-navy t-lg leading-relaxed mb-6 md:mb-8 max-w-[540px]">
                L&amp;D built for automotive retail. Sharpened for premium retail. Available to any business that lives or dies by its frontline.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <BookCallButton />
                <a href="#why" className="btn-secondary">
                  What we do <ArrowDown size={17} className="ml-1.5" />
                </a>
              </div>
            </div>
            <div aria-hidden className="relative h-auto md:h-[420px] hidden sm:flex items-center justify-center">
              <img
                src="/hero-home-main.webp"
                alt=""
                className={`w-full h-auto max-h-full object-contain select-none transition-all duration-700 ease-out ${heroLoaded ? 'opacity-100 scale-100 translate-y-0 float-soft' : 'opacity-0 scale-95 translate-y-3'}`}
                draggable={false}
                onLoad={() => setHeroLoaded(true)}
              />
            </div>
          </div>
        </div>
      </section>

      <ClientStrip />

      {/* Why clients come to us */}
      <Section
        id="why"
        eyebrow="WHY CLIENTS COME TO US"
        title="Five problems we are usually asked to solve"
        intro="Find yours, then see how we do it."
        tone="white"
      >
        <div className="flex flex-col gap-4 md:gap-5">
          {list.map((r, i) => (
            <ReasonCard key={r.slug} r={r} index={i} />
          ))}
          <Reveal>
            <Link to="/contact" className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-2 border-dashed border-navy/40 p-5 hover:border-navy transition-colors">
              <span className="font-grotesk font-bold text-navy t-lg">Something else?</span>
              <span className="text-navy/70 t-sm2">Tell us the problem. If we are not the right fit, we will say so. →</span>
            </Link>
          </Reveal>
        </div>
      </Section>

      <PillarsBand />

      {/* Our work */}
      <Section eyebrow="OUR WORK" title="Proof, not promises" action={{ label: 'All our work', to: '/work' }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {work.map((c, i) => (
            <CaseStudyCard key={c.slug} c={c} index={i} />
          ))}
        </div>
      </Section>

      <StatsBand tone="white" />

      <BookCallBand />
    </>
  );
}
