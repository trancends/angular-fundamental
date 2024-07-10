import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-welcome',
  template: `
    <h1>Welcome {{ name }}</h1>
    <p>Do you accept the yummy cookies?</p>
    <button (click)="toggleCookies()">I do!</button>
  `,
})
export class WelcomeComponent {
  @Input() name = 'friend';

  checked = false;

  @Output() cookiesAccepted = new EventEmitter<boolean>();

  toggleCookies() {
    this.checked = !this.checked;
    this.cookiesAccepted.emit(this.checked);
  }
}
