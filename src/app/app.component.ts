import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToastComponent } from './shared/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent],
  template: `
    <router-outlet />
    <app-toast />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor() {
    // Les liens d'ancre (#projets, #contact) tiennent compte de la hauteur de l'en-tête collant.
    inject(ViewportScroller).setOffset(() => [
      0,
      (document.querySelector('app-site-header')?.getBoundingClientRect().height ?? 0) + 8,
    ]);
  }
}
