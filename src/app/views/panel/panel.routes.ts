import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { homeResolver } from './home/home.resolver';
import { ProfileComponent } from './profile/profile.component';
import { profileResolver } from './profile/profile.resolver';
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
        resolve: {
          data: homeResolver,
        },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        providers: [ProfileService],
        resolve: {
          data: profileResolver,
        },
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];
