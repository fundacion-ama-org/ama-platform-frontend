import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//* Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { TitleModuleComponent } from './components/title-module/title-module.component';
import { OptionsModuleComponent } from './components/options-module/options-module.component';


//* PrimeNG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';

import { DatatableComponent } from './components/datatable/datatable.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    TableModule,
    RouterModule,

    ButtonModule,
    InputTextModule,

  ],
  declarations: [

    TitleModuleComponent,
    OptionsModuleComponent,
    DatatableComponent
  ],
  exports: [
    CommonModule,
    //* Http Client Module
    HttpClientModule,
    ReactiveFormsModule,

    //* Modulos de Material
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,

    //* PrimeNG
    TableModule,
    ButtonModule,
    InputTextModule,
    StyleClassModule,

    //* Componentes Personalizados
    TitleModuleComponent,
    OptionsModuleComponent,
    DatatableComponent

  ]
})
export class SharedModule { }
