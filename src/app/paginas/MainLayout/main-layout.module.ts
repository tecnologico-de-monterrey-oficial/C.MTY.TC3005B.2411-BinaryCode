import { NgModule } from '@angular/core';

import { MainLayoutRoutingModule } from './main-layout-routing.module';

import { EncabezadoComponent } from './layout-elements/encabezado/encabezado.component';
import { MainLayoutComponent } from './main-layout.component';
import { UnidadesModule } from './contenido/unidades/unidades.module';
import { SidebarComponent } from './layout-elements/sidebar/sidebar.component';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    MainLayoutRoutingModule,
    UnidadesModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzIconModule,
  ],
  declarations: [
    MainLayoutComponent,
    EncabezadoComponent,
    SidebarComponent,
  ],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule { }
