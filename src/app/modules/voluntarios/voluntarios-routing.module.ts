import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListarVoluntariosComponent } from './pages/listar-voluntarios/listar-voluntarios.component';


const routes: Routes = [
  { path: 'listar', component: ListarVoluntariosComponent },
  { path: '**', redirectTo: 'listar' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoluntariosRoutingModule {}
