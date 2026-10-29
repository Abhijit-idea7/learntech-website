// "Our Work" case studies. Each one gets a page at /work/<slug> unless "href" points elsewhere.
// status 'draft' = shown only as a "content needed" card while placeholders are on.
// Name a client only where you have permission; otherwise describe them ("A premium jewellery brand").
import type { CaseStudy } from '@/lib/types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'tvs-learning360',
    client: 'A large 2-wheeler brand',
    industry: 'Automotive',
    title: 'Learning360 across 4,150 dealers, from 1,002',
    summary:
      'Platform, in-house content and an adoption programme for the secondary retail network. Active dealers grew 4.4× in 15 months.',
    results: [
      { value: '4.4×', label: 'growth in active dealers' },
      { value: '72%', label: 'peak daily challenge participation' },
      { value: '34,000+', label: 'learner minutes in the peak month' },
    ],
    image: '/hero-casestudy-tvs.webp',
    href: '/case-studies/tvs-learning360',
    solutions: ['dealer-capability'],
    status: 'live',
  },
  {
    slug: 'tata-roleplay-evaluator',
    client: 'A leading passenger-vehicle OEM',
    industry: 'Automotive',
    title: 'AI role-play evaluation for a dealer sales excellence programme',
    summary: 'Content needed: problem, what we built, results.',
    solutions: ['sales-excellence'],
    status: 'draft',
  },
  {
    slug: 'tata-ev-launch',
    client: 'An electric-vehicle brand',
    industry: 'Automotive',
    title: 'Launch training for a new EV line-up',
    summary: 'Content needed: problem, what we built, results.',
    solutions: ['launch-training'],
    status: 'draft',
  },
  {
    slug: 'mia-digital-artefacts',
    client: 'A premium jewellery brand',
    industry: 'Premium retail',
    title: 'Digital learning artefacts for store teams',
    summary: 'Content needed: problem, what we built, results.',
    solutions: ['dealer-capability'],
    status: 'draft',
  },
  {
    slug: 'titan-competency-survey',
    client: 'A large lifestyle retail group',
    industry: 'Premium retail',
    title: 'An 11-competency self-assessment suite inside the client LMS',
    summary: 'Content needed: problem, what we built, results.',
    solutions: ['ld-strategy-tech'],
    status: 'draft',
  },
  {
    slug: 'irth-induction',
    client: 'A new retail brand',
    industry: 'Premium retail',
    title: 'A two-day induction built around the customer journey',
    summary: 'Content needed: problem, what we built, results.',
    solutions: ['frontline-onboarding'],
    status: 'draft',
  },
];
