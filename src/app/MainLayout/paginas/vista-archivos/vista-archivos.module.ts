import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArchivoFilaComponent } from './componentes/archivo-fila/archivo-fila.component';
import { ListaArchivosComponent } from './componentes/lista-archivos/lista-archivos.component';

import { FavoritosComponent } from './favoritos/favoritos.component';
import { RecientesComponent } from './recientes/recientes.component';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { ContenidosComponent } from './contenidos/contenidos.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    NzIconModule,
    NzDividerModule,
    NzDropDownModule,
    NzTagModule,
    NzBreadCrumbModule,
  ],
  declarations: [
    ArchivoFilaComponent,
    ListaArchivosComponent,
    ContenidosComponent,
    RecientesComponent,
    FavoritosComponent,
  ],
  exports: [
    RecientesComponent,
    FavoritosComponent,
    ContenidosComponent,
  ],
})
export class VistaArchivosModule { }
