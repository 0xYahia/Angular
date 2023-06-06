import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective implements OnChanges {
  @Input('LightBox') heighLightColor: string = 'yellow';
  @Input() defaultColor: string = 'darkblue';
  constructor(private elemRef: ElementRef) {
    // this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }
  ngOnChanges() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.heighLightColor}`;
  }

  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }
}
