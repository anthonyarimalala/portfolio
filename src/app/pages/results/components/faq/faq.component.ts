import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FAQ } from '../../../../core/data/faq.data';
import { IconComponent } from '../../../../shared/icon/icon.component';

/** « Autres questions » : accordéon natif alimenté par les données de la FAQ. */
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  protected readonly faq = FAQ;
}
