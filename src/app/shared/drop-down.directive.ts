import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  @HostBinding('class.open') isopen=false;
  @HostListener('click') onopen() {
    this.isopen=!this.isopen;
  }
  constructor() { }

}
