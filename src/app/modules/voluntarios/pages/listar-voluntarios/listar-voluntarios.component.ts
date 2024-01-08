import { Component } from '@angular/core';

import { ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EliminarVoluntarioComponent } from '../eliminar-voluntario/eliminar-voluntario.component';
import { CrearVoluntarioComponent } from '../crear-voluntario/crear-voluntario.component';
import { Voluntarios } from '../../interfaces/voluntarios';

@Component({
  selector: 'app-listar-voluntarios',
  templateUrl: './listar-voluntarios.component.html',
  styleUrl: './listar-voluntarios.component.scss'
})
export class ListarVoluntariosComponent implements AfterViewInit  {

  displayedColumns: string[] = ['Id_voluntario', 'Nombres', 'Apellidos', 'Genero', 'Direccion', 'Num_telefono', 'Correo', 'Fecha_inicioV', 'Fecha_finalV', 'ActividadV', 'acciones'];
  dataSource: MatTableDataSource<Voluntarios>;

  @ViewChild(MatSort, { static: false }) sort: MatSort | null = null;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | null = null;

  constructor(public dialog: MatDialog){
    this.dataSource = new MatTableDataSource<Voluntarios>([
      { Id_voluntario: 1, Nombres: 'Juan', Apellidos: 'Ortiz', Genero: 'masculino', Direccion: 'GYE', Num_telefono: 999999999, Correo: 'correo@ejemplo.com', Fecha_inicioV: '2023', Fecha_finalV: '2024', ActividadV: 'actividades' },
      { Id_voluntario: 2, Nombres: 'Bryan', Apellidos: 'Espin', Genero: 'masculino', Direccion: 'GYE', Num_telefono: 999999999, Correo: 'correo@ejemplo.com', Fecha_inicioV: '2023', Fecha_finalV: '2024', ActividadV: 'actividades' },
      { Id_voluntario: 3, Nombres: 'Alejandra', Apellidos: 'Gomez', Genero: 'femenino', Direccion: 'Quito', Num_telefono: 987654321, Correo: 'alejandra@gmail.com', Fecha_inicioV: '2022', Fecha_finalV: '2023', ActividadV: 'ayuda comunitaria' },
      { Id_voluntario: 4, Nombres: 'Carlos', Apellidos: 'Perez', Genero: 'masculino', Direccion: 'Cuenca', Num_telefono: 123456789, Correo: 'carlos@hotmail.com', Fecha_inicioV: '2021', Fecha_finalV: '2022', ActividadV: 'educación infantil' },
      { Id_voluntario: 5, Nombres: 'Ana', Apellidos: 'Martinez', Genero: 'femenino', Direccion: 'Guayaquil', Num_telefono: 555555555, Correo: 'ana@yahoo.com', Fecha_inicioV: '2020', Fecha_finalV: '2021', ActividadV: 'medio ambiente' },
      { Id_voluntario: 6, Nombres: 'Daniel', Apellidos: 'Lopez', Genero: 'masculino', Direccion: 'Loja', Num_telefono: 666666666, Correo: 'daniel@gmail.com', Fecha_inicioV: '2019', Fecha_finalV: '2020', ActividadV: 'ayuda a personas mayores' },
      { Id_voluntario: 7, Nombres: 'fbrz', Apellidos: 'rm', Genero: 'masculino', Direccion: 'GYE', Num_telefono: 999999999, Correo: 'correo@ejemplo.com', Fecha_inicioV: '2023', Fecha_finalV: '2024', ActividadV: 'actividades' },
    ]);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openAddDonanteDialog(title: string) {
    const dialogRef = this.dialog.open(CrearVoluntarioComponent, {
      width: '450px',
      data: title
      // puedes pasar datos al modal si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal fue cerrado');
      // Lógica después de cerrar el modal
    });
  }


  openDeleteVoluntarioDialog() {
    const dialogRef = this.dialog.open(EliminarVoluntarioComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Lógica para eliminar el donante
      }
    });
  }

}
