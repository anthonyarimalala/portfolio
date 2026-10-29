import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Liste de pastilles (mots-clés). Les marges sont gérées par le composant parent. */
@Component({
  selector: 'app-tag-list',
  standalone: true,
  template: `
    <ul>
      @for (tag of tags(); track tag) {
        <li>{{ tag }}</li>
      }
    </ul>
  `,
  styles: `
    :host {
      display: block;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      padding: 4px 9px;
      font-size: 12px;
      color: var(--chip-fg);
      background: var(--chip);
      border-radius: 14px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagListComponent {
  readonly tags = input.required<readonly string[]>();
}
