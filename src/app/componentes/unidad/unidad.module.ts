import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UnidadComponent } from '../../componentes/unidad/unidad.component';

import { MoreOutline } from '@ant-design/icons-angular/icons';

@NgModule({
  imports: [
    CommonModule,
    NzIconModule.forRoot([MoreOutline]),
    NzDropDownModule,
  ],
  declarations: [
    UnidadComponent
  ],
  exports: [UnidadComponent],
})
export class UnidadModule { }
