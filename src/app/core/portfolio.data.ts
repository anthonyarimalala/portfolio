import { FaqItem, Profile, SearchResult, Tab } from './portfolio.models';

/* ------------------------------------------------------------------ */
/* Identité du site                                                    */
/* ------------------------------------------------------------------ */

export const FULL_NAME = 'Johary Anthony Randriarimalala';
export const SEARCH_QUERY = 'johary anthony randriarimalala';
export const SITE_TITLE = `${FULL_NAME} | Développeur Junior`;
export const RESULTS_TITLE = `${SEARCH_QUERY} - Recherche`;
export const LEGAL_NOTICE = `© 2026 ${FULL_NAME}. Tous droits réservés.`;

const CONTACT = {
  email: 'anthonyarimalala@gmail.com',
  phone: '+261 34 61 832 96',
  phoneHref: 'tel:+261346183296',
  linkedinLabel: 'linkedin.com/in/anthony-arimalala-7b0534329',
  linkedinHref: 'https://www.linkedin.com/in/anthony-arimalala-7b0534329/',
  githubLabel: 'github.com/anthonyarimalala',
  githubHref: 'https://github.com/anthonyarimalala',
};

/* ------------------------------------------------------------------ */
/* Onglets                                                             */
/* ------------------------------------------------------------------ */

