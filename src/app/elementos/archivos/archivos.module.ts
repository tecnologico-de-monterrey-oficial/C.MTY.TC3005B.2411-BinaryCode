import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { MicelaneosModule } from '../micelaneos/micelaneos.module';

import { ArchivosCrearModalComponent } from './archivos-crear-modal/archivos-crear-modal.component';
import { ArchivosListaCrearComponent } from './archivos-lista-crear/archivos-lista-crear.component';
import { ArchivosListaIndividualArchivoComponent } from './archivos-lista-individual-archivo/archivos-lista-individual-archivo.component';
import { ArchivosListaIndividualCarpetaComponent } from './archivos-lista-individual-carpeta/archivos-lista-individual-carpeta.component';
import { ArchivosListaComponent } from './archivos-lista/archivos-lista.component';
import { ArchivosPaginaContenidosComponent } from './archivos-pagina-contenidos/archivos-pagina-contenidos.component';
import { ArchivosPaginaFavoritosComponent } from './archivos-pagina-favoritos/archivos-pagina-favoritos.component';
import { ArchivosPaginaRecientesComponent } from './archivos-pagina-recientes/archivos-pagina-recientes.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        NzBreadCrumbModule,
        NzDropDownModule,
        NzIconModule,
        NzGridModule,
        NzModalModule,
        NzTagModule,

        MicelaneosModule,
    ],
    declarations: [
        ArchivosCrearModalComponent,
        ArchivosListaComponent,
        ArchivosListaCrearComponent,
        ArchivosListaIndividualCarpetaComponent,
        ArchivosListaIndividualArchivoComponent,
        ArchivosPaginaContenidosComponent,
        ArchivosPaginaFavoritosComponent,
        ArchivosPaginaRecientesComponent,
    ],
})
export class ArchivosModule {}
