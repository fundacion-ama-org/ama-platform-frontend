import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CrearDonanteComponent } from '../crear-donante/crear-donante.component';
import { EliminardonanteComponent } from '../eliminardonante/eliminardonante.component';

// Define la estructura de los datos de un donante
export interface Donante {
  id_donante: number;
  nombre_donante: string;
  tipo_donacion: string;
  valor_donacion: number;
  celular_donante: string;
  voluntario: boolean;
}

@Component({
  selector: 'app-homeDonante',
  templateUrl: './homeDonante.component.html',
  styleUrls: ['./homeDonante.component.css']
})
export class HomeDonanteComponent implements AfterViewInit {
  displayedColumns: string[] = ['id_donante', 'nombre_donante', 'tipo_donacion', 'valor_donacion', 'celular_donante', 'voluntario', 'acciones'];
  dataSource: MatTableDataSource<Donante>;

  @ViewChild(MatSort, { static: false }) sort: MatSort | null = null;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | null = null;

 
  constructor(public dialog: MatDialog) {
    // Datos de ejemplo para inicializar tu dataSource
    this.dataSource = new MatTableDataSource([
      // Datos de ejemplo. Reemplaza esto con tus datos reales.
      { id_donante: 1, nombre_donante: 'John Doe', tipo_donacion: 'Monetaria', valor_donacion: 100, celular_donante: '1234567890', voluntario: true },
      { id_donante: 2, nombre_donante: 'Jane Doe', tipo_donacion: 'En especie', valor_donacion: 200, celular_donante: '0987654321', voluntario: false },
      // ... más datos de donantes ...
    ]);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  reload() {
    // Implementa la lógica para recargar los datos aquí
  }

  openAddDonanteDialog() {
    const dialogRef = this.dialog.open(CrearDonanteComponent, {
      width: '450px',
      // puedes pasar datos al modal si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal fue cerrado');
      // Lógica después de cerrar el modal
    });
  }

  startEdit(index: number, donante: Donante) {
    // Implementa la lógica para iniciar la edición de un donante
  }

  openDeleteDonanteDialog() {
    const dialogRef = this.dialog.open(EliminardonanteComponent, {
      width: '300px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Lógica para eliminar el donante
      }
    });
  }
}
