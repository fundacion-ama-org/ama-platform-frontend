import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DonanteService } from '../../services/donante.service';
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
    private donanteService: DonanteService // Suponiendo que tienes un servicio para manejar la eliminación
  ) {}

  eliminarDonante() {
    console.log('Eliminando donante con ID: ', this.data.id);
    this.donanteService.eliminarDonante(this.data.id).subscribe(
      data => {
        console.log('Donante eliminado', data);
        this.donanteService.donanteFueCreado(); // Emitir evento de donante eliminado
        this.dialogRef.close();
      },
      error => {
        console.error(error);
      }
    );
  }

}
