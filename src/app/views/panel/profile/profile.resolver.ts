import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { IProfileResolved } from '../types/profile';
import { delay, tap } from 'rxjs';
import { inject } from '@angular/core';
import { AppStore } from 'src/app/core/store/app.store';
import { ProfileService } from './profile.service';

export const profileResolver: ResolveFn<IProfileResolved> = (
  routes: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  api: ProfileService = inject(ProfileService),
  appStore: AppStore = inject(AppStore)
) => {
  return api.info().pipe(
    tap(() => appStore.toggleLoading()),
    delay(2000),
    tap(() => appStore.toggleLoading())
  );
};
