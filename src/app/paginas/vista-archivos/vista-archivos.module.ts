import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArchivoFilaComponent } from './components/archivo-fila/archivo-fila.component';
import { ListaArchivosComponent } from './components/lista-archivos/lista-archivos.component';

import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { RecientesComponent } from './paginas/recientes/recientes.component';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CarpetaFilaComponent } from './components/carpeta-fila/carpeta-fila.component';
import { ContenidosComponent } from './contenidos/contenidos.component';

//import { VistaArchivosRoutingModule } from './vista-archivos-routing.module';

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
    CarpetaFilaComponent,
    ListaArchivosComponent,

    ContenidosComponent,
    RecientesComponent,
    FavoritosComponent,
  ],
  exports: [
    RecientesComponent,
    FavoritosComponent,
    ContenidosComponent,
    ListaArchivosComponent,
  ],
})
export class VistaArchivosModule { }
