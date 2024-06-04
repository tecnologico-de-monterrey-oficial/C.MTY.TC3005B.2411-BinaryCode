import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { PersonasModule } from '../personas/personas.module';
import { MicelaneosModule } from '../micelaneos/micelaneos.module';

import { ProyectosCrearModalComponent } from './proyectos-crear-modal/proyectos-crear-modal.component';
import { ProyectosCrearTarjetaComponent } from './proyectos-crear-tarjeta/proyectos-crear-tarjeta.component';
import { ProyectosPaginaComponent } from './proyectos-pagina/proyectos-pagina.component';
import { ProyectosTarjetaEsqueletoComponent } from './proyectos-tarjeta-esqueleto/proyectos-tarjeta-esqueleto.component';
import { ProyectosTarjetaComponent } from './proyectos-tarjeta/proyectos-tarjeta.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        NzButtonModule,
        NzDropDownModule,
        NzFormModule,
        NzIconModule,
        NzMessageModule,
        NzModalModule,
        NzSegmentedModule,
        NzSkeletonModule,

        PersonasModule,
        MicelaneosModule,
    ],
    declarations: [
        ProyectosCrearModalComponent,
        ProyectosCrearTarjetaComponent,
        ProyectosPaginaComponent,
        ProyectosTarjetaEsqueletoComponent,
        ProyectosTarjetaComponent,
    ],
    exports: [ProyectosPaginaComponent, ProyectosTarjetaComponent],
})
export class ProyectosModule {}
