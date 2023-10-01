import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { of } from 'rxjs';
import { ISignin } from 'src/app/views/auth/types/singin.types';

@Injectable({
  providedIn: CoreModule,
})
export class AuthService {
  constructor(private http: HttpClient) {}

  singin(props: ISignin) {
    return of(props);
  }

  singup() {
    return of({});
  }
}
