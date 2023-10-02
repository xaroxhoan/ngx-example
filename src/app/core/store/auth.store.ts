import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CoreModule } from '../core.module';
import { Observable, tap } from 'rxjs';
import { IAuthState, ISignIn } from '../interfaces';

const intialState: IAuthState = {
  isLoggedIn: false,
};

@Injectable({
  providedIn: CoreModule,
})
export class AuthStore extends ComponentStore<IAuthState> {
  constructor() {
    super(intialState);
  }

  readonly isLoggedIn$: Observable<boolean> = this.select((x) => x.isLoggedIn);

  readonly token$: Observable<string | undefined> = this.select((x) => x.token);

  readonly userInfo$: Observable<ISignIn | undefined> = this.select(
    (x) => x.userInfo
  ).pipe(tap((x) => console.log('user info:', x)));

  readonly updateState = this.updater((state, payload: IAuthState) => {
    state = { ...state, ...payload };
    return state;
  });
}
