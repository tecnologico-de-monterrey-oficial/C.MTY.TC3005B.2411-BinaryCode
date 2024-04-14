import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidosComponent } from './contenidos/contenidos.component'; // Importar el componente

const routes: Routes = [
  { path: '', component: ContenidosComponent }, // Esta es la ruta por defecto
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistaArchivosRoutingModule { }