import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { EstructuraEncabezadoComponent } from './estructura-encabezado/estructura-encabezado.component';
import { EstructuraEncabezadoBusquedaOpcionesComponent } from './estructura-encabezado-busqueda-opciones/estructura-encabezado-busqueda-opciones.component';
import { EstructuraEntradaLoginComponent } from './estructura-entrada-login/estructura-entrada-login.component';
import { EstructuraEntradaPaginaComponent } from './estructura-entrada-pagina/estructura-entrada-pagina.component';
import { EstructuraEntradaRegistroComponent } from './estructura-entrada-registro/estructura-entrada-registro.component';
import { EstructuraPaginaComponent } from './estructura-pagina/estructura-pagina.component';
import { EstructuraVacioComponent } from './estructura-vacio/estructura-vacio.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        NzDropDownModule,
        NzFlexModule,
        NzFormModule,
        NzIconModule,
        NzInputModule,
        NzLayoutModule,
        NzMenuModule,
    ],
    declarations: [
        EstructuraEncabezadoComponent,
        EstructuraEncabezadoBusquedaOpcionesComponent,
        EstructuraEntradaLoginComponent,
        EstructuraEntradaPaginaComponent,
        EstructuraEntradaRegistroComponent,
        EstructuraPaginaComponent,
        EstructuraVacioComponent,
    ],
    exports: [EstructuraPaginaComponent, EstructuraVacioComponent],
})
export class EstructuraModule {}
