import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROFILE_HEADER } from '../../../../core/data/profile.data';

@Component({
  selector: 'app-profile-title',
  standalone: true,
  template: `
    <h1 class="title">{{ profile.name }}</h1>
    <div class="subtitle">
      {{ profile.subtitle }}
      <span aria-hidden="true">⋮</span>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .title {
      margin: 30px 0 4px;
      font-size: clamp(26px, 3vw, 32px);
      font-weight: 400;
    }

    .subtitle {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 22px;
      font-size: clamp(14px, 1.4vw, 16px);
      color: var(--muted);
    }

    @media (max-width: 640px) {
      .title {
        margin-top: 22px;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileTitleComponent {
  protected readonly profile = PROFILE_HEADER;
}
