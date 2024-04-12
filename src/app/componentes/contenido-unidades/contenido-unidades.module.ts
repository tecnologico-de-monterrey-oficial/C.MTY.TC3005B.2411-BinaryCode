import { NgModule } from '@angular/core';

import { ContenidoUnidadesComponent } from './contenido-unidades.component';

import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { UnidadTarjetaComponent } from './unidad-tarjeta/unidad-tarjeta.component';

@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    NzIconModule,
    NzFlexModule,
    NzDropDownModule,
  ],
  declarations: [
    ContenidoUnidadesComponent,
    UnidadTarjetaComponent
  ],
  exports: [ContenidoUnidadesComponent],
})
export class ContenidoUnidadesModule { }
