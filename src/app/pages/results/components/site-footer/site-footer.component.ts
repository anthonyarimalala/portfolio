import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LEGAL_NOTICE } from '../../../../core/data/site.data';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  template: `<footer>{{ legalNotice }}</footer>`,
  styles: `
    :host {
      display: block;
    }

    footer {
      padding: 0 var(--cl) 30px;
      font-size: 13px;
      color: var(--muted);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  protected readonly legalNotice = LEGAL_NOTICE;
}
