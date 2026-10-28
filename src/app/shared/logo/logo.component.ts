import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

const PALETTE = ['b', 'r', 'y', 'b', 'g', 'r'] as const;

/** Mot coloré lettre par lettre, à la manière d'un logo de moteur de recherche. */
@Component({
  selector: 'app-logo',
  standalone: true,
  template: `@for (letter of letters(); track $index) {<span [class]="letter.color">{{ letter.char }}</span>}`,
  styles: `
    :host {
      display: inline;
    }
    .b {
      color: #4285f4;
    }
    .r {
      color: #ea4335;
    }
    .y {
      color: #fbbc05;
    }
    .g {
      color: #34a853;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  readonly text = input('Johary');

  protected readonly letters = computed(() =>
    [...this.text()].map((char, index) => ({ char, color: PALETTE[index % PALETTE.length] })),
  );
}
