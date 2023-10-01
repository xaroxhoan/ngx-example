import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthStore } from 'src/app/core/store/auth.store';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
  private readonly authStore: AuthStore = inject(AuthStore);

  protected userInfo$ = this.authStore.userInfo$;
}
