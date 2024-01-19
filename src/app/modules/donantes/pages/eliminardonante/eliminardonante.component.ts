import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DonantesService } from '../../services/donantes.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-eliminardonante',
  templateUrl: './eliminardonante.component.html',
  styleUrls: ['./eliminardonante.component.css']
})
export class EliminardonanteComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EliminardonanteComponent>,
    private donantesService: DonantesService // Suponiendo que tienes un servicio para manejar la eliminación
  ) {}

  eliminarDonante() {
    console.log('Eliminando donante con ID: ', this.data.id);
    this.donantesService.eliminarDonante(this.data.id).subscribe(
      data => {
        console.log('Donante eliminado', data);
        this.donantesService.donanteFueCreado(); // Emitir evento de donante eliminado
        this.dialogRef.close();
      },
      error => {
        console.error(error);
      }
    );
  }

}
