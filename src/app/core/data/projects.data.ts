import { Project } from '../models/portfolio.models';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const PROJECTS: Project[] = [
  {
    category: 'Web',
    title: 'Application de gestion d’un cabinet dentaire : patients, devis et paiements',
    logo: `${DEVICON}/laravel/laravel-original.svg`,
    name: 'Laravel',
    sub: 'PostgreSQL · RGPD',
    meta: 'Projet de fin de licence · HPI Business Partner',
    gallery: [
      'images/projets/cabinet dentaire/Screenshot 2025-05-20 112244.png',
      'images/projets/cabinet dentaire/Screenshot 2025-04-24 115014.png',
      'images/projets/cabinet dentaire/Screenshot 2025-04-24 120337.png',
      'images/projets/cabinet dentaire/Screenshot 2025-05-06 160811.png',
    ],
    description: [
      {
        kind: 'paragraph',
        text: 'Application web de back-office pour la gestion administrative et financière d’un cabinet dentaire, conçue et livrée en autonomie, avec une architecture sécurisée et conforme aux normes RGPD.',
      },
      {
        kind: 'list',
        items: [
          'Gestion des patients, des devis et des paiements',
          'Système d’authentification pour sécuriser les données',
          'Interface responsive et intégrations d’API tierces',
          'Migration sécurisée des données de plus de 500 patients',
          'Réduction de 40 % du temps de gestion administrative',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Collaboration étroite avec les équipes back-office pour comprendre leurs besoins et optimiser leur flux de travail quotidien.',
      },
    ],
    tags: ['Laravel', 'PHP', 'PostgreSQL', 'RGPD', 'UI responsive'],
  },
  {
    category: 'IA',
    title: 'Système RAG local : recherche sémantique et réponses générées par un LLM',
    letter: 'O',
    letterColor: '#5f6368',
    name: 'Ollama',
    sub: 'qwen2.5-coder · RAG',
    meta: 'Projet personnel · Intelligence artificielle',
    gallery: ['images/projets/RAG/Screenshot 2026-10-29 084539.png'],
    description: [
      {
        kind: 'paragraph',
        text: 'Implémentation d’un système RAG (Retrieval-Augmented Generation) entièrement local avec le modèle Ollama qwen2.5-coder.',
      },
      {
        kind: 'list',
        items: [
          'Chunking des documents',
          'Vectorisation',
          'Recherche sémantique',
          'Génération des réponses par le LLM',
        ],
      },
    ],
    tags: ['Ollama', 'qwen2.5-coder', 'RAG', 'LLM', 'Recherche sémantique'],
  },
  {
    category: 'Web',
    title: 'Plateforme de gestion d’un centre commercial avec trois profils utilisateurs',
    logo: `${DEVICON}/angularjs/angularjs-original.svg`,
    name: 'MEAN',
    sub: 'Angular · Express · MongoDB',
    meta: 'Projet académique · SaaS multi-profils',
    gallery: ['images/projets/centre-commercial/Dashboard.jpg'],
    description: [
      {
        kind: 'paragraph',
        text: 'Plateforme web complète pour digitaliser et optimiser la gestion centralisée d’un centre commercial, à travers trois profils : administrateur, gestionnaire et commerçant.',
      },
      {
        kind: 'list',
        items: [
          'Boutiques : enregistrement et suivi, attribution des espaces commerciaux, historique des occupations et gestion de stock',
          'Utilisateurs et rôles : authentification sécurisée, gestion des accès par profil et contrôle des permissions',
          'Facturation et paiements : génération automatique des loyers et charges, suivi des paiements, historique et notifications',
          'Tableau de bord : statistiques globales, revenus, taux d’occupation, graphiques et indicateurs clés',
          'Supervision et sécurité : suivi des accès et journal d’activité (logs)',
          'Interface moderne et intuitive, adaptée à chaque profil, responsive (mobile et desktop)',
        ],
      },
    ],
    tags: ['MEAN', 'Angular', 'Express', 'MongoDB', 'Node.js', 'Multi-profils', 'SaaS'],
  },
  {
    category: 'Data',
    title: 'Premiers pas en analyse de données et en machine learning avec Python',
    logo: `${DEVICON}/python/python-original.svg`,
    name: 'Python',
    sub: 'Pandas · Scikit-learn',
    meta: 'Data Science · Apprentissage',
    gallery: ['images/projets/analyse_de_donnee/analyse-de-donnees-intelligence-artificielle.jpg'],
    description: [
      {
        kind: 'paragraph',
        text: 'Découverte de l’analyse de données et des bases du machine learning avec Python.',
      },
      {
        kind: 'list',
        items: [
          'Nettoyage simple de données avec Pandas',
          'Analyses exploratoires de base',
          'Visualisations avec Matplotlib et Seaborn',
          'Premiers modèles simples avec Scikit-learn',
        ],
      },
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Jeu',
    title: 'Jeu du Morpion multijoueur en réseau local, en Java',
    logo: `${DEVICON}/java/java-original.svg`,
    name: 'Java',
    sub: 'Socket · Swing / JavaFX',
    meta: 'Projet académique · Jeu réseau',
    gallery: ['images/projets/jeu/jeu.png'],
    description: [
      {
        kind: 'paragraph',
        text: 'Jeu multijoueur en Java permettant à deux ordinateurs de s’affronter via sockets sur un même réseau. Projet réalisé pour mieux comprendre Java.',
      },
      {
        kind: 'list',
        items: [
          'Architecture client-serveur avec sockets Java',
          'Synchronisation des coups en temps réel',
          'Gestion des tours et détection de victoire',
          'Interface graphique simple (Swing / JavaFX)',
          'Sauvegarde locale des scores',
        ],
      },
    ],
    tags: ['Java', 'Socket', 'Réseau', 'Multijoueur', 'Swing / JavaFX'],
  },
  {
    category: 'API',
    title: 'API REST sécurisée avec Spring Boot, puis Node.js, Express.js et MongoDB',
    logo: `${DEVICON}/spring/spring-original.svg`,
    name: 'Spring Boot',
    sub: 'Node.js · Express · MongoDB',
    meta: 'Projet personnel',
    gallery: ['images/projets/api-rest/rest.png'],
    description: [
      {
        kind: 'paragraph',
        text: 'Développement d’une API REST sécurisée, réalisée d’abord avec Spring Boot, puis avec Node.js, Express.js et MongoDB.',
      },
      {
        kind: 'list',
        items: [
          'Authentification JWT',
          'Validation des requêtes',
          'Gestion des rôles',
          'Documentation des endpoints',
        ],
      },
    ],
    tags: ['Spring Boot', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
];
