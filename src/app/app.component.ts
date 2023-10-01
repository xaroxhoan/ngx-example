import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './ui/components/loader/loader.component';
import { AppStore } from './core/store/app.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly appStore: AppStore = inject(AppStore);

  protected title = 'ngx-boiler-plate';
  protected loading$ = this.appStore.loading$;
}
