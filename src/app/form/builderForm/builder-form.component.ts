import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form-reactive',
  template: ``,
  imports: [ReactiveFormsModule],
})
export class BuilderFormComponent {
  private fb = inject(FormBuilder);

  myForm = this.fb.group({
    fistname: [''],
    lastname: [''],
  });
}
