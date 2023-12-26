import { DonacionesModule } from './../donaciones/donaciones.module';
import { BeneficiarioModule } from './../beneficiario/beneficiario.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // * Beneficiario
  {
    path: 'beneficiario',
    loadChildren: () => import('../../modules/beneficiario/beneficiario.module').then(m => m.BeneficiarioModule)
  },
  {
    path: 'donaciones',
    loadChildren: () => import('../../modules/donaciones/donaciones.module').then(m => m.DonacionesModule)
  },
  {
    path: '**',
    redirectTo: 'beneficiario'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
