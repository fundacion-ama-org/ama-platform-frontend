import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { BeneficiarioRoutingModule } from './beneficiario-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListarBrigadaComponent } from './pages/listar-brigada/listar-brigada.component';
import { BrigadaRoutingModule } from './brigada-routing.module';
//import { ListarBeneficiarioComponent } from './pages/listar-beneficiario/listar-beneficiario.component';


@NgModule({
  declarations: [
    ListarBrigadaComponent
  ],
  imports: [
    CommonModule,
    BrigadaRoutingModule,
    //* Shared Module
    SharedModule
  ]
})
export class BrigadaModule { }
