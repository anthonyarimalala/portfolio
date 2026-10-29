import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';

import { PROJECTS } from '../../../../core/data/projects.data';
import { IconComponent } from '../../../../shared/icon/icon.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

/** Carrousel horizontal de projets ; un clic sur une carte ouvre sa fenêtre de détails. */
@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [IconComponent, ProjectCardComponent, ProjectDialogComponent],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(window:resize)': 'updateNavigation()' },
})
export class ProjectCarouselComponent {
  protected readonly projects = PROJECTS;

  protected readonly canScrollPrevious = signal(false);
  protected readonly canScrollNext = signal(true);

  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
  private readonly dialog = viewChild.required(ProjectDialogComponent);

  constructor() {
    afterNextRender(() => this.updateNavigation(), { injector: inject(Injector) });
  }

  protected openProject(index: number): void {
    this.dialog().open(this.projects[index]);
  }

  protected scroll(direction: -1 | 1): void {
    const track = this.track().nativeElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }

  /** Affiche ou masque les flèches selon la position de défilement. */
  protected updateNavigation(): void {
    const track = this.track().nativeElement;
    this.canScrollPrevious.set(track.scrollLeft > 2);
    this.canScrollNext.set(track.scrollLeft + track.clientWidth < track.scrollWidth - 2);
  }
}
