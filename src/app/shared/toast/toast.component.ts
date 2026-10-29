import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
    <div class="toast" role="status" aria-live="polite" [class.show]="toast.visible()">
      {{ toast.message() }}
    </div>
  `,
  styles: `
    .toast {
      position: fixed;
      left: 50%;
      bottom: 28px;
      z-index: 30;
      max-width: calc(100vw - 32px);
      padding: 12px 20px;
      font-size: 14px;
      text-align: center;
      color: #fff;
      background: #303134;
      border-radius: 8px;
      transform: translateX(-50%) translateY(80px);
      transition: transform 0.25s;
    }

    .toast.show {
      transform: translateX(-50%) translateY(0);
    }

    @media (max-width: 640px) {
      .toast {
        bottom: 16px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .toast {
        transition: none;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  protected readonly toast = inject(ToastService);
}
