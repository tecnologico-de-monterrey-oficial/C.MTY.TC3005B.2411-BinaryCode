import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchivosPaginaContenidosComponent } from './archivos-pagina-contenidos/archivos-pagina-contenidos.component';
import { ArchivosPaginaFavoritosComponent } from './archivos-pagina-favoritos/archivos-pagina-favoritos.component';
import { ArchivosPaginaRecientesComponent } from './archivos-pagina-recientes/archivos-pagina-recientes.component';

const routes: Routes = [
    { path: '', component: ArchivosPaginaContenidosComponent },
    { path: 'favoritos', component: ArchivosPaginaFavoritosComponent },
    { path: 'recientes', component: ArchivosPaginaRecientesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArchivosRoutingModule {}
