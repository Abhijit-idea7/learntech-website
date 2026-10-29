/*
# LearnTech CMS — Content Tables, Storage Bucket, and Seed Data

## Summary
Creates all database tables required to power the LearnTech website CMS,
including a Supabase Storage bucket for image uploads.

## New Tables

### blog_posts
Stores all blog post content. Each post maps to a /blog/:slug URL.
- id (uuid, primary key)
- slug (text, unique) — URL identifier
- title, excerpt, category, read_time, author, published_at, hero_image_url
- body_paragraphs (text[]) — array of body paragraphs
- published (boolean) — only published=true is visible to public

### programs
Stores the 9 training program definitions. Maps to /programs/:slug.
- id, slug, number (display number e.g. "01"), name, topic, format
- hero_image_url, hero_subtitle, problem_statement
- modules (jsonb: [{num, title, desc}])
- personas, outcomes, pack_items (text[])
- logistics (jsonb: [{label, value}])
- sort_order, published

### consulting_services
Stores the 4 consulting service sub-pages. Maps to /consulting/:sub.
- id, slug, title, short_desc, hero_title, hero_subtitle, hero_image_url
- icon, accent, shadow_color
- problem_text
- what_we_do (jsonb: [{num, title, desc}])
- outcomes, who_its_for (text[])
- sort_order, published

### site_settings
Key-value store for global site configuration (contact info, tagline, etc.)

## Storage
Creates the `site-images` public bucket in Supabase Storage.

## Security (RLS)
- Public (anon) can SELECT rows where published = true
- Authenticated users (admin) can SELECT all rows and INSERT/UPDATE/DELETE
- Storage: public read, authenticated-only upload/delete/update

## Seed Data
Populates all tables with the existing hardcoded content from the codebase
so the live site continues to work immediately after migration.
*/

-- ============================================================
-- TABLES
-- ============================================================

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL DEFAULT '',
  excerpt text DEFAULT '',
  category text DEFAULT '',
  read_time text DEFAULT '',
  author text DEFAULT '',
  published_at date,
  hero_image_url text DEFAULT '/hero-blog.webp',
  body_paragraphs text[] DEFAULT '{}',
  published boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  number text NOT NULL DEFAULT '',
  name text NOT NULL DEFAULT '',
  topic text DEFAULT '',
  format text DEFAULT '',
  hero_image_url text DEFAULT '/hero-content.webp',
  hero_subtitle text DEFAULT '',
  problem_statement text DEFAULT '',
  modules jsonb DEFAULT '[]',
  personas text[] DEFAULT '{}',
  outcomes text[] DEFAULT '{}',
  logistics jsonb DEFAULT '[]',
  pack_items text[] DEFAULT '{}',
  sort_order int DEFAULT 0,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS consulting_services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL DEFAULT '',
  short_desc text DEFAULT '',
  hero_title text DEFAULT '',
  hero_subtitle text DEFAULT '',
  hero_image_url text DEFAULT '/hero-consulting.webp',
  icon text DEFAULT 'consulting',
  accent text DEFAULT 'crimson',
  shadow_color text DEFAULT '#D8315B',
  problem_text text DEFAULT '',
  what_we_do jsonb DEFAULT '[]',
  outcomes text[] DEFAULT '{}',
  who_its_for text[] DEFAULT '{}',
  sort_order int DEFAULT 0,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS site_settings (
  key text PRIMARY KEY,
  value text DEFAULT '',
  updated_at timestamptz DEFAULT now()
);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS blog_posts_published_idx ON blog_posts(published);
CREATE INDEX IF NOT EXISTS programs_slug_idx ON programs(slug);
CREATE INDEX IF NOT EXISTS programs_sort_idx ON programs(sort_order);
CREATE INDEX IF NOT EXISTS consulting_services_slug_idx ON consulting_services(slug);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE consulting_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- blog_posts
DROP POLICY IF EXISTS "public_read_published_posts" ON blog_posts;
CREATE POLICY "public_read_published_posts" ON blog_posts FOR SELECT
  TO anon USING (published = true);

