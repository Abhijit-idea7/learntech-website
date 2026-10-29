import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Section, SolutionCard, IndustriesGrid, BookCallBand } from '@/components/Blocks';
import { solutions } from '@/content/solutions';

const capabilities = [
  { title: 'Consulting', desc: 'Strategy, learning pathways, tech architecture and adoption.', to: '/consulting' },
  { title: 'Content & delivery', desc: 'Every L&D format, delivered by trainers in 20+ cities.', to: '/content' },
  { title: 'Platforms', desc: 'Five in-house platforms, plus custom builds.', to: '/platforms' },
  { title: 'Programs', desc: 'Nine ready-to-run workshops and simulations.', to: '/programs' },
];

export default function Solutions() {
  const list = solutions.filter((s) => s.published);
  return (
    <>
      <PageHero
        eyebrow="SOLUTIONS"
        title={<>Start with the problem. We bring the right mix.</>}
        subtitle="Each solution combines consulting, content, platforms and programs around one business problem, so you buy an outcome rather than a training calendar."
        ctaLabel="Find your problem ↓"
        ctaTo="#solutions"
        image="/hero-consulting.webp"
        imageAlt="LearnTech solutions"
        accent="crimson"
      />

      <Section id="solutions" eyebrow="WHAT ARE YOU TRYING TO FIX?" tone="white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {list.map((s, i) => (
            <SolutionCard key={s.slug} s={s} index={i} />
          ))}
        </div>
      </Section>

      <Section eyebrow="WHO WE WORK WITH" title="Built in automotive retail. Proven wherever the frontline is the brand.">
        <IndustriesGrid />
      </Section>

      <Section eyebrow="OUR CAPABILITIES" title="What goes into every solution" tone="white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {capabilities.map((c) => (
            <Link key={c.to} to={c.to} className="lt-card lt-card-link group flex flex-col h-full">
              <h3 className="font-grotesk font-bold text-navy t-lg mb-1.5">{c.title}</h3>
              <p className="text-navy/70 t-sm2 leading-relaxed flex-1">{c.desc}</p>
              <span className="lt-link inline-flex items-center gap-1.5 mt-4">
                Explore <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <BookCallBand />
    </>
  );
}
