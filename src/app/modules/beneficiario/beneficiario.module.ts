import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiarioRoutingModule } from './beneficiario-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListarBeneficiarioComponent } from './pages/listar-beneficiario/listar-beneficiario.component';
import { FormularioBeneficiarioComponent } from './components/formulario-beneficiario/formulario-beneficiario.component';


@NgModule({
  declarations: [
    ListarBeneficiarioComponent,
    FormularioBeneficiarioComponent
  ],
  imports: [
    CommonModule,
    BeneficiarioRoutingModule,

    //* Shared Module
    SharedModule
  ]
})
export class BeneficiarioModule { }
