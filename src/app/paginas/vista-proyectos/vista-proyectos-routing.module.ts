import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosComponent } from './contenido-proyectos/proyectos/proyectos.component'; // Importar el componente

const routes: Routes = [
    { path: '', component: ProyectosComponent }, // Esta es la ruta por defecto
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VistaProyectosRoutingModule {}
