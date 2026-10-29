// Site-wide settings and short content blocks.
// Ask Bolt to change any value here, e.g. "set the WhatsApp number in site.ts to +91 ...".

export const site = {
  /**
   * While true, empty content slots show a dashed "content needed" box so you can see
   * what is still missing. Set to false before going live.
   */
  showPlaceholders: true,

  contact: {
    company: 'LearnTech Consulting LLP',
    email: 'bhaskar@learntechconsulting.in',
    phone: '+91 91672 10002',
    /** digits only with country code, e.g. '919167210002'. Empty = WhatsApp button hidden. */
    whatsapp: '',
    /** calendar booking page (Google Calendar appointment page, Calendly, Zoho Bookings). Empty = button goes to /contact */
    bookingUrl: '',
    linkedin: '',
    address: 'Vadodara – 391410, Gujarat, India',
    city: 'Vadodara, Gujarat',
  },

  /** numbers band on Home and About. Leave value '' to show a placeholder. */
  stats: [
    { value: '55+', label: 'years of collective L&D experience' },
    { value: '20+', label: 'cities covered by our trainer network' },
    { value: '4,150', label: 'dealers on Learning360' },
    { value: '', label: 'frontline learners trained' },
  ],

  industries: [
    {
      name: 'Automotive OEMs & dealer networks',
      desc: 'Sales, service and channel teams across primary and secondary networks.',
      icon: 'car' as const,
    },
    {
      name: 'Premium & jewellery retail',
      desc: 'Store teams where every customer conversation carries the brand.',
      icon: 'gem' as const,
    },
    {
      name: 'Consumer durables',
      desc: 'Distributor and retailer networks selling considered purchases.',
      icon: 'plug' as const,
    },
    {
      name: 'Any frontline-heavy business',
      desc: 'If your people in front of the customer decide the outcome, we can help.',
      icon: 'store' as const,
    },
  ],

  whyUs: [
    { title: 'Speed + substance', desc: 'Agility of a new agency, decades of L&D experience behind it.' },
    { title: 'Proven frameworks', desc: 'Learner-centred design, 70:20:10 and onboarding best practice in every engagement.' },
    { title: 'Platform-enabled delivery', desc: 'Our own platforms handle rollout, keep learners coming back and show what is working.' },
    { title: 'Performance, not training', desc: 'We measure what changes on Monday: behaviour, confidence, consistency.' },
  ],

  /** The Insights menu item appears once this many posts are published. */
  insightsMinPostsForNav: 5,
};

/** Link for every "Book a call" button. */
export const bookingHref = site.contact.bookingUrl || '/contact';
export const bookingIsExternal = Boolean(site.contact.bookingUrl);
