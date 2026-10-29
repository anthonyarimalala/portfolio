import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ABOUT } from '../../../../core/data/profile.data';
import { ToastService } from '../../../../core/services/toast.service';

/** Panneau « À propos » : présentation courte et fiche d'informations clés. */
@Component({
  selector: 'app-about-panel',
  standalone: true,
  templateUrl: './about-panel.component.html',
  styleUrl: './about-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPanelComponent {
  private readonly toast = inject(ToastService);

  protected readonly about = ABOUT;

  protected onFeedback(): void {
    this.toast.show('Merci pour votre retour !');
  }
}
