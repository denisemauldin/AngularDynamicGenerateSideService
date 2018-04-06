import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sidedir-host]'
})
export class SidedirDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
