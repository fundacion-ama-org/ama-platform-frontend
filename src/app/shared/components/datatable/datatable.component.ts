import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ActionsEmit, ActionsEvent, DataTableHeader } from '../../interfaces/datatable.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatatableComponent {

  //TODO: Inputs
  @Input({required: true}) headers: DataTableHeader[] = [] //* Encabezados para los headers de la tabla
  @Input({required: true}) data: any[] = [] //* Arreglo de datos en la paginacion
  @Input() options: boolean = false //* Activa los botones de editar y eliminar
  @Input() pagination: boolean = false //* Activa la paginacion
  @Input() limit: number[] = [10, 20, 30] //* Se puede implementar mas LIMITES de la paginacion

  //TODO: Outputs
  @Output() accion: EventEmitter<ActionsEmit> = new EventEmitter<ActionsEmit>();
  @Output() filtro: EventEmitter<string> = new EventEmitter<string>();

  public filterControl: FormControl = new FormControl()

  clear() {
    this.filtro.emit('');
  }

  filter(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.filtro.emit(value);
  }

  action(evento: ActionsEvent, value: any){
    this.accion.emit({action: evento, value})
  }

}



