import { Routes } from '@angular/router';
import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthComponent } from './auth.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    providers: [AuthService],
    component: AuthComponent,
    children: [
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
    ],
  },
];
