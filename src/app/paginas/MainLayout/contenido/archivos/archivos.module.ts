import { NgModule } from '@angular/core';

import { ArchivosComponent } from './archivos.component';
import { ArchivoFilaModule } from '../../../../componentes/archivo-fila/archivo-fila.module';

import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  imports: [
    ArchivoFilaModule,
    CommonModule,
    NzGridModule,
    NzIconModule,
    NzDividerModule
  ],
  declarations: [
    ArchivosComponent,
  ],
  exports: [ArchivosComponent],
})
export class ArchivosModule { }
