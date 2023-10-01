import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, tap } from 'rxjs';
import { AuthStore } from 'src/app/core/store/auth.store';

export const loggedInGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  authStore: AuthStore = inject(AuthStore),
  router: Router = inject(Router)
) => {
  return authStore.isLoggedIn$.pipe(
    map((x) => !x),
    tap((state: boolean) => {
      if (!state) {
        router.navigateByUrl('/panel');
      }
    })
  );
};
