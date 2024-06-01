import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { EncabezadoModule } from '../encabezado/encabezado.module';

import { EstructuraEntradaLoginComponent } from './estructura-entrada-login/estructura-entrada-login.component';
import { EstructuraEntradaPaginaComponent } from './estructura-entrada-pagina/estructura-entrada-pagina.component';
import { EstructuraEntradaRegistroComponent } from './estructura-entrada-registro/estructura-entrada-registro.component';
import { EstructuraPaginaComponent } from './estructura-pagina/estructura-pagina.component';
import { EstructuraVacioComponent } from './estructura-vacio/estructura-vacio.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        NzFlexModule,
        NzFormModule,
        NzIconModule,
        NzInputModule,
        NzLayoutModule,
        NzMenuModule,

        EncabezadoModule,
    ],
    declarations: [
        EstructuraEntradaLoginComponent,
        EstructuraEntradaPaginaComponent,
        EstructuraEntradaRegistroComponent,
        EstructuraPaginaComponent,
        EstructuraVacioComponent,
    ],
    exports: [
        EstructuraPaginaComponent,
        EstructuraEntradaRegistroComponent,
        EstructuraVacioComponent,
    ],
})
export class EstructuraModule {}
