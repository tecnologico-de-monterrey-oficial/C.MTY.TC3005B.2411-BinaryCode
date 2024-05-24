import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidosComponent } from './paginas/contenidos/contenidos.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { RecientesComponent } from './paginas/recientes/recientes.component';

const routes: Routes = [
    { path: '', component: ContenidosComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: 'recientes', component: RecientesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VistaArchivosRoutingModule {}
