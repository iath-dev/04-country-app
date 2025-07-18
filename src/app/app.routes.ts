import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/pages/home-page/home-page.component').then(m => m.HomePageComponent),
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes'),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
