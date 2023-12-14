import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiarioRoutingModule } from './beneficiario-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListarBeneficiarioComponent } from './pages/listar-beneficiario/listar-beneficiario.component';


@NgModule({
  declarations: [
    ListarBeneficiarioComponent
  ],
  imports: [
    CommonModule,
    BeneficiarioRoutingModule,

    //* Shared Module
    SharedModule
  ]
})
export class BeneficiarioModule { }
