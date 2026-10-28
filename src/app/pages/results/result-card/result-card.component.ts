import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

import { SearchResult } from '../../../core/portfolio.models';

/** Un résultat de recherche avec ses détails repliables. */
@Component({
  selector: 'app-result-card',
  standalone: true,
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultCardComponent {
  readonly result = input.required<SearchResult>();

  protected readonly expanded = signal(false);

  protected toggle(): void {
    this.expanded.update((value) => !value);
  }
}
