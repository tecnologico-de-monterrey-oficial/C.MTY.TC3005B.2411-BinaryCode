import { NgModule } from '@angular/core';

import { ContenidoProyectosComponent } from './contenido-proyectos.component';
import { ProyectoTarjetaComponent } from './proyecto-tarjeta/proyecto-tarjeta.component';

@NgModule({
  imports: [],
  declarations: [
    ContenidoProyectosComponent,
    ProyectoTarjetaComponent
  ],
  exports: [ContenidoProyectosComponent],
})
export class ContenidoProyectosModule { }
