import { NgModule } from '@angular/core';

import { ArchivoComponent } from './archivo.component';

import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
    NzTagModule,
    NzGridModule,
  ],
  declarations: [
    ArchivoComponent,
  ],
  exports: [ArchivoComponent],
})
export class ArchivoModule { }
