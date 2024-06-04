import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { MicelaneosModule } from '../micelaneos/micelaneos.module';
import { PersonasModule } from '../personas/personas.module';

import { UnidadesCrearModalComponent } from './unidades-crear-modal/unidades-crear-modal.component';
import { UnidadesCrearTarjetaComponent } from './unidades-crear-tarjeta/unidades-crear-tarjeta.component';
import { UnidadesPaginaComponent } from './unidades-pagina/unidades-pagina.component';
import { UnidadesTarjetaEsqueletoComponent } from './unidades-tarjeta-esqueleto/unidades-tarjeta-esqueleto.component';
import { UnidadesTarjetaComponent } from './unidades-tarjeta/unidades-tarjeta.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        NzButtonModule,
        NzDropDownModule,
        NzFormModule,
        NzIconModule,
        NzModalModule,
        NzSkeletonModule,

        PersonasModule,
        MicelaneosModule,
    ],
    declarations: [
        UnidadesCrearModalComponent,
        UnidadesCrearTarjetaComponent,
        UnidadesPaginaComponent,
        UnidadesTarjetaComponent,
        UnidadesTarjetaEsqueletoComponent,
    ],
    exports: [UnidadesTarjetaComponent, UnidadesTarjetaEsqueletoComponent],
})
export class UnidadesModule {}
