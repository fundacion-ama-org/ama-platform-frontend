import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-beneficiario',
  templateUrl: './listar-beneficiario.component.html',
  styleUrl: './listar-beneficiario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListarBeneficiarioComponent { 
  constructor() { 
    
  }
 
  vistaModelEliminarConsulta : boolean = false;
  vistaModelEliminar : boolean = false;

  vistaModificarBeneficiario : boolean = false;
  vistaModificarBeneficiarioConfirmacion : boolean = false;
  vistaModificarBeneficiarioExito : boolean = false;
  
  dataSource: any;
  dataSource1: any[] = [
    {numero: 1, nombre: 'Hydrogen', apellido: 'Hydrogen', direccion: 'Guayaquil', ayuda: 'Hydrogen', descripcion: 'Hydrogen'},
    {numero: 2, nombre: 'Helium', apellido: 'Helium', direccion: 'Quito', ayuda: 'Helium', descripcion: 'Helium'}
  ];

  displayedColumns: string[] = ['numero','nombre', 'apellido', 'direccion', 'ayuda', 'descripcion', 'opciones'];
  
  ngOnInit() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource1);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cerrarModalConfirmarEliminar(){
    this.vistaModelEliminarConsulta = false;
  }

  abrirModalConfirmarEliminar(){
    this.vistaModelEliminarConsulta = true;
  }

  abrirEditarBeneficiario(){
    this.vistaModificarBeneficiario = true;
  }
  cerrarEditarBeneficiario(){
    this.vistaModificarBeneficiario = false;
  }

  announceSortChange(sortState: any) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      //this._liveAnnouncer.announce(Sorted ${sortState.direction}ending);
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
