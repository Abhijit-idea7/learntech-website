// Consulting service pages (/consulting/...)
// Edit this file (or ask Bolt) to change what the site shows. Order on the page = order here.
// Set "published": false to hide an item without deleting it.
import type { ConsultingService } from '@/lib/types';

export const consultingServices: ConsultingService[] = [
  {
    "slug": "l-and-d-strategy",
    "title": "Organisational L&D Strategy",
    "short_desc": "Integrate L&D practice and technology into a company-wide plan.",
    "hero_title": "Organisational L&D Strategy",
    "hero_subtitle": "A strategy that connects learning to business performance. Not a training calendar with a mission statement above it.",
    "hero_image_url": "/hero-consulting-strategy.webp",
    "icon": "consulting",
    "accent": "crimson",
    "shadow_color": "#D8315B",
    "problem_text": "Most L&D functions operate reactively. A request comes in, a solution is designed, a session is delivered. What you get is activity. What you needed was capability. An organisational L&D strategy changes the relationship between learning and business outcomes. L&D becomes a deliberate driver of performance instead of a service function reacting to requests.",
    "what_we_do": [
      {
        "num": "1",
        "desc": "Audit of existing L&D activity, platforms, content, capability gaps, and stakeholder expectations.",
        "title": "Diagnose the current state"
      },
      {
        "num": "2",
        "desc": "Role-based learning pathways, technology architecture, governance model, and success metrics.",
        "title": "Design the strategy"
      },
      {
        "num": "3",
        "desc": "Phased implementation plan with clear ownership, timelines, and budget requirements.",
        "title": "Build the roadmap"
      },
      {
        "num": "4",
        "desc": "Stakeholder workshops to build buy-in and establish the L&D operating model.",
        "title": "Align the organisation"
      }
    ],
    "outcomes": [
      "A documented L&D strategy aligned to business objectives",
      "Role-specific learning pathways for priority roles",
      "A governance model that connects L&D activity to performance data",
      "A technology roadmap that fits your maturity and budget"
    ],
    "who_its_for": [
      "CHROs and HR leadership building the case for L&D investment",
      "L&D heads who need a strategy that holds up in the boardroom",
      "Business leaders who want L&D to move performance numbers as well as headcount"
    ],
    "sort_order": 1,
    "published": true
  },
  {
    "slug": "learning-pathways",
    "title": "Learning Pathways & Performance Metrics",
    "short_desc": "Role-specific pathways, KPIs, performance management tied to learning.",
    "hero_title": "Learning Pathways & Performance Metrics",
    "hero_subtitle": "The right content, in the right sequence, for the right role. With the metrics to prove it's working.",
    "hero_image_url": "/hero-consulting-pathways.webp",
    "icon": "frameworks",
    "accent": "sky",
    "shadow_color": "#3AA5D4",
    "problem_text": "Generic learning programmes produce generic results. When every role gets the same content, the relevance drops and the completion rates follow. Learning pathways fix this. The journey is designed for a specific role, at a specific career stage, in a specific business context. Then we measure whether behaviour actually shifts.",
    "what_we_do": [
      {
        "num": "1",
        "desc": "Identify the priority roles, the capability gaps within them, and the performance outcomes that matter.",
        "title": "Role mapping"
      },
      {
        "num": "2",
        "desc": "Sequence the learning: onboarding, skill building, reinforcement, and performance support.",
        "title": "Pathway design"
      },
      {
        "num": "3",
        "desc": "Define leading indicators (engagement, completion, assessment) and lagging indicators (performance KPIs) for each pathway.",
        "title": "Metric design"
      },
      {
        "num": "4",
        "desc": "Connect the pathway to your existing LMS, performance management system, and manager cadence.",
        "title": "Integration"
      }
    ],
    "outcomes": [
      "Documented learning pathways for 3-5 priority roles",
      "A measurement framework connecting learning activity to business KPIs",
      "Onboarding pathways that reduce time-to-productivity",
      "Assessment architecture that identifies skill gaps before they cost you"
    ],
    "who_its_for": [
      "L&D managers designing role-based development programmes",
      "HR business partners who need to connect L&D to performance reviews",
      "Operations leaders who want frontline capability mapped to commercial outcomes"
    ],
    "sort_order": 2,
    "published": true
  },
  {
    "slug": "tech-architecture",
    "title": "L&D Tech Architecture & Platform Selection",
    "short_desc": "Which platforms to buy, which to build, how they stitch together.",
    "hero_title": "L&D Tech Architecture & Platform Selection",
    "hero_subtitle": "The right technology stack for your L&D function. Without the vendor bias.",
    "hero_image_url": "/hero-consulting-techarch.webp",
    "icon": "platform-delivery",
    "accent": "moss",
    "shadow_color": "#647439",
    "problem_text": "Most L&D technology decisions are made reactively. A vendor demo, a peer recommendation, a purchase order. The result: a stack that doesn't fit together, a platform nobody uses, and a budget you can't justify. We help organisations make the tech decision after understanding the problem it needs to solve.",
    "what_we_do": [
      {
        "num": "1",
        "desc": "What you have, what it is actually being used for, and what the gaps are.",
        "title": "Audit the current stack"
      },
      {
        "num": "2",
        "desc": "Based on your audience, your content types, and your delivery model. Not a vendor feature list.",
        "title": "Define the requirements"
      },
      {
        "num": "3",
        "desc": "We bring the market knowledge so you don't start from scratch.",
        "title": "Evaluate the options"
      },
      {
        "num": "4",
        "desc": "How the platforms connect, where the data flows, and what the admin burden looks like.",
        "title": "Design the architecture"
      }
    ],
    "outcomes": [
      "A technology requirements document you can use to evaluate any vendor",
      "A shortlisted set of platforms that fit your context",
      "An integration architecture that connects your LMS, HRMS, and content tools",
      "A business case for the technology investment with clear ROI assumptions"
    ],
    "who_its_for": [
      "CHROs making a major platform investment decision",
      "L&D leaders who've inherited a stack that isn't working",
      "IT leaders who need to understand the L&D technology landscape before signing off"
    ],
    "sort_order": 3,
    "published": true
  },
  {
    "slug": "implementation",
    "title": "Implementation & Adoption",
    "short_desc": "Rollout planning, change management, adoption programme design.",
    "hero_title": "Implementation & Adoption",
    "hero_subtitle": "Buying the platform is the easy part. Getting people to use it is the job.",
    "hero_image_url": "/hero-consulting-adoption.webp",
    "icon": "speed",
    "accent": "crimson",
    "shadow_color": "#D8315B",
    "problem_text": "Platform adoption fails for predictable reasons: no clear communication, no defined user journey, no one accountable for engagement after go-live, and content that doesn't give the learner a reason to return. We've run adoption programmes for large-scale LMS rollouts and know exactly where they break.",
    "what_we_do": [
      {
        "num": "1",
        "desc": "Communication plan, nomination flow, user journey, and engagement triggers from day one.",
        "title": "Adoption programme design"
      },
      {
        "num": "2",
        "desc": "Stakeholder alignment, manager briefing programme, and champion network design.",
        "title": "Change management"
      },
      {
        "num": "3",
        "desc": "Hands-on support during the first 90 days. Adoption either takes root or dies in this window.",
        "title": "Go-live support"
      },
      {
        "num": "4",
        "desc": "Weekly engagement metrics, drop-off analysis, and programme adjustments based on data.",
        "title": "Measurement and optimisation"
      }
    ],
    "outcomes": [
      "An adoption programme that produces measurable engagement in the first 90 days",
      "A manager briefing programme that converts managers from blockers to advocates",
      "Weekly engagement reporting with clear actions",
      "A content publishing cadence that keeps learners coming back"
    ],
    "who_its_for": [
      "L&D teams who've deployed a platform but aren't seeing engagement",
      "HR leaders who are 6 months post-launch and not at target adoption",
      "Operations leaders frustrated that their training investment isn't being used"
    ],
    "sort_order": 4,
    "published": true
  }
];
