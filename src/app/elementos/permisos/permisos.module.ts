// Imports angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Imports ng-zorro
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

// Imports locales
import { ProyectosModule } from '../proyectos/proyectos.module';
import { UnidadesModule } from '../unidades/unidades.module';

// Declarations
import { PermisosCoordinadoresComponent } from './components/permisos-coordinadores/permisos-coordinadores.component';
import { PermisosCuadriculaUnidadesComponent } from './components/permisos-cuadricula-unidades/permisos-cuadricula-unidades.component';
import { PermisosEditoresComponent } from './components/permisos-editores/permisos-editores.component';
import { PermisosLideresComponent } from './components/permisos-lideres/permisos-lideres.component';
import { PermisosMiniCoordinadorComponent } from './components/permisos-mini-coordinador/permisos-mini-coordinador.component';
import { PermisosMiniEditorComponent } from './components/permisos-mini-editor/permisos-mini-editor.component';
import { PermisosPaginaComponent } from './components/permisos-pagina/permisos-pagina.component';
import { PermisosSidebarComponent } from './components/permisos-sidebar/permisos-sidebar.component';

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
        PermisosCoordinadoresComponent,
        PermisosCuadriculaUnidadesComponent,
        PermisosEditoresComponent,
        PermisosLideresComponent,
        PermisosMiniCoordinadorComponent,
        PermisosMiniEditorComponent,
        PermisosPaginaComponent,
        PermisosSidebarComponent,
    ],
    exports: [PermisosPaginaComponent],
})
export class PermisosModule {}
