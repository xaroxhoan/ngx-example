import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HomeResolved } from 'src/app/views/panel/types/home';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  info() {
    return of(new HomeResolved({ title: 'home component' }));
  }
}
