// Platforms page: flagship + other platforms
// Edit this file (or ask Bolt) to change what the site shows. Order on the page = order here.
// Set "published": false to hide an item without deleting it.
import type { Platform } from '@/lib/types';

export const platforms: Platform[] = [
  {
    "slug": "learning360",
    "name": "Learning360",
    "is_flagship": true,
    "tagline": "Mobile-first LMS for distributed frontline teams",
    "description": "Our own LMS, built for distributed frontline audiences. Content lives in a self-paced library. Learners get personalised recommendations. A daily 3-question challenge keeps the muscle warm. Built-in translation lets learners read content in the language they think in. Works on the phone in the shop, between two customers.",
    "key_capabilities": [
      "Self-paced learning library",
      "On-demand content access",
      "Classroom & virtual training management",
      "Content variety (SCORM, HTML, video, PDF)",
      "Personalised content recommendations",
      "Daily 3-question skill challenge",
      "Built-in multi-language translation",
      "Manager dashboard and reporting"
    ],
    "video_url": "",
    "icon": "platform-delivery",
    "accent": "sky",
    "shadow_color": "#3AA5D4",
    "external_url": "",
    "sort_order": 1,
    "published": true
  },
  {
    "slug": "paperless-training",
    "name": "Paperless Training",
    "is_flagship": false,
    "tagline": "Training management for large-scale delivery",
    "description": "Training management for large-scale delivery. Attendance, assessments, and training materials — all digital. Designed for the coordinator managing 200 sessions a month, not just the learner completing one.",
    "key_capabilities": [
      "Digital attendance tracking",
      "Trainer and venue scheduling",
      "Assessment and test management",
      "Materials distribution",
      "Real-time coordinator dashboard",
      "Compliance and audit reports"
    ],
    "video_url": "",
    "icon": "delivery-digital",
    "accent": "crimson",
    "shadow_color": "#D8315B",
    "external_url": "https://paperlesstraining.com",
    "sort_order": 2,
    "published": true
  },
  {
    "slug": "smartlist",
    "name": "SmartList",
    "is_flagship": false,
    "tagline": "Recruitment and skill assessment for high-volume hiring",
    "description": "Recruitment and skill assessment for high-volume frontline hiring. Structured assessments, automated shortlisting, and recruiter dashboards. Built for the pace and volume of retail and automotive hiring cycles.",
    "key_capabilities": [
      "Structured competency assessments",
      "Automated scoring and shortlisting",
      "Bulk candidate management",
      "Custom assessment builder",
      "Recruiter and hiring manager dashboards",
      "Integration-ready APIs"
    ],
    "video_url": "",
    "icon": "competition-tools",
    "accent": "sky",
    "shadow_color": "#3AA5D4",
    "external_url": "https://smartlist.co.in",
    "sort_order": 3,
    "published": true
  },
  {
    "slug": "reelchamp",
    "name": "ReelChamp",
    "is_flagship": false,
    "tagline": "Video skill contests. Learners create the content, everyone watches.",
    "description": "Video skill contests where learners create the content and everyone watches. Leaderboards, peer voting, manager moderation. Skill and healthy competition, made visible across a distributed team.",
    "key_capabilities": [
      "Video submission contests",
      "Live leaderboards and rankings",
      "Peer voting and feedback",
      "Manager moderation tools",
      "Campaign and challenge builder",
      "Performance badges and rewards"
    ],
    "video_url": "",
    "icon": "videos",
    "accent": "moss",
    "shadow_color": "#647439",
    "external_url": "https://reelchamp.in",
    "sort_order": 4,
    "published": true
  },
  {
    "slug": "onboardbox",
    "name": "OnBoardBox",
    "is_flagship": false,
    "tagline": "Custom-built onboarding for the first 30 days.",
    "description": "Customised employee welcome and onboarding. Pre-joining content, Day 1 journeys, and structured 30-60-90 day onboarding plans. Delivered digitally to every new hire, wherever they are.",
    "key_capabilities": [
      "Pre-joining content delivery",
      "Day 1 digital welcome kit",
      "30-60-90 day onboarding journeys",
      "Manager and buddy notifications",
      "Document collection and verification",
      "Onboarding completion tracking"
    ],
    "video_url": "",
    "icon": "product-guides",
    "accent": "crimson",
    "shadow_color": "#0F2A5F",
    "external_url": "https://onboardbox.in",
    "sort_order": 5,
    "published": true
  }
];
