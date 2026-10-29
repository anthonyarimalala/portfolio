import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { IconComponent } from '../icon/icon.component';
import { IconName } from '../icon/icons';

/**
 * Lien représenté par un pictogramme rond (logo ou icône) et un libellé.
 * Un bouton d'action facultatif peut être projeté avec l'attribut `slot="action"`.
 */
@Component({
  selector: 'app-circle-link',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './circle-link.component.html',
  styleUrl: './circle-link.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CircleLinkComponent {
  readonly label = input.required<string>();
  readonly href = input.required<string>();
  readonly external = input(false);
  readonly logo = input<string>();
  readonly icon = input<IconName>();
  readonly iconColor = input<string>();
}
