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
import { UnidadesCrearTarjetaComponent } from './components/unidades-crear-tarjeta/unidades-crear-tarjeta.component';
import { UnidadesTarjetaComponent } from './components/unidades-tarjeta/unidades-tarjeta.component';
import { UnidadesPaginaComponent } from './components/unidades-pagina/unidades-pagina.component';

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
        UnidadesCrearTarjetaComponent,
        UnidadesTarjetaComponent,
        UnidadesPaginaComponent,
    ],
    exports: [UnidadesPaginaComponent, UnidadesTarjetaComponent],
})
export class UnidadesModule {}
