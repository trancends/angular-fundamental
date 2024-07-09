import { Component } from '@angular/core';
import { WelcomeComponent } from '../ui/welcome.component';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <app-welcome [name]="user.name" />
    <p>This is home component</p>
  `,
  imports: [WelcomeComponent],
})
export class HomeComponent {
  user = {
    name: 'Ben',
  };
}
