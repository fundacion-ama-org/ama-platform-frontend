import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // * Login
  {
    path: 'auth',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  /* Brigadas */
  {
    path: 'brigada',
    loadChildren: () => import('./modules/brigada/brigada.module').then(m => m.BrigadaModule)
  },
  // * Beneficiario
  {
    path: 'beneficiario',
    loadChildren: () => import('./modules/beneficiario/beneficiario.module').then(m => m.BeneficiarioModule)
  },
  {
    path: 'donaciones',
    loadChildren: () => import('./modules/donaciones/donaciones.module').then(m => m.DonacionesModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
