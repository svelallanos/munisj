import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[numberOnly]'
})
export class NumberOnlyDirective{

  constructor(private readonly elRef: ElementRef) { }

  @HostListener('input', ['$event'])

  onKey(event: Event): void
  {
    console.log(this.elRef.nativeElement);
    
  }
}
