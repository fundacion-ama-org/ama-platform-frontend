import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogInterface } from '../../interfaces/dialog.interface';
import { ErrorsService } from '../../../../shared/services/errors.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BeneficiarioService } from '../../services/beneficiario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-beneficiario',
  templateUrl: './formulario-beneficiario.component.html',
  styleUrl: './formulario-beneficiario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioBeneficiarioComponent implements OnInit {
  public name: string = 'No categoria';
  public formBeneficiario: FormGroup

  constructor(
    private _dialogRef: MatDialogRef<FormularioBeneficiarioComponent>,
    private _errorsService: ErrorsService,
    private _fb: FormBuilder,
    private _service: BeneficiarioService,
    @Inject(MAT_DIALOG_DATA) private data: DialogInterface
  ) {
    this.formBeneficiario = this.createFormBeneficiario()
  }
  ngOnInit(): void {
    this.name = this.data.mensage
    this.formBeneficiario.patchValue(this.data.beneficiario)
  }



  createFormBeneficiario(): FormGroup {
    return this._fb.group({
      id_beneficiario: [],
      nombre_beneficiario: ['', [Validators.required]],
      apellido_beneficiario: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      tipo_ayuda: ['', [Validators.required]],
      descripcion_recibida: ['', [Validators.required]]
    })
  }


  getErrors(nameControl: string, nombre: string): string {
    return this._errorsService.getErrors(this.formBeneficiario, nameControl, nombre)
  }

  cancelar() {
    this._dialogRef.close(false);
  }

  alerta() {
    Swal.fire({
      title: "Esta seguro que desea continuar",
      icon: "warning",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
      showCloseButton: false
    }).then((value) => {
      if (value.isConfirmed) {
        this.guardar()
      }
    });
  }


  guardar() {
    if (this.formBeneficiario.get('id_beneficiario')?.value) {
      this._service.editarBeneficiario('').subscribe({
        next: () => {
          this._dialogRef.close(true);
        },
        error: () => {
          this._dialogRef.close(false);
        },
        complete: () => { }
      })
    } else {
      this._service.guardarBeneficiario('').subscribe({
        next: () => {
          this._dialogRef.close(true);
        },
        error: () => {
          this._dialogRef.close(false);
        },
        complete: () => { }
      })
    }
  }
}
