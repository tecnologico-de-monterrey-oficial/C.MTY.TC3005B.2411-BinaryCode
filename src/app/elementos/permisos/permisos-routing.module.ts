import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermisosPaginaComponent } from './components/permisos-pagina/permisos-pagina.component';

const routes: Routes = [
    { path: '', component: PermisosPaginaComponent }, // Esta es la ruta por defecto
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PermisosRoutingModule {}
