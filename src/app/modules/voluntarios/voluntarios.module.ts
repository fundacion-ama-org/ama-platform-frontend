import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVoluntariosComponent } from './pages/listar-voluntarios/listar-voluntarios.component';
import { VoluntariosRoutingModule } from './voluntarios-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CrearVoluntarioComponent } from './pages/crear-voluntario/crear-voluntario.component';
import { EditarVoluntarioComponent } from './pages/editar-voluntario/editar-voluntario.component';
import { EliminarVoluntarioComponent } from './pages/eliminar-voluntario/eliminar-voluntario.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ListarVoluntariosComponent,
    CrearVoluntarioComponent,
    EditarVoluntarioComponent,
    EliminarVoluntarioComponent
  ],
  imports: [
    CommonModule,
    VoluntariosRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSelectModule,
  ]
})
export class VoluntariosModule { }
