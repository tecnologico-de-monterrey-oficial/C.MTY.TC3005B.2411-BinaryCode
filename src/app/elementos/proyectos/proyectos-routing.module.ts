import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnidadesPaginaComponent } from '../unidades/unidades-pagina/unidades-pagina.component';
import { ProyectosPaginaComponent } from './proyectos-pagina/proyectos-pagina.component';

const routes: Routes = [
    { path: '', component: ProyectosPaginaComponent },
    { path: ':id/unidades', component: UnidadesPaginaComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProyectosRoutingModule {}
