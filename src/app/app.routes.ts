import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'callback',
    loadComponent: () =>
      import('./features/callback/callback.component').then(
        (mod) => mod.CallbackComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/home/home.component').then((mod) => mod.HomeComponent),
  },
];
