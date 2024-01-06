import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDonanteComponent } from './pages/crear-donante/crear-donante.component';

import { HomeDonanteComponent } from './pages/homeDonante/homeDonante.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'crearDonante',
    component: CrearDonanteComponent
  },
    {
        path: 'homeDonante',
        component: HomeDonanteComponent
    },
  {
    path: '**',
    redirectTo: 'homeDonante'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ,MatToolbarModule
  ,MatIconModule
  ,MatButtonModule
  ,MatFormFieldModule
  ,MatInputModule
  ,MatTableModule
  ,MatSortModule
  ,MatPaginatorModule
  ,FormsModule

],
  exports: [RouterModule]
})
export class DonanteRoutingModule { }
