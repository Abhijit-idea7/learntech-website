import { useParams, Link } from 'react-router-dom';
import SectionHeader from '@/components/SectionHeader';
import Reveal from '@/components/Reveal';
import { blogPosts } from '@/content/blog-posts';
import type { BlogPost } from '@/lib/types';

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/insights/${post.slug}`}
      className="group card-lift bg-white border-2 border-navy shadow-[4px_4px_0_#0F2A5F] md:shadow-[6px_6px_0_#0F2A5F] p-5 md:p-6 flex flex-col h-full"
    >
      <span className="inline-block self-start bg-crimson text-white font-grotesk font-bold uppercase t-xs tracking-[0.06em] px-2.5 py-1 md:px-3 md:py-1.5 rounded-full mb-3 md:mb-4">
        {post.category}
      </span>
      <h4 className="font-grotesk font-bold text-navy t-lg mb-2 md:mb-3 leading-tight">{post.title}</h4>
      <p className="text-navy/70 t-sm2 leading-relaxed mb-3 md:mb-4 flex-1">{post.excerpt}</p>
      <div className="text-navy/70 t-sm uppercase tracking-[0.08em] font-grotesk font-semibold">
        {post.read_time} · By {post.author}
      </div>
    </Link>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const published = blogPosts.filter((p) => p.published);
  const post = published.find((p) => p.slug === slug) ?? null;
  const related = published.filter((p) => p.slug !== slug).slice(0, 3);
  const loading = false;
  const notFound = !post;

  if (loading) {
    return (
      <section className="wrap py-20">
        <div className="flex flex-col gap-4 max-w-[800px]">
          {[1, 2, 3].map((i) => <div key={i} className="h-8 bg-navy/10 animate-pulse" />)}
        </div>
      </section>
    );
  }

  if (notFound || !post) {
    return (
      <section className="wrap py-12 md:py-16">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="font-grotesk font-bold text-navy t-3xl mb-6">Post not found</h1>
          <Link to="/insights" className="btn-primary">Back to insights →</Link>
        </div>
      </section>
    );
  }

  return (
    <article>
      {/* Hero */}
      <section className="bg-paper relative overflow-hidden">
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1260 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <g className="hero-backdrop-lines" stroke="#0F2A5F" strokeWidth="2" fill="none" opacity="0.04">
            <path d="M0 120 Q315 60 630 120 T1260 120" />
            <path d="M0 200 Q315 260 630 200 T1260 200" />
            <path d="M0 320 Q315 240 630 320 T1260 320" />
            <path d="M0 440 Q315 520 630 440 T1260 440" />
          </g>
        </svg>
        <div className="wrap py-12 md:py-16 relative z-10">
          <div className="max-w-[800px]">
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-5 md:mb-6">
              <span className="inline-block bg-crimson text-white font-grotesk font-bold uppercase t-xs tracking-[0.06em] px-2.5 py-1 md:px-3 md:py-1.5 rounded-full">
                {post.category}
              </span>
              <span className="text-navy/60 t-sm uppercase tracking-[0.08em] font-grotesk font-semibold">
                {post.published_at
                  ? new Date(post.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                  : ''} · {post.read_time}
              </span>
            </div>
            <h1 className="font-grotesk font-bold text-navy t-4xl leading-[1.05] mb-6 md:mb-8">
              {post.title}
            </h1>
            <div className="aspect-[16/8] border-2 border-navy shadow-[4px_4px_0_#D8315B] md:shadow-[6px_6px_0_#D8315B] overflow-hidden">
              <img
                src={post.hero_image_url || '/hero-blog.webp'}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 md:py-16">
        <div className="wrap max-w-[800px]">
          <Reveal>
            <div className="text-navy/80 t-lg leading-[1.7] flex flex-col gap-4 md:gap-5">
              <p className="t-lg text-navy font-medium leading-relaxed">{post.excerpt}</p>
              {post.body_paragraphs && post.body_paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          {/* Author byline */}
          <div className="mt-10 md:mt-12 pt-8 border-t-2 border-navy">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-navy border-2 border-navy flex items-center justify-center text-white font-grotesk font-bold t-lg">
                {post.author.split(' ').map((n: string) => n[0]).join('')}
              </div>
              <div>
                <div className="font-grotesk font-bold text-navy t-lg">{post.author}</div>
                <div className="text-navy/60 t-sm2">LearnTech Consulting</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-12 bg-navy border-2 border-navy p-5 md:p-6 text-center">
            <p className="font-grotesk font-bold text-white t-xl mb-5 md:mb-6">
              If this is a problem you're solving, talk to us.
            </p>
            <Link to="/contact" className="btn-primary">Talk to us →</Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-paper py-12 md:py-16">
          <div className="wrap">
            <SectionHeader eyebrow="RELATED POSTS" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
