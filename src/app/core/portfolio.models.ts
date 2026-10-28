export type CategoryId = 'apropos' | 'experiences' | 'projets' | 'competences' | 'contact';
export type TabId = 'tous' | CategoryId;

export interface Tab {
  id: TabId;
  label: string;
}

export interface DetailItem {
  label?: string;
  text: string;
  href?: string;
  external?: boolean;
}

export interface DetailBlock {
  heading?: string;
  paragraph?: string;
  items?: DetailItem[];
}

export interface SearchResult {
  id: string;
  category: CategoryId;
  favicon: string;
  site: string;
  crumb: string;
  title: string;
  date?: string;
  snippet: string;
  tags: string[];
  details: DetailBlock[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProfileLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProfileFact {
  label: string;
  value: string;
}

export interface Profile {
  initials: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  actions: ProfileLink[];
  facts: ProfileFact[];
  interests: string;
  profiles: ProfileLink[];
}
