import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private el: ElementRef) { }

  

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = "red";
  
  }
// @HostListener('mouseover') onHover(){
//   this.el.nativeElement.style.color='red';

// }

  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.color='green';
    }

  }
