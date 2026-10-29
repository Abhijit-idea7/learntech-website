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

export interface Solution {
  slug: string;
  title: string;
  /** one line used on cards */
  short: string;
  /** hero sub-heading */
  intro: string;
  icon: 'launch' | 'network' | 'onboarding' | 'sales' | 'strategy';
  hero_image: string;
  /** signs the buyer recognises */
  challenges: string[];
  approach: { title: string; desc: string }[];
  /** slugs from the other content files; shown as "what's included" */
  includes: {
    consulting?: string[];
    formats?: string[];
    platforms?: string[];
    programs?: string[];
  };
  /** slugs from case-studies.ts */
  work?: string[];
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
  solutions?: string[];
  /** draft = shown only as a placeholder while placeholders are switched on */
  status: 'live' | 'draft';
}
