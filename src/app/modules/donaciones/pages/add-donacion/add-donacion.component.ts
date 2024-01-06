import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { DonacionesService } from '../../services/donaciones.service';
import { Donacion } from '../../interfaces/interfaces';

interface Options {
  value: string;
  descrip: string;
}

@Component({
  selector: 'app-add-donacion',
  templateUrl: './add-donacion.component.html',
  styleUrl: './add-donacion.component.scss'
})
export class AddDonacionComponent {

  @ViewChild(FormGroupDirective)
  formDirective!: FormGroupDirective;

  public myForm: FormGroup = this.fb.group({
    nDonacion: [ '', [ Validators.required, Validators.minLength(3) ] ],
    tipo: [ '', [ Validators.required ] ],
    valor: [ '', [ Validators.required, Validators.min(0) ] ],
    nDonante: [ '', [ Validators.required, Validators.minLength(3) ] ],
    fecha: [ '', [ Validators.required ] ]
  })

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private donacionesService: DonacionesService
  ) {}

  options: Options[] = [
    {value: '1', descrip: 'Tipo 1'},
    {value: '2', descrip: 'Tipo 2'},
    {value: '3', descrip: 'Tipo 3'}
  ];

  donacion: Donacion= {
    nDonaicon: "",
    tipo: "",
    valor: 0,
    nDonante: "",
    fecha: new Date()
  };

  onSave() {

    if ( this.myForm.invalid ) {
      return;
    }

    this.donacion = this.myForm.value;

    this.donacionesService.putDonacion(this.donacion);

    this.formDirective.resetForm();
    this.aceptar();
  }

  aceptar() {
    this._snackBar.open("La donación se realizó con éxito!", "",{duration: 5000});
  }

  cancelar() {
    this._snackBar.open("La donación se canceló", "",{duration: 5000});
  }

}
