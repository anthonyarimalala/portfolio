import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { PROFILE } from '../../core/portfolio.data';

/** Fiche de profil affichée à droite des résultats (ou au-dessus sur mobile). */
@Component({
  selector: 'app-profile-panel',
  standalone: true,
  templateUrl: './profile-panel.component.html',
  styleUrl: './profile-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePanelComponent {
  protected readonly profile = PROFILE;
  protected readonly hasPhoto = signal(false);

  constructor() {
    // La photo n'est affichée que si le fichier existe ; sinon, les initiales restent visibles.
    const probe = new Image();
    probe.onload = () => this.hasPhoto.set(true);
    probe.src = PROFILE.photo;
  }
}
