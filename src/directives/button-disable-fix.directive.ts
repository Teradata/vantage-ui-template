import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'a[buttonDisableFix]',
})
export class ButtonDisableFix {

  @HostBinding('attr.disabled')
  get disabled(): string {
    return undefined;
  }

}