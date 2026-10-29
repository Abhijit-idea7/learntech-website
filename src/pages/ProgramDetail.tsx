import { useParams } from 'react-router-dom';
import SectionHeader from '@/components/SectionHeader';
import CTABand from '@/components/CTABand';
import Reveal from '@/components/Reveal';
import BrandIcon from '@/components/BrandIcon';
import PageHero from '@/components/PageHero';
import { programs } from '@/content/programs';

function LoadingState() {
  return (
    <section className="wrap py-20">
      <div className="flex flex-col gap-4 max-w-[800px]">
        {[1, 2, 3].map((i) => <div key={i} className="h-8 bg-navy/10 animate-pulse" />)}
      </div>
    </section>
  );
}

const accentIcons = ['sme-interview', 'frameworks', 'performance'];
const accentColors = ['crimson', 'sky', 'crimson'] as const;

export default function ProgramDetail() {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((p) => p.slug === slug && p.published) ?? null;
  const loading = false;
  const notFound = !program;

  if (loading) return <LoadingState />;

  if (notFound || !program) {
    return (
      <>
        <PageHero
          eyebrow="PROGRAM"
          title={<>Program not found.</>}
          subtitle="We couldn't find this program. Browse our full library."
          ctaLabel="View all programs →"
          ctaTo="/content#program-library"
          image="/hero-content.webp"
          imageAlt="Programs"
          accent="sky"
        />
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={`PROGRAM · ${program.format.toUpperCase()}`}
        title={<>{program.name}</>}
        subtitle={program.hero_subtitle}
        ctaLabel="Enquire about this program →"
        ctaTo="#enquire"
        image={program.hero_image_url || '/hero-content.webp'}
        imageAlt={program.name}
        accent="crimson"
      />

      {/* The Problem */}
      {program.problem_statement && (
        <section className="bg-white py-12 md:py-16">
          <div className="wrap">
            <SectionHeader eyebrow="THE PROBLEM" />
            <div className="max-w-[800px]">
              <Reveal>
                <p className="text-navy/80 t-lg leading-relaxed">
                  {program.problem_statement}
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* What's Covered */}
      {program.modules && program.modules.length > 0 && (
        <section className="bg-paper py-12 md:py-16">
          <div className="wrap">
            <SectionHeader eyebrow="WHAT'S COVERED" />
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {program.modules.map((m, i) => (
                <Reveal key={m.num} delay={i * 60}>
                  <div className="bg-white border-2 border-navy p-5 md:p-6 hover:-translate-y-1 transition-transform h-full">
                    <div className="flex items-baseline gap-4 md:gap-5 mb-1 md:mb-2">
                      <span className="font-grotesk font-bold text-crimson t-xl">{m.num}</span>
                      <h3 className="font-grotesk font-bold text-navy t-lg">{m.title}</h3>
                    </div>
                    <p className="text-navy/75 t-base leading-relaxed">{m.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who It's For */}
      {program.personas && program.personas.length > 0 && (
        <section className="bg-navy py-12 md:py-16">
          <div className="wrap">
            <SectionHeader eyebrow="WHO IT'S FOR" />
            <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
              {program.personas.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="bg-white border-2 border-white p-5 md:p-6 flex flex-col h-full">
                    <BrandIcon
                      name={accentIcons[i % accentIcons.length]}
                      accent={accentColors[i % accentColors.length]}
                      className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4"
                    />
                    <p className="text-navy t-base leading-relaxed">{p}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes */}
      {program.outcomes && program.outcomes.length > 0 && (
        <section className="bg-paper py-12 md:py-16">
          <div className="wrap">
            <SectionHeader eyebrow="OUTCOMES" />
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {program.outcomes.map((o, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="bg-white border-2 border-navy p-5 md:p-6 flex items-center gap-4 md:gap-5 hover:-translate-y-1 transition-transform h-full">
                    <span className="text-crimson font-grotesk font-bold t-xl">→</span>
                    <span className="text-navy t-base">{o}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Format & Logistics */}
      {program.logistics && program.logistics.length > 0 && (
        <section className="bg-white py-12 md:py-16">
          <div className="wrap">
            <SectionHeader eyebrow="FORMAT & LOGISTICS" />
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {program.logistics.map((l, i) => (
                <Reveal key={l.label} delay={i * 60}>
                  <div className="bg-paper border-2 border-navy p-5 md:p-6 hover:-translate-y-1 transition-transform h-full">
                    <div className="font-grotesk font-bold uppercase t-sm tracking-[0.08em] text-crimson mb-1">
                      {l.label}
                    </div>
                    <div className="text-navy t-base">{l.value}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What's In The Pack */}
      {program.pack_items && program.pack_items.length > 0 && (
        <section className="bg-paper py-12 md:py-16">
          <div className="wrap">
            <SectionHeader eyebrow="WHAT'S IN THE PACK" />
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {program.pack_items.map((item, i) => (
                <Reveal key={item} delay={i * 50}>
                  <div className="bg-white border-2 border-navy p-4 md:p-5 flex items-center gap-3 hover:-translate-y-1 transition-transform h-full">
                    <span className="text-crimson font-bold t-lg">●</span>
                    <span className="text-navy t-base">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <div id="enquire">
        <CTABand heading={`Bring ${program.name} to your team.`} />
      </div>
    </>
  );
}
