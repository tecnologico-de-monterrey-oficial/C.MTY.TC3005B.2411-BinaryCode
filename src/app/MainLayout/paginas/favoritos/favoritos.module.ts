import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ContenidoArchivosModule } from '../componentes/contenido-archivos/contenido-archivos.module';
import { FavoritosComponent } from './favoritos.component';

@NgModule({
  imports: [
    CommonModule,
    ContenidoArchivosModule,
  ],
  declarations: [
    FavoritosComponent
  ],
  exports: [FavoritosComponent],
})
export class FavoritosModule { }
