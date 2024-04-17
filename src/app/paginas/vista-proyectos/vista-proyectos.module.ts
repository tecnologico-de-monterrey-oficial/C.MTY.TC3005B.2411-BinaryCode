import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ProyectoTarjetaComponent } from './contenido-proyectos/proyecto-tarjeta/proyecto-tarjeta.component';
import { ProyectosComponent } from './contenido-proyectos/proyectos/proyectos.component';

@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    NzIconModule,
    NzFlexModule,
    NzDropDownModule,
  ],
  declarations: [
    ProyectosComponent,
    ProyectoTarjetaComponent,
  ],
  exports: [ProyectosComponent, ProyectoTarjetaComponent],
})
export class VistaProyectosModule { }
