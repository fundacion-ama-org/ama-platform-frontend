import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../../shared/shared.module';
import { CrearVoluntarioComponent } from './pages/crear-voluntario/crear-voluntario.component';
import { EditarVoluntarioComponent } from './pages/editar-voluntario/editar-voluntario.component';
import { EliminarVoluntarioComponent } from './pages/eliminar-voluntario/eliminar-voluntario.component';
import { ListarVoluntariosComponent } from './pages/listar-voluntarios/listar-voluntarios.component';
import { VoluntariosRoutingModule } from './voluntarios-routing.module';

@NgModule({
  declarations: [
    ListarVoluntariosComponent,
    CrearVoluntarioComponent,
    EditarVoluntarioComponent,
    EliminarVoluntarioComponent,
  ],
  imports: [
    CommonModule,
    VoluntariosRoutingModule,

    SharedModule,
    FormsModule,

    MatToolbarModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
  ],
})
export class VoluntariosModule {}
