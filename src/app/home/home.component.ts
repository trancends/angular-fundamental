import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../ui/welcome.component';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <app-welcome />
    <p>This is home component</p>
  `,
  imports: [WelcomeComponent, CommonModule],
})
export class HomeComponent {}
