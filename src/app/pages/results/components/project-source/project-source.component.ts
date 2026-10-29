import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Project } from '../../../../core/models/portfolio.models';

/** Technologie principale d'un projet : logo (ou lettre), nom et détail. Le contenu projeté est ajouté à la fin. */
@Component({
  selector: 'app-project-source',
  standalone: true,
  template: `
    @if (project().logo; as logo) {
      <img class="icon" [src]="logo" alt="" loading="lazy" />
    } @else {
      <span class="icon letter" [style.background]="project().letterColor">{{
        project().letter
      }}</span>
    }
    <span class="name">{{ project().name }}</span>
    <span class="sub">· {{ project().sub }}</span>
    <ng-content />
  `,
  styles: `
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
      font-size: 14px;
    }

    .icon {
      flex: none;
      width: 22px;
      height: 22px;
      padding: 3px;
      object-fit: contain;
      background: var(--bg);
      border: 1px solid var(--line);
      border-radius: 50%;
    }

    .letter {
      display: grid;
      place-items: center;
      padding: 0;
      font-size: 12px;
      font-weight: bold;
      color: #fff;
      border: 0;
    }

    .name {
      flex: none;
    }

    .sub {
      min-width: 0;
      overflow: hidden;
      color: var(--muted);
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    :host(.wrap) .sub {
      white-space: normal;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.wrap]': 'wrap()' },
})
export class ProjectSourceComponent {
  readonly project = input.required<Project>();
  /** Autorise le retour à la ligne du détail (sinon il est tronqué avec « … »). */
  readonly wrap = input(false);
}
