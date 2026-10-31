export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  author: string;
  published_at: string | null;
  hero_image_url: string;
  body_paragraphs: string[];
  published: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ProgramModule {
  num: string;
  title: string;
  desc: string;
}

export interface ProgramLogistic {
  label: string;
  value: string;
}

export interface Program {
  id?: string;
  slug: string;
  number: string;
  name: string;
  topic: string;
  format: string;
  hero_image_url: string;
  hero_subtitle: string;
  problem_statement: string;
  modules: ProgramModule[];
  personas: string[];
  outcomes: string[];
  logistics: ProgramLogistic[];
  pack_items: string[];
  brochure_url?: string;
  sort_order: number;
  published: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ConsultingServiceStep {
  num: string;
  title: string;
  desc: string;
}

export interface ConsultingService {
  id?: string;
  slug: string;
  title: string;
  short_desc: string;
  hero_title: string;
  hero_subtitle: string;
  hero_image_url: string;
  icon: string;
  accent: string;
  shadow_color: string;
  problem_text: string;
  what_we_do: ConsultingServiceStep[];
  outcomes: string[];
  who_its_for: string[];
  sort_order: number;
  published: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface SiteSetting {
  key: string;
  value: string;
  updated_at?: string;
}

export interface ContentFormat {
  id?: string;
  slug: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  when_to_use: string;
  what_you_get: string[];
  video_url: string;
  icon: string;
  tile_bg: string;
  tile_text: string;
  sort_order: number;
  published: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Platform {
  id?: string;
  slug: string;
  name: string;
  is_flagship: boolean;
  tagline: string;
  description: string;
  key_capabilities: string[];
  video_url: string;
  icon: string;
  accent: string;
  shadow_color: string;
  external_url: string;
  screenshots?: string[];
  who_its_for?: string[];
  outcomes?: string[];
  sort_order: number;
  published: boolean;
  created_at?: string;
  updated_at?: string;
}

// ===== Added in the re-layout (Oct 2026) =====

/** A card in "Why clients come to us" on the home page. */
export interface Reason {
  slug: string;
  title: string;
  /** one line under the title */
  short: string;
  icon: 'launch' | 'network' | 'onboarding' | 'tech' | 'strategy';
  /** 2-3 short points: what we actually do */
  points: string[];
  /** chips linking to how we execute it */
  how: { pillar: 'content' | 'platforms' | 'programs' | 'talk'; label: string; to: string }[];
  /** slug of a case study in case-studies.ts */
  work?: string;
  published: boolean;
}

export interface CaseStudy {
  slug: string;
  /** how the client is shown publicly, e.g. "A large 2-wheeler brand" */
  client: string;
  industry: string;
  title: string;
  summary: string;
  problem?: string;
  approach?: string[];
  results?: { value: string; label: string }[];
  image?: string;
  /** if set, the card links here instead of the standard case study template */
  href?: string;
  /**
   * What we used, shown as chips on the case study and used by the filters on Our Work.
   * Use 'content' for content & delivery, a platform slug (e.g. 'learning360') or a program slug.
   */
  uses?: string[];
  /** draft = shown only as a placeholder while placeholders are switched on */
  status: 'live' | 'draft';
}
