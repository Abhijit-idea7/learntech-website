import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import CTABand from '@/components/CTABand';
import BrandIcon from '@/components/BrandIcon';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import ClientStrip from '@/components/ClientStrip';
import { StatsBand } from '@/components/Blocks';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const founders = [
  {
    name: 'Abhijit Joshi',
    role: 'FOUNDER',
    oneLiner: '30 years in automotive retail. Built one training firm to acquisition. Now building the next.',
    image: '/assets/founders/abhijit.png',
    bio: "Abhijit has 30 years in Automotive Retail, spanning sales, after-sales, and marketing. Started as an automobile engineer and worked with leading automotive companies before starting out on his own. 15 years in automotive training and consulting. Founded a leading training and consulting firm devoted to automotive retail; that firm was acquired by a larger consulting company four years ago. After a short sabbatical, he's launched LearnTech. This one is a partner that uses technology to drive business performance, rather than another technology provider.",
    shadow: 'shadow-hard-crimson card-lift',
  },
  {
    name: 'Bhaskar Bose',
    role: 'FOUNDER',
    oneLiner: "15 years running dealer L&D at scale for India's biggest auto OEMs.",
    image: '/assets/founders/bhaskar.png',
    bio: "Bhaskar brings 15+ years of experience. He began his career as a Management Trainee at a large auto OEM, then moved to an Automotive Retail Consulting and Training firm. Held significant roles including Country Head of Operations and Head of Solutions. Ran large-scale consulting and training services for major auto OEMs. Drove large-scale digital transformation and implemented learning technology projects for OEM retail partners. He runs LearnTech from Vadodara.",
    shadow: 'shadow-hard-sky card-lift',
  },
  {
    name: 'Swapnil Patil',
    role: 'FOUNDER',
    oneLiner: '13 years in dealer network transformation. Ran the largest delivery unit at his last firm.',
    image: '/assets/founders/swapnil.jpg',
    bio: "Swapnil brings 13+ years across manufacturing and service industries. Started as a Channel Manager at a leading engineering firm. Managed a global key account at a major automotive ancillary firm. Moved to a top-tier automotive consulting and training company and spent over a decade leading large-scale retail transformation programmes. In leadership roles, he ran the delivery department and grew his business unit into the largest by top-line and profitability.",
    shadow: 'shadow-hard-moss card-lift',
  },
];

const principles = [
  { num: '01', quote: 'Content is fuel. Not the vehicle.', fill: 'bg-crimson', textColor: 'text-white', icon: 'content' as const, accent: 'sky' as const },
  { num: '02', quote: 'Role-specific. Contextual. Easy to consume. Easy to apply.', fill: 'bg-sky', textColor: 'text-navy', icon: 'frameworks' as const, accent: 'crimson' as const },
  { num: '03', quote: 'We activate. What people do differently on Monday.', fill: 'bg-moss', textColor: 'text-white', icon: 'performance' as const, accent: 'crimson' as const },
  { num: '04', quote: 'The platform is 20% of the job. Adoption is the other 80%.', fill: 'bg-navy', textColor: 'text-white', icon: 'platform-delivery' as const, accent: 'sky' as const },
];

function FounderPhoto({ src, alt, name }: { src: string; alt: string; name: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="aspect-square w-full bg-paper border-2 border-navy flex items-center justify-center">
        <span className="font-grotesk font-bold text-navy/40 t-lg text-center px-3">{name}<span className="block t-xs uppercase tracking-[0.12em] text-crimson mt-1">Photo needed</span></span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className="aspect-square w-full object-cover filter grayscale contrast-[1.05] border-2 border-navy"
    />
  );
}

