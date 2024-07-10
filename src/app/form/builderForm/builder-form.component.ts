import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormNavComponent } from '../../ui/form-nav.component';

@Component({
  standalone: true,
  selector: 'app-form-reactive',
  template: `
    <app-form-nav />
    <h2>Form Builder</h2>
    <form [formGroup]="myForm" (ngSubmit)="handleSubmit()">
      <div class="form-group">
        <input type="text" formControlName="fistname" />
        <input type="text" formControlName="lastname" />
        <button type="submit">Submit</button>
      </div>
    </form>
  `,
  styles: [
    `
      .form-group {
        margin-bottom: 10px;
        width: 300px;
        border: 1px solid black;
        padding: 10px;
        display: flex;
        flex-direction: column;
      }
    `,
  ],
  imports: [ReactiveFormsModule, FormNavComponent],
})
export class BuilderFormComponent {
  private fb = inject(FormBuilder);

  myForm = this.fb.group({
    fistname: ['', Validators.required],
    lastname: ['', [Validators.minLength(20), Validators.required]],
  });

  handleSubmit() {
    console.log(this.myForm.value);
    console.log(this.myForm.valid);
  }
}
