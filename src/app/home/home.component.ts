import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WelcomeComponent } from '../ui/welcome.component';
import { RandomColor } from '../ui/random-color.directive';
import { ReversePipe } from '../ui/reverse.pipe';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [WelcomeComponent, RandomColor, ReversePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-welcome
      [name]="user.name"
      (cookiesAccepted)="handleCookiesAccepted($event)"
    />
    <button (click)="changeName()">Change Name</button>
    <p>Do i want Cookie?</p>
    <p>{{ answer }}</p>
    <p randomColor>{{ 'reverse this' | reverse }}</p>
    <p>This is home component</p>
    <p>{{ value }}</p>
  `,
})
export class HomeComponent implements OnInit {
  user = {
    name: 'Ben',
  };

  value = 0;

  answer = '';

  handleCookiesAccepted(checked: boolean) {
    if (checked) {
      this.answer = 'Yes';
    } else {
      this.answer = 'No';
    }
  }

  changeName() {
    this.user.name = 'Changed';
  }

  ngOnInit(): void {
    setInterval(() => {
      this.value++;
    }, 500);
  }
}
