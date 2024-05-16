import { NgModule } from '@angular/core';

import { MainLayoutRoutingModule } from './main-layout-routing.module';

import { ArchivosModule } from '../elementos/archivos/archivos.module';
import { PermisosModule } from '../elementos/permisos/permisos.module';
import { PersonasModule } from '../elementos/personas/personas.module';
import { ProyectosModule } from '../elementos/proyectos/proyectos.module';
import { UnidadesModule } from '../elementos/unidades/unidades.module';

@NgModule({
    imports: [
        MainLayoutRoutingModule,
        ArchivosModule,
        PermisosModule,
        PersonasModule,
        ProyectosModule,
        UnidadesModule,
    ],
    declarations: [],
})
export class MainLayoutModule {}
