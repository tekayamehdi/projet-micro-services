import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[numberOnly]'
})
export class NumberOnlyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;
    if (initalValue === 0) {
      this.el.nativeElement.value = '';
    } else {
      this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
      if (initalValue !== this.el.nativeElement.value) {
        event.stopPropagation();
      }
    }
  }

}
