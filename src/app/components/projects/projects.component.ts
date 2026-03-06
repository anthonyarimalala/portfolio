import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {


  @ViewChild('carousel', { static: true }) carouselRef!: ElementRef<HTMLElement>;
  @ViewChild('track', { static: true }) trackRef!: ElementRef<HTMLElement>;

  private isDragging = false;
  private startX = 0;
  private startOffset = 0;
  private currentOffset = 0;
  private resumeTimer: number | null = null;

  private readonly resumeDelayMs = 3500;

  private readonly onPointerDown = (event: PointerEvent) => {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    this.pauseAutoScroll();
    this.isDragging = true;
    this.carouselRef.nativeElement.classList.add('is-dragging');
    this.startX = event.clientX;
    this.startOffset = this.currentOffset;
    this.carouselRef.nativeElement.setPointerCapture(event.pointerId);
  };

  private readonly onPointerMove = (event: PointerEvent) => {
    if (!this.isDragging) {
      return;
    }
    const delta = event.clientX - this.startX;
    this.setOffset(this.startOffset + delta);
  };

  private readonly onPointerUp = (event: PointerEvent) => {
    if (!this.isDragging) {
      return;
    }
    this.isDragging = false;
    this.carouselRef.nativeElement.classList.remove('is-dragging');
    this.carouselRef.nativeElement.releasePointerCapture(event.pointerId);
    this.scheduleAutoScrollResume();
  };

  private readonly onPointerCancel = () => {
    if (!this.isDragging) {
      return;
    }
    this.isDragging = false;
    this.carouselRef.nativeElement.classList.remove('is-dragging');
    this.scheduleAutoScrollResume();
  };

  private readonly onWheel = (event: WheelEvent) => {
    if (event.deltaX === 0 && event.deltaY === 0) {
      return;
    }
    this.pauseAutoScroll();
    const delta = event.deltaX !== 0 ? event.deltaX : event.deltaY;
    this.setOffset(this.currentOffset - delta);
    event.preventDefault();
    this.scheduleAutoScrollResume();
  };



  ngAfterViewInit(): void {
    this.currentOffset = this.getCurrentOffset();
    const carousel = this.carouselRef.nativeElement;
    carousel.addEventListener('pointerdown', this.onPointerDown);
    carousel.addEventListener('pointermove', this.onPointerMove);
    carousel.addEventListener('pointerup', this.onPointerUp);
    carousel.addEventListener('pointerleave', this.onPointerCancel);
    carousel.addEventListener('pointercancel', this.onPointerCancel);
    carousel.addEventListener('wheel', this.onWheel, { passive: false });
  }

  ngOnDestroy(): void {
    if (this.resumeTimer !== null) {
      window.clearTimeout(this.resumeTimer);
    }
    const carousel = this.carouselRef.nativeElement;
    carousel.removeEventListener('pointerdown', this.onPointerDown);
    carousel.removeEventListener('pointermove', this.onPointerMove);
    carousel.removeEventListener('pointerup', this.onPointerUp);
    carousel.removeEventListener('pointerleave', this.onPointerCancel);
    carousel.removeEventListener('pointercancel', this.onPointerCancel);
    carousel.removeEventListener('wheel', this.onWheel);
  }

  private pauseAutoScroll(): void {
    if (this.resumeTimer !== null) {
      window.clearTimeout(this.resumeTimer);
      this.resumeTimer = null;
    }
    const track = this.trackRef.nativeElement;
    this.currentOffset = this.getCurrentOffset();
    track.style.animation = 'none';
    track.style.transform = `translateX(${this.currentOffset}px)`;
  }

  private scheduleAutoScrollResume(): void {
    if (this.resumeTimer !== null) {
      window.clearTimeout(this.resumeTimer);
    }
    this.resumeTimer = window.setTimeout(() => {
      this.resumeTimer = null;
      this.resumeAutoScroll();
    }, this.resumeDelayMs);
  }

  private resumeAutoScroll(): void {
    const track = this.trackRef.nativeElement;
    const halfWidth = this.getHalfWidth();
    if (halfWidth === 0) {
      track.style.animation = '';
      track.style.transform = '';
      track.style.animationDelay = '';
      return;
    }
    const duration = this.getAnimationDurationSeconds();
    const normalized = this.normalizeOffset(this.currentOffset);
    const progress = Math.abs(normalized) / halfWidth;

    track.style.animation = 'none';
    track.getBoundingClientRect();
    track.style.animation = '';
    track.style.transform = '';
    track.style.animationDelay = `${-progress * duration}s`;
  }

  private setOffset(offset: number): void {
    this.currentOffset = this.normalizeOffset(offset);
    this.trackRef.nativeElement.style.transform = `translateX(${this.currentOffset}px)`;
  }

  private normalizeOffset(offset: number): number {
    const halfWidth = this.getHalfWidth();
    if (halfWidth === 0) {
      return 0;
    }
    let normalized = offset % halfWidth;
    if (normalized > 0) {
      normalized -= halfWidth;
    }
    return normalized;
  }

  private getHalfWidth(): number {
    const track = this.trackRef.nativeElement;
    return track.scrollWidth / 2;
  }

  private getCurrentOffset(): number {
    const track = this.trackRef.nativeElement;
    const transform = getComputedStyle(track).transform;
    if (!transform || transform === 'none') {
      return 0;
    }
    const matrix = new DOMMatrixReadOnly(transform);
    return matrix.m41;
  }

  private getAnimationDurationSeconds(): number {
    const track = this.trackRef.nativeElement;
    const duration = getComputedStyle(track).animationDuration;
    const seconds = parseFloat(duration);
    if (Number.isNaN(seconds)) {
      return 35;
    }
    return duration.includes('ms') ? seconds / 1000 : seconds;
  }
}
