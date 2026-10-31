import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="wrap py-16 md:py-24">
      <div className="max-w-[640px]">
        <span className="eyebrow">404</span>
        <h1 className="font-grotesk font-bold text-navy t-4xl leading-[1.05] mt-3 mb-4">This page doesn't exist.</h1>
        <p className="text-navy/80 t-lg leading-relaxed mb-8">
          The link may be old or mistyped. Try one of these instead.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/" className="btn-primary">Home →</Link>
          <Link to="/content" className="btn-secondary">Content &amp; Delivery</Link>
          <Link to="/platforms" className="btn-secondary">Platforms</Link>
          <Link to="/work" className="btn-secondary">Our Work</Link>
          <Link to="/contact" className="btn-secondary">Contact</Link>
        </div>
      </div>
    </section>
  );
}
