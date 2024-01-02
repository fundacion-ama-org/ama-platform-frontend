import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarBrigadaComponent } from './pages/listar-brigada/listar-brigada.component';
//import { ListarBeneficiarioComponent } from './pages/listar-beneficiario/listar-beneficiario.component';

const routes: Routes = [
  //* Listar
  {
    path: '',
    component: ListarBrigadaComponent
  },
  {
    path: '**',
    redirectTo: 'brigada'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrigadaRoutingModule { }
