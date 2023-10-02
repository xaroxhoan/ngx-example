import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PanelComponent } from './panel/panel.component';
import { HomeService } from './home/home.service';
import { ProfileService } from './profile/profile.service';

export const PANEL_ROUTES: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        providers: [HomeService],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        providers: [ProfileService],
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];
