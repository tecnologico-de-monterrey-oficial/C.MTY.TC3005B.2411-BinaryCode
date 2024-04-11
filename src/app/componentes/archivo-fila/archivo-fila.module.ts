import { NgModule } from '@angular/core';

import { ArchivoFilaComponent } from './archivo-fila.component';

import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [
    CommonModule,
    NzDropDownModule,
    NzIconModule,
    NzTagModule,
    NzGridModule,
  ],
  declarations: [
    ArchivoFilaComponent,
  ],
  exports: [ArchivoFilaComponent],
})
export class ArchivoFilaModule { }
