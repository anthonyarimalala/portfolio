import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Le mode « hash » (#/resultats) fonctionne tel quel sur GitHub Pages, sans réécriture d'URL.
    provideRouter(
      routes,
      withHashLocation(),
      // « anchorScrolling » permet aux liens de l'accueil de viser une section (#projets, #contact).
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
    ),
  ],
};
