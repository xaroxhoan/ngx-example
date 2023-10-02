import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeResolved } from '../types/home';
import { HomeService } from './home.service';
import { Observable, map } from 'rxjs';
import { AppStore } from '@core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private readonly api: HomeService = inject(HomeService);
  private readonly appStore: AppStore = inject(AppStore);

  info$: Observable<HomeResolved> = this.api.info().pipe();

  title$: Observable<string> = this.info$.pipe(map((x) => x.title));
}
