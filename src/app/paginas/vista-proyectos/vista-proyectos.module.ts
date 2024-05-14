import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ProyectoTarjetaComponent } from './components/proyecto-tarjeta/proyecto-tarjeta.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoCrearTarjetaComponent } from './components/proyecto-crear-tarjeta/proyecto-crear-tarjeta.component';
import { ProyectoBorrarComponent } from './components/proyecto-borrar/proyecto-borrar.component';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NzGridModule,
        NzIconModule,
        NzFlexModule,
        NzDropDownModule,
        NzModalModule,
        NzInputModule,
        NzButtonModule,
    ],
    declarations: [
        ProyectosComponent,
        ProyectoTarjetaComponent,
        ProyectoCrearTarjetaComponent,
        ProyectoBorrarComponent,
    ],
    exports: [ProyectosComponent, ProyectoTarjetaComponent],
})
export class VistaProyectosModule {}
