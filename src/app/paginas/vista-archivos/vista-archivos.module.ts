// Imports angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports ng-zorro
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

// Declarations
import { ArchivoFilaComponent } from './components/archivo-fila/archivo-fila.component';
import { CarpetaFilaComponent } from './components/carpeta-fila/carpeta-fila.component';
import { ListaArchivosComponent } from './components/lista-archivos/lista-archivos.component';
import { ContenidosComponent } from './paginas/contenidos/contenidos.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { RecientesComponent } from './paginas/recientes/recientes.component';

//import { VistaArchivosRoutingModule } from './vista-archivos-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NzBreadCrumbModule,
        NzDividerModule,
        NzDropDownModule,
        NzGridModule,
        NzIconModule,
        NzTagModule,
    ],
    declarations: [
        ArchivoFilaComponent,
        CarpetaFilaComponent,
        ListaArchivosComponent,
        ContenidosComponent,
        FavoritosComponent,
        RecientesComponent,
    ],
    exports: [
        ListaArchivosComponent,
        ContenidosComponent,
        FavoritosComponent,
        RecientesComponent,
    ],
})
export class VistaArchivosModule {}
