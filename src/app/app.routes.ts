import { Routes } from '@angular/router';

import { RESULTS_TITLE, SITE_TITLE } from './core/portfolio.data';

export const routes: Routes = [
  {
    path: '',
    title: SITE_TITLE,
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'resultats',
    title: RESULTS_TITLE,
    loadComponent: () =>
      import('./pages/results/results.component').then((m) => m.ResultsComponent),
  },
  { path: '**', redirectTo: '' },
];
