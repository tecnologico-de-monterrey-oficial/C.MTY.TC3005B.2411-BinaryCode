import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnidadesPaginaComponent } from '../unidades/components/unidades-pagina/unidades-pagina.component'; //Importar el componente
import { ProyectosPaginaComponent } from './components/proyectos-pagina/proyectos-pagina.component'; // Importar el componente

const routes: Routes = [
    { path: '', component: ProyectosPaginaComponent },
    { path: ':id/unidades', component: UnidadesPaginaComponent }, // Agregamos el parámetro de id
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProyectosRoutingModule {}
