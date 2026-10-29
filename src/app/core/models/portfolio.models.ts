import type { IconName } from '../../shared/icon/icons';

/* ------------------------------------------------------------------ */
/* Contacts                                                            */
/* ------------------------------------------------------------------ */

/** Un moyen de me contacter ou un profil en ligne. */
export interface ContactEntry {
  label: string;
  /** Texte secondaire affiché sous le libellé (menu « Contact »). */
  detail: string;
  href: string;
  /** Ouvre le lien dans un nouvel onglet. */
  external?: boolean;
  /** Logo de marque (URL). */
  logo?: string;
  /** Pictogramme de la bibliothèque interne, utilisé en l'absence de logo. */
  icon?: IconName;
  iconColor?: string;
  /** Valeur placée dans le presse-papiers par le bouton « copier ». */
  copyValue?: string;
  copyLabel?: string;
}

/* ------------------------------------------------------------------ */
/* Profil                                                              */
/* ------------------------------------------------------------------ */

export interface ProfileHeader {
  name: string;
  subtitle: string;
  photo: string;
  photoAlt: string;
  photoCaption: string;
}

export interface Fact {
  label: string;
  lines: string[];
}

export interface AboutData {
  text: string;
  link: { label: string; href: string };
  facts: Fact[];
}

export interface ExperienceHighlight {
  label: string;
  text: string;
}

export interface Experience {
  logo: string;
  logoAlt: string;
  role: string;
  summary: string;
  description: string;
  highlights: ExperienceHighlight[];
}

/** Bloc « résultat de recherche » : pastille, titre cliquable, extrait et vignette. */
export interface Highlight {
  favicon: string;
  faviconColor?: string;
  name: string;
  meta: string;
  title: string;
  snippet: string;
  thumb: string;
  thumbAlt: string;
}

export interface SoftSkill {
  meta: string;
  title: string;
  text: string;
  tags: string[];
}

export interface InterestPhoto {
  src: string;
  alt: string;
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

/** Fragment de texte d'une réponse : texte simple, gras ou lien. */
export interface FaqSegment {
  text: string;
  bold?: boolean;
  href?: string;
  external?: boolean;
}

/** Une ligne est une suite de fragments ; un paragraphe est une suite de lignes (saut de ligne entre chaque). */
export type FaqLine = FaqSegment[];
export type FaqParagraph = FaqLine[];

export interface FaqItem {
  question: string;
  answer: FaqParagraph[];
}

/* ------------------------------------------------------------------ */
/* Projets                                                             */
/* ------------------------------------------------------------------ */

export type ProjectBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; items: string[] };

export interface Project {
  category: string;
  title: string;
  /** Logo de la technologie principale (URL) ; à défaut, une pastille avec une lettre. */
  logo?: string;
  letter?: string;
  letterColor?: string;
  name: string;
  sub: string;
  meta: string;
  /** Captures d'écran ; la première sert de couverture. */
  gallery: string[];
  description: ProjectBlock[];
  tags: string[];
}

/* ------------------------------------------------------------------ */
/* Technologies                                                        */
/* ------------------------------------------------------------------ */

export interface Technology {
  name: string;
  href: string;
  logo: string;
}
