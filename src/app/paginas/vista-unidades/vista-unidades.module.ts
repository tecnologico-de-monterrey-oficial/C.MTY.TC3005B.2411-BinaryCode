import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { UnidadesComponent } from './unidades/unidades.component';
import { UnidadTarjetaComponent } from './components/unidad-tarjeta/unidad-tarjeta.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    NzIconModule,
    NzFlexModule,
    NzDropDownModule,
    NzEmptyModule,
  ],
  declarations: [
    UnidadesComponent,
    UnidadTarjetaComponent
  ],
    exports: [UnidadesComponent, UnidadTarjetaComponent],
})
export class VistaUnidadesModule { }
