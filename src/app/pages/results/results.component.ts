import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import {
  FAQ,
  LEGAL_NOTICE,
  RESULTS,
  SEARCH_QUERY,
  TABS,
} from '../../core/portfolio.data';
import { TabId } from '../../core/portfolio.models';
import { LogoComponent } from '../../shared/logo/logo.component';
import { ProfilePanelComponent } from '../../shared/profile-panel/profile-panel.component';
import { SearchBoxComponent } from '../../shared/search-box/search-box.component';
import { ResultCardComponent } from './result-card/result-card.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    RouterLink,
    LogoComponent,
    SearchBoxComponent,
    ProfilePanelComponent,
    ResultCardComponent,
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly tabs = TABS;
  protected readonly faq = FAQ;
  protected readonly query = SEARCH_QUERY;
  protected readonly legalNotice = LEGAL_NOTICE;

  private readonly queryParams = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });

  /** Onglet actif, lu dans l'URL (?tab=projets). Un onglet inconnu retombe sur « Tous ». */
  protected readonly currentTab = computed<TabId>(() => {
    const requested = this.queryParams().get('tab');
    const match = TABS.find((tab) => tab.id === requested);
    return match ? match.id : 'tous';
  });

  protected readonly visibleResults = computed(() => {
    const tab = this.currentTab();
    return tab === 'tous' ? RESULTS : RESULTS.filter((result) => result.category === tab);
  });

  protected readonly stats = computed(() => {
    const count = this.visibleResults().length;
    const plural = count > 1 ? 's' : '';
    return `Environ ${count} résultat${plural} (0,${20 + count * 3} seconde)`;
  });

  protected selectTab(id: TabId): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: id === 'tous' ? null : id },
      queryParamsHandling: 'merge',
    });
  }

  protected search(): void {
    void this.router.navigate(['/resultats'], { queryParams: { q: SEARCH_QUERY } });
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
