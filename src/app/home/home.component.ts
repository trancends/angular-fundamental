import { Component } from '@angular/core';
import { WelcomeComponent } from '../ui/welcome.component';
import { RandomColor } from '../ui/random-color.directive';
import { ReversePipe } from '../ui/reverse.pipe';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [WelcomeComponent, RandomColor, ReversePipe],
  template: `
    <app-welcome
      [name]="user.name"
      (cookiesAccepted)="handleCookiesAccepted()"
    />
    <p>Do i want Cookie?</p>
    <p>{{ answer }}</p>
    <p randomColor>{{ 'reverse this' | reverse }}</p>
    <p>This is home component</p>
  `,
})
export class HomeComponent {
  user = {
    name: 'Ben',
  };

  answer = '';

  handleCookiesAccepted() {
    this.answer = 'yes';
  }
}
