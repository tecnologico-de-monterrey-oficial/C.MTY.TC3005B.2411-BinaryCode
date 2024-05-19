import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnidadesPaginaComponent } from './unidades-pagina/unidades-pagina.component';

const routes: Routes = [
    { path: 'unidades/:id', component: UnidadesPaginaComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UnidadesRoutingModule {}
