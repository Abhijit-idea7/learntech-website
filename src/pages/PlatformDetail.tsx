import { Link, useParams } from 'react-router-dom';
import { Check, ExternalLink, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import Reveal from '@/components/Reveal';
import Placeholder from '@/components/Placeholder';
import NotFound from '@/pages/NotFound';
import { Section, SolutionCard } from '@/components/Blocks';
import { platforms } from '@/content/platforms';
import { solutions } from '@/content/solutions';

function embedUrl(url: string): string | null {
  if (!url) return null;
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return null;
}

// One page per platform: /platforms/<slug>
export default function PlatformDetail() {
  const { slug } = useParams<{ slug: string }>();
  const p = platforms.find((x) => x.slug === slug && x.published);
  if (!p) return <NotFound />;

  const video = embedUrl(p.video_url);
  const usedIn = solutions.filter((s) => s.published && s.includes.platforms?.includes(p.slug));
  const others = platforms.filter((x) => x.published && x.slug !== p.slug);

  return (
    <>
      <PageHero
        eyebrow={p.is_flagship ? 'PLATFORMS · FLAGSHIP' : 'PLATFORMS'}
        title={<>{p.name}</>}
        subtitle={p.tagline}
        ctaLabel="Request a demo →"
        ctaTo="#demo"
        image={p.screenshots?.[0] || '/hero-platforms.webp'}
        imageAlt={p.name}
        accent="moss"
      />

      <Section eyebrow="WHAT IT DOES" tone="white">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-start">
          <div>
            <p className="text-navy/85 t-lg leading-relaxed mb-6">{p.description}</p>
            {p.external_url && (
              <a href={p.external_url} target="_blank" rel="noopener noreferrer" className="lt-link inline-flex items-center gap-1.5">
                Visit the {p.name} site <ExternalLink size={14} />
              </a>
            )}
          </div>
          <div className="lt-card">
            <h3 className="font-grotesk font-bold text-navy t-sm uppercase tracking-[0.1em] mb-3">Key capabilities</h3>
            <ul className="flex flex-col gap-2">
              {p.key_capabilities.map((cap) => (
                <li key={cap} className="flex gap-2 text-navy/85 t-sm2 leading-snug">
                  <Check size={16} className="text-crimson shrink-0 mt-0.5" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="SEE IT">
        {video ? (
          <div className="aspect-video border-2 border-navy bg-navy mb-5">
            <iframe src={video} className="w-full h-full" allowFullScreen allow="fullscreen" title={`${p.name} product tour`} />
          </div>
        ) : p.video_url ? (
          <video src={p.video_url} controls className="w-full border-2 border-navy mb-5" />
        ) : (
          <Placeholder label="Product tour video" hint="30–60 second screen recording (YouTube or Vimeo link)" className="mb-5" />
        )}
        {p.screenshots && p.screenshots.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.screenshots.map((src, i) => (
              <Reveal key={src} delay={i * 60}>
                <img src={src} alt={`${p.name} screen ${i + 1}`} className="w-full border-2 border-navy bg-white" />
              </Reveal>
            ))}
          </div>
        ) : (
          <Placeholder label="Screenshots" hint="3–6 real screens; upload to /public/media and list them under 'screenshots' in platforms.ts" />
        )}
      </Section>

      <Section eyebrow="WHO IT'S FOR" tone="white">
        {p.who_its_for && p.who_its_for.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.who_its_for.map((w) => (
              <div key={w} className="lt-card t-base text-navy">{w}</div>
            ))}
          </div>
        ) : (
          <Placeholder label="Who it's for" hint="2–3 buyer types, e.g. 'Network training heads at 2-wheeler OEMs'" />
        )}
        {p.outcomes && p.outcomes.length > 0 && (
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {p.outcomes.map((o) => (
              <div key={o} className="flex gap-2 text-navy t-base">
                <span className="text-crimson font-bold">→</span>
                {o}
              </div>
            ))}
          </div>
        )}
      </Section>

      {usedIn.length > 0 && (
        <Section eyebrow={`USED IN THESE SOLUTIONS`}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {usedIn.map((s, i) => (
              <SolutionCard key={s.slug} s={s} index={i} />
            ))}
          </div>
        </Section>
      )}

      <div id="demo">
        <CTABand
          heading={`See ${p.name} in action.`}
          fields={[
            { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Name*' },
            { name: 'email', label: 'Work email', type: 'email', required: true, placeholder: 'Work email*' },
            { name: 'company', label: 'Company', type: 'text', placeholder: 'Company' },
            { name: 'message', label: 'Message', type: 'textarea', placeholder: `What would you use ${p.name} for?` },
          ]}
          submitLabel="Request a demo →"
        />
      </div>

      <Section eyebrow="OTHER PLATFORMS" tone="white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {others.map((o) => (
            <Link key={o.slug} to={`/platforms/${o.slug}`} className="lt-card lt-card-link group flex flex-col h-full !p-4">
              <span className="font-grotesk font-bold text-navy t-base flex justify-between gap-2">
                {o.name}
                <ArrowUpRight size={16} className="text-navy/40 group-hover:text-crimson" />
              </span>
              <span className="text-navy/65 t-sm2 mt-1 leading-snug">{o.tagline}</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
