import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnInit, OnDestroy {
  constructor(private elt: ElementRef) {
    console.log('directive autofocus');
  }

  ngOnInit(): void {
    // met le focus sur ton element
    (this.elt.nativeElement as HTMLElement).focus();
  }

  ngOnDestroy(): void {
    console.log('destroy autofocus');
  }
}
