import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    IniciarSesionComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
