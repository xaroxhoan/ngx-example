import { Routes } from '@angular/router';
import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'signup',
    component: SingupComponent,
  },
  {
    path: 'singin',
    component: SinginComponent,
  },
  {
    path: '**',
    redirectTo: 'singin',
  },
];
