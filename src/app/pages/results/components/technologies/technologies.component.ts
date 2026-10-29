import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TECHNOLOGIES } from '../../../../core/data/technologies.data';
import { CircleLinkComponent } from '../../../../shared/circle-link/circle-link.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CircleLinkComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesComponent {
  protected readonly technologies = TECHNOLOGIES;
}
