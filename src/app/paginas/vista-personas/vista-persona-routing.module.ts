import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component'; // Importar el componente

const routes: Routes = [
    { path: '', component: PersonasComponent }, // Esta es la ruta por defecto
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class VistaPersonasRoutingModule {}
