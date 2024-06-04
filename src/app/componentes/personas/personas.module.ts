import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

import { MicelaneosModule } from '../micelaneos/micelaneos.module';

import { PersonasAgregarListaGdIndividualComponent } from './personas-agregar-lista-gd-individual/personas-agregar-lista-gd-individual.component';
import { PersonasAgregarListaGdComponent } from './personas-agregar-lista-gd/personas-agregar-lista-gd.component';
import { PersonasAgregarListaPqIndividualComponent } from './personas-agregar-lista-pq-individual/personas-agregar-lista-pq-individual.component';
import { PersonasAgregarListaPqComponent } from './personas-agregar-lista-pq/personas-agregar-lista-pq.component';
import { PersonasBuscadorIndividualComponent } from './personas-buscador-individual/personas-buscador-individual.component';
import { PersonasBuscadorComponent } from './personas-buscador/personas-buscador.component';
import { PersonasIndividualComponent } from './personas-individual/personas-individual.component';
import { PersonasPaginaComponent } from './personas-pagina/personas-pagina.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        NzButtonModule,
        NzDropDownModule,
        NzGridModule,
        NzIconModule,
        NzInputModule,
        NzModalModule,
        NzPopoverModule,

        MicelaneosModule,
    ],
    declarations: [
        PersonasAgregarListaGdComponent,
        PersonasAgregarListaGdIndividualComponent,
        PersonasAgregarListaPqComponent,
        PersonasAgregarListaPqIndividualComponent,
        PersonasBuscadorComponent,
        PersonasBuscadorIndividualComponent,
        PersonasIndividualComponent,
        PersonasPaginaComponent,
    ],
    exports: [PersonasAgregarListaPqComponent, PersonasAgregarListaGdComponent],
})
export class PersonasModule {}
