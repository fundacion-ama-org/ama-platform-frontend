import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonacionesRoutingModule } from './donaciones-routing.module';
import { ListarDonacionesComponent } from './pages/listar-donaciones/listar-donaciones.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AddDonacionComponent } from './pages/add-donacion/add-donacion.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ListarDonacionesComponent,
    FormularioComponent,
    AddDonacionComponent
  ],
  imports: [
    CommonModule,
    DonacionesRoutingModule,
    MaterialModule
  ]
})
export class DonacionesModule { }
