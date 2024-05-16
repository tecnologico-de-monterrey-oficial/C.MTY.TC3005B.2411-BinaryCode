import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/proyectos' },
    //{ path: 'inicio', loadChildren: () => import('./MainLayout/main-layout.module').then(m => m.MainLayoutModule) },
    {
        path: 'entrada',
        loadChildren: () =>
            import('./EntradaLogin/entrada-login.module').then(
                m => m.EntradaLoginModule
            ),
    },
    {
        path: 'archivos',
        loadChildren: () =>
            import('./paginas/archivos/archivos-routing.module').then(
                m => m.ArchivosRoutingModule
            ),
    },
    {
        path: 'proyectos',
        loadChildren: () =>
            import('./paginas/proyectos/proyectos-routing.module').then(
                m => m.ProyectosRoutingModule
            ),
    },
    {
        path: 'personas',
        loadChildren: () =>
            import('./paginas/personas/personas-routing.module').then(
                m => m.PersonasRoutingModule
            ),
    },
    {
        path: 'permisos',
        loadChildren: () =>
            import('./paginas/permisos/permisos-routing.module').then(
                m => m.PermisosRoutingModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
