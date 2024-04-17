import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', loadChildren: () => import('./MainLayout/main-layout.module').then(m => m.MainLayoutModule) },
  { path: 'entrada', loadChildren: () => import('./EntradaLogin/entrada-login.module').then(m => m.EntradaLoginModule) },
  { path: 'archivos', loadChildren : () => import('./MainLayout/paginas/vista-archivos/vista-archivos-routing.module').then(m => m.VistaArchivosRoutingModule) },
  {path: 'proyectos', loadChildren: () => import('./MainLayout/paginas/vista-proyectos/vista-proyectos-routing.module').then(m => m.VistaProyectosRoutingModule) },
  {path: 'unidades', loadChildren: () => import('./MainLayout/paginas/vista-unidades/vista-unidades-routing.module').then(m => m.VistaUnidadesRoutingModule) },
  {path: 'personas', loadChildren: () => import('./MainLayout/paginas/vista-personas/vista-persona-routing.module').then(m => m.VistaPersonasRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
