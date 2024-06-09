// src/app/paginas/vista-archivos/vista-archivos.module.ts
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
import { ArchivoCompletoComponent } from './components/archivo-completo/archivo-completo.component'; // Asegúrate de importar tu componente aquí

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
        ArchivoCompletoComponent, // Y declararlo aquí
    ],
    exports: [
        ListaArchivosComponent,
        ContenidosComponent,
        FavoritosComponent,
        RecientesComponent,
        ArchivoCompletoComponent, // Y exportarlo si es necesario
    ],
})
export class VistaArchivosModule {}
