import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

import { VistaUnidadesModule } from '../vista-unidades/vista-unidades.module';

import { EditoresPermisosComponent } from './components/editores-permisos/editores-permisos.component';
import { MiniCoordinadorComponent } from './components/mini-coordinador/mini-coordinador.component';
import { SidebarPermisosComponent } from './components/sidebar-permisos/sidebar-permisos.component';
import { PermisosComponent } from './permisos/permisos.component';

@NgModule({
    imports: [
        CommonModule,
        NzGridModule,
        NzIconModule,
        NzPopoverModule,
        VistaUnidadesModule,
    ],
    declarations: [
        EditoresPermisosComponent,
        MiniCoordinadorComponent,
        SidebarPermisosComponent,
        PermisosComponent,
    ],
    exports: [PermisosComponent],
})
export class VistaPermisosModule {}