DROP POLICY IF EXISTS "admin_read_all_posts" ON blog_posts;
CREATE POLICY "admin_read_all_posts" ON blog_posts FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_posts" ON blog_posts;
CREATE POLICY "admin_insert_posts" ON blog_posts FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_posts" ON blog_posts;
CREATE POLICY "admin_update_posts" ON blog_posts FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_posts" ON blog_posts;
CREATE POLICY "admin_delete_posts" ON blog_posts FOR DELETE
  TO authenticated USING (true);

-- programs
DROP POLICY IF EXISTS "public_read_published_programs" ON programs;
CREATE POLICY "public_read_published_programs" ON programs FOR SELECT
  TO anon USING (published = true);

DROP POLICY IF EXISTS "admin_read_all_programs" ON programs;
CREATE POLICY "admin_read_all_programs" ON programs FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_programs" ON programs;
CREATE POLICY "admin_insert_programs" ON programs FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_programs" ON programs;
CREATE POLICY "admin_update_programs" ON programs FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_programs" ON programs;
CREATE POLICY "admin_delete_programs" ON programs FOR DELETE
  TO authenticated USING (true);

-- consulting_services
DROP POLICY IF EXISTS "public_read_published_services" ON consulting_services;
CREATE POLICY "public_read_published_services" ON consulting_services FOR SELECT
  TO anon USING (published = true);

DROP POLICY IF EXISTS "admin_read_all_services" ON consulting_services;
CREATE POLICY "admin_read_all_services" ON consulting_services FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_services" ON consulting_services;
CREATE POLICY "admin_insert_services" ON consulting_services FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_services" ON consulting_services;
CREATE POLICY "admin_update_services" ON consulting_services FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_services" ON consulting_services;
CREATE POLICY "admin_delete_services" ON consulting_services FOR DELETE
  TO authenticated USING (true);

-- site_settings
DROP POLICY IF EXISTS "public_read_settings" ON site_settings;
CREATE POLICY "public_read_settings" ON site_settings FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_settings" ON site_settings;
CREATE POLICY "admin_insert_settings" ON site_settings FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_settings" ON site_settings;
CREATE POLICY "admin_update_settings" ON site_settings FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_settings" ON site_settings;
CREATE POLICY "admin_delete_settings" ON site_settings FOR DELETE
  TO authenticated USING (true);

-- ============================================================
-- STORAGE BUCKET
-- ============================================================

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'site-images',
  'site-images',
  true,
  10485760,
  ARRAY['image/jpeg','image/jpg','image/png','image/webp','image/gif','image/svg+xml']
)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "public_read_site_images" ON storage.objects;
CREATE POLICY "public_read_site_images" ON storage.objects FOR SELECT
  TO anon, authenticated USING (bucket_id = 'site-images');

DROP POLICY IF EXISTS "admin_upload_site_images" ON storage.objects;
CREATE POLICY "admin_upload_site_images" ON storage.objects FOR INSERT
  TO authenticated WITH CHECK (bucket_id = 'site-images');

DROP POLICY IF EXISTS "admin_update_site_images" ON storage.objects;
CREATE POLICY "admin_update_site_images" ON storage.objects FOR UPDATE
  TO authenticated USING (bucket_id = 'site-images') WITH CHECK (bucket_id = 'site-images');

DROP POLICY IF EXISTS "admin_delete_site_images" ON storage.objects;
CREATE POLICY "admin_delete_site_images" ON storage.objects FOR DELETE
  TO authenticated USING (bucket_id = 'site-images');

-- ============================================================
-- SEED: BLOG POSTS
-- ============================================================

