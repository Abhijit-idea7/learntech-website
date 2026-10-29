// Blog posts. Newest first.
// Edit this file (or ask Bolt) to change what the site shows. Order on the page = order here.
// Set "published": false to hide an item without deleting it.
import type { BlogPost } from '@/lib/types';

export const blogPosts: BlogPost[] = [
  {
    "slug": "what-most-lms-rollouts-get-wrong",
    "title": "What most LMS rollouts get wrong",
    "excerpt": "Most LMS rollouts fail on the adoption side, not the technology side. Here's what we've learned from running a few.",
    "category": "L&D Tech",
    "read_time": "6 min",
    "author": "Bhaskar Bose",
    "published_at": "2025-09-15",
    "hero_image_url": "/hero-blog-lms.webp",
    "body_paragraphs": [
      "Most organisations treat LMS rollout as an IT project. Buy the licence, configure the portal, load the content, send the login credentials. Done.",
      "Then they wonder why nobody logs in.",
      "The platform is 20% of the job. Adoption is the other 80%. Adoption doesn't happen by itself. It requires deliberate design: a nomination flow, a notification cadence, content that earns attention, and someone accountable for the numbers.",
      "We've run this motion at scale with a large 2-wheeler brand. The lesson is consistent: learners open the app when the content is relevant, short, and available in their language.",
      "If this is a problem you're solving, we'd love to talk through what worked and what didn't."
    ],
    "published": true
  },
  {
    "slug": "training-the-secondary-network",
    "title": "Training the secondary network",
    "excerpt": "Lessons from running Learning360 across the TVS dealer secondary network.",
    "category": "Retail L&D",
    "read_time": "8 min",
    "author": "Abhijit Joshi",
    "published_at": "2025-08-28",
    "hero_image_url": "/hero-blog-network.webp",
    "body_paragraphs": [
      "The secondary network is the hardest audience in automotive retail. They aren't employees. They don't report to you. They've got ten other things to do. And they're the ones standing in front of the customer.",
      "When a large 2-wheeler brand asked us to build capability across their secondary retail network, we knew the usual approach wouldn't work. Classroom sessions twice a year, print collateral, email blasts: none of it reaches the person on the shop floor in time.",
      "Learning360 was designed for exactly this audience. Mobile-first. Short content. Available in the language the learner thinks in. A daily challenge that takes 90 seconds.",
      "Over 15 months, active dealers on the platform grew 4.4x. 72% of monthly active users completed at least one daily challenge at peak. 34,000+ minutes of learner time in the peak month.",
      "The secondary network can learn. They just need content that meets them where they are."
    ],
    "published": true
  },
  {
    "slug": "content-is-fuel-not-the-vehicle",
    "title": "Content is fuel. Not the vehicle.",
    "excerpt": "Great content on its own doesn't move the needle. The platform, the delivery, and the adoption motion around it do.",
    "category": "Content",
    "read_time": "5 min",
    "author": "Swapnil Patil",
    "published_at": "2025-08-10",
    "hero_image_url": "/hero-blog-fuel.webp",
    "body_paragraphs": [
      "We've worked with organisations that have genuinely excellent content. Beautifully designed modules. Production-quality videos. SME-reviewed, contextually accurate, role-specific.",
      "And learners never see it.",
      "Content is fuel. It does nothing sitting in the tank. You need a vehicle (a platform that makes it accessible) and a driver (an adoption motion that puts learners in the seat).",
      "The three-part system that works: content that earns attention (short, contextual, relevant to what the learner is doing this week), a platform that meets the learner on their phone, and an adoption programme that creates the habit.",
      "Remove any one of the three and the system fails. This is why we run all three from the same table."
    ],
    "published": true
  }
];
