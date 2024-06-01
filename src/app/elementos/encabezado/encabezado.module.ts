import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { EncabezadoBarraComponent } from './encabezado-barra/encabezado-barra.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        NzDropDownModule,
        NzIconModule,
        NzInputModule,
        NzLayoutModule,
    ],
    declarations: [EncabezadoBarraComponent],
    exports: [EncabezadoBarraComponent],
})
export class EncabezadoModule {}
