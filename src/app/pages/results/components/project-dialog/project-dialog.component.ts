import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  signal,
  viewChild,
} from '@angular/core';

import { Project } from '../../../../core/models/portfolio.models';
import { IconComponent } from '../../../../shared/icon/icon.component';
import { TagListComponent } from '../../../../shared/tag-list/tag-list.component';
import { ProjectSourceComponent } from '../project-source/project-source.component';

/** Fenêtre modale détaillant un projet, avec une galerie de captures d'écran. */
@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [IconComponent, TagListComponent, ProjectSourceComponent],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDialogComponent {
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private readonly scroller = viewChild.required<ElementRef<HTMLElement>>('scroller');

  protected readonly project = signal<Project | null>(null);
  protected readonly index = signal(0);

  protected readonly gallery = computed(() => this.project()?.gallery ?? []);
  protected readonly currentImage = computed(() => this.gallery()[this.index()]);
  protected readonly hasMany = computed(() => this.gallery().length > 1);
  protected readonly hasPrevious = computed(() => this.hasMany() && this.index() > 0);
  protected readonly hasNext = computed(
    () => this.hasMany() && this.index() < this.gallery().length - 1,
  );

  /** Ouvre la fenêtre sur le projet donné. */
  open(project: Project): void {
    this.project.set(project);
    this.index.set(0);
    this.scroller().nativeElement.scrollTop = 0;
    this.dialog().nativeElement.showModal();
  }

  protected close(): void {
    this.dialog().nativeElement.close();
  }

  protected previous(): void {
    this.go(this.index() - 1);
  }

  protected next(): void {
    this.go(this.index() + 1);
  }

  /** Un clic sur le fond (hors du contenu) ferme la fenêtre. */
  protected onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) {
      this.close();
    }
  }

  private go(target: number): void {
    this.index.set(Math.max(0, Math.min(target, this.gallery().length - 1)));
  }
}
