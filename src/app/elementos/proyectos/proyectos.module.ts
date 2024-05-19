// Imports angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imports ng-zorro
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

// Declarations
import { ProyectosBorrarModalComponent } from './components/proyectos-borrar-modal/proyectos-borrar-modal.component';
import { ProyectosCrearModalComponent } from './components/proyectos-crear-modal/proyectos-crear-modal.component';
import { ProyectosCrearTarjetaComponent } from './components/proyectos-crear-tarjeta/proyectos-crear-tarjeta.component';
import { ProyectosPaginaComponent } from './components/proyectos-pagina/proyectos-pagina.component';
import { ProyectosTarjetaComponent } from './components/proyectos-tarjeta/proyectos-tarjeta.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        NzButtonModule,
        NzDropDownModule,
        NzFlexModule,
        NzGridModule,
        NzIconModule,
        NzInputModule,
        NzModalModule,
    ],
    declarations: [
        ProyectosBorrarModalComponent,
        ProyectosCrearModalComponent,
        ProyectosCrearTarjetaComponent,
        ProyectosPaginaComponent,
        ProyectosTarjetaComponent,
    ],
    exports: [ProyectosTarjetaComponent, ProyectosPaginaComponent],
})
export class ProyectosModule {}
