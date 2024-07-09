import { Component } from '@angular/core';
import { WelcomeComponent } from '../ui/welcome.component';
import { RandomColor } from '../ui/random-color.directive';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <app-welcome />
    <p>This is home component</p>
    <p randomColor>I am stylish</p>
  `,
  imports: [WelcomeComponent, RandomColor],
})
export class HomeComponent {}
