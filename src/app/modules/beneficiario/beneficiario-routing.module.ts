import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarBeneficiarioComponent } from './pages/listar-beneficiario/listar-beneficiario.component';

const routes: Routes = [
  //* Listar
  {
    path: 'listar',
    component: ListarBeneficiarioComponent
  },
  {
    path: '**',
    redirectTo: 'listar'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiarioRoutingModule { }
