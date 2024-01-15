import { Directive, HostListener } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Directive({
  selector: '[appValidations][soloLetras]',

})
export class ValidationsDirective {

  constructor(private _sharedService: SharedService) { }

  @HostListener('keypress', ['$event'])
  validacionSololetras(event: KeyboardEvent): boolean {
    const key = event.key

    if (this._sharedService.soloLetras.test(key)) {
      return true
    } else {
      return false
    }

  }

}
