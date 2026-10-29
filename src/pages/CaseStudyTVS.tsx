import SectionHeader from '@/components/SectionHeader';
import CTABand from '@/components/CTABand';
import Reveal from '@/components/Reveal';
import BrandIcon from '@/components/BrandIcon';
import PageHero from '@/components/PageHero';

const clientFields = [
  { label: 'Client', value: 'A large 2-wheeler brand (client name held on request)' },
  {
    label: 'Scope',
    value:
      "L&D platform deployment, content design, adoption programme management, capability building across the brand's secondary retail network (Authorized Dealers / ADs)",
  },
  {
    label: 'Platform deployed',
    value: 'Learning360, LearnTech\u2019s own mobile-first LMS',
  },
  { label: 'Reporting window', value: 'Dec 2024 to March 2026 (16 months of adoption data)' },
];

const whatWeDid = [
  {
    num: '1',
    title: 'Rolled out Learning360 across the AD network.',
    desc: 'Mobile-first LMS. Content in a self-paced library. Personalised recommendations. Daily 3-question challenge. Built-in translation.',
  },
  {
    num: '2',
    title: 'Designed content in-house.',
    desc: 'Nothing off-the-shelf. Short videos, product guides, competition tools, animations, digital OJT kits. All role-specific.',
  },
  {
    num: '3',
    title: 'Ran the platform, not just installed it.',
    desc: 'Nomination flows, publishing schedule, notification cadence, engagement triggers, quality checks.',
  },
  {
    num: '4',
    title: 'Drove adoption through activities.',
    desc: 'Monthly webinars, daily challenge on the home screen, fresh content on a schedule, zone-by-zone reporting.',
  },
];

const metrics = [
  { num: '4,150', label: 'dealers on the platform, up from 1,002' },
  { num: '4.4×', label: 'growth in active dealers, Dec 24 to March 26' },
  { num: '72%', label: 'peak daily challenge participation (unchanged, peak stat)' },
  { num: '34,000+', label: 'minutes of learner time in the peak month' },
  { num: '2,096', label: 'peak unique webinar attendees (unchanged, peak stat)' },
];

const metricBullets = [
  'Network reach grew from 1,002 ADs to 4,150 ADs. Platform scaled with the network without pausing.',
  'Active dealers on Learning360 grew from 543 to 2,400 (4.4×) over 15 months.',
  'Registered learners grew from 978 to 3,500 (3.6×) over the same period.',
  'Larger ADs (25-50 retails/month) crossed the 60% target by early 2026.',
  'Larger ADs (15-25 retails/month) climbed to 55% by January 2026, more than doubling from May.',
  'Monthly webinar sessions went from 14 to a peak of 45.',
  'At peak, 72% of monthly active users completed at least one daily challenge.',
  '34,000+ minutes of learner time on the platform in the peak month, roughly 570 hours of self-directed learning.'
];

const whyItWorked = [
  {
    num: '1',
    title: 'One team, four capabilities.',
    desc: 'Strategy, content, platform, and adoption from the same table. Nothing fell in the gaps.',
  },
  {
    num: '2',
    title: 'Content that respected the audience.',
    desc: "The secondary network doesn\u2019t sit at a desk. Content had to work on the phone in the shop, between customers.",
  },
  {
    num: '3',
    title: 'Adoption treated as a growth problem.',
    desc: 'Treat it like a growth problem. What gets a learner to open the app tomorrow? Build for that.'
  },
];

const rolloutBullets = [
  'Automotive OEMs with dealer and secondary networks',
  'Premium retail brands with a national store footprint',
  "Any business where the frontline is the brand\u2019s face to the customer",
];

