import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisosComponent } from './permisos/permisos.component';

const routes: Routes = [
    { path: '', component: PermisosComponent }, // Esta es la ruta por defecto
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VistaPermisosRoutingModule {}
