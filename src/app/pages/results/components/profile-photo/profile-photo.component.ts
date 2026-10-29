import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROFILE_HEADER } from '../../../../core/data/profile.data';

@Component({
  selector: 'app-profile-photo',
  standalone: true,
  template: `
    <figure class="photo">
      <img [src]="profile.photo" [alt]="profile.photoAlt" />
      <figcaption>{{ profile.photoCaption }}</figcaption>
    </figure>
  `,
  styles: `
    :host {
      display: block;
    }

    .photo {
      position: relative;
      height: clamp(300px, 28vw, 390px);
      margin: 0;
      overflow: hidden;
      border-radius: 20px;
    }

    img {
      width: 100%;
      height: 100%;
    }

    figcaption {
      position: absolute;
      left: 18px;
      bottom: 20px;
      font-size: 14px;
      color: #fff;
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 1000px) {
      .photo {
        height: auto;
        aspect-ratio: 4 / 3;
      }
    }

    @media (max-width: 640px) {
      .photo {
        border-radius: 16px;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePhotoComponent {
  protected readonly profile = PROFILE_HEADER;
}
