import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//* Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AmaModalComponent } from './components/Ama-modal/Ama-modal.component';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule, 
    MatDatepickerModule,   
    RouterModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  declarations: [
    ToolbarComponent,
    AmaModalComponent
  ],
  exports: [
    CommonModule,
    //* Http Client Module
    HttpClientModule,
    ReactiveFormsModule,

    //* Modulos de Material
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    ToolbarComponent,
    AmaModalComponent,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SharedModule { }
