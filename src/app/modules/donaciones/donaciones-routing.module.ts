import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDonacionesComponent } from './pages/listar-donaciones/listar-donaciones.component';
import { AddDonacionComponent } from './pages/add-donacion/add-donacion.component';

const routes: Routes = [
  {
    path: 'listarDonaciones',
    component: ListarDonacionesComponent
  },
  {
    path: 'agregarDonaciones',
    component: AddDonacionComponent
  },
  {
    path: 'editarDonaciones/:id',
    component: AddDonacionComponent
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
