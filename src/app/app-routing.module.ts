import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/proyectos' },
    //{ path: 'inicio', loadChildren: () => import('./MainLayout/main-layout.module').then(m => m.MainLayoutModule) },
    {
        path: 'entrada',
        loadChildren: () =>
            import('./elementos/Entrada/entrada-routing.module').then(
                m => m.EntradaRoutingModule
            ),
    },
    {
        path: 'archivos',
        loadChildren: () =>
            import('./elementos/archivos/archivos-routing.module').then(
                m => m.ArchivosRoutingModule
            ),
    },
    {
        path: 'proyectos',
        loadChildren: () =>
            import('./elementos/proyectos/proyectos-routing.module').then(
                m => m.ProyectosRoutingModule
            ),
    },
    {
        path: 'personas',
        loadChildren: () =>
            import('./elementos/personas/personas-routing.module').then(
                m => m.PersonasRoutingModule
            ),
    },
    {
        path: 'permisos',
        loadChildren: () =>
            import('./elementos/permisos/permisos-routing.module').then(
                m => m.PermisosRoutingModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
