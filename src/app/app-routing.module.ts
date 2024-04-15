import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', loadChildren: () => import('./MainLayout/main-layout.module').then(m => m.MainLayoutModule) },
  { path: 'entrada', loadChildren: () => import('./EntradaLogin/entrada-login.module').then(m => m.EntradaLoginModule) },
  { path: 'archivos', loadChildren : () => import('./MainLayout/paginas/vista-archivos/vista-archivos.module').then(m => m.VistaArchivosModule) },
  {path: 'proyectos', loadChildren: () => import('./MainLayout/paginas/vista-proyectos/vista-proyectos.module').then(m => m.VistaProyectosModule) },
  {path: 'unidades', loadChildren: () => import('./MainLayout/paginas/vista-unidades/vista-unidades.module').then(m => m.VistaUnidadesModule) },
  {path: 'personas', loadChildren: () => import('./MainLayout/paginas/vista-personas/vista-persona.module').then(m => m.VistaPersonasModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