export default function CaseStudyTVS() {
  return (
    <>
      <PageHero
        eyebrow="CASE STUDY · A LARGE 2-WHEELER BRAND"
        title={<>Building capability across the secondary retail network with Learning360</>}
        ctaLabel="Talk to us about a similar rollout →"
        ctaTo="/contact"
        image="/hero-casestudy.webp"
        imageAlt="Large 2-wheeler brand case study"
        accent="crimson"
      />

      {/* Section 2 — Client + scope card */}
      <section className="bg-white py-12 md:py-16">
        <div className="wrap">
          <Reveal>
            <div className="bg-paper border-2 border-navy shadow-[4px_4px_0_#3AA5D4] md:shadow-[6px_6px_0_#3AA5D4] p-5 md:p-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                {clientFields.map((f) => (
                  <div key={f.label}>
                    <div className="font-grotesk font-bold uppercase t-sm tracking-[0.08em] text-crimson mb-1">
                      {f.label}
                    </div>
                    <div className="text-navy t-base">{f.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 3 — The problem */}
      <section className="bg-paper py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="THE PROBLEM" />
          <div className="max-w-[800px] flex flex-col gap-4 md:gap-5">
            <Reveal>
              <p className="text-navy/80 t-lg leading-relaxed">
                The brand reaches customers through a large network of Authorized Dealers (ADs). Beyond the primary dealer layer sits the secondary retail network. Thousands of people, distributed across every zone in India, most of them selling and servicing motorcycles a few metres from the customer.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-navy/80 t-lg leading-relaxed">
                What they know moves sales. What they don&apos;t know quietly costs.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-navy/80 t-lg leading-relaxed">
                Traditional dealer training doesn&apos;t scale here. Too many locations, too many roles, too many product and scheme updates in any given quarter. Classroom sessions run twice a year can&apos;t keep up. Print collateral gets lost in the back office. Emails don&apos;t get read.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-navy/80 t-lg leading-relaxed">
                The brand needed capability building that was continuous, measurable, and could reach every zone from Bihar to Tamil Nadu, in the language each learner thought in, on the phone they already carried.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 4 — What we did */}
      <section className="bg-navy py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="WHAT WE DID" />
          <div className="grid gap-4 md:gap-5">
            {whatWeDid.map((b, i) => (
              <Reveal key={b.num} delay={i * 80}>
                <div className="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-6 gap-y-1 items-start bg-white border-2 border-white p-5 md:p-6 h-full">
                  <div className="font-grotesk font-bold text-crimson t-3xl leading-none">
                    {b.num}
                  </div>
                  <div>
                    <h3 className="font-grotesk font-bold text-navy t-xl mb-1 md:mb-2">
                      {b.title}
                    </h3>
                    <p className="text-navy/75 t-base leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — What changed: metrics */}
      <section className="bg-paper py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="WHAT CHANGED · METRICS" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {metrics.map((m, i) => (
              <Reveal key={m.num} delay={i * 60}>
                <div className="bg-crimson border-2 border-navy shadow-[4px_4px_0_#0F2A5F] md:shadow-[6px_6px_0_#0F2A5F] p-5 md:p-6 text-white h-full hover:-translate-y-1 transition-transform">
                  <div className="font-grotesk font-bold t-3xl leading-none mb-1 md:mb-2">
                    {m.num}
                  </div>
                  <div className="t-sm leading-[1.3]">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="flex flex-col gap-2 mt-6 md:mt-8">
              {metricBullets.map((b) => (
                <p key={b} className="text-navy/80 t-base leading-relaxed">
                  • {b}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="bg-sky/20 border-2 border-sky p-5 md:p-6 mt-6 md:mt-8">
              <p className="text-navy t-base italic">
                Diwali is a sales season. Dealers sold, they didn&apos;t study. The
                October dip was expected and short. Adoption reset in the following
                months.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 6 — Why it worked */}
      <section className="bg-white py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="WHY IT WORKED" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {whyItWorked.map((b, i) => (
              <Reveal key={b.num} delay={i * 80}>
                <div className="bg-paper border-2 border-navy p-5 md:p-6 hover:-translate-y-1 transition-transform h-full">
                  <div className="font-grotesk font-bold text-crimson t-3xl mb-1 md:mb-2">
                    {b.num}
                  </div>
                  <h3 className="font-grotesk font-bold text-navy t-lg mb-2 md:mb-3">
                    {b.title}
                  </h3>
                  <p className="text-navy/75 t-sm2 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — What we'd bring to your rollout */}
      <section className="bg-navy py-12 md:py-16">
        <div className="wrap">
          <SectionHeader eyebrow="WHAT WE'D BRING TO YOUR ROLLOUT" />
          <Reveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {rolloutBullets.map((b, i) => (
                <div key={b} className="bg-white border-2 border-white p-5 md:p-6 flex flex-col h-full">
                  <BrandIcon name={i === 0 ? 'platform-delivery' : i === 1 ? 'frameworks' : 'performance'} accent={i === 0 ? 'crimson' : i === 1 ? 'sky' : 'crimson'} className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
                  <p className="text-navy t-base leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand heading="Talk to us about your network capability rollout." />
    </>
  );
}
