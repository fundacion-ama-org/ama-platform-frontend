import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EliminarVoluntarioComponent } from '../eliminar-voluntario/eliminar-voluntario.component';
import { CrearVoluntarioComponent } from '../crear-voluntario/crear-voluntario.component';
import { Voluntarios } from '../../interfaces/voluntarios';
import { VoluntariosService } from '../../services/voluntario.service';

@Component({
  selector: 'app-listar-voluntarios',
  templateUrl: './listar-voluntarios.component.html',
  styleUrl: './listar-voluntarios.component.scss'
})
export class ListarVoluntariosComponent implements AfterViewInit, OnInit  {

  displayedColumns: string[] = ['id', 'personId', 'firstName', 'lastName', 'email', 'phoneNumber', 'isActive', 'gender', 'address', 'available', 'activityTypeId', 'activityType', 'acciones'];

  dataSource = new MatTableDataSource<Voluntarios>([]);

  @ViewChild(MatSort, { static: false }) sort: MatSort | null = null;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | null = null;

  constructor(public dialog: MatDialog, private voluntarioService : VoluntariosService, private changeDetectorRefs: ChangeDetectorRef){}

  ngOnInit(): void {
    this.load();
  }

  load():void{
    this.dataSource.data = [];
    this.voluntarioService.getVoluntarios().subscribe(
      voluntario => {
        this.dataSource.data = voluntario;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.changeDetectorRefs.detectChanges();
      }
    )
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openAddVoluntarioDialog(title: string) {
    const dialogRef = this.dialog.open(CrearVoluntarioComponent, {
      width: '450px',
      data: {
        title,
      }
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
