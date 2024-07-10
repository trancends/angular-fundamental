import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-form-nav',
  template: `
    <div class="form-nav">
      <a routerLink="/form" routerLinkActive="active">Template Form</a>
      <a routerLink="/form/reactive" routerLinkActive="active">Reactive Form</a>
      <a routerLink="/form/builder" routerLinkActive="active">Form Builder</a>
    </div>
  `,
  styles: [
    `
      .form-nav {
        display: flex;
        justify-content: left;
      }
      .form-nav a {
        margin-right: 10px;
      }
      .form-nav a.active {
        font-weight: bold;
      }
    `,
  ],
  imports: [RouterLink],
})
export class FormNavComponent {}
