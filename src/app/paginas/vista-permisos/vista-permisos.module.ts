import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { PermisosComponent } from './permisos/permisos.component';
import { SidebarPermisosComponent } from './components/sidebar-permisos/sidebar-permisos.component';
import { EditoresPermisosComponent } from './components/editores-permisos/editores-permisos.component';

@NgModule({
    imports: [CommonModule, NzGridModule],
    declarations: [
        PermisosComponent,
        SidebarPermisosComponent,
        EditoresPermisosComponent,
    ],
    exports: [PermisosComponent],
})
export class VistaPermisosModule {}
