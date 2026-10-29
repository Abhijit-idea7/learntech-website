-- ============================================================
-- TABLES: content_formats and platforms
-- ============================================================

CREATE TABLE IF NOT EXISTS content_formats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  number text NOT NULL DEFAULT '',
  name text NOT NULL DEFAULT '',
  tagline text DEFAULT '',
  description text DEFAULT '',
  when_to_use text DEFAULT '',
  what_you_get text[] DEFAULT '{}',
  video_url text DEFAULT '',
  icon text DEFAULT '',
  tile_bg text DEFAULT 'bg-paper',
  tile_text text DEFAULT 'text-navy',
  sort_order int DEFAULT 0,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS platforms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL DEFAULT '',
  is_flagship boolean NOT NULL DEFAULT false,
  tagline text DEFAULT '',
  description text DEFAULT '',
  key_capabilities text[] DEFAULT '{}',
  video_url text DEFAULT '',
  icon text DEFAULT '',
  accent text DEFAULT 'crimson',
  shadow_color text DEFAULT '#D8315B',
  external_url text DEFAULT '',
  sort_order int DEFAULT 0,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS content_formats_sort_idx ON content_formats(sort_order);
CREATE INDEX IF NOT EXISTS platforms_sort_idx ON platforms(sort_order);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE content_formats ENABLE ROW LEVEL SECURITY;
ALTER TABLE platforms ENABLE ROW LEVEL SECURITY;

-- content_formats
DROP POLICY IF EXISTS "public_read_published_formats" ON content_formats;
CREATE POLICY "public_read_published_formats" ON content_formats FOR SELECT
  TO anon USING (published = true);

DROP POLICY IF EXISTS "admin_read_all_formats" ON content_formats;
CREATE POLICY "admin_read_all_formats" ON content_formats FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_formats" ON content_formats;
CREATE POLICY "admin_insert_formats" ON content_formats FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_formats" ON content_formats;
CREATE POLICY "admin_update_formats" ON content_formats FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_formats" ON content_formats;
CREATE POLICY "admin_delete_formats" ON content_formats FOR DELETE
  TO authenticated USING (true);

-- platforms
DROP POLICY IF EXISTS "public_read_published_platforms" ON platforms;
CREATE POLICY "public_read_published_platforms" ON platforms FOR SELECT
  TO anon USING (published = true);

DROP POLICY IF EXISTS "admin_read_all_platforms" ON platforms;
CREATE POLICY "admin_read_all_platforms" ON platforms FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_platforms" ON platforms;
CREATE POLICY "admin_insert_platforms" ON platforms FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_platforms" ON platforms;
CREATE POLICY "admin_update_platforms" ON platforms FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_platforms" ON platforms;
CREATE POLICY "admin_delete_platforms" ON platforms FOR DELETE
  TO authenticated USING (true);

-- ============================================================
-- SEED: CONTENT FORMATS
-- ============================================================

INSERT INTO content_formats (slug, number, name, tagline, description, when_to_use, what_you_get, icon, tile_bg, tile_text, sort_order, published)
VALUES
(
  'ilt',
  '01',
  'ILT',
  'Instructor-led classroom training',
  'Facilitator-led sessions designed around real practice. Complex topics, new product launches, and real-time group exercises that build both skill and confidence.',
  'Best for complex topics, new product launches, peer learning, and when real-time practice and facilitator feedback matter.',
  ARRAY['Facilitator guide and slide deck', 'Participant workbook', 'Role play scripts and scenarios', 'Activity debrief templates', 'Post-session action commitment card'],
  'ilt',
  'bg-crimson',
  'text-white',
  1,
  true
),
(
  'elearning',
  '02',
  'eLearning',
  'Self-paced digital modules',
  'SCORM-compliant, browser and mobile-ready digital modules. Scenario-based, knowledge-check enabled, and built to work offline where connectivity is patchy.',
  'Best for scale, consistent messaging across locations, refresher training, and compliance topics that need tracking.',
  ARRAY['SCORM 1.2 / xAPI package', 'Mobile-optimised layout', 'Knowledge checks and assessments', 'Completion certificate logic', 'Source files for future updates'],
  'elearning',
  'bg-paper',
  'text-navy',
  2,
  true
),
(
  'videos',
  '03',
  'Videos',
  'Short-form learning videos',
  'Bite-sized explainer and demonstration videos — product features, process walkthroughs, soft skill scenarios. Produced in-house with real scripts and professional editing.',
  'Best for product demonstrations, process explainers, and just-in-time support content that learners access on their phones.',
  ARRAY['Scripted and edited MP4 video', 'Subtitles in required languages', 'Thumbnail and preview card', 'LMS-ready upload file'],
  'videos',
  'bg-sky',
  'text-navy',
  3,
  true
),
(
  'animations',
  '04',
  'Animations',
  'Motion-based concept content',
  'Animated explainers for abstract concepts, data, and processes that are hard to visualise any other way. Clean motion graphics or character-driven story formats.',
  'Best for data-heavy concepts, system overviews, and topics that benefit from visual storytelling over talking heads.',
  ARRAY['Animated MP4 file', 'Voiceover in required languages', 'Source project file', 'Compressed web-ready version'],
  'animations',
  'bg-paper',
  'text-navy',
  4,
  true
),
(
  'product-guides',
  '05',
  'Product Guides',
  'Reference tools for the shop floor',
  'Structured digital or print reference materials — spec sheets, comparison guides, objection-handling tools. Designed for the moment of use, not a training room.',
  'Best for product launches, competitive comparisons, and point-of-sale reference that a frontline person can pull up mid-conversation.',
  ARRAY['Designed PDF or web page', 'Printable version', 'Digital interactive version (optional)', 'LMS-compatible package'],
  'product-guides',
  'bg-paper',
  'text-navy',
  5,
  true
),
(
  'competition-tools',
  '06',
  'Competition Tools',
  'Competitive enablement content',
  'Battle cards, competitor comparison tools, and objection-handling frameworks. Built to be used in the moment — not read once and forgotten.',
  'Best for sales teams facing competitive pressure, new product launches with direct competitors, and any role that needs fast, accurate competitive information.',
  ARRAY['Battle card deck (print + digital)', 'Competitor comparison matrix', 'Objection-handling scripts', 'Quarterly update template'],
  'competition-tools',
  'bg-moss',
  'text-white',
  6,
  true
),
(
  'ojt-kits',
  '07',
  'OJT Kits',
  'On-the-job training packs',
  'Structured on-the-job learning kits — observation checklists, practice task cards, and sign-off forms. Designed to make the workplace itself the training room.',
  'Best for process adoption, SOP compliance, and skills that require hands-on practice under supervision.',
  ARRAY['Structured OJT task card', 'Observation and sign-off checklist', 'Buddy / supervisor guide', 'Competency sign-off sheet'],
  'ojt-kits',
  'bg-paper',
  'text-navy',
  7,
  true
),
(
  'mobile-micro',
  '08',
  'Mobile Micro',
  'Short mobile-first modules',
  'Ultra-short content designed for a 2-3 minute mobile session. One concept, one visual, one question. Built for the phone in the shop between two customers.',
  'Best for daily reinforcement, product updates, compliance reminders, and any learning that needs to happen in the flow of work.',
  ARRAY['Mobile-optimised HTML5 module', 'Single-screen per concept layout', 'Integrated knowledge check', 'Push notification copy (for LMS)'],
  'mobile-micro',
  'bg-navy',
  'text-white',
  8,
  true
)
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- SEED: PLATFORMS
-- ============================================================

