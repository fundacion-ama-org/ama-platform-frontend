import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BrigadaService } from '../../services/brigada.service';
import { ObtenerBrigadaResponse } from '../../models/Response/obtenerBrigadaResponse';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrigadaRequest } from '../../models/Request/BrigadaRequest';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import 'moment/locale/es';

//import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-listar-brigada',
  templateUrl: './listar-brigada.component.html',
  styleUrls: ['./listar-brigada.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-US'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class ListarBrigadaComponent implements OnInit, AfterViewInit {

  constructor(private serviceBrigada : BrigadaService, private adapter: DateAdapter<any>, @Inject(MAT_DATE_LOCALE) private locale: string,) { 
    
  }
 
  vistaModelEliminarConsulta : boolean = false;
  vistaModelEliminar : boolean = false;

  vistaModificarBrigada : boolean = false;
  vistaModificarBrigadaConfirmacion : boolean = false;
  vistaModificarBrigadaExito : boolean = false;

  vistaCrearBrigada : boolean = false;
  vistaCrearBrigadaExito : boolean = false;

  vistaErrorPeticion: boolean = false;

  vistaVerBrigada: boolean = false;

  @ViewChild(MatSort) sort! : MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  dataSource: any;
  brigadasLista: ObtenerBrigadaResponse[] = [];

  displayedColumns: string[] = ['numero','nombreBrigada', 'nombreResponsable', 'descripcionBrigada', 'opciones'];
 
  /* Form Control editar*/
  editar_brigada_FormGroup = new FormGroup({
    nombre_brigada_editar: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    descripcion_brigada_editar: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    nombre_responsable_editar: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    numero_responsable_editar: new FormControl('', { validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8)], updateOn: 'blur' })
  });

  /* Form Control nueva brigada*/
  nueva_brigada_FormGroup = new FormGroup({
    nombre_brigada: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    descripcion_brigada: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    nombre_responsable: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    numero_responsable: new FormControl('', { validators:  [Validators.required, Validators.minLength(8), Validators.maxLength(8)], updateOn: 'blur' }),
    direccion: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    fechaInicio: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    fechFin: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
  });
  
  
  ngOnInit() {
    this.spanish();
    this.obtenerBrigadas();
  }

  spanish() {
    this.locale = 'es-ES';
    this.adapter.setLocale(this.locale);
  }
  obtenerBrigadas(){
    this.serviceBrigada.obtenerBrigadas().subscribe((data)=>{
      this.brigadasLista = data.map((response : any)=>{
        return {
          id_brigada: response.id,
          nombreBrigada: response.nombre_Brigada,
          descripcionBrigada: response.descripcion_Brigada,
          nombreResponsable: response.nombre_Responsable,
          num_Responsable: response.num_Responsable,
          direccion: response.direccion,
          inicio_Brigada: response.inicio_Brigada,
          fin_Brigada: response.fin_Brigada
        }
      });
      
      this.dataSource = new MatTableDataSource<ObtenerBrigadaResponse>(this.brigadasLista);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },(error)=>{
      this.abrirVistaErrorPeticion();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
   // this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
  }

  abrirVistaCrearBrigada(){
    this.vistaCrearBrigada = true;

  }
  cerrrarVistaCrearBrigada(){
    this.resetearFormCrearBrigada();
    this.vistaCrearBrigada = false
  }

  crearBrigada(){
    const datarequest : BrigadaRequest = {
      nombre_Brigada: this.nueva_brigada_FormGroup.controls.nombre_brigada.value!,
      descripcion_Brigada: this.nueva_brigada_FormGroup.controls.descripcion_brigada.value!,
      nombre_Responsable: this.nueva_brigada_FormGroup.controls.nombre_responsable.value!,
      num_Responsable: Number(this.nueva_brigada_FormGroup.controls.numero_responsable.value!),
      direccion: this.nueva_brigada_FormGroup.controls.direccion.value!,
      inicio_Brigada: new Date(this.nueva_brigada_FormGroup.controls.fechaInicio.value!),
      fin_Brigada: new Date(this.nueva_brigada_FormGroup.controls.fechFin.value!),
    }
    this.serviceBrigada.crearBrigada(datarequest).subscribe((data)=>{
      this.cerrrarVistaCrearBrigada();
      this.obtenerBrigadas();
      this.vistaCrearBrigadaExito = true;
    },
    (error)=>{
      this.abrirVistaErrorPeticion();
    });
  }

  cerrarModalCreacionBrigadaExito() {
    this.vistaCrearBrigadaExito = false;
  }

  resetearFormCrearBrigada(){
    this.nueva_brigada_FormGroup.reset();
    // this.nueva_brigada_FormGroup.controls.nombre_brigada.setValue("");
    // this.nueva_brigada_FormGroup.controls.descripcion_brigada.setValue("");
    // this.nueva_brigada_FormGroup.controls.nombre_responsable.setValue("");
    // this.nueva_brigada_FormGroup.controls.numero_responsable.setValue("");
    // this.nueva_brigada_FormGroup.controls.direccion.setValue("");
    // this.nueva_brigada_FormGroup.controls.fechaInicio.setValue("");
    // this.nueva_brigada_FormGroup.controls.fechFin.setValue("");
  }

  posicionVistaBrigada: number = 0;
  abrirModalVistaBrigada(id:number){
    this.vistaVerBrigada = true;
    this.posicionVistaBrigada = this.brigadasLista.findIndex(data => data.id_brigada == id);
  }
  cerrarModalVistaBrigada(){
    this.posicionVistaBrigada = 0;
    this.vistaVerBrigada = false;
  }

  cerrarModalConfirmarEliminar(){
    this.vistaModelEliminarConsulta = false;
    this.id_Eliminar = 0;
  }

  brigadaEliminar: string = "";
  abrirModalConfirmarEliminar(brigada:string, id:number){
    this.brigadaEliminar = brigada;
    this.vistaModelEliminarConsulta = true;
    this.id_Eliminar = id;
  }

  id_Eliminar:number = 0;
  aceptarEliminarBrigadaFinal(){
    this.vistaModelEliminarConsulta = false;
    this.serviceBrigada.eliminarBrigada(this.id_Eliminar).subscribe((data)=>{
      this.vistaModelEliminar = true;
      this.obtenerBrigadas();
    },
    (error) => {
      this.abrirVistaErrorPeticion();
    });
  }

  id_brigadaEditar: number = 0;
  //brigadaEditarMsj: string = "";
  abrirEditarBrigada(id:number){
    this.id_brigadaEditar = id;
    const index = this.brigadasLista.findIndex(data => data.id_brigada == id);
    //this.brigadaEditarMsj = this.brigadasLista[index].nombreBrigada;
    this.editar_brigada_FormGroup.controls.nombre_brigada_editar.setValue(this.brigadasLista[index].nombreBrigada);
    this.editar_brigada_FormGroup.controls.descripcion_brigada_editar.setValue(this.brigadasLista[index].descripcionBrigada);
    this.editar_brigada_FormGroup.controls.nombre_responsable_editar.setValue(this.brigadasLista[index].nombreResponsable);
    this.editar_brigada_FormGroup.controls.numero_responsable_editar.setValue(String(this.brigadasLista[index].num_Responsable));
    this.vistaModificarBrigada = true;
  }
  cerrarEditarBrigada(){
    this.resetearValoresFormEditar();
    this.id_brigadaEditar = 0;
    //this.brigadaEditarMsj = "";
    this.vistaModificarBrigada = false;
  }

  resetearValoresFormEditar(){
    // this.editar_brigada_FormGroup.controls.nombre_brigada_editar.setValue("");
    // this.editar_brigada_FormGroup.controls.descripcion_brigada_editar.setValue("");
    // this.editar_brigada_FormGroup.controls.nombre_responsable_editar.setValue("");
    // this.editar_brigada_FormGroup.controls.numero_responsable_editar.setValue("");
    this.editar_brigada_FormGroup.reset();
  }

  abrirConfirmarEditar(){
    this.vistaModificarBrigada = false;
    this.vistaModificarBrigadaConfirmacion = true;
  }
  cerrarConfirmarEditar(){
    this.resetearValoresFormEditar();
    this.id_brigadaEditar = 0;
    //this.brigadaEditarMsj = "";
    this.vistaModificarBrigadaConfirmacion = false;
  }

  abrirVistaModificarBrigadaExito(){
    const index = this.brigadasLista.findIndex(data => data.id_brigada == this.id_brigadaEditar);
    const datarequest : BrigadaRequest = {
      nombre_Brigada: this.editar_brigada_FormGroup.controls.nombre_brigada_editar.value!,
      descripcion_Brigada: this.editar_brigada_FormGroup.controls.descripcion_brigada_editar.value!,
      nombre_Responsable: this.editar_brigada_FormGroup.controls.nombre_responsable_editar.value!,
      num_Responsable: Number(this.editar_brigada_FormGroup.controls.numero_responsable_editar.value!),
      direccion: this.brigadasLista[index].direccion,
      inicio_Brigada: this.brigadasLista[index].inicio_Brigada,
      fin_Brigada: this.brigadasLista[index].fin_Brigada,
    }
    this.serviceBrigada.editarBrigada(datarequest,this.id_brigadaEditar).subscribe(data=>{
      this.vistaModificarBrigadaExito = true;
      this.cerrarConfirmarEditar();
      this.obtenerBrigadas();
    },
    (error)=>{
      this.cerrarConfirmarEditar();
      this.abrirVistaErrorPeticion();
    });
  }

  cerrarVistaModificarBrigadaExito(){
    this.vistaModificarBrigadaExito = false;
  }

  cerrarEliminarBrigadaFinal(){
    this.vistaModelEliminar = false;
  }

  abrirVistaErrorPeticion(){
    this.vistaErrorPeticion = true;
  }

  cerrarVistaErrorPeticion(){
    this.vistaErrorPeticion = false;
  }

  blockEvent(event: KeyboardEvent) {
    const pattern = /^\d+$/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();
    }
  }


}
