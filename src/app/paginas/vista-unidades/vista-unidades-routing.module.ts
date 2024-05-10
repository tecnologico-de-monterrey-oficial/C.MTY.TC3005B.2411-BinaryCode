import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnidadesComponent } from './unidades/unidades.component'; // Importar el componente
import { ContenidosComponent } from '../vista-archivos/contenidos/contenidos.component';

const routes: Routes = [
    { path: 'unidades/:id', component: UnidadesComponent },
  ];
  

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VistaUnidadesRoutingModule {}
