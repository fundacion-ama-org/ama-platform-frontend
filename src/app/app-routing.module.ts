import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerticalComponent } from './modules/layout/vertical/vertical.component';

const routes: Routes = [
  // * Login
  {
    path: 'auth',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin',
    component: VerticalComponent,
    children: [

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
        path: '**',
        redirectTo: 'beneficiario'
      }
    ]

  },
<<<<<<< HEAD
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
=======
>>>>>>> 104d71ced2dae1f94207224d7bda0c60a47feb38

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
