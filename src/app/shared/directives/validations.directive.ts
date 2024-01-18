import { Directive, ElementRef, HostListener } from '@angular/core';
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

@Directive({
  selector: '[appValidations][valores]',
})
export class ValidationCamposValor {
  constructor(el: ElementRef, private _sharedService: SharedService) { }

  validarNumeroCantidadValido(cadena: string, key: string): boolean {

    const hayCadena: boolean = !(cadena === '')

    switch (hayCadena) {
      case true:
        return Number(cadena[0]) === 0 ? true : false
      case false:
        return Number(key[0]) === 0 ? true : false
    }
  }


  @HostListener('keypress', ['$event'])
  validarSoloNumeros(event: KeyboardEvent) {
    const key = event.key

    if (this.validarNumeroCantidadValido((event.target as any).value, key)) {
      return false
    }

    if (this._sharedService.onlyNumeros.test(key)) {
      return true
    } else {
      return false
    }
  }


}


@Directive({
  selector: '[appValidations][busqueda]'
})
export class ValidationBusqueda {
  constructor(el: ElementRef, private _sharedService: SharedService) { }

  @HostListener('keypress', ['$event'])
  validarInputBusqueda(event: KeyboardEvent) {
    const key = event.key
    return this.validarEspacioVacio(key, (event.target as any).value)
  }

  validarEspacioVacio(key: string, cadena: string) {
    const hayValor = cadena === key.trim()
    if (hayValor) {
      return false
    }

    if (this._sharedService.onlyLetrasNumeroEspacios.test(key)) {
      return true
    } else {
      return false
    }
  }
}

@Directive({
  selector: '[noPegar]'
})
export class ValidationNoPegar {
  constructor(el: ElementRef) { }

  @HostListener('paste', ['$event'])
  validarNoPegarData(event: ClipboardEvent) {
    event.preventDefault();
  }
}

@Directive({
  selector: '[appValidations][soloLetras]'
})
export class ValidationSoloLetras {
  constructor(el: ElementRef, private _sharedService: SharedService) { }

  @HostListener('keypress', ['$event'])
  validarSoloLetras(event: KeyboardEvent) {
    const key = event.key
    if (event.code === 'Space') {
      const hayRegistro = (event.target as HTMLInputElement).value.length > 0
      if (!hayRegistro) {
        return false
      }
    }


    if (this._sharedService.onlyLetrasEspacios.test(key)) {
      return true
    } else {
      return false
    }
  }

}

@Directive({
  selector: '[appValidations][identificacion]'
})
export class ValidationIdentificacion {

  constructor(private _sharedService: SharedService) { }

  @HostListener('keypress', ['$event'])
  validarSoloNumeros(event: KeyboardEvent) {
    const key = event.key

    const soloNumerosLetras = /^[0-9A-Za-z]+$/

    if (this._sharedService.soloNumerosLetras.test(key)) {
      return true
    } else {
      return false
    }
  }
}
