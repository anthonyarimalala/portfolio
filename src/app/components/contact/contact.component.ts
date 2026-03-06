import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  protected readonly submitted = signal(false);
  protected contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    console.log('Contact message', this.contact);
    this.submitted.set(true);
    form.resetForm();
  }
}
