import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasListaComponent } from './components/personas-lista/personas-lista.component'; // Importar el componente

const routes: Routes = [
    { path: '', component: PersonasListaComponent }, // Esta es la ruta por defecto
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PersonasRoutingModule {}
