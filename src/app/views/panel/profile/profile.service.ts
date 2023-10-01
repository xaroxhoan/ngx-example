import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ProfileResolved } from 'src/app/views/panel/types/profile';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  info() {
    return of(new ProfileResolved({ title: 'profile component' }));
  }
}
