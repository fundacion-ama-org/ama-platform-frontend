import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-brigada',
  templateUrl: './listar-brigada.component.html',
  styleUrls: ['./listar-brigada.component.scss']
})
export class ListarBrigadaComponent implements OnInit, AfterViewInit {

  constructor() { 
    
  }
 
  vistaModelEliminarConsulta : boolean = false;
  vistaModelEliminar : boolean = false;

  @ViewChild(MatSort) sort! : MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  dataSource: any;
  dataSource1: any[] = [
    {nombreBrigada: 1, nombreResponsable: 'Hydrogen', descripcionBrigada: 1.0079},
    {nombreBrigada: 2, nombreResponsable: 'Helium', descripcionBrigada: 4.0026},
    {nombreBrigada: 3, nombreResponsable: 'Lithium', descripcionBrigada: 6.941},
    {nombreBrigada: 4, nombreResponsable: 'Beryllium', descripcionBrigada: 9.0122},
    {nombreBrigada: 5, nombreResponsable: 'Boron', descripcionBrigada: 10.811},
    {nombreBrigada: 6, nombreResponsable: 'Carbon', descripcionBrigada: 12.0107},
    {nombreBrigada: 7, nombreResponsable: 'Nitrogen', descripcionBrigada: 14.0067},
    {nombreBrigada: 8, nombreResponsable: 'Oxygen', descripcionBrigada: 15.9994},
    {nombreBrigada: 9, nombreResponsable: 'Fluorine', descripcionBrigada: 18.9984},
    {nombreBrigada: 10, nombreResponsable: 'Neon', descripcionBrigada: 20.1797},
  ];

  displayedColumns: string[] = ['nombreBrigada', 'nombreResponsable', 'descripcionBrigada', 'opciones'];
  // cabeceraTabla : any[] = [
  //   {label: 'Nombre brigada', id: 1},
  //   {label: 'Nombre responsable', id: 2},
  //   {label: 'Descripción brigada', id: 3},
  //   {label: 'Opciones', id: 4}
  // ]
  ngOnInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource1);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  cerrarModalConfirmarEliminar(){
    this.vistaModelEliminarConsulta = false;
  }

  abrirModalConfirmarEliminar(){
    this.vistaModelEliminarConsulta = true;
  }

  aceptarEliminarBrigadaFinal(){
    this.vistaModelEliminarConsulta = false;
    this.vistaModelEliminar = true;
  }

  cerrarEliminarBrigadaFinal(){
    this.vistaModelEliminar = false;
  }

  announceSortChange(sortState: any) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      //this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      //this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}