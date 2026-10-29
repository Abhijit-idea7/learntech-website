// Program library cards and program pages (/programs/...)
// Edit this file (or ask Bolt) to change what the site shows. Order on the page = order here.
// Set "published": false to hide an item without deleting it.
import type { Program } from '@/lib/types';

export const programs: Program[] = [
  {
    "slug": "high-stakes-presentation",
    "number": "01",
    "name": "High Stakes Presentation",
    "topic": "Decision-making communication",
    "format": "Workshop",
    "hero_image_url": "/hero-program-presentation.webp",
    "hero_subtitle": "2-3 hours · Interactive Workshop · Managers and leaders",
    "problem_statement": "\"We have to think about it.\" The four words that follow most high-stakes presentations. They rarely mean what we hope. This program is for the presentations that actually matter: budget pitches, town halls, cross-functional alignment.",
    "modules": [
      {
        "num": "1",
        "desc": "Why most high-stakes presentations fail, and it's not the slides.",
        "title": "The Real Problem"
      },
      {
        "num": "2",
        "desc": "Mapping stakeholders: who's deciding, who's blocking, who's neutral.",
        "title": "Know Your Room"
      },
      {
        "num": "3",
        "desc": "Structuring the case so the decision is obvious.",
        "title": "Build Your Argument"
      },
      {
        "num": "4",
        "desc": "Opening, middle, and the close that actually asks for something.",
        "title": "The Structure That Wins"
      },
      {
        "num": "5",
        "desc": "Budget pitches, town halls, cross-functional alignment.",
        "title": "Three Live Scenarios"
      },
      {
        "num": "6",
        "desc": "Using evidence without drowning the room in it.",
        "title": "Data & Visuals"
      }
    ],
    "personas": [
      "First-line managers with a budget ask this quarter",
      "Senior leaders running town halls in change moments",
      "Anyone whose next meeting decides something that matters"
    ],
    "outcomes": [
      "Opens by naming the decision room needs to make",
      "Walks in with a stakeholder map already built",
      "Builds arguments that make the decision obvious",
      "Closes by asking for the decision"
    ],
    "logistics": [
      {
        "label": "Duration",
        "value": "2-3 hours"
      },
      {
        "label": "Group size",
        "value": "12-25 participants"
      },
      {
        "label": "Delivery",
        "value": "In-person or virtual (delivery format bends to client need)"
      },
      {
        "label": "Materials",
        "value": "All materials provided"
      },
      {
        "label": "Facilitator",
        "value": "LearnTech senior L&D professional with prior corporate leadership experience"
      }
    ],
    "pack_items": [
      "Facilitator deck (36 slides)",
      "Learner workbook",
      "Role play scripts (30-second lift pitch, full-room simulation)",
      "Discussion prompts",
      "Debrief templates",
      "5 pre-commitments for participants to take back"
    ],
    "sort_order": 1,
    "published": true
  },
  {
    "slug": "finlens",
    "number": "02",
    "name": "FinLens",
    "topic": "Finance for Non-Finance Managers",
    "format": "Simulation · Board Game",
    "hero_image_url": "/hero-program-finlens.webp",
    "hero_subtitle": "Half-day · Simulation & Board Game · Managers across functions",
    "problem_statement": "Most managers make decisions that affect the business financially. Headcount, vendor selection, project approvals. Most do this without a working understanding of how those decisions show up in the P&L, balance sheet, or cash flow.",
    "modules": [
      {
        "num": "1",
        "desc": "P&L, balance sheet, cash flow. What each tells you and what it hides.",
        "title": "Reading the Numbers"
      },
      {
        "num": "2",
        "desc": "A simulated business where every decision has a financial consequence.",
        "title": "The FinLens Board Game"
      },
      {
        "num": "3",
        "desc": "How to have a credible conversation with finance and what they're actually asking.",
        "title": "Budget Conversations"
      },
      {
        "num": "4",
        "desc": "Applying the lens to your own function's numbers.",
        "title": "Your Business Unit"
      }
    ],
    "personas": [
      "Functional managers who sit in P&L reviews without full context",
      "Team leads who need to defend or build a business case",
      "Anyone who wants to be taken more seriously in financial conversations"
    ],
    "outcomes": [
      "Reads a P&L without help from finance",
      "Understands the cash impact of their operational decisions",
      "Builds a basic business case with financial substance",
      "Participates in budget reviews with confidence"
    ],
    "logistics": [
      {
        "label": "Duration",
        "value": "Half day (4 hours)"
      },
      {
        "label": "Group size",
        "value": "10-20 participants"
      },
      {
        "label": "Delivery",
        "value": "In-person (board game format requires physical presence)"
      },
      {
        "label": "Materials",
        "value": "Board game kit, workbook, and calculator templates provided"
      }
    ],
    "pack_items": [
      "FinLens board game set",
      "Workbook with financial templates",
      "Case study pack",
      "Facilitator debrief guide"
    ],
    "sort_order": 2,
    "published": true
  },
  {
    "slug": "deal-room",
    "number": "03",
    "name": "The Deal Room",
    "topic": "Negotiation Intelligence",
    "format": "Role Play · Simulation",
    "hero_image_url": "/hero-program-dealroom.webp",
    "hero_subtitle": "3-4 hours · Role Play & Simulation · Sales, procurement, and leadership",
    "problem_statement": "Most people in negotiation are reacting. The other side is managing the room. This program shifts that balance. You'll understand what's actually being negotiated, read the other side, and structure a deal that holds.",
    "modules": [
      {
        "num": "1",
        "desc": "The visible terms and the invisible ones. What both sides actually want.",
        "title": "What Is Being Negotiated"
      },
      {
        "num": "2",
        "desc": "BATNA, walk-away points, and the intelligence to gather before you sit down.",
        "title": "Preparation"
      },
      {
        "num": "3",
        "desc": "Reading signals, managing concessions, anchoring, and silence.",
        "title": "In the Room"
      },
      {
        "num": "4",
        "desc": "B2B sales, procurement, and internal resource negotiation simulations.",
        "title": "Three Live Deals"
      }
    ],
    "personas": [
      "Sales professionals managing complex accounts",
      "Procurement teams handling vendor negotiations",
      "Leaders who negotiate resources, headcount, or project scope internally"
    ],
    "outcomes": [
      "Prepares a structured negotiation plan before any significant deal",
      "Identifies the real interests behind stated positions",
      "Controls the pace and structure of a negotiation",
      "Walks away from bad deals without burning the relationship"
    ],
    "logistics": [
      {
        "label": "Duration",
        "value": "3-4 hours"
      },
      {
        "label": "Group size",
        "value": "12-24 participants (in pairs and triads)"
      },
      {
        "label": "Delivery",
        "value": "In-person or virtual"
      },
      {
        "label": "Materials",
        "value": "All negotiation simulation briefs and debrief templates provided"
      }
    ],
    "pack_items": [
      "Negotiation preparation template",
      "Three simulation scenario briefs",
      "Debrief and scoring guide",
      "Personal negotiation audit worksheet"
    ],
    "sort_order": 3,
    "published": true
  },
  {
    "slug": "pipeline-game",
    "number": "04",
    "name": "The Pipeline Game",
    "topic": "Supply Chain Thinking & Systems Awareness",
    "format": "Board Game",
    "hero_image_url": "/hero-program-pipeline.webp",
    "hero_subtitle": "3-4 hours · Board Game · Operations, logistics, and cross-functional teams",
    "problem_statement": "The bullwhip effect isn't a theory. It shows up in over-ordering, stockouts, and the blame cycles that follow. This game makes the system visible. And gives teams the language to talk about it.",
    "modules": [
      {
        "num": "1",
        "desc": "A multi-round supply chain simulation where demand is uncertain and decisions have consequences.",
        "title": "The Game"
      },
      {
        "num": "2",
        "desc": "Debrief: mapping the decisions, the reactions, and where the system broke.",
        "title": "What Just Happened"
      },
      {
        "num": "3",
        "desc": "Information sharing, lead time management, and demand sensing.",
        "title": "The Principles"
      },
      {
        "num": "4",
        "desc": "Applying the principles to the learner's actual context.",
        "title": "Your Supply Chain"
      }
    ],
    "personas": [
      "Operations and logistics teams",
      "Cross-functional groups who interact across the supply chain",
      "Leaders who need a shared systems vocabulary with their team"
    ],
    "outcomes": [
      "Understands how local decisions create system-level effects",
      "Recognises the warning signs of a bullwhip cycle early",
      "Communicates across functions using supply chain language",
      "Designs better information-sharing practices with their team"
    ],
    "logistics": [
      {
        "label": "Duration",
        "value": "3-4 hours"
      },
      {
        "label": "Group size",
        "value": "16-32 participants (teams of 4)"
      },
      {
        "label": "Delivery",
        "value": "In-person (board game format)"
      },
      {
        "label": "Materials",
        "value": "Full game kit, facilitator guide, and debrief workbook"
      }
    ],
    "pack_items": [
      "Pipeline Game board set (4-table kit)",
      "Facilitator guide and debrief templates",
      "Reflection workbook",
      "Application worksheet for own supply chain"
    ],
    "sort_order": 4,
    "published": true
  },
  {
    "slug": "rumour-mill",
    "number": "05",
    "name": "The Rumour Mill",
    "topic": "Communication Skills",
    "format": "Activity · Simulation",
    "hero_image_url": "/hero-program-rumour.webp",
    "hero_subtitle": "2-3 hours · Activity & Simulation · All levels",
    "problem_statement": "By the time a message has passed through three people, it's a different message. This program makes the distortion visible. And teaches the habits that reduce it.",
    "modules": [
      {
        "num": "1",
        "desc": "A live demonstration of how messages change in transit.",
        "title": "The Distortion Game"
      },
      {
        "num": "2",
        "desc": "Cognitive filters, assumptions, and the role of emotion in communication.",
        "title": "Why It Happens"
      },
      {
        "num": "3",
        "desc": "Formats and habits that reduce noise in teams and organisations.",
        "title": "Structured Communication"
      },
      {
        "num": "4",
        "desc": "Delivering feedback and difficult messages without distortion.",
        "title": "Hard Conversations"
      }
    ],
    "personas": [
      "Team leads and managers who run meetings and briefings",
      "Anyone who needs to communicate across levels or functions",
      "Teams where miscommunication is causing visible friction"
    ],
    "outcomes": [
      "Delivers clear, structured verbal and written communication",
      "Listens actively and checks understanding rather than assuming",
      "Reduces communication loops and rework caused by unclear briefing",
      "Gives and receives feedback without distortion"
    ],
    "logistics": [
      {
        "label": "Duration",
        "value": "2-3 hours"
      },
      {
        "label": "Group size",
        "value": "12-30 participants"
      },
      {
        "label": "Delivery",
        "value": "In-person or virtual"
      },
      {
        "label": "Materials",
        "value": "Activity materials and workbook provided"
      }
    ],
    "pack_items": [
      "Activity brief and facilitator instructions",
      "Participant workbook",
      "Communication audit card",
      "30-day communication challenge card"
    ],
    "sort_order": 5,
    "published": true
  },
  {
    "slug": "pressure-cooker",
    "number": "06",
    "name": "The Pressure Cooker",
    "topic": "Time Management & Delegation",
    "format": "Simulation · Activity",
    "hero_image_url": "/hero-program-pressure.webp",
    "hero_subtitle": "3 hours · Simulation · Managers and team leads",
    "problem_statement": "The problem is rarely too much work. It's usually the wrong work. This program builds the habits of prioritisation and delegation that protect both output and the people doing it.",
    "modules": [
      {
        "num": "1",
        "desc": "A real-time pressure scenario where participants manage competing demands with limited time.",
        "title": "The Simulation"
      },
      {
        "num": "2",
        "desc": "Time audit: what got done, what got neglected, and the cost of each.",
        "title": "Where the Time Goes"
      },
      {
        "num": "3",
        "desc": "Urgency, importance, and the decision that is actually being made.",
        "title": "Prioritisation Frameworks"
      },
      {
        "num": "4",
        "desc": "What to delegate, to whom, and how to hand over without creating more work.",
        "title": "Delegation that Works"
      }
    ],
    "personas": [
      "Managers who are overwhelmed and delegating poorly or not at all",
      "Team leads who are in individual contributor mode when they shouldn't be",
      "Anyone whose output doesn't match the hours they're putting in"
    ],
    "outcomes": [
      "Applies a consistent prioritisation framework to their daily and weekly work",
      "Delegates with clear briefs and appropriate follow-up",
      "Protects their most productive hours for the highest-value work",
      "Reduces the cycle of urgency that crowds out important work"
    ],
    "logistics": [
      {
        "label": "Duration",
        "value": "3 hours"
      },
      {
        "label": "Group size",
        "value": "12-24 participants"
      },
      {
        "label": "Delivery",
        "value": "In-person"
      },
      {
        "label": "Materials",
        "value": "Simulation kit, priority matrix tools, and workbook provided"
      }
    ],
    "pack_items": [
      "Pressure Cooker simulation kit",
      "Priority matrix workbook",
      "Delegation brief template",
      "Weekly planning template"
    ],
    "sort_order": 6,
    "published": true
  },
  {
    "slug": "bridge",
    "number": "07",
    "name": "The Bridge",
    "topic": "Conflict Management",
    "format": "Role Play · Simulation",
    "hero_image_url": "/hero-program-bridge.webp",
    "hero_subtitle": "3 hours · Role Play · Managers and team leads",
    "problem_statement": "Conflict avoided is conflict compounded. This program is for the managers who either escalate too quickly or avoid too long. It gives them a third option.",
    "modules": [
      {
        "num": "1",
        "desc": "What conflict actually is, where it starts, and why avoidance makes it worse.",
        "title": "The Anatomy of Conflict"
      },
      {
        "num": "2",
        "desc": "Peer-to-peer conflict, manager-report conflict, and cross-functional friction.",
        "title": "Three Live Scenarios"
      },
      {
        "num": "3",
        "desc": "A repeatable structure for the conversation that most people delay having.",
        "title": "The Bridge Framework"
      },
      {
        "num": "4",
        "desc": "Rebuilding trust and preventing recurrence.",
        "title": "Post-Conflict"
      }
    ],
    "personas": [
      "Managers handling interpersonal friction on their team",
      "Leaders who are avoiding a conversation they know they need to have",
      "Team leads who escalate conflict before attempting resolution"
    ],
    "outcomes": [
      "Uses a structured framework to approach conflict conversations",
      "Manages their own emotional state during difficult discussions",
      "Resolves peer conflict without escalation in most cases",
      "Rebuilds working relationships after a rupture"
    ],
    "logistics": [
      {
        "label": "Duration",
        "value": "3 hours"
      },
      {
        "label": "Group size",
        "value": "12-24 participants"
      },
      {
        "label": "Delivery",
        "value": "In-person or virtual"
      },
      {
        "label": "Materials",
        "value": "Role play scripts and workbook provided"
      }
    ],
    "pack_items": [
      "Bridge framework card",
      "Three conflict scenario role play scripts",
      "Personal conflict audit",
      "Follow-up conversation planner"
    ],
    "sort_order": 7,
    "published": true
  },
  {
    "slug": "hit-the-number",
    "number": "08",
    "name": "Hit The Number",
    "topic": "Sales Performance & Pipeline Management",
    "format": "Simulation · Game Board",
    "hero_image_url": "/hero-program-sales.webp",
    "hero_subtitle": "3-4 hours · Simulation · Sales teams and frontline sales managers",
    "problem_statement": "Most sales teams know what the number is. Fewer know why they're hitting it or missing it. This program builds the pipeline discipline and deal-management habits that make the number predictable.",
    "modules": [
      {
        "num": "1",
        "desc": "A multi-round sales game where pipeline quality determines the outcome.",
        "title": "The Pipeline Simulation"
      },
      {
        "num": "2",
        "desc": "Win rate, cycle length, deal size distribution. What your pipeline is actually saying.",
        "title": "What the Numbers Tell You"
      },
      {
        "num": "3",
        "desc": "Which deals to advance, which to kill, and how to spend sales time.",
        "title": "Deal Management"
      },
      {
        "num": "4",
        "desc": "For managers: how to run a pipeline review that actually improves the forecast.",
        "title": "The Coaching Conversation"
      }
    ],
    "personas": [
      "Frontline sales teams managing a deal pipeline",
      "Sales managers who run pipeline reviews and forecast to leadership",
      "Sales leaders who need their team to be more disciplined about opportunities"
    ],
    "outcomes": [
      "Maintains a clean, accurately-staged pipeline at all times",
      "Focuses sales time on the deals most likely to close",
      "Runs a productive pipeline review without it becoming a reporting session",
      "Forecasts the number with a credible range and a clear view of risk"
    ],
    "logistics": [
      {
        "label": "Duration",
        "value": "3-4 hours"
      },
      {
        "label": "Group size",
        "value": "12-24 participants"
      },
      {
        "label": "Delivery",
        "value": "In-person (simulation format)"
      },
      {
        "label": "Materials",
        "value": "Game board kit, deal cards, and workbook provided"
      }
    ],
    "pack_items": [
      "Hit the Number game board set",
      "Deal qualification card",
      "Pipeline health scorecard",
      "Weekly pipeline discipline checklist"
    ],
    "sort_order": 8,
    "published": true
  },
  {
    "slug": "complaint-desk",
    "number": "09",
    "name": "The Complaint Desk",
    "topic": "Customer Handling & Service Recovery",
    "format": "Role Play · Activity",
    "hero_image_url": "/hero-program-complaint.webp",
    "hero_subtitle": "2-3 hours · Role Play · Customer-facing teams",
    "problem_statement": "The complaint isn't the problem. How it's handled is the problem, or the opportunity. This program is for the teams on the front line of service recovery.",
    "modules": [
      {
        "num": "1",
        "desc": "What the customer is actually experiencing when they complain. What they want vs. what they say they want.",
        "title": "The Customer's Reality"
      },
      {
        "num": "2",
        "desc": "Listen, Empathise, Apologise, Resolve, Notify. A structure for every complaint.",
        "title": "The LEARN Framework"
      },
      {
        "num": "3",
        "desc": "Three escalating complaint situations from frontline, phone, and digital channels.",
        "title": "Live Scenarios"
      },
      {
        "num": "4",
        "desc": "Turning a complaint into a retained customer and a business improvement.",
        "title": "Beyond Recovery"
      }
    ],
    "personas": [
      "Customer-facing staff on the frontline (retail, service desk, after-sales)",
      "Team leads managing a customer service function",
      "Anyone whose role involves resolving complaints under pressure"
    ],
    "outcomes": [
      "Handles complaints using a consistent, structured framework",
      "Manages their own stress response during difficult customer interactions",
      "Resolves complaints faster and with higher first-contact resolution rates",
      "Identifies systemic issues from complaint patterns and escalates them"
    ],
    "logistics": [
      {
        "label": "Duration",
        "value": "2-3 hours"
      },
      {
        "label": "Group size",
        "value": "12-25 participants"
      },
      {
        "label": "Delivery",
        "value": "In-person or virtual"
      },
      {
        "label": "Materials",
        "value": "Role play scripts and LEARN framework cards provided"
      }
    ],
    "pack_items": [
      "LEARN framework reference card",
      "Three complaint scenario scripts",
      "Service recovery workbook",
      "Team debrief template"
    ],
    "sort_order": 9,
    "published": true
  }
];
