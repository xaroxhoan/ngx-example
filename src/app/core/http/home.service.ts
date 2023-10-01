import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { of } from 'rxjs';
import { HomeResolved } from 'src/app/views/panel/types/home';

@Injectable({
  providedIn: CoreModule,
})
export class HomeService {
  constructor(private http: HttpClient) {}

  info() {
    return of(new HomeResolved({ title: 'home component' }));
  }
}
