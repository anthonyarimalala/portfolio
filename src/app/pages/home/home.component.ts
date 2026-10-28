import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { LEGAL_NOTICE, SEARCH_QUERY } from '../../core/portfolio.data';
import { LogoComponent } from '../../shared/logo/logo.component';
import { SearchBoxComponent } from '../../shared/search-box/search-box.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LogoComponent, SearchBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly legalNotice = LEGAL_NOTICE;
  /** Texte actuellement affiché dans la barre (animation de frappe). */
  protected readonly typed = signal('');
  /** Vrai quand l'animation est terminée : les boutons deviennent actifs. */
  protected readonly ready = signal(false);

  constructor() {
    this.startTyping();
  }

  protected search(): void {
    if (!this.ready()) {
      return;
    }
    void this.router.navigate(['/resultats'], { queryParams: { q: SEARCH_QUERY } });
  }

  private startTyping(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      this.typed.set(SEARCH_QUERY);
      this.ready.set(true);
      return;
    }

    let index = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const step = (): void => {
      if (index < SEARCH_QUERY.length) {
        index += 1;
        this.typed.set(SEARCH_QUERY.slice(0, index));
        timer = setTimeout(step, 55 + Math.random() * 60);
      } else {
        this.ready.set(true);
      }
    };

    step();
    this.destroyRef.onDestroy(() => clearTimeout(timer));
  }
}
