import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormNavComponent } from '../../ui/form-nav.component';

@Component({
  standalone: true,
  selector: 'app-form-template',
  template: `
    <app-form-nav />
    <h2>This is template form</h2>
    <input [(ngModel)]="formData.firstName" (ngModelChange)="logChange()" />
    <input [(ngModel)]="formData.lastName" (ngModelChange)="logChange()" />
  `,
  imports: [FormsModule, FormNavComponent],
})
export class TemplateFormComponent {
  formData = {
    firstName: '',
    lastName: '',
  };

  logChange() {
    console.log(this.formData);
  }
}