INSERT INTO blog_posts (slug, title, excerpt, category, read_time, author, published_at, hero_image_url, body_paragraphs, published)
VALUES
(
  'what-most-lms-rollouts-get-wrong',
  'What most LMS rollouts get wrong',
  'A short read on why deploying a platform is 20% of the job and adoption is the other 80%.',
  'L&D Tech',
  '6 min',
  'Bhaskar Bose',
  '2025-09-15',
  '/hero-blog.webp',
  ARRAY[
    'Most organisations treat LMS rollout as an IT project. Buy the licence, configure the portal, load the content, send the login credentials. Done.',
    'Then they wonder why nobody logs in.',
    'The platform is 20% of the job. Adoption is the other 80%. And adoption does not happen by itself — it requires deliberate design: a nomination flow, a notification cadence, content that earns attention, and someone accountable for the numbers.',
    'We have run this motion at scale with TVS Motors. The lesson is consistent: learners open the app when the content is relevant, short, and available in their language. They keep coming back when there is a daily hook — a challenge, a new product update, a competitive insight.',
    'If this is a problem you are solving, we would love to talk through what worked and what did not.'
  ],
  true
),
(
  'training-the-secondary-network',
  'Training the secondary network',
  'Lessons from running Learning360 across the TVS dealer secondary network.',
  'Retail L&D',
  '8 min',
  'Abhijit Joshi',
  '2025-08-28',
  '/hero-blog.webp',
  ARRAY[
    'The secondary network is the hardest audience in automotive retail. They are not employees. They do not report to you. They have ten other things to do. And they are the ones standing in front of the customer.',
    'When TVS Motors asked us to build capability across their secondary retail network, we knew the usual approach would not work. Classroom sessions twice a year, print collateral, email blasts — none of it reaches the person on the shop floor in time.',
    'Learning360 was designed for exactly this audience. Mobile-first. Short content. Available in the language the learner thinks in. A daily challenge that takes 90 seconds.',
    'In ten months, active dealers on the platform grew 3.4x. 72% of monthly active users completed at least one daily challenge at peak. 26,200 minutes of learner time in a single month.',
    'The secondary network can learn. They just need content that meets them where they are.'
  ],
  true
),
(
  'content-is-fuel-not-the-vehicle',
  'Content is fuel. Not the vehicle.',
  'Why "great content" fails without the platform, the delivery, and the adoption motion around it.',
  'Content',
  '5 min',
  'Swapnil Patil',
  '2025-08-10',
  '/hero-blog.webp',
  ARRAY[
    'We have worked with organisations that have genuinely excellent content. Beautifully designed modules. Production-quality videos. SME-reviewed, contextually accurate, role-specific.',
    'And learners never see it.',
    'Content is fuel. It does nothing sitting in the tank. You need a vehicle — a platform that makes it accessible — and a driver — an adoption motion that puts learners in the seat.',
    'The three-part system that works: content that earns attention (short, contextual, relevant to what the learner is doing this week), a platform that meets the learner on their phone, and an adoption programme that creates the habit.',
    'Remove any one of the three and the system fails. This is why we run all three from the same table.'
  ],
  true
)
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- SEED: PROGRAMS
-- ============================================================

