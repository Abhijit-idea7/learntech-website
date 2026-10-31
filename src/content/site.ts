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

  /** The Insights menu item appears once this many posts are published. */
  insightsMinPostsForNav: 5,
};

/** Link for every "Book a call" button. */
export const bookingHref = site.contact.bookingUrl || '/contact';
export const bookingIsExternal = Boolean(site.contact.bookingUrl);
