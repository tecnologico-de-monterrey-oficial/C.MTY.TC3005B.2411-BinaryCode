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
import { ProyectoCrearComponent } from "./paginas/vista-proyectos/contenido-proyectos/proyecto-crear/proyecto-crear.component";
import { CrearUnidadComponent } from "./paginas/vista-unidades/components/unidad-tarjeta/crear-unidad/crear-unidad.component";
import {VistaPersonasModule} from "./paginas/vista-personas/vista-persona.module";

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
        VistaPersonasModule,
    ],
  declarations: [
    MainLayoutComponent,
    EncabezadoComponent,
    SidebarComponent,
    CrearContenidosComponent,
    ProyectoCrearComponent,
    CrearUnidadComponent,
    CrearContenidosComponent,
    ProyectoCrearComponent,
    CrearUnidadComponent,
  ],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule { }
