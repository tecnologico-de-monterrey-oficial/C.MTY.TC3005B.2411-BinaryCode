import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArchivosPaginaContenidosComponent } from './componentes/archivos/archivos-pagina-contenidos/archivos-pagina-contenidos.component';
import { EstructuraEntradaLoginComponent } from './componentes/estructura/estructura-entrada-login/estructura-entrada-login.component';
import { EstructuraEntradaRegistroComponent } from './componentes/estructura/estructura-entrada-registro/estructura-entrada-registro.component';
import { EstructuraVacioComponent } from './componentes/estructura/estructura-vacio/estructura-vacio.component';
import { PermisosPaginaComponent } from './componentes/permisos/permisos-pagina/permisos-pagina.component';
import { PersonasPaginaComponent } from './componentes/personas/personas-pagina/personas-pagina.component';
import { ProyectosPaginaComponent } from './componentes/proyectos/proyectos-pagina/proyectos-pagina.component';
import { UnidadesPaginaComponent } from './componentes/unidades/unidades-pagina/unidades-pagina.component';
import { IsAuthGuard, IsNotAuthGuard } from './guards/auth.guards';

const routes: Routes = [
    {
        path: 'registro',
        component: EstructuraEntradaRegistroComponent,
        canActivate: [IsNotAuthGuard],
    },
    {
        path: 'login',
        component: EstructuraEntradaLoginComponent,
        canActivate: [IsNotAuthGuard],
    },

    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/proyectos',
    },
    {
        path: 'favoritos',
        component: ArchivosPaginaContenidosComponent,
        canActivate: [IsAuthGuard],
    },
    {
        path: 'recientes',
        component: ArchivosPaginaContenidosComponent,
        canActivate: [IsAuthGuard],
    },
    {
        path: 'personas',
        component: PersonasPaginaComponent,
        canActivate: [IsAuthGuard],
    },
    {
        path: 'permisos/:tipo/:id',
        component: PermisosPaginaComponent,
        canActivate: [IsAuthGuard],
    },
    {
        path: 'proyectos',
        component: ProyectosPaginaComponent,
        canActivate: [IsAuthGuard],
    },
    {
        path: 'proyectos/:id/unidades',
        component: UnidadesPaginaComponent,
        canActivate: [IsAuthGuard],
    },
    {
        path: 'proyectos/:proyectoID/unidades/:apartadoID',
        component: ArchivosPaginaContenidosComponent,
        canActivate: [IsAuthGuard],
    },

    { path: '**', component: EstructuraVacioComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
