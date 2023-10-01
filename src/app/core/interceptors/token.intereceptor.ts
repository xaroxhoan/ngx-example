import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { AuthStore } from '../store/auth.store';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  authStore: AuthStore = inject(AuthStore)
) => {
  const _req = req.clone();

  return next(req);
};
