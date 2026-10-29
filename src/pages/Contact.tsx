import { CalendarDays, Mail, MapPin, MessageCircle, Phone, Users } from 'lucide-react';
import CTAForm from '@/components/CTAForm';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import Placeholder from '@/components/Placeholder';
import { site } from '@/content/site';

const fields = [
  { name: 'name', label: 'Name', type: 'text' as const, required: true, placeholder: 'Name*' },
  { name: 'email', label: 'Work email', type: 'email' as const, required: true, placeholder: 'Work email*' },
  { name: 'company', label: 'Company', type: 'text' as const, placeholder: 'Company' },
  { name: 'message', label: 'Message', type: 'textarea' as const, required: true, placeholder: "What are you trying to change?*" },
  {
    name: 'inquiry_type',
    label: 'What are you looking for?',
    type: 'radio' as const,
    options: [
      { label: 'A solution for a business problem', value: 'solution' },
      { label: 'Platform demo', value: 'platform_demo' },
      { label: 'A program for my team', value: 'program' },
      { label: 'Just a conversation', value: 'conversation' },
    ],
  },
];

export default function Contact() {
  const c = site.contact;
  const wa = c.whatsapp.replace(/[^0-9]/g, '');
  const ways = [
    { icon: Mail, label: 'Email', value: c.email, href: `mailto:${c.email}` },
    ...(c.phone ? [{ icon: Phone, label: 'Phone', value: c.phone, href: `tel:${c.phone.replace(/\s/g, '')}` }] : []),
    ...(wa ? [{ icon: MessageCircle, label: 'WhatsApp', value: 'Message us', href: `https://wa.me/${wa}` }] : []),
    ...(c.linkedin ? [{ icon: Users, label: 'LinkedIn', value: 'Follow LearnTech', href: c.linkedin }] : []),
    { icon: MapPin, label: 'Office', value: c.address, href: '' },
  ];

  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title={<>Let's talk.</>}
        subtitle="Book a 30-minute call, or tell us what you are trying to change. We reply within 1 working day."
        ctaLabel="Send a message ↓"
        ctaTo="#form"
        image="/hero-contact.webp"
        imageAlt="Contact LearnTech"
        accent="crimson"
      />

      <section id="form" className="py-12 md:py-16">
        <div className="wrap grid md:grid-cols-[1.2fr_1fr] gap-6 md:gap-8 items-start">
          <Reveal>
            <div className="lt-card shadow-[4px_4px_0_#D8315B] md:shadow-[6px_6px_0_#D8315B]">
              <h2 className="font-grotesk font-bold text-navy t-2xl mb-5">Send us a note</h2>
              <CTAForm fields={fields} submitLabel="Send →" />
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal delay={80}>
              <div className="bg-navy border-2 border-navy p-5 md:p-6">
                <CalendarDays size={26} className="text-sky mb-3" />
                <h3 className="font-grotesk font-bold text-white t-xl mb-1.5">Prefer to talk?</h3>
                <p className="text-white/75 t-sm2 mb-5">Pick a 30-minute slot that suits you. No slide deck.</p>
                {c.bookingUrl ? (
                  <a href={c.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-nav-cta">
                    Book a 30-min call →
                  </a>
                ) : (
                  <Placeholder label="Booking link" hint="Calendar booking page URL in site.ts (bookingUrl)" className="!bg-white" />
                )}
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="lt-card">
                <ul className="flex flex-col gap-4">
                  {ways.map((w) => {
                    const Icon = w.icon;
                    const body = (
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 border-2 border-navy flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-navy" />
                        </span>
                        <span>
                          <span className="block font-grotesk font-bold t-xs uppercase tracking-[0.1em] text-navy/50">{w.label}</span>
                          <span className="block text-navy t-sm2 break-all">{w.value}</span>
                        </span>
                      </div>
                    );
                    return (
                      <li key={w.label}>
                        {w.href ? (
                          <a href={w.href} target={w.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            {body}
                          </a>
                        ) : (
                          body
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
