import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArchivosPaginaContenidosComponent } from './elementos/archivos/archivos-pagina-contenidos/archivos-pagina-contenidos.component';
import { EstructuraEntradaLoginComponent } from './elementos/estructura/estructura-entrada-login/estructura-entrada-login.component';
import { EstructuraEntradaRegistroComponent } from './elementos/estructura/estructura-entrada-registro/estructura-entrada-registro.component';
import { EstructuraVacioComponent } from './elementos/estructura/estructura-vacio/estructura-vacio.component';
import { PermisosPaginaComponent } from './elementos/permisos/permisos-pagina/permisos-pagina.component';
import { PersonasPaginaComponent } from './elementos/personas/personas-pagina/personas-pagina.component';
import { ProyectosPaginaComponent } from './elementos/proyectos/proyectos-pagina/proyectos-pagina.component';
import { UnidadesPaginaComponent } from './elementos/unidades/unidades-pagina/unidades-pagina.component';

const routes: Routes = [
    { path: 'registro', component: EstructuraEntradaRegistroComponent },
    { path: 'login', component: EstructuraEntradaLoginComponent },

    { path: '', pathMatch: 'full', redirectTo: '/proyectos' },
    { path: 'favoritos', component: ArchivosPaginaContenidosComponent },
    { path: 'recientes', component: ArchivosPaginaContenidosComponent },
    { path: 'personas', component: PersonasPaginaComponent },
    { path: 'permisos/:tipo/:id', component: PermisosPaginaComponent },
    { path: 'proyectos', component: ProyectosPaginaComponent },
    { path: 'proyectos/:id/unidades', component: UnidadesPaginaComponent },
    {
        path: 'proyectos/:proyectoID/unidades/:apartadoID',
        component: ArchivosPaginaContenidosComponent,
    },

    { path: '**', component: EstructuraVacioComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
