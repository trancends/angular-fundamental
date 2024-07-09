import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-welcome',
  template: `
    <h1>Welcome {{ name }}</h1>
    <p>Do you accept the yummy cookies?</p>
    <button (click)="cookiesAccepted.emit(true)">I do!</button>
  `,
})
export class WelcomeComponent {
  @Input() name = 'friend';

  @Output() cookiesAccepted = new EventEmitter();
}