export const TABS: Tab[] = [
  { id: 'tous', label: 'Tous' },
  { id: 'apropos', label: 'À propos' },
  { id: 'experiences', label: 'Expériences' },
  { id: 'projets', label: 'Projets' },
  { id: 'competences', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
];

/* ------------------------------------------------------------------ */
/* Résultats de recherche                                              */
/* ------------------------------------------------------------------ */

export const RESULTS: SearchResult[] = [
  {
    id: 'apropos-profil',
    category: 'apropos',
    favicon: 'A',
    site: FULL_NAME,
    crumb: 'portfolio › à-propos',
    title: `${FULL_NAME} – Développeur Junior full-stack`,
    snippet:
      "Bonjour, je crée des applications performantes et fiables. Je développe des applications web et des API REST avec une attention particulière à la qualité du code, à la fiabilité et à l'expérience utilisateur.",
    tags: ['Fullstack', 'Backend', 'Disponible à 100 %'],
    details: [
      {
        heading: 'Développeur orienté full-stack',
        paragraph:
          "Curieux et méthodique, j'aime comprendre comment les choses fonctionnent pour mieux les construire. Actuellement étudiant en informatique, je cherche à mettre ma logique et ma créativité au service de projets concrets.",
      },
      {
        heading: 'Soft skills',
        paragraph:
          'Résolution de problèmes, apprentissage rapide, adaptabilité, communication claire, gestion du temps.',
      },
      {
        heading: 'Langues',
        items: [
          { label: 'Malagasy', text: 'langue maternelle' },
          { label: 'Français', text: 'avancé' },
          { label: 'Anglais', text: 'intermédiaire' },
        ],
      },
    ],
  },
  {
    id: 'apropos-parcours',
    category: 'apropos',
    favicon: 'F',
    site: 'IT University',
    crumb: 'portfolio › parcours-académique',
    title: 'Parcours académique – Master 1 en informatique, IT University',
    date: 'oct. 2026',
    snippet:
      'Master 1 en informatique. Licence en informatique (option Développement) obtenue en juillet 2025, après un baccalauréat scientifique en 2021.',
    tags: ['Master 1', 'Licence', 'Baccalauréat scientifique'],
    details: [
      {
        items: [
          { label: 'Master 1 en informatique', text: 'IT University, oct. 2026' },
          {
            label: 'Licence en informatique (option Développement)',
            text: 'IT University, juil. 2025',
          },
          { label: 'Baccalauréat scientifique', text: '2021' },
        ],
      },
    ],
  },
  {
    id: 'exp-hpi',
    category: 'experiences',
    favicon: 'H',
    site: 'HPI BUSINESS PARTNER',
    crumb: 'portfolio › expériences › hpi-business-partner',
    title: 'Stagiaire en développement full-stack – HPI BUSINESS PARTNER',
    date: 'Déc. 2024 – juil. 2025',
    snippet:
      "Application web de back-office pour la gestion administrative et financière d'un cabinet dentaire : RGPD, authentification sécurisée et UI responsive.",
    tags: ['Laravel', 'PostgreSQL', 'RGPD', 'UI responsive'],
    details: [
      {
        heading: 'À propos de la mission',
        paragraph:
          "Projet de fin de licence : développement complet d'une application de gestion pour cabinet dentaire, avec une architecture sécurisée et conforme aux normes RGPD. Collaboration étroite avec les équipes back-office pour comprendre leurs besoins et optimiser leur flux de travail quotidien.",
      },
      {
        heading: 'Réalisations clés',
        items: [
          { text: 'Réduction de 40 % du temps de gestion administrative' },
          { text: 'Migration sécurisée des données de 500+ patients' },
          { text: "Mise en place d'un système d'authentification pour sécuriser les données" },
        ],
      },
    ],
  },
  {
    id: 'exp-beys',
    category: 'experiences',
    favicon: 'b',
    site: 'be ys (anciennement EasyTech)',
    crumb: 'portfolio › expériences › be-ys',
    title: 'Stagiaire en développement backend – be ys (anciennement EasyTech)',
    date: 'Juil. 2024 – oct. 2024',
    snippet:
      "Développement d'API REST en .NET pour optimiser la gestion des activités locales et améliorer la fiabilité des intégrations métiers.",
    tags: ['.NET', 'API REST', 'Postman', 'Kubernetes'],
    details: [
      {
        heading: 'À propos de la mission',
        paragraph:
          "Une première expérience déterminante dans mon parcours : au-delà de l'initiation au monde professionnel, elle m'a permis d'acquérir des compétences clés et de mieux appréhender les codes de l'entreprise.",
      },
      {
        heading: 'Réalisations clés',
        items: [
          {
            text: 'Endpoints API optimisés pour faciliter le travail des développeurs front-end et tiers',
          },
          {
            text: "Première expérience concrète avec Kubernetes et contribution aux processus d'intégration et de déploiement continus",
          },
          { text: "Documentation complète avec Swagger et guides d'intégration" },
        ],
      },
    ],
  },
  {
    id: 'proj-centre-commercial',
    category: 'projets',
    favicon: 'C',
    site: 'Projet académique · Web',
    crumb: 'portfolio › projets › centre-commercial',
    title: 'Application web de gestion de centre commercial (MEAN)',
    snippet:
      "Plateforme web complète pour la gestion centralisée d'un centre commercial avec trois profils : administrateur, gestionnaire et commerçant.",
    tags: ['MEAN', 'Gestion', 'SaaS', 'Multi-profils', 'Académique'],
    details: [
      {
        items: [
          {
            label: 'Boutiques',
            text: "enregistrement et suivi (informations, emplacement, statut), attribution des espaces, historique des occupations, gestion de stock",
          },
          {
            label: 'Utilisateurs et rôles',
            text: 'authentification sécurisée, accès par profil, contrôle des permissions',
          },
          {
            label: 'Facturation et paiements',
            text: 'génération automatique des loyers et charges, suivi payé / en attente / retard, historique, notifications',
          },
          {
            label: 'Tableau de bord',
            text: "statistiques globales, revenus, taux d'occupation, graphiques et indicateurs clés",
          },
          { label: 'Supervision', text: "suivi des accès, journal d'activité (logs)" },
          {
            label: 'Expérience utilisateur',
            text: 'interface moderne, navigation adaptée à chaque profil, responsive',
          },
        ],
      },
    ],
  },
  {
    id: 'proj-api-rest',
    category: 'projets',
    favicon: 'R',
    site: 'Projet · API',
    crumb: 'portfolio › projets › api-rest',
    title: 'API REST sécurisée (Spring Boot, Node.js, Express.js, MongoDB)',
    snippet:
      'API REST sécurisée avec Spring Boot, mais aussi avec Node.js, Express.js et MongoDB. Authentification JWT, validation des requêtes, gestion des rôles et documentation des endpoints.',
    tags: ['Spring Boot', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    details: [
      {
        items: [
          { text: 'Authentification JWT' },
          { text: 'Validation des requêtes' },
          { text: 'Gestion des rôles' },
          { text: 'Documentation des endpoints' },
        ],
      },
    ],
  },
  {
    id: 'proj-data-science',
    category: 'projets',
    favicon: 'D',
    site: 'Projet · Data Science',
    crumb: 'portfolio › projets › data-science',
    title: 'Premiers pas en analyse de données & apprentissage automatique',
    snippet: "Découverte de l'analyse de données et des bases du machine learning avec Python.",
    tags: ['Python', 'Pandas', 'Machine Learning'],
    details: [
      {
        items: [
          { text: 'Nettoyage simple de données avec Pandas' },
          { text: 'Analyses exploratoires de base' },
          { text: 'Visualisations avec Matplotlib / Seaborn' },
          { text: 'Premiers modèles simples avec Scikit-learn' },
        ],
      },
    ],
  },
  {
    id: 'proj-portfolio',
    category: 'projets',
    favicon: 'P',
    site: 'Projet · Portfolio',
    crumb: 'portfolio › projets › portfolio',
    title: 'Portfolio – Angular, design responsive et formulaire EmailJS',
    snippet:
      "Portfolio moderne avec Angular, design responsive, section projets dynamique et formulaire de contact avec envoi d'email via EmailJS. Déploiement en ligne avec GitHub Pages.",
    tags: ['Angular', 'Frontend', 'EmailJS'],
    details: [
      {
        items: [
          { text: 'Portfolio moderne développé avec Angular' },
          { text: 'Design responsive' },
          { text: 'Section projets dynamique' },
          { text: "Formulaire de contact avec envoi d'email via EmailJS" },
          { text: 'Déploiement en ligne avec GitHub Pages' },
        ],
      },
    ],
  },
  {
    id: 'proj-morpion',
    category: 'projets',
    favicon: 'M',
    site: 'Projet · Jeu réseau',
    crumb: 'portfolio › projets › morpion-reseau',
    title: 'Jeu du Morpion en réseau local (Java, Sockets)',
    snippet:
      "Jeu multijoueur en Java permettant à deux ordinateurs de s'affronter via sockets sur un même réseau. Un projet ancien, pour comprendre Java.",
    tags: ['Java', 'Socket', 'Réseau', 'Multijoueur'],
    details: [
      {
        items: [
          { text: 'Architecture client-serveur avec sockets Java' },
          { text: 'Synchronisation des coups en temps réel' },
          { text: 'Gestion des tours et détection de victoire' },
          { text: 'Interface graphique simple (Swing / JavaFX)' },
          { text: 'Sauvegarde locale des scores' },
        ],
      },
    ],
  },
  {
    id: 'proj-systemes',
    category: 'projets',
    favicon: 'S',
    site: 'Projet · Systèmes',
    crumb: 'portfolio › projets › windows-linux',
    title: 'Installation & administration Windows & Linux',
    snippet:
      "Tests et prise en main des systèmes Windows et Linux : installation de différents OS, configuration de base, découverte de l'administration système et premiers scripts d'automatisation.",
    tags: ['Windows', 'Linux', 'Systèmes'],
    details: [
      {
        items: [
          { text: 'Installation de différents OS (Windows / Linux)' },
          { text: 'Tests de fonctionnalités et configuration de base' },
          { text: "Découverte de l'administration système" },
          { text: "Premiers scripts simples pour automatisation" },
        ],
      },
    ],
  },
  {
    id: 'competences',
    category: 'competences',
    favicon: '</>',
    site: 'Compétences techniques',
    crumb: 'portfolio › compétences',
    title: 'Compétences – Python, Java, PHP, TypeScript, Laravel, Spring, Angular',
    snippet:
      "Langages, frameworks, bases de données, outils et architecture : de la conception d'API REST à la modélisation de données.",
    tags: ['Python', 'Java', 'PHP', 'TypeScript', 'Laravel', 'Spring', 'Angular', 'Express.js'],
    details: [
      {
        items: [
          { label: 'Langages', text: 'Python, Java, PHP, TypeScript' },
          { label: 'Frameworks', text: 'Laravel, Spring, Angular, Express.js' },
          { label: 'Bases de données', text: 'PostgreSQL, MySQL, MongoDB' },
          { label: 'Outils', text: 'Git pour le suivi de versions et la collaboration' },
          {
            label: 'IA & assistants de code',
            text: "Claude, OpenAI Codex et GitHub Copilot pour l'assistance au développement, la génération de code et l'optimisation",
          },
          {
            label: 'Architecture & API',
            text: "conception d'API REST, MVC, modélisation de données",
          },
        ],
      },
    ],
  },
  {
    id: 'contact',
    category: 'contact',
    favicon: '@',
    site: 'Contact',
    crumb: 'portfolio › contact',
    title: `Contacter ${FULL_NAME} – Disponible à 100 %`,
    snippet:
      'Restons connectés : disponible à 100 % pour un poste ou un stage. Email, téléphone, LinkedIn et GitHub.',
    tags: ['Email', 'Téléphone', 'LinkedIn', 'GitHub'],
    details: [
      {
        items: [
          { label: 'Email', text: CONTACT.email, href: `mailto:${CONTACT.email}` },
          { label: 'Téléphone', text: CONTACT.phone, href: CONTACT.phoneHref },
          {
            label: 'LinkedIn',
            text: CONTACT.linkedinLabel,
            href: CONTACT.linkedinHref,
            external: true,
          },
          {
            label: 'GitHub',
            text: CONTACT.githubLabel,
            href: CONTACT.githubHref,
            external: true,
          },
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* « Autres questions posées »                                         */
/* ------------------------------------------------------------------ */

export const FAQ: FaqItem[] = [
  {
    question: 'Quelles sont les compétences de Johary Anthony ?',
    answer:
      'Python, Java, PHP et TypeScript, avec Laravel, Spring, Angular et Express.js. Côté données : PostgreSQL, MySQL et MongoDB.',
  },
  {
    question: 'Est-il disponible pour un stage ou un poste ?',
    answer:
      'Oui, disponible à 100 % pour un poste ou un stage. Utilise la section Contact pour le joindre.',
  },
  {
    question: 'Quelle formation a-t-il suivie ?',
    answer:
      'Master 1 en informatique à IT University (oct. 2026), après une licence en informatique (option Développement) en juillet 2025.',
  },
  {
    question: 'Quelles stacks utilise-t-il récemment ?',
    answer: 'MEAN, Spring et PostgreSQL.',
  },
  {
    question: 'Quelles langues parle-t-il ?',
    answer: 'Malagasy (langue maternelle), français (avancé) et anglais (intermédiaire).',
  },
];

/* ------------------------------------------------------------------ */
/* Panneau de profil                                                   */
/* ------------------------------------------------------------------ */

export const PROFILE: Profile = {
  initials: 'JA',
  name: FULL_NAME,
  role: 'Développeur Junior · Fullstack / Backend',
  bio: "Curieux et méthodique, j'aime comprendre comment les choses fonctionnent pour mieux les construire. Étudiant en informatique, je mets ma logique et ma créativité au service de projets concrets.",
  // Fichier à placer dans public/about/moi.jpg (affiché automatiquement s'il existe).
  photo: 'about/moi.jpg',
  actions: [
    { label: 'Email', href: `mailto:${CONTACT.email}` },
    { label: 'Appeler', href: CONTACT.phoneHref },
    { label: 'LinkedIn', href: CONTACT.linkedinHref, external: true },
    { label: 'GitHub', href: CONTACT.githubHref, external: true },
  ],
  facts: [
    { label: 'Disponibilité', value: '100 % pour un poste ou un stage' },
    { label: 'Formation', value: 'Master 1 en informatique, IT University (oct. 2026)' },
    { label: 'Stages professionnels', value: '2' },
    { label: 'Stacks récentes', value: 'MEAN · Spring · PostgreSQL' },
    { label: 'Langues', value: 'Malagasy, Français, Anglais' },
  ],
  interests: 'Jeux vidéo, basketball, football, billard, lecture',
  profiles: [
    { label: 'linkedin.com/in/anthony-arimalala', href: CONTACT.linkedinHref, external: true },
    { label: CONTACT.githubLabel, href: CONTACT.githubHref, external: true },
  ],
};
