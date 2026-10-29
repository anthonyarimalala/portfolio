import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SOFT_SKILLS } from '../../../../core/data/profile.data';
import { TagListComponent } from '../../../../shared/tag-list/tag-list.component';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [TagListComponent],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoftSkillsComponent {
  protected readonly skills = SOFT_SKILLS;
}
