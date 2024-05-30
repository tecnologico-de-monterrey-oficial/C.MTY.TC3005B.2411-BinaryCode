import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { IsAuthGuard } from './guards/auth.guards';
//descomentar cuando pruebes autenticacion

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/proyectos' },
    // { path: 'inicio', loadChildren: () => import('./MainLayout/main-layout.module').then(m => m.MainLayoutModule) },
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
            import(
                './paginas/vista-archivos/vista-archivos-routing.module'
            ).then(m => m.VistaArchivosRoutingModule),
    },
    {
        path: 'proyectos',
        loadChildren: () =>
            import(
                './paginas/vista-proyectos/vista-proyectos-routing.module'
            ).then(m => m.VistaProyectosRoutingModule),
        // canActivate: [IsAuthGuard], DESCONECTAR AL PROBAR AUTH
    },
    {
        path: 'unidades',
        loadChildren: () =>
            import(
                './paginas/vista-unidades/vista-unidades-routing.module'
            ).then(m => m.VistaUnidadesRoutingModule),
    },
    {
        path: 'personas',
        loadChildren: () =>
            import(
                './paginas/vista-personas/vista-persona-routing.module'
            ).then(m => m.VistaPersonasRoutingModule),
    },
    {
        path: 'permisos',
        loadChildren: () =>
            import(
                './paginas/vista-permisos/vista-permisos-routing.module'
            ).then(m => m.VistaPermisosRoutingModule),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./EntradaLogin/entrada-login.module').then(
                m => m.EntradaLoginModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
