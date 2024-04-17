import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidosComponent } from './contenidos/contenidos.component'; // Importar el componente
import { FavoritosComponent } from './favoritos/favoritos.component';
import { RecientesComponent } from './recientes/recientes.component';

const routes: Routes = [
  { path: '', component: ContenidosComponent }, // Esta es la ruta por defecto
  {path: '/favoritos', component : FavoritosComponent}, 
  {path: '/recientes', component : RecientesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistaArchivosRoutingModule { }