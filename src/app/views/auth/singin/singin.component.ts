import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ISinginForm } from '../types/singin.types';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/http/auth.service';
import { AuthStore } from 'src/app/core/store/auth.store';

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
})
export class SinginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly api: AuthService = inject(AuthService);
  private readonly store: AuthStore = inject(AuthStore);
  private readonly router: Router = inject(Router);

  form: FormGroup<ISinginForm> = this.fb.group({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  submit() {
    const values = this.form.getRawValue();
    this.api
      .singin(values)
      .pipe()
      .subscribe((x) => {
        this.store.updateState({
          isLoggedIn: true,
          userInfo: x,
        });
        this.router.navigateByUrl('/panel');
      });
  }
}
