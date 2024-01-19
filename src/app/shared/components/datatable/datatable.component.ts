import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActionsEmit, ActionsEvent, DataTableHeader } from '../../interfaces/datatable.interface';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatatableComponent implements OnInit {


  //TODO: Inputs
  @Input({ required: true }) headers: DataTableHeader[] = [] //* Encabezados para los headers de la tabla
  @Input({ required: true }) data: any[] = [] //* Arreglo de datos en la paginacion
  @Input() options: boolean = false //* Activa los botones de editar y eliminar
  @Input() pagination: boolean = false //* Activa la paginacion
  @Input() limit: number[] = [10, 20, 30] //* Se puede implementar mas LIMITES de la paginacion
  @Input() index: boolean = false //* Para mostrar los index
  //TODO: Outputs
  @Output() accion: EventEmitter<ActionsEmit> = new EventEmitter<ActionsEmit>();

  public filterControl: FormControl = new FormControl()


  ngOnInit(): void {
    this.filter()
  }

  filter() {
    this.filterControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((value: string) => this.action('FILTRAR', value))

  }

  action(evento: ActionsEvent, value: any) {
    console.log(value)
    this.accion.emit({ action: evento, value })
  }


}



