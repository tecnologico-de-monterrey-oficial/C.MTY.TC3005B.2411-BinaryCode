import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivosPaginaContenidosComponent } from './components/archivos-pagina-contenidos/archivos-pagina-contenidos.component'; // Importar el componente
import { ArchivosPaginaFavoritosComponent } from './components/archivos-pagina-favoritos/archivos-pagina-favoritos.component';
import { ArchivosPaginaRecientesComponent } from './components/archivos-pagina-recientes/archivos-pagina-recientes.component';

const routes: Routes = [
    { path: '', component: ArchivosPaginaContenidosComponent }, // Esta es la ruta por defecto
    { path: 'favoritos', component: ArchivosPaginaFavoritosComponent },
    { path: 'recientes', component: ArchivosPaginaRecientesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArchivosRoutingModule {}
