import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  protected readonly submitted = signal(false);
  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);

  protected contact = {
    name: '',
    email: '',
    title: '', // Sujet maintenant vide par défaut (l'utilisateur le remplit)
    message: ''
  };

  // À remplacer par vos vraies clés EmailJS
  private readonly EMAILJS_SERVICE_ID = 'service_xi7pegj';
  private readonly EMAILJS_TEMPLATE_ID = 'template_huzkitt';
  private readonly EMAILJS_PUBLIC_KEY = 'pm3CTOGEfG-mP4dzi';

  constructor() {
    emailjs.init(this.EMAILJS_PUBLIC_KEY);
  }

  async onSubmit(form: NgForm): Promise<void> {
    if (form.invalid) {
      return;
    }

    this.loading.set(true);
    this.error.set(null);
    this.submitted.set(false);

    const templateParams = {
      name: this.contact.name,
      email: this.contact.email,
      title: this.contact.title, // Maintenant envoyé à EmailJS
      message: this.contact.message,
      date: new Date().toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      const response = await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email envoyé avec succès!', response);
      this.submitted.set(true);
      form.resetForm();

      // Réinitialiser l'objet contact
      this.contact = {
        name: '',
        email: '',
        title: '',
        message: ''
      };

      setTimeout(() => {
        this.submitted.set(false);
      }, 5000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      this.error.set('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      this.loading.set(false);
    }
  }
}
