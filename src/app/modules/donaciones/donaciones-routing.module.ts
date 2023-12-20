import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDonacionesComponent } from './pages/listar-donaciones/listar-donaciones.component';

const routes: Routes = [
  {
    path: 'listarDonaciones',
    component: ListarDonacionesComponent
  },
  {
    path: '**',
    redirectTo: 'listarDonaciones'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonacionesRoutingModule { }
