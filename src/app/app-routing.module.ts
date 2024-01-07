import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // * Login
  {
    path: 'auth',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
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
    path: 'donante',
    loadChildren: () => import('./modules/donante/donante.module').then(m => m.DonanteModule)
  },
  {
    path: 'voluntarios',
    loadChildren: () => import('./modules/voluntarios/voluntarios.module').then(m => m.VoluntariosModule)
  },

  {
    path: '**',
    redirectTo: 'donante'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
