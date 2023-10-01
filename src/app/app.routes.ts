import { Routes } from '@angular/router';
import { loggedInGuard } from './guards/loggedIn.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    canActivate: [loggedInGuard],
    path: 'auth',
    loadChildren: async () => (await import('./views/auth')).AUTH_ROUTES,
  },
  {
    canActivate: [authGuard],
    path: 'panel',
    loadChildren: async () => (await import('./views/panel')).PANEL_ROUTES,
  },
  {
    path: '**',
    redirectTo: 'panel',
  },
];
