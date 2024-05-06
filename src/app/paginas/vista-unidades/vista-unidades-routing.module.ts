import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnidadesComponent } from './unidades/unidades.component'; // Importar el componente
import { ContenidosComponent } from '../vista-archivos/contenidos/contenidos.component';

const routes: Routes = [
    { path: '', component: UnidadesComponent, children: [
      { path: ':unidadId/archivos', component: ContenidosComponent }
    ]},
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VistaUnidadesRoutingModule {}
