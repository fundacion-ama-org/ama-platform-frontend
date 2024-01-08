import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor() { }

  getErrors(formulario: FormGroup, control: string, nameControl: string): string {

    const errors = formulario.get(control)?.errors

    if (!errors) {
      return ''

    }

    for (const error in errors) {
      switch (error) {
        case 'required':
          return `El ${nameControl} es requerido.`
        case 'email':
          return `Formato de ${nameControl.toLowerCase()} invalido.`

        default:
          return 'Errors?'
      }
    }

    return 'Errors?'


  }

}
