import { NgModule } from '@angular/core';

import { ContenidoArchivosComponent } from './contenido-archivos.component';

import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ArchivoFilaComponent } from './archivo-fila/archivo-fila.component';

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
  ],
  exports: [ContenidoArchivosComponent],
})
export class ContenidoArchivosModule { }

