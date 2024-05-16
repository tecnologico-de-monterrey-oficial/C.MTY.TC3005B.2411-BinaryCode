// Imports angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Imports ng-zorro
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

// Declarations
import { ArchivosFilaComponent } from './components/archivos-fila/archivos-fila.component';
import { ArchivosListaComponent } from './components/archivos-lista/archivos-lista.component';
import { ArchivosPaginaContenidosComponent } from './components/archivos-pagina-contenidos/archivos-pagina-contenidos.component';
import { ArchivosPaginaFavoritosComponent } from './components/archivos-pagina-favoritos/archivos-pagina-favoritos.component';
import { ArchivosPaginaRecientesComponent } from './components/archivos-pagina-recientes/archivos-pagina-recientes.component';
import { CarpetasFilaComponent } from './components/carpetas-fila/carpetas-fila.component';

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
        ArchivosFilaComponent,
        ArchivosListaComponent,
        ArchivosPaginaContenidosComponent,
        ArchivosPaginaFavoritosComponent,
        ArchivosPaginaRecientesComponent,
        CarpetasFilaComponent,
    ],
    exports: [
        ArchivosListaComponent,
        ArchivosPaginaContenidosComponent,
        ArchivosPaginaFavoritosComponent,
        ArchivosPaginaRecientesComponent,
    ],
})
export class ArchivosModule {}
