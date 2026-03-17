import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  @Input({ required: true }) images: string[] = [];
  @Input() details = '';
}
