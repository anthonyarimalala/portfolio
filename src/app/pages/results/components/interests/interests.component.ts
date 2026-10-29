import { ChangeDetectionStrategy, Component } from '@angular/core';

import { INTERESTS, INTEREST_PHOTOS } from '../../../../core/data/profile.data';
import { TagListComponent } from '../../../../shared/tag-list/tag-list.component';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [TagListComponent],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterestsComponent {
  protected readonly interests = INTERESTS;
  protected readonly photos = INTEREST_PHOTOS;
}
