import { useEffect, useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import CTAForm from '@/components/CTAForm';
import BrandIcon from '@/components/BrandIcon';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import { Section, CaseStudyCard } from '@/components/Blocks';
import { contentFormats as formatsData } from '@/content/content-formats';
import { caseStudies } from '@/content/case-studies';
import { site } from '@/content/site';
import type { ContentFormat } from '@/lib/types';
import { X, Play, ChevronRight } from 'lucide-react';

const deliveryFormats = [
  { title: 'Instructor-led (ILT)', icon: 'delivery-ilt', desc: 'Best for complex topics, new product launches, real-time practice.' },
  { title: 'On-the-Job Training (OJT)', icon: 'delivery-ojt', desc: 'Best for process adoption and SOP practice.' },
  { title: 'Digital Learning', icon: 'delivery-digital', desc: 'Best for just-in-time access at scale.' },
  { title: 'Virtual Delivery', icon: 'delivery-virtual', desc: 'Best for large distributed teams.' },
];

const deliveryEdge = [
  { title: 'Trainer quality & reach', icon: 'trainer-reach', desc: 'Stringent trainer profiling, established onboarding standards. Available across 20+ cities.' },
  { title: 'Engaging sessions', icon: 'engaging', desc: 'In-session activities managed digitally. Hands-on, peer collaboration.' },
  { title: 'Strong project governance', icon: 'governance', desc: 'Timelines, regular check-ins, transparent reporting, escalation.' },
];

const smeSteps = [
  { title: 'SME interview', icon: 'sme-interview', desc: 'Draw the expertise out, structure it against the audience.' },
  { title: 'Draft', icon: 'sme-draft', desc: 'First cut in the format you picked. No slides for the sake of slides.' },
  { title: 'Review cycles', icon: 'sme-review', desc: 'Two rounds. Then it ships.' },
];

const formFields = [
  { name: 'name', label: 'Name', type: 'text' as const, required: true, placeholder: 'Name*' },
  { name: 'email', label: 'Work email', type: 'email' as const, required: true, placeholder: 'Work email*' },
  { name: 'company', label: 'Company', type: 'text' as const, placeholder: 'Company' },
  {
    name: 'request_type',
    label: 'What are you looking for?',
    type: 'radio' as const,
    options: [
      { label: 'Format sample', value: 'format-sample' },
      { label: 'Program details', value: 'program-details' },
      { label: 'Delivery quote', value: 'delivery-quote' },
    ],
  },
  { name: 'message', label: 'Message', type: 'textarea' as const, placeholder: 'Message (optional)' },
];

function getEmbedUrl(url: string): string | null {
  if (!url) return null;
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  return null;
}

function FormatModal({ fmt, onClose }: { fmt: ContentFormat; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const embedUrl = getEmbedUrl(fmt.video_url);
  const isDirectVideo = fmt.video_url && !embedUrl;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white border-2 border-navy w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-[4px_4px_0_#D8315B] md:shadow-[6px_6px_0_#D8315B]">
        {/* Video / header */}
        {(embedUrl || isDirectVideo) ? (
          <div className="aspect-video bg-navy">
            {embedUrl ? (
              <iframe src={embedUrl} className="w-full h-full" allowFullScreen allow="autoplay; fullscreen" title={fmt.name} />
            ) : (
              <video src={fmt.video_url} controls autoPlay className="w-full h-full object-contain" />
            )}
          </div>
        ) : (
          <div className={`${fmt.tile_bg} ${fmt.tile_text} flex items-center justify-between px-6 py-5`}>
            <div className="flex items-center gap-4">
              <span className="font-grotesk font-bold t-3xl leading-none opacity-30">{fmt.number}</span>
              <h2 className="font-grotesk font-bold t-2xl">{fmt.name}</h2>
            </div>
            {fmt.video_url && (
              <div className="flex items-center gap-2 opacity-60">
                <Play size={16} />
                <span className="t-sm font-grotesk font-bold uppercase tracking-[0.08em]">Video coming soon</span>
              </div>
            )}
          </div>
        )}

        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              {(embedUrl || isDirectVideo) && (
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-grotesk font-bold text-navy/40 t-sm">{fmt.number}</span>
                </div>
              )}
              <h2 className="font-grotesk font-bold text-navy t-2xl">{fmt.name}</h2>
              {fmt.tagline && (
                <p className="text-navy/60 t-sm2 mt-1">{fmt.tagline}</p>
              )}
            </div>
            <button onClick={onClose} className="text-navy/40 hover:text-navy transition-colors mt-1 flex-shrink-0">
              <X size={22} />
            </button>
          </div>

          {fmt.description && (
            <p className="text-navy/80 t-base leading-relaxed mb-6">{fmt.description}</p>
          )}

          {fmt.when_to_use && (
            <div className="mb-6">
              <h3 className="font-grotesk font-bold text-navy t-sm uppercase tracking-[0.1em] mb-2">When to use</h3>
              <p className="text-navy/75 t-sm2 leading-relaxed border-l-2 border-crimson pl-4">{fmt.when_to_use}</p>
            </div>
          )}

          {fmt.what_you_get.length > 0 && (
            <div className="mb-6">
              <h3 className="font-grotesk font-bold text-navy t-sm uppercase tracking-[0.1em] mb-3">What you get</h3>
              <ul className="flex flex-col gap-2">
                {fmt.what_you_get.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-navy/80 t-sm2">
                    <ChevronRight size={14} className="text-crimson flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a href="#request-sample" onClick={onClose}
            className="inline-flex items-center bg-crimson text-white px-5 py-2.5 border-2 border-crimson font-grotesk font-bold t-sm uppercase tracking-[0.06em] shadow-[4px_4px_0_#0F2A5F] md:shadow-[6px_6px_0_#0F2A5F] hover:shadow-[6px_6px_0_#0F2A5F] transition-all">
            Request a sample →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Content() {
  const work = caseStudies
    .filter((c) => c.uses?.includes('content') && (c.status === 'live' || site.showPlaceholders))
    .slice(0, 3);
  const formats: ContentFormat[] = formatsData.filter((f) => f.published);
  const [activeFormat, setActiveFormat] = useState<ContentFormat | null>(null);

  return (
    <>
      {activeFormat && (
        <FormatModal fmt={activeFormat} onClose={() => setActiveFormat(null)} />
      )}

      <PageHero
        eyebrow="CONTENT & DELIVERY"
        title={<>Content your frontline will actually use. Delivered by our own trainers.</>}
        subtitle="Custom learning content in every format, and a trainer network across 20+ Indian cities to take it to the floor."
        ctaLabel="See the formats ↓"
        ctaTo="#content-design"
        image="/hero-content.webp"
        imageAlt="Learning content formats"
        accent="crimson"
      />

      {/* 01 — Content */}
      <section id="content-design" className="bg-white py-12 md:py-16">
        <div className="wrap">
          <span className="eyebrow">01 / CONTENT</span>
          <h2 className="font-grotesk font-bold text-navy t-2xl leading-[1.15] mt-2 mb-2">What we make</h2>
          <p className="text-navy/70 t-base mb-6 md:mb-8">Role-specific, contextual, easy to consume and easy to apply. Click a format to see a sample.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {formats.map((fmt, i) => (
              <Reveal key={fmt.slug} delay={i * 50}>
                <button
                  onClick={() => setActiveFormat(fmt)}
                  className={`${fmt.tile_bg} ${fmt.tile_text} border-2 border-navy aspect-[1.4/1] p-3 md:p-4 flex flex-col justify-between w-full text-left group hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(15,42,95,0.3)] transition-all`}
                >
                  <span className="font-grotesk font-bold t-sm opacity-70">{fmt.number}</span>
                  <BrandIcon
                    name={fmt.icon}
                    accent={fmt.tile_bg === 'bg-crimson' || fmt.tile_bg === 'bg-moss' || fmt.tile_bg === 'bg-navy' ? 'sky' : 'crimson'}
                    className="w-7 h-7 md:w-10 md:h-10"
                  />
                  <div className="flex items-end justify-between">
                    <span className="font-grotesk font-bold t-lg">{fmt.name}</span>
                    {fmt.video_url && <Play size={14} className="opacity-50 flex-shrink-0 mb-0.5" />}
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 md:mt-8 border-2 border-navy/15 bg-paper p-4 md:p-5 grid md:grid-cols-[auto_1fr_1fr_1fr] gap-4 md:gap-6 md:items-center">
            <span className="font-grotesk font-bold t-xs uppercase tracking-[0.12em] text-navy/50">How we build it</span>
            {smeSteps.map((step, i) => (
              <div key={step.title} className="flex gap-3">
                <span className="font-grotesk font-bold text-crimson t-lg leading-none">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="block font-grotesk font-bold text-navy t-sm2 uppercase tracking-[0.04em]">{step.title}</span>
                  <span className="block text-navy/70 t-sm2 leading-snug mt-0.5">{step.desc}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — Delivery */}
      <section id="content-delivery" className="bg-paper py-12 md:py-16">
        <div className="wrap">
          <span className="eyebrow">02 / DELIVERY</span>
          <h2 className="font-grotesk font-bold text-navy t-2xl leading-[1.15] mt-2 mb-2">How we take it to the floor</h2>
          <p className="text-navy/70 t-base mb-6 md:mb-8">Our own trainers, across 20+ cities, in whichever mode fits the audience.</p>
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-4 md:gap-5">
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {deliveryFormats.map((f) => (
                <div key={f.title} className="lt-card !p-4 flex gap-3">
                  <BrandIcon name={f.icon} accent="crimson" className="w-8 h-8 shrink-0" />
                  <span>
                    <span className="block font-grotesk font-bold text-navy t-base leading-snug">{f.title}</span>
                    <span className="block text-navy/70 t-sm2 leading-snug mt-1">{f.desc}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-navy text-white border-2 border-navy p-5 md:p-6">
              <span className="font-grotesk font-bold t-xs uppercase tracking-[0.12em] text-sky">Why it runs smoothly</span>
              <ul className="flex flex-col gap-4 mt-4">
                {deliveryEdge.map((e) => (
                  <li key={e.title}>
                    <span className="block font-grotesk font-bold t-base">{e.title}</span>
                    <span className="block text-white/75 t-sm2 leading-snug mt-0.5">{e.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {work.length > 0 && (
        <Section eyebrow="IN OUR WORK" title="Where our content is working" tone="white" action={{ label: 'All our work', to: '/work' }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {work.map((c, i) => (
              <CaseStudyCard key={c.slug} c={c} index={i} />
            ))}
          </div>
        </Section>
      )}

      {/* Request a sample */}
      <section id="request-sample" className="bg-paper py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="REQUEST A SAMPLE" />
          <div className="grid md:grid-cols-2 gap-4 md:gap-5 items-start">
            <Reveal>
              <p className="text-navy/80 t-lg leading-relaxed max-w-[460px]">
                Send us a note. We'll share a format sample, program details, or a delivery quote, whichever you need.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <CTAForm fields={formFields} submitLabel="Send →" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
