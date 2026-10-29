// Content format tiles on the Content page
// Edit this file (or ask Bolt) to change what the site shows. Order on the page = order here.
// Set "published": false to hide an item without deleting it.
import type { ContentFormat } from '@/lib/types';

export const contentFormats: ContentFormat[] = [
  {
    "slug": "ilt",
    "number": "01",
    "name": "ILT",
    "tagline": "Instructor-led classroom training",
    "description": "Facilitator-led sessions designed around real practice. Complex topics, new product launches, and real-time group exercises that build both skill and confidence.",
    "when_to_use": "Best for complex topics, new product launches, peer learning, and when real-time practice and facilitator feedback matter.",
    "what_you_get": [
      "Facilitator guide and slide deck",
      "Participant workbook",
      "Role play scripts and scenarios",
      "Activity debrief templates",
      "Post-session action commitment card"
    ],
    "video_url": "",
    "icon": "ilt",
    "tile_bg": "bg-crimson",
    "tile_text": "text-white",
    "sort_order": 1,
    "published": true
  },
  {
    "slug": "elearning",
    "number": "02",
    "name": "eLearning",
    "tagline": "Self-paced digital modules",
    "description": "SCORM-compliant, browser and mobile-ready digital modules. Scenario-based, knowledge-check enabled, and built to work offline where connectivity is patchy.",
    "when_to_use": "Best for scale, consistent messaging across locations, refresher training, and compliance topics that need tracking.",
    "what_you_get": [
      "SCORM 1.2 / xAPI package",
      "Mobile-optimised layout",
      "Knowledge checks and assessments",
      "Completion certificate logic",
      "Source files for future updates"
    ],
    "video_url": "",
    "icon": "elearning",
    "tile_bg": "bg-paper",
    "tile_text": "text-navy",
    "sort_order": 2,
    "published": true
  },
  {
    "slug": "videos",
    "number": "03",
    "name": "Videos",
    "tagline": "Short-form learning videos",
    "description": "Bite-sized explainer and demonstration videos: product features, process walkthroughs, soft skill scenarios. Produced in-house with real scripts and professional editing.",
    "when_to_use": "Best for product demonstrations, process explainers, and just-in-time support content that learners access on their phones.",
    "what_you_get": [
      "Scripted and edited MP4 video",
      "Subtitles in required languages",
      "Thumbnail and preview card",
      "LMS-ready upload file"
    ],
    "video_url": "",
    "icon": "videos",
    "tile_bg": "bg-sky",
    "tile_text": "text-navy",
    "sort_order": 3,
    "published": true
  },
  {
    "slug": "animations",
    "number": "04",
    "name": "Animations",
    "tagline": "Motion-based concept content",
    "description": "Animated explainers for abstract concepts, data, and processes that are hard to visualise any other way. Clean motion graphics or character-driven story formats.",
    "when_to_use": "Best for data-heavy concepts, system overviews, and topics that benefit from visual storytelling over talking heads.",
    "what_you_get": [
      "Animated MP4 file",
      "Voiceover in required languages",
      "Source project file",
      "Compressed web-ready version"
    ],
    "video_url": "",
    "icon": "animations",
    "tile_bg": "bg-paper",
    "tile_text": "text-navy",
    "sort_order": 4,
    "published": true
  },
  {
    "slug": "product-guides",
    "number": "05",
    "name": "Product Guides",
    "tagline": "Reference tools for the shop floor",
    "description": "Structured digital or print reference materials: spec sheets, comparison guides, objection-handling tools. Designed for the moment of use, on the shop floor, in the customer's presence.",
    "when_to_use": "Best for product launches, competitive comparisons, and point-of-sale reference that a frontline person can pull up mid-conversation.",
    "what_you_get": [
      "Designed PDF or web page",
      "Printable version",
      "Digital interactive version (optional)",
      "LMS-compatible package"
    ],
    "video_url": "",
    "icon": "product-guides",
    "tile_bg": "bg-paper",
    "tile_text": "text-navy",
    "sort_order": 5,
    "published": true
  },
  {
    "slug": "competition-tools",
    "number": "06",
    "name": "Competition Tools",
    "tagline": "Competitive enablement content",
    "description": "Battle cards, competitor comparison tools, and objection-handling frameworks. Built for use in the moment, on the phone, mid-conversation.",
    "when_to_use": "Best for sales teams facing competitive pressure, new product launches with direct competitors, and any role that needs fast, accurate competitive information.",
    "what_you_get": [
      "Battle card deck (print + digital)",
      "Competitor comparison matrix",
      "Objection-handling scripts",
      "Quarterly update template"
    ],
    "video_url": "",
    "icon": "competition-tools",
    "tile_bg": "bg-moss",
    "tile_text": "text-white",
    "sort_order": 6,
    "published": true
  },
  {
    "slug": "ojt-kits",
    "number": "07",
    "name": "OJT Kits",
    "tagline": "On-the-job training packs",
    "description": "Structured on-the-job learning kits: observation checklists, practice task cards, and sign-off forms. Designed to make the workplace itself the training room.",
    "when_to_use": "Best for process adoption, SOP compliance, and skills that require hands-on practice under supervision.",
    "what_you_get": [
      "Structured OJT task card",
      "Observation and sign-off checklist",
      "Buddy / supervisor guide",
      "Competency sign-off sheet"
    ],
    "video_url": "",
    "icon": "ojt-kits",
    "tile_bg": "bg-paper",
    "tile_text": "text-navy",
    "sort_order": 7,
    "published": true
  },
  {
    "slug": "mobile-micro",
    "number": "08",
    "name": "Mobile Micro",
    "tagline": "Short mobile-first modules",
    "description": "Ultra-short content designed for a 2-3 minute mobile session. One concept, one visual, one question. Built for the phone in the shop between two customers.",
    "when_to_use": "Best for daily reinforcement, product updates, compliance reminders, and any learning that needs to happen in the flow of work.",
    "what_you_get": [
      "Mobile-optimised HTML5 module",
      "Single-screen per concept layout",
      "Integrated knowledge check",
      "Push notification copy (for LMS)"
    ],
    "video_url": "",
    "icon": "mobile-micro",
    "tile_bg": "bg-navy",
    "tile_text": "text-white",
    "sort_order": 8,
    "published": true
  }
];
