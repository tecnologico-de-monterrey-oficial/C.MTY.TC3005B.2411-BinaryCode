// Imports angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports ng-zorro
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

// Imports locales
import { VistaProyectosModule } from '../vista-proyectos/vista-proyectos.module';
import { VistaUnidadesModule } from '../vista-unidades/vista-unidades.module';

// Declarations
import { CuadriculaPermisosComponent } from './components/cuadricula-permisos/cuadricula-permisos.component';
import { EditoresPermisosComponent } from './components/editores-permisos/editores-permisos.component';
import { MiniCoordinadorComponent } from './components/mini-coordinador/mini-coordinador.component';
import { MiniEditorComponent } from './components/mini-editor/mini-editor.component';
import { SidebarPermisosComponent } from './components/sidebar-permisos/sidebar-permisos.component';
import { PermisosComponent } from './permisos/permisos.component';

@NgModule({
    imports: [
        CommonModule,
        NzFlexModule,
        NzGridModule,
        NzIconModule,
        NzPopoverModule,
        VistaProyectosModule,
        VistaUnidadesModule,
    ],
    declarations: [
        CuadriculaPermisosComponent,
        EditoresPermisosComponent,
        MiniCoordinadorComponent,
        MiniEditorComponent,
        SidebarPermisosComponent,
        PermisosComponent,
    ],
    exports: [PermisosComponent],
})
export class VistaPermisosModule {}