INSERT INTO programs (slug, number, name, topic, format, hero_image_url, hero_subtitle, problem_statement, modules, personas, outcomes, logistics, pack_items, sort_order, published)
VALUES
(
  'high-stakes-presentation',
  '01',
  'High Stakes Presentation',
  'Decision-making communication',
  'Workshop',
  '/hero-consulting.webp',
  '2-3 hours · Interactive Workshop · Managers and leaders',
  '"We have to think about it." The four words that follow most high-stakes presentations. They rarely mean what we hope. This program is for the presentations that actually matter — budget pitches, town halls, cross-functional alignment.',
  '[
    {"num":"1","title":"The Real Problem","desc":"Why most high-stakes presentations fail, and it''s not the slides."},
    {"num":"2","title":"Know Your Room","desc":"Mapping stakeholders: who''s deciding, who''s blocking, who''s neutral."},
    {"num":"3","title":"Build Your Argument","desc":"Structuring the case so the decision is obvious."},
    {"num":"4","title":"The Structure That Wins","desc":"Opening, middle, and the close that actually asks for something."},
    {"num":"5","title":"Three Live Scenarios","desc":"Budget pitches, town halls, cross-functional alignment."},
    {"num":"6","title":"Data & Visuals","desc":"Using evidence without drowning the room in it."}
  ]'::jsonb,
  ARRAY['First-line managers with a budget ask this quarter','Senior leaders running town halls in change moments','Anyone whose next meeting decides something that matters'],
  ARRAY['Opens presentations with the ask, not the runway','Maps stakeholders before the meeting, not after','Builds arguments that make the decision obvious','Closes for a decision, not for questions'],
  '[
    {"label":"Duration","value":"2-3 hours"},
    {"label":"Group size","value":"12-25 participants"},
    {"label":"Delivery","value":"In-person or virtual (delivery format bends to client need)"},
    {"label":"Materials","value":"All materials provided"},
    {"label":"Facilitator","value":"LearnTech senior L&D professional with prior corporate leadership experience"}
  ]'::jsonb,
  ARRAY['Facilitator deck (36 slides)','Learner workbook','Role play scripts (30-second lift pitch, full-room simulation)','Discussion prompts','Debrief templates','5 pre-commitments for participants to take back'],
  1,
  true
),
(
  'finlens',
  '02',
  'FinLens',
  'Finance for Non-Finance Managers',
  'Simulation · Board Game',
  '/hero-content.webp',
  'Half-day · Simulation & Board Game · Managers across functions',
  'Most managers make decisions that affect the business financially — headcount, vendor selection, project approvals — without a working understanding of how those decisions show up in the P&L, balance sheet, or cash flow.',
  '[
    {"num":"1","title":"Reading the Numbers","desc":"P&L, balance sheet, cash flow — what each tells you and what it hides."},
    {"num":"2","title":"The FinLens Board Game","desc":"A simulated business where every decision has a financial consequence."},
    {"num":"3","title":"Budget Conversations","desc":"How to have a credible conversation with finance and what they are actually asking."},
    {"num":"4","title":"Your Business Unit","desc":"Applying the lens to your own function''s numbers."}
  ]'::jsonb,
  ARRAY['Functional managers who sit in P&L reviews without full context','Team leads who need to defend or build a business case','Anyone who wants to be taken more seriously in financial conversations'],
  ARRAY['Reads a P&L without help from finance','Understands the cash impact of their operational decisions','Builds a basic business case with financial substance','Participates in budget reviews with confidence'],
  '[
    {"label":"Duration","value":"Half day (4 hours)"},
    {"label":"Group size","value":"10-20 participants"},
    {"label":"Delivery","value":"In-person (board game format requires physical presence)"},
    {"label":"Materials","value":"Board game kit, workbook, and calculator templates provided"}
  ]'::jsonb,
  ARRAY['FinLens board game set','Workbook with financial templates','Case study pack','Facilitator debrief guide'],
  2,
  true
),
(
  'deal-room',
  '03',
  'The Deal Room',
  'Negotiation Intelligence',
  'Role Play · Simulation',
  '/hero-content.webp',
  '3-4 hours · Role Play & Simulation · Sales, procurement, and leadership',
  'Most people in negotiation are reacting. The other side is managing the room. This program is about shifting that balance — understanding what is actually being negotiated, reading the other side, and structuring a deal that holds.',
  '[
    {"num":"1","title":"What Is Being Negotiated","desc":"The visible terms and the invisible ones. What both sides actually want."},
    {"num":"2","title":"Preparation","desc":"BATNA, walk-away points, and the intelligence to gather before you sit down."},
    {"num":"3","title":"In the Room","desc":"Reading signals, managing concessions, anchoring, and silence."},
    {"num":"4","title":"Three Live Deals","desc":"B2B sales, procurement, and internal resource negotiation simulations."}
  ]'::jsonb,
  ARRAY['Sales professionals managing complex accounts','Procurement teams handling vendor negotiations','Leaders who negotiate resources, headcount, or project scope internally'],
  ARRAY['Prepares a structured negotiation plan before any significant deal','Identifies the real interests behind stated positions','Controls the pace and structure of a negotiation','Walks away from bad deals without burning the relationship'],
  '[
    {"label":"Duration","value":"3-4 hours"},
    {"label":"Group size","value":"12-24 participants (in pairs and triads)"},
    {"label":"Delivery","value":"In-person or virtual"},
    {"label":"Materials","value":"All negotiation simulation briefs and debrief templates provided"}
  ]'::jsonb,
  ARRAY['Negotiation preparation template','Three simulation scenario briefs','Debrief and scoring guide','Personal negotiation audit worksheet'],
  3,
  true
),
(
  'pipeline-game',
  '04',
  'The Pipeline Game',
  'Supply Chain Thinking & Systems Awareness',
  'Board Game',
  '/hero-content.webp',
  '3-4 hours · Board Game · Operations, logistics, and cross-functional teams',
  'The bullwhip effect is not a theory. It shows up in over-ordering, stockouts, and the blame cycles that follow. This game makes the system visible — and gives teams the language to talk about it.',
  '[
    {"num":"1","title":"The Game","desc":"A multi-round supply chain simulation where demand is uncertain and decisions have consequences."},
    {"num":"2","title":"What Just Happened","desc":"Debrief: mapping the decisions, the reactions, and where the system broke."},
    {"num":"3","title":"The Principles","desc":"Information sharing, lead time management, and demand sensing."},
    {"num":"4","title":"Your Supply Chain","desc":"Applying the principles to the learner''s actual context."}
  ]'::jsonb,
  ARRAY['Operations and logistics teams','Cross-functional groups who interact across the supply chain','Leaders who need a shared systems vocabulary with their team'],
  ARRAY['Understands how local decisions create system-level effects','Recognises the warning signs of a bullwhip cycle early','Communicates across functions using supply chain language','Designs better information-sharing practices with their team'],
  '[
    {"label":"Duration","value":"3-4 hours"},
    {"label":"Group size","value":"16-32 participants (teams of 4)"},
    {"label":"Delivery","value":"In-person (board game format)"},
    {"label":"Materials","value":"Full game kit, facilitator guide, and debrief workbook"}
  ]'::jsonb,
  ARRAY['Pipeline Game board set (4-table kit)','Facilitator guide and debrief templates','Reflection workbook','Application worksheet for own supply chain'],
  4,
  true
),
(
  'rumour-mill',
  '05',
  'The Rumour Mill',
  'Communication Skills',
  'Activity · Simulation',
  '/hero-content.webp',
  '2-3 hours · Activity & Simulation · All levels',
  'By the time a message has passed through three people, it is a different message. This program makes the distortion visible — and teaches the habits that reduce it.',
  '[
    {"num":"1","title":"The Distortion Game","desc":"A live demonstration of how messages change in transit."},
    {"num":"2","title":"Why It Happens","desc":"Cognitive filters, assumptions, and the role of emotion in communication."},
    {"num":"3","title":"Structured Communication","desc":"Formats and habits that reduce noise in teams and organisations."},
    {"num":"4","title":"Hard Conversations","desc":"Delivering feedback and difficult messages without distortion."}
  ]'::jsonb,
  ARRAY['Team leads and managers who run meetings and briefings','Anyone who needs to communicate across levels or functions','Teams where miscommunication is causing visible friction'],
  ARRAY['Delivers clear, structured verbal and written communication','Listens actively and checks understanding rather than assuming','Reduces communication loops and rework caused by unclear briefing','Gives and receives feedback without distortion'],
  '[
    {"label":"Duration","value":"2-3 hours"},
    {"label":"Group size","value":"12-30 participants"},
    {"label":"Delivery","value":"In-person or virtual"},
    {"label":"Materials","value":"Activity materials and workbook provided"}
  ]'::jsonb,
  ARRAY['Activity brief and facilitator instructions','Participant workbook','Communication audit card','30-day communication challenge card'],
  5,
  true
),
(
  'pressure-cooker',
  '06',
  'The Pressure Cooker',
  'Time Management & Delegation',
  'Simulation · Activity',
  '/hero-content.webp',
  '3 hours · Simulation · Managers and team leads',
  'The problem is rarely too much work. It is usually the wrong work. This program is about the habits of prioritisation and delegation that protect both output and the people doing it.',
  '[
    {"num":"1","title":"The Simulation","desc":"A real-time pressure scenario where participants manage competing demands with limited time."},
    {"num":"2","title":"Where the Time Goes","desc":"Time audit: what got done, what got neglected, and the cost of each."},
    {"num":"3","title":"Prioritisation Frameworks","desc":"Urgency, importance, and the decision that is actually being made."},
    {"num":"4","title":"Delegation that Works","desc":"What to delegate, to whom, and how to hand over without creating more work."}
  ]'::jsonb,
  ARRAY['Managers who are overwhelmed and delegating poorly or not at all','Team leads who are in individual contributor mode when they should not be','Anyone whose output does not match the hours they are putting in'],
  ARRAY['Applies a consistent prioritisation framework to their daily and weekly work','Delegates with clear briefs and appropriate follow-up','Protects their most productive hours for the highest-value work','Reduces the cycle of urgency that crowds out important work'],
  '[
    {"label":"Duration","value":"3 hours"},
    {"label":"Group size","value":"12-24 participants"},
    {"label":"Delivery","value":"In-person"},
    {"label":"Materials","value":"Simulation kit, priority matrix tools, and workbook provided"}
  ]'::jsonb,
  ARRAY['Pressure Cooker simulation kit','Priority matrix workbook','Delegation brief template','Weekly planning template'],
  6,
  true
),
(
  'bridge',
  '07',
  'The Bridge',
  'Conflict Management',
  'Role Play · Simulation',
  '/hero-content.webp',
  '3 hours · Role Play · Managers and team leads',
  'Conflict avoided is conflict compounded. This program is for the managers who either escalate too quickly or avoid too long — and gives them a third option.',
  '[
    {"num":"1","title":"The Anatomy of Conflict","desc":"What conflict actually is, where it starts, and why avoidance makes it worse."},
    {"num":"2","title":"Three Live Scenarios","desc":"Peer-to-peer conflict, manager-report conflict, and cross-functional friction."},
    {"num":"3","title":"The Bridge Framework","desc":"A repeatable structure for the conversation that most people delay having."},
    {"num":"4","title":"Post-Conflict","desc":"Rebuilding trust and preventing recurrence."}
  ]'::jsonb,
  ARRAY['Managers handling interpersonal friction on their team','Leaders who are avoiding a conversation they know they need to have','Team leads who escalate conflict before attempting resolution'],
  ARRAY['Uses a structured framework to approach conflict conversations','Manages their own emotional state during difficult discussions','Resolves peer conflict without escalation in most cases','Rebuilds working relationships after a rupture'],
  '[
    {"label":"Duration","value":"3 hours"},
    {"label":"Group size","value":"12-24 participants"},
    {"label":"Delivery","value":"In-person or virtual"},
    {"label":"Materials","value":"Role play scripts and workbook provided"}
  ]'::jsonb,
  ARRAY['Bridge framework card','Three conflict scenario role play scripts','Personal conflict audit','Follow-up conversation planner'],
  7,
  true
),
(
  'hit-the-number',
  '08',
  'Hit The Number',
  'Sales Performance & Pipeline Management',
  'Simulation · Game Board',
  '/hero-content.webp',
  '3-4 hours · Simulation · Sales teams and frontline sales managers',
  'Most sales teams know what the number is. Fewer know why they are hitting it or missing it. This program is about building the pipeline discipline and deal management habits that make the number predictable.',
  '[
    {"num":"1","title":"The Pipeline Simulation","desc":"A multi-round sales game where pipeline quality determines the outcome."},
    {"num":"2","title":"What the Numbers Tell You","desc":"Win rate, cycle length, deal size distribution — what your pipeline is actually saying."},
    {"num":"3","title":"Deal Management","desc":"Which deals to advance, which to kill, and how to spend sales time."},
    {"num":"4","title":"The Coaching Conversation","desc":"For managers: how to run a pipeline review that actually improves the forecast."}
  ]'::jsonb,
  ARRAY['Frontline sales teams managing a deal pipeline','Sales managers who run pipeline reviews and forecast to leadership','Sales leaders who need their team to be more disciplined about opportunities'],
  ARRAY['Maintains a clean, accurately-staged pipeline at all times','Focuses sales time on the deals most likely to close','Runs a productive pipeline review without it becoming a reporting session','Forecasts the number with a credible range and a clear view of risk'],
  '[
    {"label":"Duration","value":"3-4 hours"},
    {"label":"Group size","value":"12-24 participants"},
    {"label":"Delivery","value":"In-person (simulation format)"},
    {"label":"Materials","value":"Game board kit, deal cards, and workbook provided"}
  ]'::jsonb,
  ARRAY['Hit the Number game board set','Deal qualification card','Pipeline health scorecard','Weekly pipeline discipline checklist'],
  8,
  true
),
(
  'complaint-desk',
  '09',
  'The Complaint Desk',
  'Customer Handling & Service Recovery',
  'Role Play · Activity',
  '/hero-content.webp',
  '2-3 hours · Role Play · Customer-facing teams',
  'The complaint is not the problem. How it is handled is the problem — or the opportunity. This program is for the teams on the front line of service recovery.',
  '[
    {"num":"1","title":"The Customer''s Reality","desc":"What the customer is actually experiencing when they complain. What they want vs. what they say they want."},
    {"num":"2","title":"The LEARN Framework","desc":"Listen, Empathise, Apologise, Resolve, Notify — a structure for every complaint."},
    {"num":"3","title":"Live Scenarios","desc":"Three escalating complaint situations from frontline, phone, and digital channels."},
    {"num":"4","title":"Beyond Recovery","desc":"Turning a complaint into a retained customer and a business improvement."}
  ]'::jsonb,
  ARRAY['Customer-facing staff on the frontline (retail, service desk, after-sales)','Team leads managing a customer service function','Anyone whose role involves resolving complaints under pressure'],
  ARRAY['Handles complaints using a consistent, structured framework','Manages their own stress response during difficult customer interactions','Resolves complaints faster and with higher first-contact resolution rates','Identifies systemic issues from complaint patterns and escalates them'],
  '[
    {"label":"Duration","value":"2-3 hours"},
    {"label":"Group size","value":"12-25 participants"},
    {"label":"Delivery","value":"In-person or virtual"},
    {"label":"Materials","value":"Role play scripts and LEARN framework cards provided"}
  ]'::jsonb,
  ARRAY['LEARN framework reference card','Three complaint scenario scripts','Service recovery workbook','Team debrief template'],
  9,
  true
)
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- SEED: CONSULTING SERVICES
-- ============================================================

