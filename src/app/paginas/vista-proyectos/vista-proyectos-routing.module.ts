import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
    { path: '', component: ProyectosComponent },
    {
        path: ':proyectoId/unidades',
        loadChildren: () =>
            import('../vista-unidades/vista-unidades-routing.module').then(
                m => m.VistaUnidadesRoutingModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VistaProyectosRoutingModule {}
