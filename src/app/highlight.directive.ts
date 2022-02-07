import { Directive, ElementRef, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  defaultColor = 'yellow'
  @Input('appHighlight') bgColor!:string;
  constructor(private el:ElementRef)
  { }

  ngOnChanges(changes:SimpleChanges):void
  {
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }
}
