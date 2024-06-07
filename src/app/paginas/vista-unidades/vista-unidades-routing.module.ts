import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidosComponent } from '../vista-archivos/paginas/contenidos/contenidos.component';
import { UnidadesComponent } from './unidades/unidades.component';

const routes: Routes = [
    { path: '', component: UnidadesComponent },
    {
        path: ':unidadesId',
        component: ContenidosComponent, // Mantener UnidadesComponent como contenedor principal
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VistaUnidadesRoutingModule {}