export default function About() {
  const [openFounder, setOpenFounder] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="ABOUT LEARNTECH"
        title={<>Built by people who've <span className="highlight-crimson">run L&amp;D</span> inside the businesses we now serve.</>}
        subtitle="A young agency. 50 years of collective L&D experience behind it. Anchored in automotive retail."
        ctaLabel="Meet the founders →"
        ctaTo="#founders"
        image="/hero-about.webp"
        imageAlt="LearnTech founders"
        accent="crimson"
      />

      {/* Section 2 — Our Story */}
      <section className="bg-white py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="OUR STORY" />
          <div className="max-w-[820px]">
            <Reveal>
              <p className="text-navy/80 t-lg leading-relaxed mb-4 md:mb-5">
                We're a young agency built by automotive retail L&D professionals.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-navy/80 t-lg leading-relaxed mb-4 md:mb-5">
                The agency is new. The team behind it isn't. Decades of experience across top automotive brands in India and Asia, specifically in network performance.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-navy/80 t-lg leading-relaxed">
                Our vision: work with businesses to build industry-tailored L&D that measurably lifts performance at the frontline.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <StatsBand tone="white" />

      {/* Section 3 — Founders */}
      <section id="founders" className="bg-paper py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="FOUNDERS" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 100}>
                <button
                  onClick={() => setOpenFounder(i)}
                  className={`text-left bg-white border-2 border-navy ${f.shadow} p-5 md:p-6 flex flex-col w-full h-full cursor-pointer`}
                >
                  <div className="mb-4 md:mb-5">
                    <FounderPhoto src={f.image} alt={f.name} name={f.name} />
                  </div>
                  <h3 className="font-grotesk font-bold t-xl text-navy mb-1">{f.name}</h3>
                  <span className="font-grotesk font-bold uppercase t-sm tracking-[0.12em] text-crimson mb-3 block">
                    {f.role}
                  </span>
                  <p className="font-grotesk font-semibold t-base leading-[1.35] text-navy mb-5">
                    {f.oneLiner}
                  </p>
                  <span className="font-grotesk font-bold uppercase t-sm tracking-[0.08em] text-navy border-b-2 border-navy self-start pb-1">
                    Read bio
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <Dialog open={openFounder !== null} onOpenChange={(open) => !open && setOpenFounder(null)}>
            <DialogContent className="bg-white border-2 border-navy max-w-[640px]">
              <DialogHeader>
                <DialogTitle className="font-grotesk font-bold text-navy t-2xl">
                  {openFounder !== null ? founders[openFounder].name : ''}
                </DialogTitle>
                <span className="font-grotesk font-bold uppercase t-sm tracking-[0.12em] text-crimson">
                  {openFounder !== null ? founders[openFounder].role : ''}
                </span>
              </DialogHeader>
              {openFounder !== null && (
                <p className="text-navy/80 t-base leading-relaxed">
                  {founders[openFounder].bio}
                </p>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Section 4 — How We Think */}
      <section className="bg-white py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="HOW WE THINK" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <Reveal key={p.num} delay={i * 80}>
                <div className={`${p.fill} ${p.textColor} border-2 border-navy p-5 md:p-6 flex flex-col h-full hover:-translate-y-1 transition-transform`}>
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <BrandIcon name={p.icon} accent={p.accent} className="w-10 h-10 md:w-12 md:h-12" />
                    <span className="font-grotesk font-bold t-2xl opacity-60">{p.num}</span>
                  </div>
                  <p className="font-grotesk t-2xl leading-[1.2]">"{p.quote}"</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClientStrip />

      {/* Section 6 — Where We Are */}
      <section className="bg-white py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="WHERE WE ARE" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Reveal>
              <div className="bg-white border-2 border-navy shadow-[4px_4px_0_#3AA5D4] md:shadow-[6px_6px_0_#3AA5D4] p-5 md:p-6 h-full">
                <h4 className="font-grotesk font-bold t-xl text-navy mb-3 md:mb-4">Vadodara HQ</h4>
                <p className="text-navy/80 t-base leading-relaxed">LearnTech Consulting LLP</p>
                <p className="text-navy/80 t-base leading-relaxed">Vadodara – 391410, Gujarat, India</p>
                <div className="h-3 md:h-4" />
                <p className="text-navy/80 t-base leading-relaxed">bhaskar@learntechconsulting.in</p>
                <p className="text-navy/80 t-base leading-relaxed">+91 91672 10002</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="bg-white border-2 border-navy shadow-[4px_4px_0_#3AA5D4] md:shadow-[6px_6px_0_#3AA5D4] p-5 md:p-6 h-full">
                <h4 className="font-grotesk font-bold t-xl text-navy mb-3 md:mb-4">Trainer network</h4>
                <p className="text-navy/80 t-base leading-relaxed">Delivering training across 20+ Indian cities.</p>
                <div className="h-3 md:h-4" />
                <p className="text-navy/80 t-base leading-relaxed">
                  From Bihar to Tamil Nadu. On-ground, virtual, or hybrid. The delivery model bends to the client.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand heading="Let's talk about your next L&D initiative." />
    </>
  );
}
