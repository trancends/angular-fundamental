import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form-reactive',
  template: `
    <h2>This is reactive form</h2>
    <form [formGroup]="myForm">
      <input type="text" formControlName="firstName" />
      <input type="text" formControlName="lastName" />
    </form>
  `,
  imports: [ReactiveFormsModule],
})
export class ReactiveFormComponent {
  myForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
