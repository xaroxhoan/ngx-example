import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileResolved } from '../types/profile';
import { ProfileService } from './profile.service';
import { AppStore } from 'src/app/core/store/app.store';
import { Observable, delay, map, tap } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  private readonly api: ProfileService = inject(ProfileService);
  private readonly appStore: AppStore = inject(AppStore);

  info$: Observable<ProfileResolved> = this.api.info().pipe();

  title$: Observable<string> = this.info$.pipe(map((x) => x.title));
}
