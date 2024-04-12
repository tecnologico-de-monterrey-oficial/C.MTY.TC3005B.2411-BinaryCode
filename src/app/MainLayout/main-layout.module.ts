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


@NgModule({
  imports: [
    MainLayoutRoutingModule,

    VistaArchivosModule,

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
