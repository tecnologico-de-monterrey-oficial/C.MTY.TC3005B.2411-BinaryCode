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
import { UnidadBorrarComponent } from './components/unidad-borrar/unidad-borrar.component';
import { UnidadCrearTarjetaComponent } from './components/unidad-crear-tarjeta/unidad-crear-tarjeta.component';
import { UnidadTarjetaComponent } from './components/unidad-tarjeta/unidad-tarjeta.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzModalComponent } from 'ng-zorro-antd/modal';
import { VistaProyectosModule } from '../vista-proyectos/vista-proyectos.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        NzDropDownModule,
        NzEmptyModule,
        NzFlexModule,
        NzGridModule,
        NzIconModule,
        NzButtonComponent,
        FormsModule,
        NzInputDirective,
        NzModalComponent,
        VistaProyectosModule,
        RouterOutlet,
    ],
    declarations: [
        UnidadBorrarComponent,
        UnidadCrearTarjetaComponent,
        UnidadTarjetaComponent,
        UnidadesComponent,
    ],
    exports: [UnidadesComponent, UnidadTarjetaComponent],
})
export class VistaUnidadesModule {}
