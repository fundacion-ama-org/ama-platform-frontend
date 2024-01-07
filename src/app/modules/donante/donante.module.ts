import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonanteRoutingModule } from './donante-routing.module';
import { CrearDonanteComponent } from './pages/crear-donante/crear-donante.component';
import { HomeDonanteComponent } from './pages/homeDonante/homeDonante.component';
import { EliminardonanteComponent } from './pages/eliminardonante/eliminardonante.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CrearDonanteComponent,
    HomeDonanteComponent,
    EliminardonanteComponent
  ],
  imports: [
    CommonModule,
    DonanteRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule ,
    HttpClientModule,
    SharedModule

  ]
})
export class DonanteModule { }
