// "Why clients come to us": the five cards on the home page.
// DRAFT copy based on the earlier Solutions and Consulting pages. Replace with your own wording.
//
// "how" = the chips under each card. Each chip links to one of the three ways we execute:
//   pillar 'content'   -> Content & Delivery page
//   pillar 'platforms' -> Platforms (or one platform page)
//   pillar 'programs'  -> Programs (or one program page)
//   pillar 'talk'      -> Contact / Book a call
// "work" = the slug of a case study in case-studies.ts shown as "See it in action".
import type { Reason } from '@/lib/types';

export const reasons: Reason[] = [
  {
    slug: 'launch-training',
    title: 'Launch & product training',
    short: 'Get every showroom launch-ready before the first customer walks in.',
    icon: 'launch',
    points: [
      'Launch kits: product guides, competition tools and short videos',
      'Trainer-led cascade across 20+ cities, plus mobile modules for everyone else',
      'Outlet-by-outlet readiness checks before launch day',
    ],
    how: [
      { pillar: 'content', label: 'Launch content & trainers', to: '/content' },
      { pillar: 'platforms', label: 'SmartContent', to: '/platforms/smartcontent' },
      { pillar: 'platforms', label: 'Learning360', to: '/platforms/learning360' },
    ],
    work: 'tata-ev-launch',
    published: true,
  },
  {
    slug: 'dealer-capability',
    title: 'Dealer & channel capability',
    short: 'Keep primary and secondary networks learning all year, not twice a year.',
    icon: 'network',
    points: [
      'A mobile-first, multilingual learning platform for the whole network',
      'Fresh, role-specific content on a publishing schedule',
      'Role-plays, simulations and AI evaluation that lift conversion',
    ],
    how: [
      { pillar: 'platforms', label: 'Learning360', to: '/platforms/learning360' },
      { pillar: 'content', label: 'Ongoing content', to: '/content' },
      { pillar: 'programs', label: 'Sales programs', to: '/programs' },
    ],
    work: 'tvs-learning360',
    published: true,
  },
  {
    slug: 'frontline-onboarding',
    title: 'Frontline hiring & onboarding',
    short: 'Hire faster and get new joiners productive in their first 30 days.',
    icon: 'onboarding',
    points: [
      'Screen and rank candidates at volume',
      'Day-by-day first-30-days journeys with manager sign-offs',
      'Brand inductions and OJT kits built around the customer journey',
    ],
    how: [
      { pillar: 'platforms', label: 'SmartList', to: '/platforms/smartlist' },
      { pillar: 'platforms', label: 'OnBoardBox', to: '/platforms/onboardbox' },
      { pillar: 'content', label: 'Induction & OJT kits', to: '/content' },
    ],
    work: 'irth-induction',
    published: true,
  },
  {
    slug: 'tech-tools',
    title: 'Technology for L&D',
    short: 'Run training at scale without spreadsheets, and see what is working.',
    icon: 'tech',
    points: [
      'Our own platforms for learning, training management, hiring and onboarding',
      'Set up, branded and running in weeks, with adoption support',
      'Custom builds when the market does not sell what you need',
    ],
    how: [
      { pillar: 'platforms', label: 'All platforms', to: '/platforms' },
      { pillar: 'platforms', label: 'Paperless Training', to: '/platforms/paperless-training' },
    ],
    work: 'tata-roleplay-evaluator',
    published: true,
  },
  {
    slug: 'ld-strategy',
    title: 'L&D strategy',
    short: 'A plan that connects learning to business numbers, from people who have run L&D.',
    icon: 'strategy',
    points: [
      'L&D strategy and roadmap tied to business goals',
      'Role-based learning pathways and the metrics to track them',
      'Tech architecture, platform selection, rollout and adoption',
    ],
    how: [
      { pillar: 'talk', label: 'Talk to a founder', to: '/contact' },
      { pillar: 'platforms', label: 'Platforms', to: '/platforms' },
    ],
    work: 'titan-competency-survey',
    published: true,
  },
];
