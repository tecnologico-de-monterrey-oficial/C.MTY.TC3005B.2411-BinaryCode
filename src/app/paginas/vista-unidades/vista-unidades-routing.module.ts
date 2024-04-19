import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnidadesComponent } from './unidades/unidades.component'; // Importar el componente

const routes: Routes = [
    { path: '', component: UnidadesComponent }, // Esta es la ruta por defecto
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VistaUnidadesRoutingModule {}
