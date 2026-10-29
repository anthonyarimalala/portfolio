import { FaqItem } from '../models/portfolio.models';
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  PHONE_MOBILE,
  PHONE_SECONDARY,
  PORTFOLIO,
} from './contact.data';

export const FAQ: FaqItem[] = [
  {
    question: 'Comment me contacter ?',
    answer: [
      [
        [{ text: 'Par email : ' }, { text: EMAIL, href: `mailto:${EMAIL}` }],
        [
          { text: 'Par téléphone : ' },
          { text: PHONE_MOBILE.display, href: PHONE_MOBILE.href },
          { text: ' ou ' },
          { text: PHONE_SECONDARY.display, href: PHONE_SECONDARY.href },
        ],
        [
          { text: 'Sur LinkedIn : ' },
          { text: LINKEDIN.display, href: LINKEDIN.href, external: true },
        ],
        [
          { text: 'Mon code est sur GitHub : ' },
          { text: GITHUB.display, href: GITHUB.href, external: true },
        ],
        [
          { text: 'Mon portfolio : ' },
          { text: PORTFOLIO.display, href: PORTFOLIO.href, external: true },
        ],
      ],
    ],
  },
  {
    question: 'Suis-je disponible pour un poste ou un stage ?',
    answer: [
      [
        [
          {
            text: 'Oui, je suis disponible à 100 % pour un poste ou un stage, en développement full-stack ou backend.',
          },
        ],
      ],
    ],
  },
  {
    question: 'Quelles technologies j’utilise ?',
    answer: [
      [
        [{ text: 'Langages :', bold: true }, { text: ' Java, Python, TypeScript, PHP' }],
        [{ text: 'Frameworks :', bold: true }, { text: ' Laravel, Spring, Angular, Express.js' }],
        [{ text: 'Bases de données :', bold: true }, { text: ' PostgreSQL, MySQL, MongoDB' }],
        [{ text: 'Outils d’IA :', bold: true }, { text: ' Claude, GitHub Copilot, OpenAI Codex' }],
        [
          { text: 'Autres compétences :', bold: true },
          { text: ' conception d’API REST, conception de bases de données, MVC, Git' },
        ],
      ],
    ],
  },
  {
    question: 'Quelles sont mes expériences professionnelles ?',
    answer: [
      [
        [
          { text: 'HPI Business Partner', bold: true },
          {
            text: ' (stage, déc. 2024 – juil. 2025) : j’ai conçu et livré en autonomie une application de gestion pour cabinet dentaire (Laravel, PostgreSQL, RGPD), avec 40 % de temps de gestion administrative en moins et la migration de plus de 500 patients.',
          },
        ],
      ],
      [
        [
          { text: 'be ys Outsourcing Services (anciennement EazyTech)', bold: true },
          {
            text: ' (stage, juil. 2024 – oct. 2024) : j’ai développé des API REST en .NET, rédigé la documentation Swagger, réalisé des tests Postman et fait ma première expérience avec Kubernetes.',
          },
        ],
      ],
    ],
  },
  {
    question: 'Ai-je de l’expérience avec l’intelligence artificielle ?',
    answer: [
      [
        [
          {
            text: 'Oui. J’ai implémenté un système RAG local avec le modèle Ollama qwen2.5-coder : chunking des documents, vectorisation, recherche sémantique et génération des réponses par le LLM. J’utilise aussi Claude, GitHub Copilot et OpenAI Codex pour l’assistance au développement, la génération de code et l’optimisation.',
          },
        ],
      ],
    ],
  },
];