INSERT INTO platforms (slug, name, is_flagship, tagline, description, key_capabilities, icon, accent, shadow_color, external_url, sort_order, published)
VALUES
(
  'learning360',
  'Learning360',
  true,
  'Mobile-first LMS for distributed frontline teams',
  'Our own LMS, built for distributed frontline audiences. Content lives in a self-paced library. Learners get personalised recommendations. A daily 3-question challenge keeps the muscle warm. Built-in translation lets learners consume content in the language they think in. Works on the phone in the shop, between two customers.',
  ARRAY['Self-paced learning library', 'On-demand content access', 'Classroom & virtual training management', 'Content variety (SCORM, HTML, video, PDF)', 'Personalised content recommendations', 'Daily 3-question skill challenge', 'Built-in multi-language translation', 'Manager dashboard and reporting'],
  'platform-delivery',
  'sky',
  '#3AA5D4',
  '',
  1,
  true
),
(
  'paperless-training',
  'Paperless Training',
  false,
  'Training management for large-scale delivery',
  'Training management for large-scale delivery. Attendance, assessments, and training materials — all digital. Designed for the coordinator managing 200 sessions a month, not just the learner completing one.',
  ARRAY['Digital attendance tracking', 'Trainer and venue scheduling', 'Assessment and test management', 'Materials distribution', 'Real-time coordinator dashboard', 'Compliance and audit reports'],
  'delivery-digital',
  'crimson',
  '#D8315B',
  'https://paperlesstraining.com',
  2,
  true
),
(
  'smartlist',
  'SmartList',
  false,
  'Recruitment and skill assessment for high-volume hiring',
  'Recruitment and skill assessment for high-volume frontline hiring. Structured assessments, automated shortlisting, and recruiter dashboards — built for the pace and volume of retail and automotive hiring cycles.',
  ARRAY['Structured competency assessments', 'Automated scoring and shortlisting', 'Bulk candidate management', 'Custom assessment builder', 'Recruiter and hiring manager dashboards', 'Integration-ready APIs'],
  'competition-tools',
  'sky',
  '#3AA5D4',
  'https://smartlist.co.in',
  3,
  true
),
(
  'reelchamp',
  'ReelChamp',
  false,
  'UGC and skill contest platform for learner engagement',
  'User-generated content and skill contest platform. Videos, leaderboards, and peer engagement — built to surface skill and drive competitive energy across a distributed team.',
  ARRAY['Video submission contests', 'Live leaderboards and rankings', 'Peer voting and feedback', 'Manager moderation tools', 'Campaign and challenge builder', 'Performance badges and rewards'],
  'videos',
  'moss',
  '#647439',
  'https://reelchamp.in',
  4,
  true
),
(
  'onboardbox',
  'OnBoardBox',
  false,
  'Customised employee onboarding experience',
  'Customised employee welcome and onboarding platform. Pre-joining content, Day 1 journeys, and structured 30-60-90 day onboarding plans — delivered digitally to every new hire, regardless of location.',
  ARRAY['Pre-joining content delivery', 'Day 1 digital welcome kit', '30-60-90 day onboarding journeys', 'Manager and buddy notifications', 'Document collection and verification', 'Onboarding completion tracking'],
  'product-guides',
  'crimson',
  '#0F2A5F',
  'https://onboardbox.in',
  5,
  true
)
ON CONFLICT (slug) DO NOTHING;
