import { NgModule } from '@angular/core';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';

import { ArchivosModule } from './contenido/archivos/archivos.module';
import { UnidadesModule } from './contenido/unidades/unidades.module';

import { EncabezadoComponent } from './layout-elements/encabezado/encabezado.component';
import { SidebarComponent } from './layout-elements/sidebar/sidebar.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  imports: [
    MainLayoutRoutingModule,
    ArchivosModule,
    UnidadesModule,
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
