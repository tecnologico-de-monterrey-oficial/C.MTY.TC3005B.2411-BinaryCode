// Imports angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports ng-zorro
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

// Imports locales
import { ProyectosModule } from '../proyectos/proyectos.module';
import { UnidadesModule } from '../unidades/unidades.module';

// Declarations
import { PermisosCuadriculaUnidadesComponent } from './components/permisos-cuadricula-unidades/permisos-cuadricula-unidades.component';
import { PermisosEditoresComponent } from './components/permisos-editores/permisos-editores.component';
import { PermisosMiniCoordinadorComponent } from './components/permisos-mini-coordinador/permisos-mini-coordinador.component';
import { PermisosMiniEditorComponent } from './components/permisos-mini-editor/permisos-mini-editor.component';
import { PermisosSidebarComponent } from './components/permisos-sidebar/permisos-sidebar.component';
import { PermisosPaginaComponent } from './components/permisos-pagina/permisos-pagina.component';

@NgModule({
    imports: [
        CommonModule,
        NzFlexModule,
        NzGridModule,
        NzIconModule,
        NzPopoverModule,
        ProyectosModule,
        UnidadesModule,
    ],
    declarations: [
        PermisosCuadriculaUnidadesComponent,
        PermisosEditoresComponent,
        PermisosMiniCoordinadorComponent,
        PermisosMiniEditorComponent,
        PermisosSidebarComponent,
        PermisosPaginaComponent,
    ],
    exports: [PermisosPaginaComponent],
})
export class PermisosModule {}
