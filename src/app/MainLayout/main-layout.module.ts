import { NgModule } from '@angular/core';

import { MainLayoutRoutingModule } from './main-layout-routing.module';

import { VistaArchivosModule } from '../paginas/vista-archivos/vista-archivos.module';
import { VistaPersonasModule } from '../paginas/vista-personas/vista-persona.module';
import { VistaProyectosModule } from '../paginas/vista-proyectos/vista-proyectos.module';
import { VistaUnidadesModule } from '../paginas/vista-unidades/vista-unidades.module';

@NgModule({
    imports: [
        MainLayoutRoutingModule,

        VistaArchivosModule,
        VistaPersonasModule,
        VistaProyectosModule,
        VistaUnidadesModule,
    ],
    declarations: [],
})
export class MainLayoutModule {}
