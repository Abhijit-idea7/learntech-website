import { useParams, Link } from 'react-router-dom';
import SectionHeader from '@/components/SectionHeader';
import CTABand from '@/components/CTABand';
import Reveal from '@/components/Reveal';
import BrandIcon from '@/components/BrandIcon';
import PageHero from '@/components/PageHero';
import { consultingServices } from '@/content/consulting-services';

function LoadingState() {
  return (
    <section className="wrap py-20">
      <div className="flex flex-col gap-4 max-w-[800px]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-8 bg-navy/10 animate-pulse" />
        ))}
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="wrap py-12 md:py-16">
      <div className="max-w-[800px] mx-auto text-center">
        <h1 className="font-grotesk font-bold text-navy t-3xl mb-6">Service not found</h1>
        <p className="text-navy/70 t-base mb-8">This consulting service page doesn't exist yet.</p>
        <Link to="/consulting" className="btn-primary">Back to Consulting →</Link>
      </div>
    </section>
  );
}

const accentMap: Record<string, 'crimson' | 'sky' | 'moss'> = {
  crimson: 'crimson',
  sky: 'sky',
  moss: 'moss',
};

export default function ConsultingServicePage() {
  const { sub } = useParams<{ sub: string }>();
  const service = consultingServices.find((s) => s.slug === sub && s.published) ?? null;
  const loading = false;
  const notFound = !service;

  if (loading) return <LoadingState />;
  if (notFound || !service) return <NotFound />;

  const heroAccent = accentMap[service.accent] ?? 'crimson';

  return (
    <>
      <PageHero
        eyebrow={`CONSULTING · ${service.title.toUpperCase()}`}
        title={<>{service.hero_title || service.title}</>}
        subtitle={service.hero_subtitle}
        ctaLabel="Book a discovery call →"
        ctaTo="/contact"
        image={service.hero_image_url || '/hero-consulting.webp'}
        imageAlt={service.title}
        accent={heroAccent}
      />

      {/* The Problem */}
      {service.problem_text && (
        <section className="bg-white py-12 md:py-16">
          <div className="wrap">
            <SectionHeader eyebrow="THE PROBLEM" />
            <div className="max-w-[800px]">
              <Reveal>
                <p className="text-navy/80 t-lg leading-relaxed">
                  {service.problem_text}
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* What We Do */}
      {service.what_we_do && service.what_we_do.length > 0 && (
        <section className="bg-paper py-12 md:py-16">
          <div className="wrap">
            <SectionHeader eyebrow="WHAT WE DO" />
            <div className="grid gap-4 md:gap-5">
              {service.what_we_do.map((step, i) => (
                <Reveal key={step.num} delay={i * 80}>
                  <div
                    className="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-6 gap-y-1 items-start bg-white border-2 border-navy p-5 md:p-6"
                    style={{ boxShadow: `4px 4px 0 ${service.shadow_color}` }}
                  >
                    <div
                      className="font-grotesk font-bold t-3xl leading-none"
                      style={{ color: service.shadow_color }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-grotesk font-bold text-navy t-xl mb-1 md:mb-2">
                        {step.title}
                      </h3>
                      <p className="text-navy/75 t-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes */}
      {service.outcomes && service.outcomes.length > 0 && (
        <section className="bg-navy py-12 md:py-16">
          <div className="wrap">
            <SectionHeader eyebrow="OUTCOMES" />
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {service.outcomes.map((o, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="bg-white border-2 border-white p-5 md:p-6 flex items-center gap-4 md:gap-5 h-full hover:-translate-y-1 transition-transform">
                    <span className="text-crimson font-grotesk font-bold t-xl">→</span>
                    <span className="text-navy t-base leading-relaxed">{o}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who It's For */}
      {service.who_its_for && service.who_its_for.length > 0 && (
        <section className="bg-paper py-12 md:py-16">
          <div className="wrap">
            <SectionHeader eyebrow="WHO IT'S FOR" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {service.who_its_for.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="bg-white border-2 border-navy p-5 md:p-6 h-full">
                    <BrandIcon
                      name={i === 0 ? 'sme-interview' : i === 1 ? 'frameworks' : 'performance'}
                      accent={heroAccent}
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

      <CTABand heading="30-minute discovery call. No slide deck." />
    </>
  );
}
