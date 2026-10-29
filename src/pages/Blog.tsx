import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/SectionHeader';
import CTAForm from '@/components/CTAForm';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
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

const categories = ['All', 'L&D Tech', 'Retail L&D', 'Content', 'Case Studies'];

export default function Blog() {
  const posts: BlogPost[] = blogPosts.filter((p) => p.published);
  const loading = false;
  const [activeCat, setActiveCat] = useState('All');

  const filtered = activeCat === 'All' ? posts : posts.filter((p) => p.category === activeCat);
  const featured = filtered[0];
  const grid = filtered.slice(1);

  if (loading) {
    return (
      <>
        <PageHero
          eyebrow="INSIGHTS"
          title={<>Notes from the field.</>}
          subtitle="Short reads on L&D strategy, retail training, learning tech, and what we learn on the ground."
          image="/hero-blog.webp"
          imageAlt="Blog notes from the field"
          accent="sky"
        />
        <section className="wrap py-20">
          <div className="flex flex-col gap-4 max-w-[800px]">
            {[1, 2, 3].map((i) => <div key={i} className="h-8 bg-navy/10 animate-pulse" />)}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="INSIGHTS"
        title={<>Notes from the field.</>}
        subtitle="Short reads on L&D strategy, retail training, learning tech, and what we learn on the ground."
        image="/hero-blog.webp"
        imageAlt="Blog notes from the field"
        accent="sky"
      />

      {/* Featured post */}
      {featured && (
        <section className="bg-white py-12 md:py-16">
          <div className="wrap">
            <SectionHeader eyebrow="FEATURED" />
            <Reveal>
              <Link
                to={`/insights/${featured.slug}`}
                className="block bg-white border-2 border-navy shadow-[4px_4px_0_#D8315B] md:shadow-[6px_6px_0_#D8315B] p-6 md:p-10 transition-transform hover:-translate-y-1"
              >
                <div className="grid md:grid-cols-2 gap-4 md:gap-5 items-center">
                  <div className="flex flex-col">
                    <span className="inline-block self-start bg-crimson text-white font-grotesk font-bold uppercase t-xs tracking-[0.06em] px-2.5 py-1 md:px-3 md:py-1.5 rounded-full mb-4 md:mb-5">
                      {featured.category}
                    </span>
                    <h2 className="font-grotesk font-bold text-navy t-2xl leading-tight mb-3 md:mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-navy/80 t-lg leading-relaxed mb-4 md:mb-6">
                      {featured.excerpt}
                    </p>
                    <div className="text-navy/70 t-sm uppercase tracking-[0.08em] font-grotesk font-semibold">
                      {featured.read_time} · By {featured.author} · {featured.published_at ?? ''}
                    </div>
                  </div>
                  <div className="aspect-[16/10] border-2 border-navy overflow-hidden">
                    <img src={featured.hero_image_url || '/hero-blog.webp'} alt={featured.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Category filter + grid */}
      <section className="bg-paper py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="MORE NOTES" />
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`border-2 border-navy px-3 md:px-4 py-1.5 md:py-2 font-grotesk font-bold t-sm uppercase tracking-[0.06em] rounded-full transition-all ${
                  activeCat === cat
                    ? 'bg-navy text-white shadow-[3px_3px_0_#D8315B]'
                    : 'bg-white text-navy hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#0F2A5F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {grid.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {grid.map((post, i) => (
                <Reveal key={post.slug} delay={i * 60}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="text-navy/60 t-base">No more posts in this category yet.</p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-navy py-12 md:py-16">
        <div className="wrap">
          <Reveal>
            <div className="max-w-[560px]">
              <h3 className="font-grotesk font-bold text-white t-2xl mb-5 md:mb-6">
                Get useful L&amp;D notes when we publish. No spam.
              </h3>
              <CTAForm
                fields={[
                  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'Your email' },
                ]}
                submitLabel="Subscribe →"
                successMessage="Thanks for subscribing!"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
