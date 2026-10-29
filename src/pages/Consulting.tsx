import { Link } from 'react-router-dom';
import SectionHeader from '@/components/SectionHeader';
import CTABand from '@/components/CTABand';
import CaseStudyBlock from '@/components/CaseStudyBlock';
import Reveal from '@/components/Reveal';
import BrandIcon from '@/components/BrandIcon';
import PageHero from '@/components/PageHero';

const triggers = [
  "We're setting up dealer or channel training from scratch.",
  "Our L&D isn't moving performance numbers.",
  "We've bought an LMS and nobody's using it.",
  "We need someone who's done this in automotive or retail before.",
];

const services = [
  {
    title: 'Organizational L&D Strategy',
    icon: 'consulting',
    accent: 'crimson' as const,
    desc: 'Integrate L&D practice and technology into a company-wide plan.',
    link: '/consulting/l-and-d-strategy',
    shadow: 'shadow-hard-crimson card-lift',
  },
  {
    title: 'Learning Pathways & Performance Metrics',
    icon: 'frameworks',
    accent: 'sky' as const,
    desc: 'Role-specific learning pathways. KPIs that connect learning to performance numbers.',
    link: '/consulting/learning-pathways',
    shadow: 'shadow-hard-sky card-lift',
  },
  {
    title: 'L&D Tech Architecture & Platform Selection',
    icon: 'platform-delivery',
    accent: 'moss' as const,
    desc: 'Which platforms to buy, which to build, how they stitch together.',
    link: '/consulting/tech-architecture',
    shadow: 'shadow-hard-moss card-lift',
  },
  {
    title: 'Implementation & Adoption',
    icon: 'speed',
    accent: 'crimson' as const,
    desc: 'Rollout planning, change management, adoption programme design.',
    link: '/consulting/implementation',
    shadow: 'shadow-hard-navy card-lift',
  },
];

const steps = [
  { num: '01', title: 'Diagnose', icon: 'sme-interview' as const, accent: 'crimson' as const, desc: 'Understand the business, not the training brief.' },
  { num: '02', title: 'Design', icon: 'sme-draft' as const, accent: 'sky' as const, desc: 'Build the plan against your reality, not a template.' },
  { num: '03', title: 'Deploy', icon: 'sme-review' as const, accent: 'moss' as const, desc: 'Ship it, measure it, adjust in flight.' },
];

export default function Consulting() {
  return (
    <>
      <PageHero
        eyebrow="CONSULTING"
        title={<>L&D strategy from people who've built it inside real businesses.</>}
        subtitle="Strategy, learning pathways, and tech architecture. Built by people who've done the job before."
        ctaLabel="Book a discovery call →"
        ctaTo="/contact"
        image="/hero-consulting.webp"
        imageAlt="Consulting strategy session"
        accent="crimson"
      />

      {/* Section 2 — When to call us */}
      <section className="bg-white py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="WHEN TO CALL US" />
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {triggers.map((t, i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="bg-paper border-2 border-navy p-5 md:p-6 flex items-center h-full hover:-translate-y-1 transition-transform">
                  <p className="font-grotesk font-semibold text-navy t-xl leading-snug">
                    {t}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — What we consult on */}
      <section className="bg-paper py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="WHAT WE CONSULT ON" />
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Link
                  to={s.link}
                  className={`bg-white border-2 border-navy ${s.shadow} p-5 md:p-6 flex flex-col h-full`}
                >
                  <BrandIcon name={s.icon} accent={s.accent} className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
                  <h3 className="font-grotesk font-bold text-navy t-xl leading-tight mb-2 md:mb-3">
                    {s.title}
                  </h3>
                  <p className="text-navy/80 t-base leading-relaxed">
                    {s.desc}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — How we work */}
      <section className="bg-navy py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="HOW WE WORK" />
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 100}>
                <div className="bg-white border-2 border-white p-5 md:p-6 flex flex-col h-full">
                  <BrandIcon name={s.icon} accent={s.accent} className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
                  <div className="font-grotesk font-bold text-crimson t-3xl leading-none mb-3 md:mb-4">
                    {s.num}
                  </div>
                  <h3 className="font-grotesk font-bold text-navy t-xl uppercase mb-2 md:mb-3">
                    {s.title}
                  </h3>
                  <p className="text-navy/70 t-base leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Proof */}
      <section className="bg-paper py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="PROOF" />
          <Reveal>
            <CaseStudyBlock compact />
          </Reveal>
        </div>
      </section>

      <CTABand heading="30-minute discovery call. No slide deck." />
    </>
  );
}
