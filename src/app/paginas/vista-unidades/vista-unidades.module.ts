// Imports angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports ng-zorro
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

// Declarations
import { UnidadCrearTarjetaComponent } from './components/unidad-crear-tarjeta/unidad-crear-tarjeta.component';
import { UnidadTarjetaComponent } from './components/unidad-tarjeta/unidad-tarjeta.component';
import { UnidadesComponent } from './unidades/unidades.component';

@NgModule({
    imports: [
        CommonModule,
        NzDropDownModule,
        NzEmptyModule,
        NzFlexModule,
        NzGridModule,
        NzIconModule,
    ],
    declarations: [
        UnidadCrearTarjetaComponent,
        UnidadTarjetaComponent,
        UnidadesComponent,
    ],
    exports: [UnidadesComponent, UnidadTarjetaComponent],
})
export class VistaUnidadesModule {}
