import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IHomeResolved } from '../types/home';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title!: string;

  @Input('data') set data(value: IHomeResolved) {
    this.title = value?.title;
  }
}
