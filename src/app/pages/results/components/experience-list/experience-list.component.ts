import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EXPERIENCES } from '../../../../core/data/profile.data';
import { IconComponent } from '../../../../shared/icon/icon.component';

/** Expériences professionnelles, sous forme d'accordéon natif (`<details>`). */
@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceListComponent {
  protected readonly experiences = EXPERIENCES;
}
