import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectDetailsComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carousel', { static: true }) carouselRef!: ElementRef<HTMLElement>;
  @ViewChild('track', { static: true }) trackRef!: ElementRef<HTMLElement>;

  readonly projects = [
    {
      title: 'Application web de gestion de centre commercial',
      description: "Application web dédiée à la gestion d'un centre commercial.",
      details: 'Suivi des boutiques, facturation, reporting des performances et supervision des accès.',
      badge: 'Web',
      mediaClass: '',
      coverImage: 'https://via.placeholder.com/800x500.png?text=Centre+Commercial+Cover',
      tags: ['Web', 'Gestion', 'Académique'],
      images: [
        'https://audreytips.com/wp-content/uploads/2018/09/24-sites-proposant-des-photos-de-haute-qualite-en-libre-de-droits-pour-un-usage-commercial.jpg',
        'https://via.placeholder.com/400x250.png?text=Centre+Commercial+2'
      ]
    },
    {
      title: 'API REST sécurisée',
      description: "Développement d'une API REST sécurisée avec Node.js, Express.js et MongoDB.",
      details: 'Authentification JWT, validation des requêtes, gestion des rôles et documentation des endpoints.',
      badge: 'API',
      mediaClass: 'alt',
      coverImage: 'https://via.placeholder.com/800x500.png?text=API+Cover',
      tags: ['Node.js', 'Express.js', 'MongoDB'],
      images: [
        'https://via.placeholder.com/400x250.png?text=API+1',
        'https://via.placeholder.com/400x250.png?text=API+2'
      ]
    },
    {
      title: 'Jeu 2D en local',
      description: 'Jeu 2D développé en Java pour un usage local.',
      details: 'Moteur de collisions, gestion des niveaux et sauvegarde locale des scores.',
      badge: 'Jeu 2D',
      mediaClass: 'alt-2',
      coverImage: 'https://via.placeholder.com/800x500.png?text=Jeu+2D+Cover',
      tags: ['Java', 'Local', 'Personnel'],
      images: [
        'https://via.placeholder.com/400x250.png?text=Jeu+2D+1',
        'https://via.placeholder.com/400x250.png?text=Jeu+2D+2'
      ]
    },
    {
      title: 'Installation & administration Windows & Linux',
      description: 'Mise en place et administration de systèmes Windows et Linux.',
      details: 'Installation, sécurisation, scripts de maintenance et supervision des services.',
      badge: 'Systèmes',
      mediaClass: '',
      coverImage: 'https://via.placeholder.com/800x500.png?text=Windows+Linux+Cover',
      tags: ['Windows', 'Linux', 'Systèmes'],
      images: [
        'https://via.placeholder.com/400x250.png?text=Windows+Linux+1',
        'https://via.placeholder.com/400x250.png?text=Windows+Linux+2'
      ]
    },
    {
      title: 'Portfolio',
      description: 'Création de mon portfolio pour présenter mes projets et compétences.',
      details: 'Développement d’un portfolio moderne avec Angular, design responsive, section projets dynamique et formulaire de contact avec envoi d’email via EmailJS. Déploiement en ligne avec GitHub Pages.',
      badge: 'Portfolio',
      mediaClass: '',
      coverImage: 'https://via.placeholder.com/800x500.png?text=Portfolio+Cover',
      tags: ['Angular', 'Portfolio', 'Frontend', 'EmailJS'],
      images: [
        'https://via.placeholder.com/400x250.png?text=Portfolio+1',
        'https://via.placeholder.com/400x250.png?text=Portfolio+2'
      ]
    }
  ];

  readonly displayedProjects = [...this.projects, ...this.projects].map((project, index) => ({
    ...project,
    isClone: index >= this.projects.length
  }));

  openIndex: number | null = null;

  private isDragging = false;
  private startX = 0;
  private startOffset = 0;
  private currentOffset = 0;
  private resumeTimer: number | null = null;

  private readonly resumeDelayMs = 3500;

  private readonly onPointerDown = (event: PointerEvent) => {
    if (event.button !== 0) {
      return;
    }
    if (this.openIndex !== null) {
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
    if (this.openIndex !== null) {
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
    if (event.deltaX === 0 && event.deltaY === 0) {
      return;
    }
    if (this.openIndex !== null) {
      return;
    }
    this.pauseAutoScroll();
    const delta = event.deltaX !== 0 ? event.deltaX : event.deltaY;
    this.setOffset(this.currentOffset - delta);
    event.preventDefault();
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
