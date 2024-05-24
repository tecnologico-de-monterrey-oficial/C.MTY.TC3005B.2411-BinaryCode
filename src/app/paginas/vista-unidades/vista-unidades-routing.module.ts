import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnidadesComponent } from './unidades/unidades.component';

const routes: Routes = [
    { path: '', component: UnidadesComponent },
    {
        path: ':unidadId/archivos',
        loadChildren: () =>
            import('../vista-archivos/vista-archivos-routing.module').then(
                m => m.VistaArchivosRoutingModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VistaUnidadesRoutingModule {}
