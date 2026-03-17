import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectDetailsComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carousel', { static: true }) carouselRef!: ElementRef<HTMLElement>;
  @ViewChild('track', { static: true }) trackRef!: ElementRef<HTMLElement>;

  readonly projects = [
    {
      title: 'Application web de gestion de centre commercial',
      description: "Plateforme web complète permettant la gestion centralisée d’un centre commercial avec plusieurs profils utilisateurs.",
      details: `
    Application conçue pour digitaliser et optimiser la gestion d’un centre commercial à travers trois profils principaux : administrateur, gestionnaire et commerçant.

    🔹 Gestion des boutiques :
    - Enregistrement et suivi des boutiques (informations, emplacement, statut)
    - Attribution des espaces commerciaux
    - Historique des occupations

    🔹 Gestion des utilisateurs et des rôles :
    - Système d’authentification sécurisé
    - Gestion des accès par profil (admin, gestionnaire, commerçant)
    - Contrôle des permissions

    🔹 Facturation et paiements :
    - Génération automatique des loyers et charges
    - Suivi des paiements (payé / en attente / retard)
    - Historique des transactions
    - Notifications de paiement

    🔹 Tableau de bord & reporting :
    - Statistiques globales du centre commercial
    - Suivi des performances (revenus, taux d’occupation)
    - Visualisation des données (graphiques, indicateurs clés)

    🔹 Supervision et sécurité :
    - Suivi des accès utilisateurs
    - Journal d’activité (logs)
    - Gestion des incidents

    🔹 Expérience utilisateur :
    - Interface moderne et intuitive
    - Navigation adaptée à chaque profil
    - Responsive (mobile & desktop)
      `,
      badge: 'Web',
      mediaClass: '',
      coverImage: 'projects/centre-commercial/dashboard.png',
      tags: ['Web', 'Gestion', 'SaaS', 'Multi-profils', 'Académique'],
      images: [],
    },
    {
      title: 'API REST sécurisée',
      description: "Développement d'une API REST sécurisée avec Node.js, Express.js et MongoDB.",
      details: 'Authentification JWT, validation des requêtes, gestion des rôles et documentation des endpoints.',
      badge: 'API',
      mediaClass: 'alt',
      coverImage: 'projects/api-rest/rest.png',
      tags: ['Node.js', 'Express.js', 'MongoDB'],
      images: [
        'https://via.placeholder.com/400x250.png?text=API+1',
        'https://via.placeholder.com/400x250.png?text=API+2',
      ],
    },
    {
      title: 'Jeu simple en local',
      description: 'Jeu développé en Java pour un usage en réseau local.',
      details: ' sauvegarde locale des scores.',
      badge: 'Jeu simple',
      mediaClass: 'alt-2',
      coverImage: 'projects/jeu/jeu.png',
      tags: ['Java', 'Local', 'Personnel'],
      images: [
        'https://via.placeholder.com/400x250.png?text=Jeu+2D+1',
        'https://via.placeholder.com/400x250.png?text=Jeu+2D+2',
      ],
    },
    {
      title: 'Installation & administration Windows & Linux',
      description: 'Mise en place et administration de systèmes Windows et Linux.',
      details: 'Installation, sécurisation, scripts de maintenance et supervision des services.',
      badge: 'Systèmes',
      mediaClass: '',
      coverImage: 'projects/installation/Linux-more-secure-than-Windows-980x551.webp',
      tags: ['Windows', 'Linux', 'Systèmes'],
      images: [
        'https://via.placeholder.com/400x250.png?text=Windows+Linux+1',
        'https://via.placeholder.com/400x250.png?text=Windows+Linux+2',
      ],
    },
    {
      title: 'Portfolio',
      description: 'Création de mon portfolio pour présenter mes projets et compétences.',
      details: 'Développement d’un portfolio moderne avec Angular, design responsive, section projets dynamique et formulaire de contact avec envoi d’email via EmailJS. Déploiement en ligne avec GitHub Pages.',
      badge: 'Portfolio',
      mediaClass: '',
      coverImage: 'projects/portfolio/portflio.png',
      tags: ['Angular', 'Portfolio', 'Frontend', 'EmailJS'],
      images: [
        'https://via.placeholder.com/400x250.png?text=Portfolio+1',
        'https://via.placeholder.com/400x250.png?text=Portfolio+2',
      ],
    },
    {
      title: 'Analyse de données et apprentissage automatique',
      description: 'Projet d’analyse exploratoire et de modélisation prédictive sur un jeu de données réel.',
      details: 'Nettoyage des données, analyses statistiques, visualisations avec Matplotlib/Seaborn, et implémentation de modèles de régression/classification avec Scikit-learn.',
      badge: 'Data Science',
      mediaClass: '',
      coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosPDeGar-IbRm8-g6olsnc8BYdJpWuMq7DQ&s',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Data Science'],
      images: [
        'https://via.placeholder.com/400x250.png?text=Data+Science+1',
        'https://via.placeholder.com/400x250.png?text=Data+Science+2',
      ],
    },
  ];

  readonly displayedProjects = [...this.projects, ...this.projects].map((project, index) => ({
    ...project,
    isClone: index >= this.projects.length,
  }));

  openIndex: number | null = null;

  isDragging = false;
  private startX = 0;
  private startOffset = 0;
  private currentOffset = 0;
  private resumeTimer: number | null = null;

  private readonly resumeDelayMs = 3500;
  private readonly scrollSensitivity = 1.5; // Ajustez cette valeur pour changer la vitesse du scroll

  private readonly onPointerDown = (event: PointerEvent) => {
    if (event.button !== 0) {
      return;
    }
    const target = event.target as HTMLElement | null;
    if (target?.closest('button, a, input, textarea, select, [data-no-drag]')) {
      return;
    }
    event.preventDefault();
    this.pauseAutoScroll();
    this.isDragging = true;
    this.carouselRef.nativeElement.classList.add('is-dragging');
    this.startX = event.clientX;
    this.startOffset = this.currentOffset;
    this.carouselRef.nativeElement.setPointerCapture(event.pointerId);
  };

  private readonly onPointerMove = (event: PointerEvent) => {
    if (!this.isDragging) {
      return;
    }
    const delta = event.clientX - this.startX;
    this.setOffset(this.startOffset + delta);
  };

  private readonly onPointerUp = (event: PointerEvent) => {
    if (!this.isDragging) {
      return;
    }
    this.isDragging = false;
    this.carouselRef.nativeElement.classList.remove('is-dragging');
    this.carouselRef.nativeElement.releasePointerCapture(event.pointerId);
    this.scheduleAutoScrollResume();
  };

  private readonly onPointerCancel = () => {
    if (!this.isDragging) {
      return;
    }
    this.isDragging = false;
    this.carouselRef.nativeElement.classList.remove('is-dragging');
    this.scheduleAutoScrollResume();
  };

  private readonly onWheel = (event: WheelEvent) => {
    // Vérifier si la touche Shift est enfoncée
    if (!event.shiftKey) {
      return; // Ignorer le scroll si Shift n'est pas enfoncé (comportement normal)
    }

    // Empêcher le scroll vertical quand Shift est enfoncé
    event.preventDefault();

    if (event.deltaX === 0 && event.deltaY === 0) {
      return;
    }

    this.pauseAutoScroll();

    // Utiliser deltaY (scroll vertical) avec Shift pour le défilement horizontal
    // Plus l'utilisateur scroll vite, plus le déplacement est important
    const delta = event.deltaY !== 0 ? event.deltaY : event.deltaX;

    // Appliquer le déplacement avec la sensibilité ajustable
    this.setOffset(this.currentOffset - (delta * this.scrollSensitivity));

    this.scheduleAutoScrollResume();
  };

  ngAfterViewInit(): void {
    this.currentOffset = this.getCurrentOffset();
    const carousel = this.carouselRef.nativeElement;
    carousel.addEventListener('pointerdown', this.onPointerDown);
    carousel.addEventListener('pointermove', this.onPointerMove);
    carousel.addEventListener('pointerup', this.onPointerUp);
    carousel.addEventListener('pointerleave', this.onPointerCancel);
    carousel.addEventListener('pointercancel', this.onPointerCancel);
    carousel.addEventListener('wheel', this.onWheel, { passive: false });
  }

  ngOnDestroy(): void {
    if (this.resumeTimer !== null) {
      window.clearTimeout(this.resumeTimer);
    }
    const carousel = this.carouselRef.nativeElement;
    carousel.removeEventListener('pointerdown', this.onPointerDown);
    carousel.removeEventListener('pointermove', this.onPointerMove);
    carousel.removeEventListener('pointerup', this.onPointerUp);
    carousel.removeEventListener('pointerleave', this.onPointerCancel);
    carousel.removeEventListener('pointercancel', this.onPointerCancel);
    carousel.removeEventListener('wheel', this.onWheel);
  }

  private pauseAutoScroll(): void {
    if (this.resumeTimer !== null) {
      window.clearTimeout(this.resumeTimer);
      this.resumeTimer = null;
    }
    const track = this.trackRef.nativeElement;
    this.currentOffset = this.getCurrentOffset();
    track.style.animation = 'none';
    track.style.transform = `translateX(${this.currentOffset}px)`;
  }

  private scheduleAutoScrollResume(): void {
    if (this.resumeTimer !== null) {
      window.clearTimeout(this.resumeTimer);
    }
    if (this.openIndex !== null) {
      return;
    }
    this.resumeTimer = window.setTimeout(() => {
      this.resumeTimer = null;
      this.resumeAutoScroll();
    }, this.resumeDelayMs);
  }

  private resumeAutoScroll(): void {
    if (this.openIndex !== null) {
      return;
    }
    const track = this.trackRef.nativeElement;
    const halfWidth = this.getHalfWidth();
    if (halfWidth === 0) {
      track.style.animation = '';
      track.style.transform = '';
      track.style.animationDelay = '';
      return;
    }
    const duration = this.getAnimationDurationSeconds();
    const normalized = this.normalizeOffset(this.currentOffset);
    const progress = Math.abs(normalized) / halfWidth;

    track.style.animation = 'none';
    track.getBoundingClientRect();
    track.style.animation = '';
    track.style.transform = '';
    track.style.animationDelay = `${-progress * duration}s`;
  }

  private setOffset(offset: number): void {
    this.currentOffset = this.normalizeOffset(offset);
    this.trackRef.nativeElement.style.transform = `translateX(${this.currentOffset}px)`;
  }

  private normalizeOffset(offset: number): number {
    const halfWidth = this.getHalfWidth();
    if (halfWidth === 0) {
      return 0;
    }
    let normalized = offset % halfWidth;
    if (normalized > 0) {
      normalized -= halfWidth;
    }
    return normalized;
  }

  private getHalfWidth(): number {
    const track = this.trackRef.nativeElement;
    return track.scrollWidth / 2;
  }

  private getCurrentOffset(): number {
    const track = this.trackRef.nativeElement;
    const transform = getComputedStyle(track).transform;
    if (!transform || transform === 'none') {
      return 0;
    }
    const matrix = new DOMMatrixReadOnly(transform);
    return matrix.m41;
  }

  private getAnimationDurationSeconds(): number {
    const track = this.trackRef.nativeElement;
    const duration = getComputedStyle(track).animationDuration;
    const seconds = parseFloat(duration);
    if (Number.isNaN(seconds)) {
      return 35;
    }
    return duration.includes('ms') ? seconds / 1000 : seconds;
  }

  toggleDetails(index: number): void {
    if (this.openIndex === index) {
      this.openIndex = null;
      this.scheduleAutoScrollResume();
      return;
    }
    this.openIndex = index;
    this.pauseAutoScroll();
  }
}
