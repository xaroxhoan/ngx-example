import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProfileResolved } from '../types/profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  title!: string;

  @Input('data') set initialState(value: IProfileResolved) {
    this.title = value?.title;
  }
}
