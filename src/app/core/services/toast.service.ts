import { Injectable, signal } from '@angular/core';

const DEFAULT_DURATION_MS = 2200;

/** Petite notification éphémère affichée en bas de l'écran. */
@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly _message = signal('');
  private readonly _visible = signal(false);
  private timer: ReturnType<typeof setTimeout> | undefined;

  readonly message = this._message.asReadonly();
  readonly visible = this._visible.asReadonly();

  show(message: string, durationMs = DEFAULT_DURATION_MS): void {
    this._message.set(message);
    this._visible.set(true);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this._visible.set(false), durationMs);
  }
}
