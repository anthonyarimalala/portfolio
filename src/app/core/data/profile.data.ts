import {
  AboutData,
  Experience,
  Highlight,
  InterestPhoto,
  ProfileHeader,
  SoftSkill,
} from '../models/portfolio.models';
import { GITHUB } from './contact.data';

export const PROFILE_HEADER: ProfileHeader = {
  name: 'Randriarimalala Johary Anthony',
  subtitle: 'Informatique · Développement · Data · IA',
  photo: 'images/moi/moi.jpeg',
  photoAlt: 'Photo de profil de Johary Anthony Randriarimalala',
  photoCaption: 'Portfolio · Développeur Junior',
};

export const ABOUT: AboutData = {
  text: 'Curieux et méthodique, j’aime comprendre comment les choses fonctionnent pour mieux les construire. Je développe des applications en privilégiant la qualité du code, la fiabilité et l’expérience utilisateur.',
  link: { label: 'GitHub', href: GITHUB.href },
  facts: [
    {
      label: 'Formation',
      lines: [
        'Master 1 en informatique · IT University (oct. 2026)',
        'Licence en informatique, option Développement · IT University (juil. 2025)',
        'Baccalauréat scientifique (2021)',
      ],
    },
    {
      label: 'Expérience',
      lines: ['2 stages professionnels (HPI Business Partner, be ys Outsourcing Services)'],
    },
    {
      label: 'Langues',
      lines: ['Malagasy (natif), français (avancé), anglais (intermédiaire)'],
    },
    { label: 'Disponibilité', lines: ['100 % · Poste ou stage'] },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    logo: 'images/logos/hpi_.png',
    logoAlt: 'Logo HPI Business Partner',
    role: 'Développeur Full Stack — Stage',
    summary: 'HPI Business Partner · Laravel · PostgreSQL · RGPD · Déc. 2024 – Juil. 2025',
    description:
      'Projet de fin de licence : conception et livraison en autonomie d’une application web de back-office pour la gestion administrative et financière (patients, devis, paiements), conforme au RGPD, avec authentification sécurisée, interface responsive et intégrations d’API tierces. Collaboration étroite avec les équipes back-office pour optimiser leur flux de travail quotidien.',
    highlights: [
      {
        label: 'Résultats',
        text: 'réduction de 40 % du temps de gestion administrative · migration sécurisée des données de plus de 500 patients.',
      },
    ],
  },
  {
    logo: 'images/logos/beys_.png',
    logoAlt: 'Logo be ys Outsourcing Services',
    role: 'Développeur Back-end — Stage',
    summary:
      'be ys Outsourcing Services (anciennement EazyTech) · .NET · API REST · Kubernetes · Juil. 2024 – Oct. 2024',
    description:
      'Première expérience professionnelle déterminante : développement d’endpoints API optimisés pour faciliter le travail des développeurs front-end et tiers, première expérience concrète avec Kubernetes et contribution aux processus d’intégration et de déploiement continus.',
    highlights: [
      {
        label: 'Livrables',
        text: 'documentation complète avec Swagger et guides d’intégration',
      },
      { label: 'Technologies', text: '.NET, API REST, Postman, Kubernetes.' },
    ],
  },
];

export const INTRO_HIGHLIGHT: Highlight = {
  favicon: 'W',
  name: 'Portfolio professionnel',
  meta: 'Développeur junior · Madagascar',
  title: 'Bonjour, je crée des applications performantes et fiables.',
  snippet:
    'Je développe des applications avec une attention particulière à la qualité du code, à la fiabilité et à l’expérience utilisateur.',
  thumb: 'https://picsum.photos/seed/guitar-stage/230/230',
  thumbAlt: 'Illustration du portfolio',
};

export const SOFT_SKILLS_HIGHLIGHT: Highlight = {
  favicon: 'R',
  faviconColor: '#34a853',
  name: 'Compétences relationnelles',
  meta: 'Savoir-être · Communication · Organisation',
  title: 'Les qualités que j’apporte au sein d’une équipe',
  snippet:
    'Résolution de problèmes, apprentissage rapide, adaptabilité, communication claire et professionnelle, gestion du temps et des priorités.',
  thumb: 'https://picsum.photos/seed/competences-relationnelles/230/230',
  thumbAlt: 'Illustration des compétences relationnelles',
};

export const SOFT_SKILLS: SoftSkill[] = [
  {
    meta: 'Analyse · Méthode',
    title: 'Résolution de problèmes',
    text: 'Je cherche la cause d’un problème avant de le corriger, puis je propose une solution fiable et durable.',
    tags: ['Analyse', 'Esprit logique', 'Débogage'],
  },
  {
    meta: 'Évolution · Autonomie',
    title: 'Apprentissage rapide',
    text: 'Montée en compétences rapide selon les besoins du projet : nouveaux outils, nouveaux frameworks, nouvelles méthodes.',
    tags: ['Autodidacte', 'Curiosité', 'Montée en compétences'],
  },
  {
    meta: 'Flexibilité · Équipe',
    title: 'Adaptabilité',
    text: 'Je m’adapte facilement aux contextes, aux technologies et aux équipes avec lesquelles je travaille.',
    tags: ['Flexibilité', 'Esprit d’équipe'],
  },
  {
    meta: 'Échanges · Professionnalisme',
    title: 'Communication claire et professionnelle',
    text: 'J’explique mes choix simplement, à l’écrit comme à l’oral, avec les équipes techniques et non techniques.',
    tags: ['Écoute', 'Clarté', 'Documentation'],
  },
  {
    meta: 'Organisation · Efficacité',
    title: 'Gestion du temps et des priorités',
    text: 'J’organise mon travail pour respecter les délais et me concentrer d’abord sur ce qui compte le plus.',
    tags: ['Organisation', 'Priorisation', 'Respect des délais'],
  },
];

export const INTERESTS: string[] = ['Jeux vidéos', 'Basketball', 'Football', 'Billard', 'Lecture'];

export const INTEREST_PHOTOS: InterestPhoto[] = [
  'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'https://images.unsplash.com/photo-1770802995567-4472858fcf42?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  'https://images.unsplash.com/photo-1521714161819-15534968fc5f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
].map((src) => ({ src, alt: 'Illustration du portfolio' }));
