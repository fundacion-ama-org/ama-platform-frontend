import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-crear-donante',
  templateUrl: './crear-donante.component.html',
  styleUrl: './crear-donante.component.scss'
})
export class CrearDonanteComponent {
  constructor() {}

  onSubmit(donanteForm: any) {
    if (donanteForm.valid) {
      console.log(donanteForm.value);
      // Aquí iría la lógica para enviar los datos al servidor
    }
  }

}
