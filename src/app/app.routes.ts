import { Routes } from '@angular/router';

import { HOME_TITLE, RESULTS_TITLE } from './core/data/site.data';

export const routes: Routes = [
  {
    path: '',
    title: HOME_TITLE,
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
