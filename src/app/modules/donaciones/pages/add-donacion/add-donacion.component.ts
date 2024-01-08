import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { DonacionesService } from '../../services/donaciones.service';
import { Donacion } from '../../interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

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

  donacion: Donacion = {
    nDonacion: '',
    tipo: '',
    valor: 0,
    nDonante: '',
    fecha: new Date()
  };

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
    private _donacionesService: DonacionesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    if( !this.router.url.includes('editarDonaciones') )
    return

    const donacionId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.donacion = this._donacionesService.getDonacionXId(donacionId);

    this.myForm.setValue({
      nDonacion: this.donacion.nDonacion,
      tipo: this.donacion.tipo,
      valor: this.donacion.valor,
      nDonante: this.donacion.nDonante,
      fecha: this.donacion.fecha
    })
  }

  options: Options[] = [
    {value: '1', descrip: 'Tipo 1'},
    {value: '2', descrip: 'Tipo 2'},
    {value: '3', descrip: 'Tipo 3'}
  ];

  onSave() {

    if ( this.myForm.invalid ) {
      return;
    }

    if ( this.donacion.id ) {
      //Actualizar
      return
    } else {
      //Crear
      this._donacionesService.putDonacion(this.myForm.value as Donacion);
      this.formDirective.resetForm();
      this.aceptar();
    }

  }

  aceptar() {
    this._snackBar.open("La donación se realizó con éxito!", "",{duration: 5000});
  }

  cancelar() {
    this._snackBar.open("La donación se canceló", "",{duration: 5000});
  }

}
