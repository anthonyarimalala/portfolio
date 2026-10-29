import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BRAND, FULL_NAME, TITLE_SUFFIX } from '../../../../core/data/site.data';
import { ToastService } from '../../../../core/services/toast.service';
import { IconComponent } from '../../../../shared/icon/icon.component';
import { LogoComponent } from '../../../../shared/logo/logo.component';
import { SearchFormComponent } from '../search-form/search-form.component';

/** En-tête collant : logo, barre de recherche (simulée) et raccourcis. */
@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [LogoComponent, IconComponent, SearchFormComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  private readonly toast = inject(ToastService);
  private readonly title = inject(Title);

  protected readonly brand = BRAND;

  protected onLogoClick(): void {
    this.toast.show(`Portfolio de ${FULL_NAME}`);
  }

  /** La recherche est une simulation : elle affiche une notification et met à jour le titre de l'onglet. */
  protected onSearch(query: string): void {
    const text = query.trim();
    this.toast.show(text ? `Recherche : « ${text} » (portfolio)` : 'Saisissez une recherche');
    this.title.setTitle(`${text || 'Portfolio'} - ${TITLE_SUFFIX}`);
  }
}
