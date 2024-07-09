import { Component, NgModule } from '@angular/core';
import { WelcomeComponent } from '../ui/welcome.component';
import { RandomColor } from '../ui/random-color.directive';
import { ReversePipe } from '../ui/reverse.pipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
  declarations: [HomeComponent, WelcomeComponent, ReversePipe, RandomColor],
})
export class HomeModule {}
