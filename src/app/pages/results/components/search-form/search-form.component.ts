import { ChangeDetectionStrategy, Component, ElementRef, output, signal, viewChild } from '@angular/core';

import { SEARCH_QUERY } from '../../../../core/data/site.data';
import { IconComponent } from '../../../../shared/icon/icon.component';

/** Barre de recherche modifiable de la page de résultats. */
@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {
  /** Émis à la validation du formulaire, avec le texte saisi. */
  readonly searched = output<string>();

  protected readonly query = signal(SEARCH_QUERY);
  private readonly field = viewChild.required<ElementRef<HTMLInputElement>>('field');

  protected onInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  protected clear(): void {
    this.query.set('');
    this.field().nativeElement.focus();
  }

  protected onSubmit(event: Event): void {
    event.preventDefault();
    this.searched.emit(this.query());
  }
}
