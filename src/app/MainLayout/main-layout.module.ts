import { NgModule } from '@angular/core';

import { MainLayoutRoutingModule } from './main-layout-routing.module';

import { ArchivosModule } from '../paginas/archivos/archivos.module';
import { PermisosModule } from '../paginas/permisos/permisos.module';
import { PersonasModule } from '../paginas/personas/personas.module';
import { ProyectosModule } from '../paginas/proyectos/proyectos.module';
import { UnidadesModule } from '../paginas/unidades/unidades.module';

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
