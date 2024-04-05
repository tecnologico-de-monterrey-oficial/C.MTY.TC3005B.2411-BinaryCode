import { NgModule } from '@angular/core';

import { UnidadComponent } from '../../componentes/unidad/unidad.component';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'

@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
    NzDropDownModule,
  ],
  declarations: [
    UnidadComponent
  ],
  exports: [UnidadComponent],
})
export class UnidadModule { }
