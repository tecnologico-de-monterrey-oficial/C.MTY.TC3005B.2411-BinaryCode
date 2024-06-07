import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthGuard } from './guards/auth.guards';
import { AuthRedirectGuardFn } from './guards/authRedirect.guards';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login',
        //canActivate: [AuthRedirectGuardFn],
    },
    {
        path: 'entrada',
        loadChildren: () =>
            import('./EntradaLogin/entrada-login.module').then(
                m => m.EntradaLoginModule
            ),
        canActivate: [AuthRedirectGuardFn],
    },
    {
        path: 'archivos',
        loadChildren: () =>
            import(
                './paginas/vista-archivos/vista-archivos-routing.module'
            ).then(m => m.VistaArchivosRoutingModule),
        canActivate: [IsAuthGuard],
    },
    {
        path: 'proyectos',
        loadChildren: () =>
            import(
                './paginas/vista-proyectos/vista-proyectos-routing.module'
            ).then(m => m.VistaProyectosRoutingModule),
        canActivate: [IsAuthGuard],
    },
    {
        path: 'unidades',
        loadChildren: () =>
            import(
                './paginas/vista-unidades/vista-unidades-routing.module'
            ).then(m => m.VistaUnidadesRoutingModule),
        canActivate: [IsAuthGuard],
    },
    {
        path: 'personas',
        loadChildren: () =>
            import(
                './paginas/vista-personas/vista-persona-routing.module'
            ).then(m => m.VistaPersonasRoutingModule),
        canActivate: [IsAuthGuard],
    },
    {
        path: 'permisos',
        loadChildren: () =>
            import(
                './paginas/vista-permisos/vista-permisos-routing.module'
            ).then(m => m.VistaPermisosRoutingModule),
        canActivate: [IsAuthGuard],
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./EntradaLogin/entrada-login.module').then(
                m => m.EntradaLoginModule
            ),
        canActivate: [AuthRedirectGuardFn],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
