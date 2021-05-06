import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appAddClassIfTrue]'
})
export class AddClassIfTrueDirective implements OnInit, OnChanges {

  @Input('appAddClassIfTrue') addedClass: string;
  @Input() condition: boolean;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.condition) {
      this.renderer.addClass(this.element.nativeElement, this.addedClass);
      return;
    }
    this.renderer.removeClass(this.element.nativeElement, this.addedClass);
  }

}
