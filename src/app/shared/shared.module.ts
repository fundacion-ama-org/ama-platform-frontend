import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//* Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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
import { ToastModule } from 'primeng/toast';
import { StyleClassModule } from 'primeng/styleclass';

import { DatatableComponent } from './components/datatable/datatable.component';
import { ErrorComponent } from './components/error/error.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AmaModalComponent } from './components/Ama-modal/Ama-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
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
    ToastModule,
    RouterModule,
    ReactiveFormsModule,

    ButtonModule,
    InputTextModule,

    MatPaginatorModule,
    MatSlideToggleModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [

    TitleModuleComponent,
    OptionsModuleComponent,
    DatatableComponent,
    ErrorComponent,
    AmaModalComponent
  ],
  exports: [
    CommonModule,
    //* Http Client Module
    HttpClientModule,
    ReactiveFormsModule,

    //* Modulos de Material
    MatButtonModule,
    MatCardModule,
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
    ToastModule,
    ButtonModule,
    InputTextModule,
    StyleClassModule,

    //* Componentes Personalizados
    TitleModuleComponent,
    OptionsModuleComponent,
    DatatableComponent,

    //Brigada
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule

  ]
})
export class SharedModule { }