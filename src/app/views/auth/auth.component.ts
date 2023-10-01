import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  template: `<router-outlet />`,
  imports: [RouterOutlet],
})
export class AuthComponent {}
