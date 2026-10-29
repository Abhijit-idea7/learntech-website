import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import BrandIcon from '@/components/BrandIcon';
import Reveal from '@/components/Reveal';
import Placeholder from '@/components/Placeholder';
import { Section } from '@/components/Blocks';
import { platforms } from '@/content/platforms';

const accentText: Record<string, string> = { crimson: 'text-crimson', sky: 'text-sky', moss: 'text-moss', navy: 'text-navy' };
const accentBorder: Record<string, string> = { crimson: 'border-t-crimson', sky: 'border-t-sky', moss: 'border-t-moss', navy: 'border-t-navy' };

export default function Platforms() {
  const list = platforms.filter((p) => p.published);
  const flagship = list.find((p) => p.is_flagship);
  const others = list.filter((p) => !p.is_flagship);

  return (
    <>
      <PageHero
        eyebrow="PLATFORMS"
        title={<>{list.length} L&amp;D platforms. Built by L&amp;D people. All in-house.</>}
        subtitle="In-house tech built for how L&D actually runs at the frontline. Each one can run on its own or as part of a solution."
        ctaLabel="Request a demo →"
        ctaTo="#cta"
        image="/hero-platforms.webp"
        imageAlt="L&D technology platforms"
        accent="moss"
      />

      {flagship && (
        <Section eyebrow="FLAGSHIP" tone="white">
          <Reveal>
            <div className="bg-navy border-2 border-navy shadow-[4px_4px_0_#D8315B] md:shadow-[6px_6px_0_#D8315B] p-6 md:p-10 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
              <div>
                <h2 className="font-grotesk font-bold text-white t-3xl leading-[1.1] mb-2">{flagship.name}</h2>
                <p className="text-sky font-grotesk font-bold t-base mb-4">{flagship.tagline}</p>
                <p className="text-white/85 t-base leading-relaxed mb-6">{flagship.description}</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-7">
                  {flagship.key_capabilities.slice(0, 6).map((cap) => (
                    <li key={cap} className="text-white/85 t-sm2 leading-snug flex gap-2">
                      <span className="text-sky">▸</span>
                      {cap}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link to={`/platforms/${flagship.slug}`} className="btn-nav-cta">
                    Explore {flagship.name} →
                  </Link>
                  <a href="#cta" className="inline-flex items-center border-2 border-white text-white font-grotesk font-bold t-sm2 px-5 py-2.5 hover:bg-white/10 transition-colors">
                    Request a demo
                  </a>
                </div>
              </div>
              <div>
                {flagship.screenshots && flagship.screenshots.length > 0 ? (
                  <img src={flagship.screenshots[0]} alt={`${flagship.name} screen`} className="w-full border-2 border-white" />
                ) : (
                  <Placeholder label={`${flagship.name} screenshots`} hint="2–4 real screens (phone + manager dashboard)" tall className="!bg-white" />
                )}
              </div>
            </div>
          </Reveal>
        </Section>
      )}

      {others.length > 0 && (
        <Section eyebrow="THE OTHER PLATFORMS" title="Pick the one that fits the job">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <Link to={`/platforms/${p.slug}`} className={`lt-card lt-card-link group border-t-[6px] ${accentBorder[p.accent] ?? 'border-t-crimson'} flex flex-col h-full`}>
                  <div className="flex items-start justify-between mb-3">
                    <BrandIcon name={p.icon} accent={(p.accent as 'crimson' | 'sky' | 'moss') ?? 'crimson'} className="w-10 h-10" />
                    <ArrowUpRight size={18} className="text-navy/40 group-hover:text-crimson transition-colors" />
                  </div>
                  <h3 className="font-grotesk font-bold text-navy t-xl mb-1.5">{p.name}</h3>
                  <p className="text-navy/70 t-sm2 leading-relaxed flex-1">{p.tagline}</p>
                  <span className={`lt-link inline-flex items-center gap-1.5 mt-4 ${accentText[p.accent] ?? ''}`}>
                    See {p.name} <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section tone="navy">
        <div className="max-w-[680px] mx-auto text-center">
          <span className="eyebrow !text-sky">CUSTOM BUILDS</span>
          <p className="font-grotesk font-bold text-white t-2xl leading-[1.2] mt-3 mb-6">
            Need something the market doesn't sell? We build custom L&amp;D tech. Three more platforms are in the pipeline.
          </p>
          <Link to="/contact" className="btn-nav-cta">Talk to us →</Link>
        </div>
      </Section>

      <div id="cta">
        <CTABand
          heading="Which platform is right for you?"
          fields={[
            { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Name*' },
            { name: 'email', label: 'Work email', type: 'email', required: true, placeholder: 'Work email*' },
            { name: 'company', label: 'Company', type: 'text', placeholder: 'Company' },
            {
              name: 'platform',
              label: 'Platform of interest',
              type: 'select',
              placeholder: 'Platform of interest',
              options: [...list.map((p) => ({ label: p.name, value: p.slug })), { label: 'Custom build', value: 'custom-build' }],
            },
            { name: 'message', label: 'Message', type: 'textarea', placeholder: "What's on your mind?" },
          ]}
        />
      </div>
    </>
  );
}
