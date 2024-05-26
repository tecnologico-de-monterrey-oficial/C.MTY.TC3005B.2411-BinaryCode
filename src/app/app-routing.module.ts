import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivosPaginaContenidosComponent } from './elementos/archivos/archivos-pagina-contenidos/archivos-pagina-contenidos.component';
import { ArchivosPaginaFavoritosComponent } from './elementos/archivos/archivos-pagina-favoritos/archivos-pagina-favoritos.component';
import { ArchivosPaginaRecientesComponent } from './elementos/archivos/archivos-pagina-recientes/archivos-pagina-recientes.component';
import { EntradaPaginaComponent } from './elementos/entrada/entrada-pagina/entrada-pagina.component';
import { PermisosPaginaComponent } from './elementos/permisos/permisos-pagina/permisos-pagina.component';
import { PersonasListaComponent } from './elementos/personas/personas-lista/personas-lista.component';
import { ProyectosPaginaComponent } from './elementos/proyectos/proyectos-pagina/proyectos-pagina.component';
import { UnidadesPaginaComponent } from './elementos/unidades/unidades-pagina/unidades-pagina.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/proyectos' },
    { path: 'entrada', component: EntradaPaginaComponent },
    { path: 'favoritos', component: ArchivosPaginaFavoritosComponent },
    { path: 'recientes', component: ArchivosPaginaRecientesComponent },
    { path: 'personas', component: PersonasListaComponent },
    { path: 'permisos/:tipo/:id', component: PermisosPaginaComponent },
    { path: 'proyectos', component: ProyectosPaginaComponent },
    { path: 'proyectos/:id/unidades', component: UnidadesPaginaComponent },
    {
        path: 'proyectos/:proyectoID/unidades/:apartadoID',
        component: ArchivosPaginaContenidosComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
