import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnidadesPaginaComponent } from './components/unidades-pagina/unidades-pagina.component'; // Importar el componente

const routes: Routes = [
    { path: 'unidades/:id', component: UnidadesPaginaComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UnidadesRoutingModule {}
