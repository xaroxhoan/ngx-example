import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface IAppState {
  loading: boolean;
  theme?: 'dark' | 'light';
}

const intialState: IAppState = {
  loading: false,
};

@Injectable({
  providedIn: CoreModule,
})
export class AppStore extends ComponentStore<IAppState> {
  constructor() {
    super(intialState);
  }

  readonly loading$: Observable<boolean> = this.select((x) => x.loading);

  readonly toggleLoading = this.updater((state) => {
    state.loading = !state.loading;
    return state;
  });
}
