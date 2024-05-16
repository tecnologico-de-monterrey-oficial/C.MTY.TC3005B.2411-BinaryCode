import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisosComponent } from './components/permisos-pagina/permisos-pagina.component';

const routes: Routes = [
    { path: '', component: PermisosComponent }, // Esta es la ruta por defecto
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PermisosRoutingModule {}
