import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { RestaurarLoginComponent } from './pages/restaurar-login/restaurar-login.component';

@NgModule({
  declarations: [
    IniciarSesionComponent,
    RestaurarLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    RouterModule
    
  ]
})
export class LoginModule { }
