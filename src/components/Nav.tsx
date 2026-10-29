import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { site, bookingHref, bookingIsExternal } from '@/content/site';
import { blogPosts } from '@/content/blog-posts';

const showInsights = blogPosts.filter((p) => p.published).length >= site.insightsMinPostsForNav;

const navLinks = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'Platforms', to: '/platforms' },
  { label: 'Programs', to: '/programs' },
  { label: 'Our Work', to: '/work' },
  ...(showInsights ? [{ label: 'Insights', to: '/insights' }] : []),
  { label: 'About', to: '/about' },
];

function CallButton({ className, onClick }: { className: string; onClick?: () => void }) {
  return bookingIsExternal ? (
    <a href={bookingHref} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
      Book a call →
    </a>
  ) : (
    <Link to={bookingHref} className={className} onClick={onClick}>
      Book a call →
    </Link>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper border-b-2 border-navy">
      <div className="wrap flex items-center justify-between gap-4 py-2 md:py-3">
        <Link to="/" className="logo-card shrink-0" aria-label="LearnTech Consulting home">
          <img
            src="/assets/logo/Final_Logo_LearnTech_Consulting.jpg"
            alt="LearnTech Consulting"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-2" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-card ${isActive ? 'nav-card--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <CallButton className="btn-nav-cta" />
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-navy" aria-label="Open menu">
                <Menu size={26} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-paper border-l-2 border-navy w-[280px] p-0">
              <div className="flex items-center justify-between px-6 py-5 border-b-2 border-navy">
                <span className="font-grotesk font-bold text-navy t-lg">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <X size={22} className="text-navy" />
                </button>
              </div>
              <nav className="flex flex-col px-6 py-8 gap-3" aria-label="Mobile">
                <NavLink to="/" end className={({ isActive }) => `nav-card-mobile ${isActive ? 'nav-card-mobile--active' : ''}`} onClick={() => setOpen(false)}>
                  Home
                </NavLink>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => `nav-card-mobile ${isActive ? 'nav-card-mobile--active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="mt-4">
                  <CallButton className="btn-nav-cta" onClick={() => setOpen(false)} />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
