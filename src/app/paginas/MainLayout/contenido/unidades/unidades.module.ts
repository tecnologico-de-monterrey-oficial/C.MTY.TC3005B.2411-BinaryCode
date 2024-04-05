import { NgModule } from '@angular/core';

import { UnidadesComponent } from './unidades.component';
import { UnidadModule } from '../../../../componentes/unidad/unidad.module';

import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    UnidadModule,
    CommonModule,
    NzGridModule,
    NzIconModule
  ],
  declarations: [
    UnidadesComponent,
  ],
  exports: [UnidadesComponent],
})
export class UnidadesModule { }
