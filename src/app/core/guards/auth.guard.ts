import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { tap } from 'rxjs';
import { AuthStore } from '@core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  authStore: AuthStore = inject(AuthStore),
  router: Router = inject(Router)
) => {
  return authStore.isLoggedIn$.pipe(
    tap((state: boolean) => {
      if (!state) {
        router.navigateByUrl('/auth/signin');
      }
    })
  );
};
