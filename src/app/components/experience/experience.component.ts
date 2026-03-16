import { Component } from '@angular/core';

interface Photo {
  url: string;
  caption: string;
}

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  longDescription: string;
  tags: string[];
  photos: Photo[];
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  isExpModalOpen = false;
  isPhotoModalOpen = false;

  selectedExp: Experience | null = null;
  selectedPhoto: { url: string; caption: string } | null = null;

  readonly experiences: Experience[] = [
    {
      id: 1,
      role: 'Stagiaire en développement full-stack',
      company: 'HPI BUSINESS PARTNER',
      period: 'Déc. 2024 – juil. 2025',
      description:
        "Application web de back-office pour la gestion administrative et financière d'un cabinet dentaire avec un focus RGPD, authentification sécurisée et UI responsive.",
      longDescription:
        "Projet de fin de licence en informatique : Développement complet d'une application de gestion pour cabinet dentaire, avec mise en place d'une architecture sécurisée et conforme aux normes RGPD. Collaboration étroite avec les équipes back-office pour comprendre leurs besoins et optimiser leur flux de travail quotidien.",
      tags: ['Laravel', 'PostgreSQL', 'UI responsive', 'RGPD'],
      photos: [
        {
          url: 'experiences/hpi.png',
          caption: 'Couverture livre',
        },
        {
          url: 'experiences/hpi_2.png',
          caption: 'Objectif du stage',
        },
      ],
      achievements: [
        'Réduction de 40% du temps de gestion administrative',
        'Migration sécurisée des données de 500+ patients',
        "Mise en place d'un système d'authentification pour sécuriser les donnés",
      ],
    },
    {
      id: 2,
      role: 'Stagiaire en développement backend',
      company: 'be ys (anciennement EasyTech)',
      period: 'Juil. 2024 – oct. 2024',
      description:
        "Développement d'API REST en .NET pour optimiser la gestion des activités locales et améliorer la fiabilité des intégrations métiers.",
      longDescription:
        "Ce stage a constitué une première expérience déterminante dans mon parcours. Au-delà d'une simple initiation au monde professionnel, il m'a permis d'acquérir des compétences clés et de mieux appréhender les codes de l'entreprise.",
      tags: ['.NET', 'API REST', 'Postman', 'Kubernetes'],
      photos: [
        {
          url: 'experiences/easytech.png',
          caption: 'Attestation de stage',
        },
      ],
      achievements: [
        "Développement d'endpoints API optimisés pour faciliter le travail des développeurs front-end et tiers",
        "Première expérience concrète avec Kubernetes et contribution aux processus d'intégration et déploiement continus",
        "Documentation complète avec Swagger et guides d'intégration",
      ],
    },
  ];

  openExpModal(experience: Experience): void {
    this.selectedExp = experience;
    this.isExpModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeExpModal(): void {
    this.isExpModalOpen = false;
    this.selectedExp = null;
    document.body.style.overflow = 'auto';
  }

  openPhotoModal(photo: { url: string; caption: string }, event: Event): void {
    event.stopPropagation();
    this.selectedPhoto = photo;
    this.isPhotoModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closePhotoModal(): void {
    this.isPhotoModalOpen = false;
    this.selectedPhoto = null;
    document.body.style.overflow = 'auto';
  }
}
