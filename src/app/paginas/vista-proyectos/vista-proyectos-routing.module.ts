import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosComponent } from './contenido-proyectos/proyectos/proyectos.component'; // Importar el componente
import { UnidadesComponent } from  '../vista-unidades/unidades/unidades.component' ;//Importar el componente

const routes: Routes = [
    { path: '', component: ProyectosComponent },
    { path: 'proyecto/:id/unidades', component: UnidadesComponent } // Agregamos el parámetro de id
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VistaProyectosRoutingModule {}
