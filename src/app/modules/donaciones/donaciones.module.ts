import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonacionesRoutingModule } from './donaciones-routing.module';
import { ListarDonacionesComponent } from './pages/listar-donaciones/listar-donaciones.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    ListarDonacionesComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    DonacionesRoutingModule
  ]
})
export class DonacionesModule { }
