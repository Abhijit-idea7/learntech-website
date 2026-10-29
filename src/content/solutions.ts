// Solutions: the problems buyers come to us with. Each one gets a page at /solutions/<slug>.
// DRAFT copy written from the existing site. Replace with your own wording.
// "includes" pulls cards from the other content files by slug, so the page updates itself.
import type { Solution } from '@/lib/types';

export const solutions: Solution[] = [
  {
    slug: 'launch-training',
    title: 'Product launch training',
    short: 'Get every showroom launch-ready before the first customer walks in.',
    intro:
      'New model, new variant, new category. We make sure every salesperson and service advisor can explain it, demo it and handle the competition questions from day one.',
    icon: 'launch',
    hero_image: '/hero-solution-launch.webp',
    challenges: [
      'Launch dates are fixed, but the network is spread across hundreds of locations.',
      'Product training reaches managers, then gets diluted on the way to the floor.',
      'Competition questions come up on day one and the team has no answers ready.',
      'Nobody can tell which outlets are actually launch-ready.',
    ],
    approach: [
      { title: 'Launch kit', desc: 'Product guides, competition tools, short videos and a pitch built around the customer.' },
      { title: 'Cascade', desc: 'Trainer-led sessions across 20+ cities, plus mobile modules for everyone who cannot attend.' },
      { title: 'Readiness check', desc: 'Quizzes and role-plays that show, outlet by outlet, who is ready to sell.' },
    ],
    includes: {
      formats: ['product-guides', 'competition-tools', 'videos', 'ilt'],
      platforms: ['learning360', 'reelchamp'],
      programs: [],
    },
    work: ['tata-ev-launch'],
    published: true,
  },
  {
    slug: 'dealer-capability',
    title: 'Dealer & channel capability',
    short: 'Continuous capability building across primary and secondary networks.',
    intro:
      'The people closest to your customer usually do not work for you. We build learning that reaches them on their phone, in their language, and keeps them coming back.',
    icon: 'network',
    hero_image: '/hero-solution-dealer.webp',
    challenges: [
      'Twice-a-year classroom sessions cannot keep up with product and scheme changes.',
      'Secondary-network staff are not your employees and have ten other priorities.',
      'You have an LMS, but nobody in the network uses it.',
      'There is no reliable view of who has learnt what, by zone or outlet.',
    ],
    approach: [
      { title: 'Platform', desc: 'Learning360 rolled out to the whole network, mobile-first and multilingual.' },
      { title: 'Content engine', desc: 'Fresh, role-specific content on a publishing schedule, not a one-time upload.' },
      { title: 'Adoption programme', desc: 'Daily challenges, webinars, nudges and zone-by-zone reporting.' },
    ],
    includes: {
      platforms: ['learning360', 'paperless-training'],
      formats: ['mobile-micro', 'videos', 'elearning'],
      consulting: ['implementation'],
    },
    work: ['tvs-learning360'],
    published: true,
  },
  {
    slug: 'frontline-onboarding',
    title: 'Frontline onboarding',
    short: 'Hire faster and get new joiners productive in their first 30 days.',
    intro:
      'High attrition means you are always onboarding. We make hiring and the first month predictable, so new people reach the floor confident instead of overwhelmed.',
    icon: 'onboarding',
    hero_image: '/hero-solution-onboarding.webp',
    challenges: [
      'High-volume hiring with no consistent way to assess candidates.',
      'New joiners shadow whoever is free and pick up habits, good and bad.',
      'Induction is a slide deck, not an experience of the brand.',
      'Managers have no time to run structured on-the-job training.',
    ],
    approach: [
      { title: 'Hire right', desc: 'SmartList assessments to screen and rank candidates at volume.' },
      { title: 'First 30 days', desc: 'OnBoardBox journeys with day-by-day tasks, checklists and manager sign-offs.' },
      { title: 'Induction that sticks', desc: 'Brand immersion workshops and OJT kits built around the customer journey.' },
    ],
    includes: {
      platforms: ['smartlist', 'onboardbox'],
      formats: ['ojt-kits', 'ilt'],
    },
    work: ['irth-induction'],
    published: true,
  },
  {
    slug: 'sales-excellence',
    title: 'Sales & service excellence',
    short: 'Sharper conversations at the counter, measured in conversion.',
    intro:
      'Most sales training is forgotten by Monday. We build practice into the job with role-plays, simulations and AI-assisted feedback, and track what changes in conversion.',
    icon: 'sales',
    hero_image: '/hero-solution-salesx.webp',
    challenges: [
      'Footfall is there, but conversion is not.',
      'Objection handling depends on who is on the floor that day.',
      'Training is a one-off event with no follow-through.',
      'Managers cannot coach consistently across outlets.',
    ],
    approach: [
      { title: 'Diagnose', desc: 'Mystery shops, data and floor observation to find where conversations break.' },
      { title: 'Practise', desc: 'Role-play and simulation workshops, plus AI role-play evaluation at scale.' },
      { title: 'Sustain', desc: 'Video skill contests, micro-refreshers and manager coaching guides.' },
    ],
    includes: {
      programs: ['deal-room', 'hit-the-number', 'complaint-desk'],
      platforms: ['reelchamp'],
      formats: ['competition-tools', 'mobile-micro'],
    },
    work: ['tata-roleplay-evaluator'],
    published: true,
  },
  {
    slug: 'ld-strategy-tech',
    title: 'L&D strategy & technology',
    short: 'A plan that connects learning to business numbers, and the tech to run it.',
    intro:
      'For L&D heads who need a strategy, learning pathways and a technology stack that fit the business, from people who have run L&D inside it.',
    icon: 'strategy',
    hero_image: '/hero-solution-ldtech.webp',
    challenges: [
      'L&D runs reactively: requests come in, sessions go out.',
      'Learning pathways are generic, not built around roles.',
      'Too many tools that do not talk to each other.',
      'Leadership asks for impact numbers you cannot produce.',
    ],
    approach: [
      { title: 'Diagnose', desc: 'Understand the business, not just the training brief.' },
      { title: 'Design', desc: 'Strategy, role-based pathways, KPIs and platform architecture.' },
      { title: 'Deploy', desc: 'Roll it out, measure it, adjust in flight.' },
    ],
    includes: {
      consulting: ['l-and-d-strategy', 'learning-pathways', 'tech-architecture', 'implementation'],
    },
    work: ['titan-competency-survey'],
    published: true,
  },
];
