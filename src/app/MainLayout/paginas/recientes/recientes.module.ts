import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoArchivosModule } from '../componentes/contenido-archivos/contenido-archivos.module';
import { RecientesComponent } from './recientes.component';

@NgModule({
  imports: [
    CommonModule,
    ContenidoArchivosModule
  ],
  declarations: [
    RecientesComponent
  ],
  exports: [RecientesComponent],
})
export class RecientesModule { }
