import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MainLayoutComponent } from './paginas/MainLayout/main-layout.component';
// import { ArchivosComponent } from './paginas/MainLayout/contenido/archivos/archivos.module';


const routes: Routes = [
  // { path: 'inicio', component: MainLayoutComponent },
  // { path: '', redirectTo: 'inicio' }
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', loadChildren: () => import('./paginas/MainLayout/main-layout.module').then(m => m.MainLayoutModule) },
  { path: 'entrada', loadChildren: () => import('./paginas/Entrada/entrada.module').then(m => m.EntradaModule) },
  { path: 'archivos', loadChildren: () => import('./paginas/MainLayout/contenido/archivos/archivos.module').then(m => m.ArchivosModule) }, 
  { path: 'paginas', loadChildren: () => import('./paginas/MainLayout/contenido/unidades/unidades.module').then(m => m.UnidadesModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
