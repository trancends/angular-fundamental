import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-welcome',
  template: `<h1>Welcome {{ name }}</h1>`,
})
export class WelcomeComponent {
  @Input() name = 'friend';
}
