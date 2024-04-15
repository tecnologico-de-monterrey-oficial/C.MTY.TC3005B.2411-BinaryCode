import { NgModule } from '@angular/core';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';

import { EncabezadoComponent } from './layout-elements/encabezado/encabezado.component';
import { SidebarComponent } from './layout-elements/sidebar/sidebar.component';

import { VistaArchivosModule } from './paginas/vista-archivos/vista-archivos.module';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { VistaUnidadesModule } from './paginas/vista-unidades/vista-unidades.module';
import { VistaProyectosModule } from "./paginas/vista-proyectos/vista-proyectos.module";

import { CrearContenidosComponent } from "./paginas/vista-archivos/contenidos/crear_contenidos/crear_contenidos.component";


@NgModule({
    imports: [
        MainLayoutRoutingModule,

        VistaArchivosModule,
        VistaUnidadesModule,

        NzIconModule,
        NzInputModule,
        NzLayoutModule,
        NzMenuModule,
        VistaProyectosModule,
    ],
  declarations: [
    MainLayoutComponent,
    EncabezadoComponent,
    SidebarComponent,
    CrearContenidosComponent,
  ],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule { }
