import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', loadChildren: () => import('./paginas/MainLayout/main-layout.module').then(m => m.MainLayoutModule) },
  { path: 'entrada', loadChildren: () => import('./paginas/Entrada/entrada.module').then(m => m.EntradaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
