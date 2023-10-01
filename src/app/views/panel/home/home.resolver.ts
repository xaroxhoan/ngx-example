import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { IHomeResolved } from '../types/home';
import { delay, of, tap } from 'rxjs';
import { HomeService } from 'src/app/core/http/home.service';
import { inject } from '@angular/core';
import { AppStore } from 'src/app/core/store/app.store';

export const homeResolver: ResolveFn<IHomeResolved> = (
  routes: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  api: HomeService = inject(HomeService),
  appStore: AppStore = inject(AppStore)
) => {
  return api.info().pipe(
    tap(() => appStore.toggleLoading()),
    delay(2000),
    tap(() => appStore.toggleLoading())
  );
};
