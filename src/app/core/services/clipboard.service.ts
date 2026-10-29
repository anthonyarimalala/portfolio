import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

/** Copie un texte dans le presse-papiers, avec un repli pour les contextes non sécurisés. */
@Injectable({ providedIn: 'root' })
export class ClipboardService {
  private readonly document = inject(DOCUMENT);

  async copy(text: string): Promise<boolean> {
    const view = this.document.defaultView;
    try {
      if (view?.navigator.clipboard && view.isSecureContext) {
        await view.navigator.clipboard.writeText(text);
        return true;
      }
    } catch {
      // On tente le repli ci-dessous.
    }
    return this.legacyCopy(text);
  }

  private legacyCopy(text: string): boolean {
    const field = this.document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.cssText = 'position:fixed;opacity:0;left:-9999px';
    this.document.body.appendChild(field);
    field.focus();
    field.select();
    try {
      return this.document.execCommand('copy');
    } catch {
      return false;
    } finally {
      field.remove();
    }
  }
}
