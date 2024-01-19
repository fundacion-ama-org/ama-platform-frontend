import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerticalComponent } from './modules/layout/vertical/vertical.component';
import { ErrorComponent } from './shared/components/error/error.component';

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
        path: 'donantes',
        loadChildren: () => import('./modules/donantes/donantes.module').then(m => m.DonantesModule)
      },
      {
        path: 'voluntarios',
        loadChildren: () => import('./modules/voluntarios/voluntarios.module').then(m => m.VoluntariosModule)
      },
      { path: '404', component: ErrorComponent},
      { path: '**', redirectTo: 'beneficiario'},
    ]
  },
  { path: '404', component: ErrorComponent},
  { path: '**', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }