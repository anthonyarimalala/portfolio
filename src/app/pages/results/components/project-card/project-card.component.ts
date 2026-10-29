import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { Project } from '../../../../core/models/portfolio.models';
import { ProjectSourceComponent } from '../project-source/project-source.component';

/** Carte d'un projet dans le carrousel ; elle se comporte comme un bouton. */
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ProjectSourceComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'button',
    tabindex: '0',
    'aria-haspopup': 'dialog',
    '[attr.aria-label]': 'project().title',
    '(click)': 'selected.emit()',
    '(keydown.enter)': 'onKey($event)',
    '(keydown.space)': 'onKey($event)',
  },
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
  /** Émis quand le visiteur ouvre le projet (clic, Entrée ou Espace). */
  readonly selected = output<void>();

  protected onKey(event: Event): void {
    event.preventDefault();
    this.selected.emit();
  }
}
