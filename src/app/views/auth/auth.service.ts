import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ISignIn } from '@core';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  singin(props: ISignIn) {
    return of(props);
  }

  singup() {
    return of({});
  }
}
