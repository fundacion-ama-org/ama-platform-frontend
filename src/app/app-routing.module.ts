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
    path: 'beneficiario',
    loadChildren: () => import('./modules/beneficiario/beneficiario.module').then(m => m.BeneficiarioModule)
  },

  // {
  //   path: 'admin',
  //   // component: VerticalComponent
  //   // LAOD

  // },

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
