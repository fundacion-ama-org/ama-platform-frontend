import { Table } from 'primeng/table';
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DataTableHeader } from '../../interfaces/datatable.interface';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatatableComponent {
  @ViewChild('#dt1') dt1!: ElementRef

  @Input() headers: DataTableHeader[] = [
    {
      nameColumn: 'nombre_beneficiario',
      title: 'Nombre'
    },
    {
      nameColumn: 'apellido_beneficiario',
      title: 'Apellido'
    },
    {
      nameColumn: 'direccion',
      title: 'Direccion'
    },
    {
      nameColumn: 'descripcion_recibida',
      title: 'Desc. recibida'
    },
  ]

  @Input() options: boolean = true
  @Input() pagination: boolean = true
  @Input() limit: number[] = [5, 10, 15, 20]

  @Input() data: any[] = [
    {
      nombre_beneficiario: 'Marlon',
      apellido_beneficiario: 'Quinde',
      direccion: 'Casa del GUASMO',
      descripcion_recibida: 'Hola mundo'
    }
  ]

  clear(table: Table) {
    table.clear();
  }

  filtro(event: Event) {
    const value = (event.target as HTMLInputElement).value
    console.log(this.dt1)
  }

}



