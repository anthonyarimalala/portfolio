import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  Injector,
  Renderer2,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';

import { ContactMenuComponent } from '../contact-menu/contact-menu.component';

const MENU_MARGIN = 12;
const MENU_GAP = 6;

/**
 * Onglets sous l'en-tête : « Tous » et « Contact » (qui ouvre un menu déroulant).
 * Le menu se ferme au clic extérieur, avec Échap, au défilement et au choix d'un contact.
 */
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [ContactMenuComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  private readonly renderer = inject(Renderer2);
  private readonly injector = inject(Injector);

  protected readonly menuOpen = signal(false);
  protected readonly menuPosition = signal({ top: 0, left: 0 });

  private readonly contactTab = viewChild.required<ElementRef<HTMLElement>>('contactTab');
  private readonly menu = viewChild(ContactMenuComponent, { read: ElementRef });
  private stopListening: Array<() => void> = [];

  constructor() {
    inject(DestroyRef).onDestroy(() => this.detach());
  }

  protected toggleMenu(): void {
    if (this.menuOpen()) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  protected closeMenu(): void {
    if (!this.menuOpen()) {
      return;
    }
    this.menuOpen.set(false);
    this.detach();
  }

  private openMenu(): void {
    this.menuOpen.set(true);
    this.placeMenu();
    // Une fois le menu affiché, on connaît sa largeur réelle : on le recale dans l'écran.
    afterNextRender(() => this.placeMenu(), { injector: this.injector });

    this.stopListening = [
      this.renderer.listen('document', 'click', (event: Event) => this.onDocumentClick(event)),
      this.renderer.listen('document', 'keydown.escape', () => this.closeMenu()),
      this.renderer.listen('window', 'scroll', () => this.closeMenu()),
      this.renderer.listen('window', 'resize', () => this.placeMenu()),
    ];
  }

  private onDocumentClick(event: Event): void {
    const target = event.target as Node;
    const inside =
      this.contactTab().nativeElement.contains(target) ||
      this.menu()?.nativeElement.contains(target);
    if (!inside) {
      this.closeMenu();
    }
  }

  private placeMenu(): void {
    const tab = this.contactTab().nativeElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const width = this.menu()?.nativeElement.offsetWidth ?? 300;

    let left = tab.left;
    if (left + width > viewportWidth - MENU_MARGIN) {
      left = viewportWidth - width - MENU_MARGIN;
    }
    left = Math.max(left, MENU_MARGIN);

    this.menuPosition.set({ top: tab.bottom + MENU_GAP, left });
  }

  private detach(): void {
    this.stopListening.forEach((stop) => stop());
    this.stopListening = [];
  }
}
