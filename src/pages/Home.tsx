import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { useState } from 'react';
import ClientStrip from '@/components/ClientStrip';
import Reveal from '@/components/Reveal';
import {
  Section,
  StatsBand,
  SolutionCard,
  CaseStudyCard,
  IndustriesGrid,
  BookCallButton,
  BookCallBand,
} from '@/components/Blocks';
import { solutions } from '@/content/solutions';
import { caseStudies } from '@/content/case-studies';
import { platforms } from '@/content/platforms';
import { site } from '@/content/site';

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const sols = solutions.filter((s) => s.published);
  const work = [...caseStudies.filter((c) => c.status === 'live'), ...(site.showPlaceholders ? caseStudies.filter((c) => c.status === 'draft') : [])].slice(0, 3);
  const plats = platforms.filter((p) => p.published);

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
                <Link to="/work" className="btn-secondary">
                  See our work <ArrowDown size={17} className="ml-1.5 -rotate-90" />
                </Link>
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

      {/* Solutions */}
      <Section
        eyebrow="SOLUTIONS"
        title="What are you trying to fix?"
        intro="Start with the problem. We bring the right mix of consulting, content, platforms and programs."
        tone="white"
        action={{ label: 'All solutions', to: '/solutions' }}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {sols.map((s, i) => (
            <SolutionCard key={s.slug} s={s} index={i} />
          ))}
          <Reveal delay={sols.length * 60}>
            <Link to="/contact" className="flex flex-col justify-center h-full border-2 border-dashed border-navy/40 p-5 md:p-6 hover:border-navy transition-colors">
              <span className="font-grotesk font-bold text-navy t-lg">Something else?</span>
              <span className="text-navy/70 t-sm2 mt-1">Tell us the problem. If we are not the right fit, we will say so.</span>
            </Link>
          </Reveal>
        </div>
      </Section>

      <StatsBand />

      {/* Our work */}
      <Section eyebrow="OUR WORK" title="Proof, not promises" action={{ label: 'All case studies', to: '/work' }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {work.map((c, i) => (
            <CaseStudyCard key={c.slug} c={c} index={i} />
          ))}
        </div>
      </Section>

      {/* Platforms teaser */}
      <Section eyebrow="PLATFORMS" title="Our own L&D tech, built for the frontline" tone="white" action={{ label: 'All platforms', to: '/platforms' }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {plats.map((p) => (
            <Link
              key={p.slug}
              to={`/platforms/${p.slug}`}
              className={`lt-card lt-card-link flex flex-col h-full !p-4 ${p.is_flagship ? 'lg:col-span-1 !bg-navy !text-white' : ''}`}
            >
              <span className={`font-grotesk font-bold t-base ${p.is_flagship ? 'text-white' : 'text-navy'}`}>{p.name}</span>
              <span className={`t-sm2 mt-1 leading-snug ${p.is_flagship ? 'text-white/75' : 'text-navy/65'}`}>{p.tagline}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why us */}
      <Section eyebrow="WHY LEARNTECH" title="Built by people who have run L&D inside the businesses we serve">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {site.whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <div className="lt-card h-full">
                <div className="font-grotesk font-bold text-crimson t-xl leading-none mb-3">0{i + 1}</div>
                <h3 className="font-grotesk font-bold text-navy t-base uppercase tracking-[0.02em] mb-1.5">{w.title}</h3>
                <p className="text-navy/70 t-sm2 leading-relaxed">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section eyebrow="WHO WE WORK WITH" title="Anchored in automotive. Proven in premium retail." tone="white">
        <IndustriesGrid />
      </Section>

      <BookCallBand />
    </>
  );
}
