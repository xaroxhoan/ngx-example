import { Routes } from '@angular/router';
import { loggedInGuard } from './core/guards/loggedIn.guard';
import { authGuard } from './core/guards/auth.guard';
import { AuthService } from './views/auth/auth.service';
import { provideHttpClient } from '@angular/common/http';

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
