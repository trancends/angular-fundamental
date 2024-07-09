import { Component } from '@angular/core';
import { WelcomeComponent } from '../ui/welcome.component';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <app-welcome
      [name]="user.name"
      (cookiesAccepted)="handleCookiesAccepted()"
    />
    <p>Do i want Cookie?</p>
    <p>{{ answer }}</p>
    <p>This is home component</p>
  `,
  imports: [WelcomeComponent],
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
