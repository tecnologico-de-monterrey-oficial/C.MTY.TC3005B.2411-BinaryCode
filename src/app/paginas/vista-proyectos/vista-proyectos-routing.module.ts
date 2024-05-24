import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnidadesComponent } from '../vista-unidades/unidades/unidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
    { path: '', component: ProyectosComponent },
    { path: ':proyectoId/unidades', component: UnidadesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VistaProyectosRoutingModule {}
