import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';

import { CONTACT_PROFILES } from '../../../../core/data/contact.data';
import { ContactEntry } from '../../../../core/models/portfolio.models';
import { ClipboardService } from '../../../../core/services/clipboard.service';
import { ToastService } from '../../../../core/services/toast.service';
import { CircleLinkComponent } from '../../../../shared/circle-link/circle-link.component';
import { IconComponent } from '../../../../shared/icon/icon.component';

const FEEDBACK_DURATION_MS = 1500;

/** « Contact & profils » : liens rapides, chacun avec un bouton pour copier la valeur. */
@Component({
  selector: 'app-contact-links',
  standalone: true,
  imports: [CircleLinkComponent, IconComponent],
  templateUrl: './contact-links.component.html',
  styleUrl: './contact-links.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactLinksComponent {
  private readonly clipboard = inject(ClipboardService);
  private readonly toast = inject(ToastService);

  protected readonly contacts = CONTACT_PROFILES;
  /** Libellé du contact dont la valeur vient d'être copiée (retour visuel temporaire). */
  protected readonly copied = signal<string | null>(null);

  private resetTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.resetTimer));
  }

  protected async copy(contact: ContactEntry): Promise<void> {
    const value = contact.copyValue;
    if (!value) {
      return;
    }

    if (!(await this.clipboard.copy(value))) {
      this.toast.show('Impossible de copier');
      return;
    }

    this.copied.set(contact.label);
    this.toast.show(`Copié : ${value}`);
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(() => this.copied.set(null), FEEDBACK_DURATION_MS);
  }
}
