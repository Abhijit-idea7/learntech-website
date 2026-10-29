import { Link } from 'react-router-dom';
import { site } from '@/content/site';
import { solutions } from '@/content/solutions';
import { platforms } from '@/content/platforms';
import { blogPosts } from '@/content/blog-posts';

const showInsights = blogPosts.filter((p) => p.published).length >= site.insightsMinPostsForNav;

const company = [
  { label: 'Our Work', to: '/work' },
  { label: 'Programs', to: '/programs' },
  { label: 'Consulting', to: '/consulting' },
  { label: 'Content & delivery', to: '/content' },
  ...(showInsights ? [{ label: 'Insights', to: '/insights' }] : []),
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function Col({ heading, links }: { heading: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="font-grotesk font-bold t-sm uppercase tracking-[0.1em] text-white mb-4">{heading}</h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link to={l.to} className="text-white/70 t-sm2 hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const c = site.contact;
  return (
    <footer className="bg-navy text-white">
      <div className="wrap py-12 md:py-16 grid grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr] gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="font-grotesk font-bold t-lg mb-3">
            Learn<span className="text-crimson">Tech</span> Consulting
          </div>
          <p className="text-white/70 t-sm2 leading-relaxed max-w-[260px]">
            L&amp;D for the frontline. Anchored in automotive retail, built for any business whose people face the customer.
          </p>
        </div>

        <Col heading="Solutions" links={solutions.filter((s) => s.published).map((s) => ({ label: s.title, to: `/solutions/${s.slug}` }))} />
        <Col heading="Platforms" links={platforms.filter((p) => p.published).map((p) => ({ label: p.name, to: `/platforms/${p.slug}` }))} />
        <Col heading="Company" links={company} />

        <div>
          <h4 className="font-grotesk font-bold t-sm uppercase tracking-[0.1em] text-white mb-4">Contact</h4>
          <ul className="flex flex-col gap-2.5 text-white/70 t-sm2">
            <li><a href={`mailto:${c.email}`} className="hover:text-white transition-colors break-all">{c.email}</a></li>
            {c.phone && <li><a href={`tel:${c.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{c.phone}</a></li>}
            {c.linkedin && <li><a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>}
            <li>{c.city}</li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-sky">
        <div className="wrap py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-white/60 t-sm">© {new Date().getFullYear()} {c.company}</span>
          <span className="text-white/60 t-sm flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
