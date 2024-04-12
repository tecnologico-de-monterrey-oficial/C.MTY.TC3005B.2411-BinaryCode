import { NgModule } from '@angular/core';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';

import { ContenidoArchivosModule } from '../../componentes/contenido-archivos/contenido-archivos.module';
import { ContenidoUnidadesModule } from '../../componentes/contenido-unidades/contenido-unidades.module';

import { EncabezadoComponent } from './layout-elements/encabezado/encabezado.component';
import { SidebarComponent } from './layout-elements/sidebar/sidebar.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  imports: [
    MainLayoutRoutingModule,
    ContenidoArchivosModule,
    ContenidoUnidadesModule,
    NzIconModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  declarations: [
    MainLayoutComponent,
    EncabezadoComponent,
    SidebarComponent,
  ],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule { }
