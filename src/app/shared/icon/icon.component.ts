import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { ICONS, IconName } from './icons';

/**
 * Pictogramme SVG décoratif.
 * La couleur se règle avec la propriété CSS `fill` et la taille avec `--icon-size`
 * sur l'élément `<app-icon>` (24 px par défaut).
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path [attr.d]="path()" />
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      flex: none;
      width: var(--icon-size, 24px);
      height: var(--icon-size, 24px);
      fill: currentColor;
    }

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input.required<IconName>();

  protected readonly path = computed(() => ICONS[this.name()]);
}
