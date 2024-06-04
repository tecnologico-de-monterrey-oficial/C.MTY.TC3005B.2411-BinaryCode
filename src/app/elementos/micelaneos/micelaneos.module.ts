import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

import { MicelaneosContenidosVacioComponent } from './micelaneos-contenido-vacio/micelaneos-contenido-vacio.component';
import { MicelaneosModalBorrarInputComponent } from './micelaneos-modal-borrar-input/micelaneos-modal-borrar-input.component';
import { MicelaneosModalGenericoComponent } from './micelaneos-modal-generico/micelaneos-modal-generico.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        NzButtonModule,
        NzEmptyModule,
        NzFlexModule,
        NzIconModule,
        NzInputModule,
    ],
    declarations: [
        MicelaneosContenidosVacioComponent,
        MicelaneosModalBorrarInputComponent,
        MicelaneosModalGenericoComponent,
    ],
    exports: [
        MicelaneosContenidosVacioComponent,
        MicelaneosModalBorrarInputComponent,
        MicelaneosModalGenericoComponent,
    ],
})
export class MicelaneosModule {}
