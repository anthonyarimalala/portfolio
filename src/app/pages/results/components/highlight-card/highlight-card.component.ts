import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { Highlight } from '../../../../core/models/portfolio.models';
import { ToastService } from '../../../../core/services/toast.service';

/** Bloc façon « résultat de recherche » : source, titre cliquable, extrait et vignette. */
@Component({
  selector: 'app-highlight-card',
  standalone: true,
  templateUrl: './highlight-card.component.html',
  styleUrl: './highlight-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightCardComponent {
  private readonly toast = inject(ToastService);

  readonly highlight = input.required<Highlight>();

  protected onTitleClick(): void {
    this.toast.show('Consultez les détails de ce projet dans le portfolio');
  }
}
