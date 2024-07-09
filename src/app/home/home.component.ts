import { Component } from '@angular/core';
import { WelcomeComponent } from '../ui/welcome.component';
import { RandomColor } from '../ui/random-color.directive';
import { ReversePipe } from '../ui/reverse.pipe';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <app-welcome />
    <p>This is home component</p>
    <p randomColor>I am stylish</p>
    <p>Time for a little : {{ magic | reverse }}</p>
  `,
  imports: [WelcomeComponent, RandomColor, ReversePipe],
})
export class HomeComponent {
  magic = ' reverse me ';
}
