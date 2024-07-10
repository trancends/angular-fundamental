import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormNavComponent } from '../../ui/form-nav.component';

@Component({
  standalone: true,
  selector: 'app-form-reactive',
  template: `
    <app-form-nav />
    <h2>This is reactive form</h2>
    <form [formGroup]="myForm">
      <input type="text" formControlName="firstName" />
      <input type="text" formControlName="lastName" />
    </form>
  `,
  imports: [ReactiveFormsModule, FormNavComponent],
})
export class ReactiveFormComponent {
  myForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
