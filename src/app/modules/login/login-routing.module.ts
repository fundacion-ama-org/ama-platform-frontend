import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { RestaurarLoginComponent } from './pages/restaurar-login/restaurar-login.component';
import { ListarBeneficiarioComponent } from '../beneficiario/pages/listar-beneficiario/listar-beneficiario.component';

const routes: Routes = [
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'restaurar-login', component: RestaurarLoginComponent },
  // { path: 'listar', component: ListarBeneficiarioComponent },
  { path: '**', redirectTo: 'iniciar-sesion' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
