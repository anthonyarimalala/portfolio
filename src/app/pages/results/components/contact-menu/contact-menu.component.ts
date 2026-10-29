import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { CONTACT_MENU } from '../../../../core/data/contact.data';
import { IconComponent } from '../../../../shared/icon/icon.component';

/** Menu déroulant des contacts, positionné (en `fixed`) par l'onglet « Contact ». */
@Component({
  selector: 'app-contact-menu',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './contact-menu.component.html',
  styleUrl: './contact-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'menu',
    'aria-label': 'Mes contacts',
    '[style.top.px]': 'top()',
    '[style.left.px]': 'left()',
  },
})
export class ContactMenuComponent {
  readonly top = input(0);
  readonly left = input(0);
  /** Émis quand le visiteur choisit un contact. */
  readonly picked = output<void>();

  protected readonly entries = CONTACT_MENU;
}