INSERT INTO consulting_services (slug, title, short_desc, hero_title, hero_subtitle, hero_image_url, icon, accent, shadow_color, problem_text, what_we_do, outcomes, who_its_for, sort_order, published)
VALUES
(
  'l-and-d-strategy',
  'Organisational L&D Strategy',
  'Integrate L&D practice and technology into a company-wide plan.',
  'Organisational L&D Strategy',
  'A strategy that connects learning to business performance — not a training calendar with a mission statement.',
  '/hero-consulting.webp',
  'consulting',
  'crimson',
  '#D8315B',
  'Most L&D functions operate reactively. A request comes in, a solution is designed, a session is delivered. This produces activity, not capability. An organisational L&D strategy changes the relationship between learning and business outcomes — making L&D a deliberate driver of performance, not a service function that reacts to it.',
  '[
    {"num":"1","title":"Diagnose the current state","desc":"Audit of existing L&D activity, platforms, content, capability gaps, and stakeholder expectations."},
    {"num":"2","title":"Design the strategy","desc":"Role-based learning pathways, technology architecture, governance model, and success metrics."},
    {"num":"3","title":"Build the roadmap","desc":"Phased implementation plan with clear ownership, timelines, and budget requirements."},
    {"num":"4","title":"Align the organisation","desc":"Stakeholder workshops to build buy-in and establish the L&D operating model."}
  ]'::jsonb,
  ARRAY['A documented L&D strategy aligned to business objectives','Role-specific learning pathways for priority roles','A governance model that connects L&D activity to performance data','A technology roadmap that fits your maturity and budget'],
  ARRAY['CHROs and HR leadership building the case for L&D investment','L&D heads who need a strategy that holds up in the boardroom','Business leaders who want L&D to move performance numbers, not just headcount'],
  1,
  true
),
(
  'learning-pathways',
  'Learning Pathways & Performance Metrics',
  'Role-specific pathways, KPIs, performance management tied to learning.',
  'Learning Pathways & Performance Metrics',
  'The right content, in the right sequence, for the right role — with the metrics to prove it is working.',
  '/hero-consulting.webp',
  'frameworks',
  'sky',
  '#3AA5D4',
  'Generic learning programmes produce generic results. When every role gets the same content, the relevance drops and the completion rates follow. Learning pathways solve this by designing the learning journey for a specific role, a specific career stage, and a specific business context — and then measuring whether it is changing behaviour.',
  '[
    {"num":"1","title":"Role mapping","desc":"Identify the priority roles, the capability gaps within them, and the performance outcomes that matter."},
    {"num":"2","title":"Pathway design","desc":"Sequence the learning: onboarding, skill building, reinforcement, and performance support."},
    {"num":"3","title":"Metric design","desc":"Define leading indicators (engagement, completion, assessment) and lagging indicators (performance KPIs) for each pathway."},
    {"num":"4","title":"Integration","desc":"Connect the pathway to your existing LMS, performance management system, and manager cadence."}
  ]'::jsonb,
  ARRAY['Documented learning pathways for 3-5 priority roles','A measurement framework connecting learning activity to business KPIs','Onboarding pathways that reduce time-to-productivity','Assessment architecture that identifies skill gaps before they cost you'],
  ARRAY['L&D managers designing role-based development programmes','HR business partners who need to connect L&D to performance reviews','Operations leaders who want frontline capability mapped to commercial outcomes'],
  2,
  true
),
(
  'tech-architecture',
  'L&D Tech Architecture & Platform Selection',
  'Which platforms to buy, which to build, how they stitch together.',
  'L&D Tech Architecture & Platform Selection',
  'The right technology stack for your L&D function — without the vendor bias.',
  '/hero-platforms.webp',
  'platform-delivery',
  'moss',
  '#647439',
  'Most L&D technology decisions are made reactively — a vendor demo, a peer recommendation, and a purchase order. The result is a stack that does not fit together, a platform nobody uses, and a technology budget that cannot be justified. We help organisations make the technology decision after understanding the problem it needs to solve.',
  '[
    {"num":"1","title":"Audit the current stack","desc":"What you have, what it is actually being used for, and what the gaps are."},
    {"num":"2","title":"Define the requirements","desc":"Based on your audience, your content types, and your delivery model — not a vendor feature list."},
    {"num":"3","title":"Evaluate the options","desc":"Shortlist, demo, and compare against your requirements. We bring the market knowledge so you do not start from scratch."},
    {"num":"4","title":"Design the architecture","desc":"How the platforms connect, where the data flows, and what the admin burden looks like."}
  ]'::jsonb,
  ARRAY['A technology requirements document you can use to evaluate any vendor','A shortlisted set of platforms that fit your context','An integration architecture that connects your LMS, HRMS, and content tools','A business case for the technology investment with clear ROI assumptions'],
  ARRAY['CHROs making a major platform investment decision','L&D leaders who have inherited a stack that is not working','IT leaders who need to understand the L&D technology landscape before signing off'],
  3,
  true
),
(
  'implementation',
  'Implementation & Adoption',
  'Rollout planning, change management, adoption programme design.',
  'Implementation & Adoption',
  'Buying the platform is the easy part. Getting people to use it is the job.',
  '/hero-consulting.webp',
  'speed',
  'crimson',
  '#D8315B',
  'Platform adoption fails for predictable reasons: no clear communication, no defined user journey, no one accountable for engagement after go-live, and content that does not give the learner a reason to return. We have run adoption programmes for large-scale LMS rollouts and know exactly what the failure points are.',
  '[
    {"num":"1","title":"Adoption programme design","desc":"Communication plan, nomination flow, user journey, and engagement triggers from day one."},
    {"num":"2","title":"Change management","desc":"Stakeholder alignment, manager briefing programme, and champion network design."},
    {"num":"3","title":"Go-live support","desc":"Hands-on support during the first 90 days — when adoption either takes root or dies."},
    {"num":"4","title":"Measurement and optimisation","desc":"Weekly engagement metrics, drop-off analysis, and programme adjustments based on data."}
  ]'::jsonb,
  ARRAY['An adoption programme that produces measurable engagement in the first 90 days','A manager briefing programme that converts managers from blockers to advocates','Weekly engagement reporting with clear actions','A content publishing cadence that keeps learners coming back'],
  ARRAY['L&D teams who have deployed a platform but are not seeing engagement','HR leaders who are 6 months post-launch and not at target adoption','Operations leaders frustrated that their training investment is not being used'],
  4,
  true
)
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- SEED: SITE SETTINGS
-- ============================================================

INSERT INTO site_settings (key, value) VALUES
  ('company_name', 'LearnTech Consulting'),
  ('tagline', 'L&D built for automotive retail. Sharpened for premium retail.'),
  ('email', 'bhaskar@learntechconsulting.in'),
  ('phone', '+91 91672 10002'),
  ('address', 'Vadodara – 391410, Gujarat, India'),
  ('linkedin_url', ''),
  ('footer_description', 'L&D specialists in building frontline capability. Anchored in automotive retail.'),
  ('hero_headline_line1', 'Empowering'),
  ('hero_headline_highlight1', 'frontline.'),
  ('hero_headline_line2', 'Enabling'),
  ('hero_headline_highlight2', 'brand.'),
  ('hero_subtitle', 'L&D built for automotive retail. Sharpened for premium retail. Available to any business that lives or dies by its frontline.')
ON CONFLICT (key) DO NOTHING;
