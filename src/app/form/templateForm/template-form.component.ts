import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form-template',
  template: `
    <h2>This is template form</h2>
    <input [(ngModel)]="formData.firstName" (ngModelChange)="logChange()" />
    <input [(ngModel)]="formData.lastName" (ngModelChange)="logChange()" />
  `,
  imports: [FormsModule],
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
