import { ChangeDetectionStrategy, Component } from '@angular/core';

import { INTRO_HIGHLIGHT, SOFT_SKILLS_HIGHLIGHT } from '../../core/data/profile.data';
import { AboutPanelComponent } from './components/about-panel/about-panel.component';
import { ContactLinksComponent } from './components/contact-links/contact-links.component';
import { ExperienceListComponent } from './components/experience-list/experience-list.component';
import { FaqComponent } from './components/faq/faq.component';
import { HighlightCardComponent } from './components/highlight-card/highlight-card.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';
import { ProfileTitleComponent } from './components/profile-title/profile-title.component';
import { ProjectCarouselComponent } from './components/project-carousel/project-carousel.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

/** Page de résultats : assemble les sections du portfolio. */
@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    TabsComponent,
    ProfileTitleComponent,
    ProfilePhotoComponent,
    ExperienceListComponent,
    HighlightCardComponent,
    FaqComponent,
    ProjectCarouselComponent,
    SoftSkillsComponent,
    InterestsComponent,
    AboutPanelComponent,
    TechnologiesComponent,
    ContactLinksComponent,
    SiteFooterComponent,
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  protected readonly intro = INTRO_HIGHLIGHT;
  protected readonly softSkillsHighlight = SOFT_SKILLS_HIGHLIGHT;
}
