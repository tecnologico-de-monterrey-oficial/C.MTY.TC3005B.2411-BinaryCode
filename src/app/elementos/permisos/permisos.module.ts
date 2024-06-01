// Imports angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { MicelaneosModule } from '../micelaneos/micelaneos.module';
import { PersonasModule } from '../personas/personas.module';
import { UnidadesModule } from '../unidades/unidades.module';

import { PermisosCuadriculaUnidadesComponent } from './permisos-cuadricula-unidades/permisos-cuadricula-unidades.component';
import { PermisosPaginaComponent } from './permisos-pagina/permisos-pagina.component';
import { PermisosSidebarComponent } from './permisos-sidebar/permisos-sidebar.component';
import { ProyectosModule } from '../proyectos/proyectos.module';

@NgModule({
    imports: [
        CommonModule,

        NzFlexModule,
        NzSkeletonModule,

        MicelaneosModule,
        PersonasModule,
        UnidadesModule,
        ProyectosModule,
    ],
    declarations: [
        PermisosCuadriculaUnidadesComponent,
        PermisosPaginaComponent,
        PermisosSidebarComponent,
    ],
    exports: [],
})
export class PermisosModule {}
