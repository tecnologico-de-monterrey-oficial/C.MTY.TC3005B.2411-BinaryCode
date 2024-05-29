import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivosPaginaContenidosComponent } from './elementos/archivos/archivos-pagina-contenidos/archivos-pagina-contenidos.component';
import { ArchivosPaginaFavoritosComponent } from './elementos/archivos/archivos-pagina-favoritos/archivos-pagina-favoritos.component';
import { ArchivosPaginaRecientesComponent } from './elementos/archivos/archivos-pagina-recientes/archivos-pagina-recientes.component';
import { EntradaRegistroComponent } from './elementos/entrada/entrada-registro/entrada-registro.component';
import { PermisosPaginaComponent } from './elementos/permisos/permisos-pagina/permisos-pagina.component';
import { PersonasListaComponent } from './elementos/personas/personas-lista/personas-lista.component';
import { ProyectosPaginaComponent } from './elementos/proyectos/proyectos-pagina/proyectos-pagina.component';
import { UnidadesPaginaComponent } from './elementos/unidades/unidades-pagina/unidades-pagina.component';
import { VacioUrlComponent } from './elementos/vacio/vacio-url/vacio-url.component';
import { EntradaLoginComponent } from './elementos/entrada/entrada-login/entrada-login.component';

const routes: Routes = [
    { path: 'registro', component: EntradaRegistroComponent },
    { path: 'login', component: EntradaLoginComponent },

    { path: '', pathMatch: 'full', redirectTo: '/proyectos' },
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

    { path: '**', component: VacioUrlComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
