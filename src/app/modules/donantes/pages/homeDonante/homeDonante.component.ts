import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CrearDonanteComponent } from '../crear-donante/crear-donante.component';
import { EliminardonanteComponent } from '../eliminardonante/eliminardonante.component';
import { DonantesService } from '../../services/donantes.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

// Define la estructura de los datos de un donante
export interface Donante {
  id_donante: number;
  nombre: string;
  apellido: string;
  celular_donante: string;
}

@Component({
  selector: 'app-homeDonante',
  templateUrl: './homeDonante.component.html',
  styleUrls: ['./homeDonante.component.css'],
})
export class HomeDonanteComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'id_donante',
    'nombre',
    'apellido',
    'celular_donante',
    'acciones',
  ];

  dataSource = new MatTableDataSource<Donante>([]);

  @ViewChild(MatSort, { static: false }) sort: MatSort | null = null;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | null =
    null;

  constructor(
    public dialog: MatDialog,
    private donantesService: DonantesService,
    private changeDetectorRefs: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarDonantes();
    this.donantesService.donanteCreado$.subscribe(() => {
      this.cargarDonantes();
    });
  }

  cargarDonantes(): void {
    console.log('Cargando donantes...');
    // limpiar la tabla
    this.dataSource.data = [];

    this.donantesService.getAllDonantes().subscribe(
      (data) => {
        const donantesTransformados = data.map((d: any) => ({
          id_donante: d.id,
          nombre: d.firstName, // Cambiado de d.name a d.firstName
          apellido: d.lastName, // Ya está correcto
          celular_donante: d.phoneNumber,
          // Agrega otros campos si son necesarios
        }));
        this.dataSource = new MatTableDataSource(donantesTransformados);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.changeDetectorRefs.detectChanges();
      },
      (error) => {
        console.error(error);
      }
    );
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
      // Otras configuraciones si son necesarias
    });
  }

  startEdit(index: number, donante: Donante) {
    // Implementa la lógica para iniciar la edición de un donante
  }

  openDeleteDonanteDialog(id: string) {
    const dialogRef = this.dialog.open(EliminardonanteComponent, {
      width: '300px',
      data: { id: id },
    });
  }

  public sidebarItems = [
    { label: 'Beneficiario', icon: 'label', url: './list' },
    { label: 'Donaciones', icon: 'label', url: './list' },
    { label: 'Donantes', icon: 'label', url: './donante/homeDonante' },
    { label: 'Beneficiarios', icon: 'label', url: './beneficiario' },
    {
      label: 'Voluntarios',
      icon: 'volunteer_activism',
      url: './voluntarios/listar',
    },
  ];

  public navigate(url: string): void {
    this.router.navigate([url]);
  }
}
