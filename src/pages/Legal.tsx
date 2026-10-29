import Placeholder from '@/components/Placeholder';
import { site } from '@/content/site';

// /privacy and /terms. Replace the placeholder with the final text before go-live.
export default function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const title = kind === 'privacy' ? 'Privacy policy' : 'Terms of use';
  return (
    <section className="wrap py-12 md:py-16 max-w-[820px]">
      <span className="eyebrow">LEGAL</span>
      <h1 className="font-grotesk font-bold text-navy t-4xl leading-[1.05] mt-3 mb-6">{title}</h1>
      <Placeholder
        label={`${title} text`}
        hint={
          kind === 'privacy'
            ? 'What the forms collect, why, how long it is kept, and who to contact. Should reflect India’s DPDP Act.'
            : 'Website terms of use.'
        }
        tall
      />
      <p className="text-navy/70 t-sm2 mt-6">
        Questions: <a href={`mailto:${site.contact.email}`} className="underline">{site.contact.email}</a>
      </p>
    </section>
  );
}
