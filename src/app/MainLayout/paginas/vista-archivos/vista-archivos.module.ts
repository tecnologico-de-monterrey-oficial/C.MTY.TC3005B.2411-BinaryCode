import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArchivoFilaComponent } from './contenido-archivos/archivo-fila/archivo-fila.component';
import { ContenidoArchivosComponent } from './contenido-archivos/contenido-archivos.component';

import { FavoritosComponent } from './favoritos/favoritos.component';
import { RecientesComponent } from './recientes/recientes.component';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    NzIconModule,
    NzDividerModule,
    NzDropDownModule,
    NzTagModule,
  ],
  declarations: [
    ArchivoFilaComponent,
    ContenidoArchivosComponent,
    RecientesComponent,
    FavoritosComponent,
  ],
  exports: [
    RecientesComponent,
    FavoritosComponent,
  ],
})
export class VistaArchivosModule { }
