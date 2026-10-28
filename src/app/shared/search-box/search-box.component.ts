import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

/**
 * Barre de recherche en lecture seule : le texte affiché est fourni par le parent
 * et ne peut jamais être modifié par le visiteur (clavier, collage, glisser-déposer).
 */
@Component({
  selector: 'app-search-box',
  standalone: true,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {
  /** Texte affiché dans la barre. */
  readonly text = input.required<string>();
  /** Version compacte de la page de résultats : loupe cliquable à droite. */
  readonly compact = input(false);
  /** Émis quand le visiteur lance la recherche (Entrée ou clic sur la loupe). */
  readonly submitted = output<void>();

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.submitted.emit();
    } else if (event.key !== 'Tab') {
      event.preventDefault();
    }
  }

  protected block(event: Event): void {
    event.preventDefault();
  }
}
