import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompletedTask]'
})
export class CompletedTaskDirective {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.textDecoration = 'line-through';
  }
}
