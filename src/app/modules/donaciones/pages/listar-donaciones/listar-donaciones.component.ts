import { Component, ViewChild } from '@angular/core';
import { DonacionesService } from '../../services/donaciones.service';
import { MatTableDataSource } from '@angular/material/table';
import { Donacion } from '../../interfaces/interfaces';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-donaciones',
  templateUrl: './listar-donaciones.component.html',
  styleUrl: './listar-donaciones.component.scss'
})
export class ListarDonacionesComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private _donacionesService: DonacionesService
  ) {}

  displayedColumns: string[] = [ 'id', 'nDonacion', 'tipo', 'valor', 'nDonante', 'fecha', 'acciones' ];
  dataSource = new MatTableDataSource<Donacion>(this._donacionesService.getDonaciones());

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
