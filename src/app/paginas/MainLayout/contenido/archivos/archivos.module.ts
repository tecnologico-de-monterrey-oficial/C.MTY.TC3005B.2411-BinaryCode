import { NgModule } from '@angular/core';

import { ArchivosComponent } from './archivos.component';
import { ArchivoModule } from '../../../../componentes/archivo/archivo.module';

import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    ArchivoModule,
    CommonModule,
    NzGridModule,
    NzIconModule
  ],
  declarations: [
    ArchivosComponent,
  ],
  exports: [ArchivosComponent],
})
export class ArchivosModule { }
