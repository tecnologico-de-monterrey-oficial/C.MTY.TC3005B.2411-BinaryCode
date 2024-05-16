// Imports angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Imports ng-zorro
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

// Declarations
import { ProyectoBorrarComponent } from './components/proyecto-borrar/proyecto-borrar.component';
import { ProyectoCrearTarjetaComponent } from './components/proyecto-crear-tarjeta/proyecto-crear-tarjeta.component';
import { ProyectoTarjetaComponent } from './components/proyecto-tarjeta/proyecto-tarjeta.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NzButtonModule,
        NzDropDownModule,
        NzFlexModule,
        NzGridModule,
        NzIconModule,
        NzInputModule,
        NzModalModule,
    ],
    declarations: [
        ProyectoBorrarComponent,
        ProyectoCrearTarjetaComponent,
        ProyectoTarjetaComponent,
        ProyectosComponent,
    ],
    exports: [ProyectosComponent, ProyectoTarjetaComponent],
})
export class VistaProyectosModule {}
