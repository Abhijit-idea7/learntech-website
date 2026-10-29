import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import CTAForm from '@/components/CTAForm';
import BrandIcon from '@/components/BrandIcon';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import { ProgramCard } from '@/components/ProgramCard';
import { programs as programsData } from '@/content/programs';
import { contentFormats as formatsData } from '@/content/content-formats';
import type { Program, ContentFormat } from '@/lib/types';
import { X, Play, ChevronRight } from 'lucide-react';

const whatWeOffer = [
  {
    title: 'Content Design',
    icon: 'content',
    accent: 'crimson' as const,
    desc: 'Custom content in every L&D format.',
    cta: 'See formats →',
    href: '#content-design',
    shadow: 'shadow-hard-crimson card-lift',
  },
  {
    title: 'Content Delivery',
    icon: 'platform-delivery',
    accent: 'sky' as const,
    desc: 'Trainers in 20+ Indian cities. ILT, OJT, virtual, digital.',
    cta: 'See coverage →',
    href: '#content-delivery',
    shadow: 'shadow-hard-sky card-lift',
  },
  {
    title: 'Program Library',
    icon: 'frameworks',
    accent: 'moss' as const,
    desc: 'Nine programs ready to run. Book them off the shelf.',
    cta: 'Browse →',
    href: '#program-library',
    shadow: 'shadow-hard-moss card-lift',
  },
];

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
  const programs: Program[] = programsData.filter((p) => p.published);
  const formats: ContentFormat[] = formatsData.filter((f) => f.published);
  const [activeFormat, setActiveFormat] = useState<ContentFormat | null>(null);

  return (
    <>
      {activeFormat && (
        <FormatModal fmt={activeFormat} onClose={() => setActiveFormat(null)} />
      )}

      <PageHero
        eyebrow="CONTENT"
        title={<>Learning content, designed and delivered.</>}
        subtitle="Design in every format. Delivery through trainers in 20+ cities. Nine ready-to-deploy programs in the library."
        ctaLabel="See content samples →"
        ctaTo="#content-design"
        image="/hero-content.webp"
        imageAlt="Learning content formats"
        accent="sky"
      />

      {/* Section 2 — What we offer */}
      <section className="bg-white py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="WHAT WE OFFER" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {whatWeOffer.map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <div className={`bg-paper border-2 border-navy ${card.shadow} p-5 md:p-6 flex flex-col h-full`}>
                  <BrandIcon name={card.icon} accent={card.accent} className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
                  <h3 className="font-grotesk font-bold text-navy t-xl uppercase mb-2 md:mb-3">{card.title}</h3>
                  <p className="text-navy/80 t-base leading-relaxed mb-4 md:mb-5 flex-1">{card.desc}</p>
                  <a href={card.href} className="font-grotesk font-bold text-navy t-sm2 uppercase tracking-[0.06em] hover:text-crimson transition-colors">
                    {card.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Content Design */}
      <section id="content-design" className="bg-paper py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="01 / CONTENT DESIGN" />
          <p className="text-navy/60 t-sm2 mb-4 md:mb-6">Click a format to see a sample.</p>
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
          <Reveal delay={200}>
            <blockquote className="mt-6 md:mt-8 border-l-[4px] border-crimson pl-4 md:pl-6 max-w-[720px]">
              <p className="font-grotesk font-semibold text-navy t-2xl leading-snug">
                "Role-specific. Contextual. Easy to consume. Easy to apply."
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Section 4 — Content Delivery */}
      <section id="content-delivery" className="bg-white py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="02 / CONTENT DELIVERY" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-8 md:mb-12">
            {deliveryFormats.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="border-2 border-navy bg-paper p-4 md:p-5 flex flex-col h-full hover:-translate-y-1 transition-transform">
                  <BrandIcon name={f.icon} accent="crimson" className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3" />
                  <h4 className="font-grotesk font-bold text-navy t-lg mb-1 md:mb-2">{f.title}</h4>
                  <p className="text-navy/75 t-sm2 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <h3 className="font-grotesk font-bold text-navy t-xl uppercase mb-3 md:mb-4">Delivery Edge</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-8 md:mb-12">
            {deliveryEdge.map((e, i) => (
              <Reveal key={e.title} delay={i * 80}>
                <div className="border-2 border-navy bg-paper p-5 md:p-6 flex flex-col h-full hover:-translate-y-1 transition-transform">
                  <BrandIcon name={e.icon} accent="sky" className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
                  <h4 className="font-grotesk font-bold text-navy t-lg mb-2 md:mb-3">{e.title}</h4>
                  <p className="text-navy/75 t-sm2 leading-relaxed">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Program Library */}
      <section id="program-library" className="bg-paper py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="03 / PROGRAM LIBRARY" />
          <p className="text-navy/70 t-sm2 -mt-3 mb-5">Three of our {programs.length} ready-to-run programs. <Link to="/programs" className="lt-link ml-1">See the full library →</Link></p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {programs.slice(0, 3).map((program, i) => (
              <Reveal key={program.slug} delay={i * 60}>
                <ProgramCard program={program} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — How we work with SMEs */}
      <section className="bg-navy py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="HOW WE WORK WITH SMES" />
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            {smeSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="bg-white border-2 border-white p-5 md:p-6 flex flex-col h-full">
                  <BrandIcon name={step.icon} accent="moss" className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
                  <div className="font-grotesk font-bold text-crimson t-3xl leading-none mb-3 md:mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h4 className="font-grotesk font-bold text-navy t-lg uppercase mb-2 md:mb-3">{step.title}</h4>
                  <p className="text-navy/75 t-sm2 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Request a sample */}
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
