import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WelcomeComponent } from '../ui/welcome.component';
import { RandomColor } from '../ui/random-color.directive';
import { ReversePipe } from '../ui/reverse.pipe';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [WelcomeComponent, RandomColor, ReversePipe, RouterLink],
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
    <ul>
      <h3>My Skills:</h3>
      @for (skill of skills; track skill.id) {
        <li>
          <a routerLink="/detail/{{ skill.id }}">{{ skill.name }}</a>
        </li>
      }
    </ul>
  `,
})
export class HomeComponent implements OnInit {
  skills = [
    {
      id: 1,
      name: 'Angular',
    },
    {
      id: 2,
      name: 'React',
    },
    {
      id: 3,
      name: 'Vue',
    },
  ];
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
