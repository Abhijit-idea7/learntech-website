/*
# Round 4 text updates

1. Anonymise the TVS Motors references in blog posts
   - "TVS Motors" → "a large 2-wheeler brand" (or equivalent phrasing)
   - Update metrics in blog post "training-the-secondary-network" to match
     the March 2026 reporting window (4.4x growth, 34,000+ minutes)

2. Remove the phone number from site_settings
   - Delete the 'phone' row so the footer/contact pages no longer display it

3. No schema changes, no new tables, no RLS changes
*/

-- Anonymise blog post: "what-most-lms-rollouts-get-wrong"
UPDATE blog_posts
SET body_paragraphs = ARRAY[
  'Most organisations treat LMS rollout as an IT project. Buy the licence, configure the portal, load the content, send the login credentials. Done.',
  'Then they wonder why nobody logs in.',
  'The platform is 20% of the job. Adoption is the other 80%. Adoption doesn''t happen by itself. It requires deliberate design: a nomination flow, a notification cadence, content that earns attention, and someone accountable for the numbers.',
  'We''ve run this motion at scale with a large 2-wheeler brand. The lesson is consistent: learners open the app when the content is relevant, short, and available in their language.',
  'If this is a problem you''re solving, we''d love to talk through what worked and what didn''t.'
]
WHERE slug = 'what-most-lms-rollouts-get-wrong';

-- Anonymise blog post: "training-the-secondary-network" + update metrics
UPDATE blog_posts
SET body_paragraphs = ARRAY[
  'The secondary network is the hardest audience in automotive retail. They aren''t employees. They don''t report to you. They''ve got ten other things to do. And they''re the ones standing in front of the customer.',
  'When a large 2-wheeler brand asked us to build capability across their secondary retail network, we knew the usual approach wouldn''t work. Classroom sessions twice a year, print collateral, email blasts: none of it reaches the person on the shop floor in time.',
  'Learning360 was designed for exactly this audience. Mobile-first. Short content. Available in the language the learner thinks in. A daily challenge that takes 90 seconds.',
  'Over 15 months, active dealers on the platform grew 4.4x. 72% of monthly active users completed at least one daily challenge at peak. 34,000+ minutes of learner time in the peak month.',
  'The secondary network can learn. They just need content that meets them where they are.'
]
WHERE slug = 'training-the-secondary-network';

-- Remove phone from site_settings
DELETE FROM site_settings WHERE key = 'phone';
