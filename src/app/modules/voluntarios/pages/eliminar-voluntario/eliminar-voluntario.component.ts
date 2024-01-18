import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VoluntariosService } from '../../services/voluntario.service';

@Component({
  selector: 'app-eliminar-voluntario',
  templateUrl: './eliminar-voluntario.component.html',
  styleUrl: './eliminar-voluntario.component.scss'
})
export class EliminarVoluntarioComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id:string},
  public dialogRef: MatDialogRef<EliminarVoluntarioComponent>){}

  cancel(): void{
    this.dialogRef.close(false);
  }

  deleted(): void{
    this.dialogRef.close(true);
  }

}
