import { NgModule } from '@angular/core';

// Declarations
import { AppComponent } from './app.component';

// Imports angular
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Imports locales
import { AppRoutingModule } from './app-routing.module';
import { EstructuraModule } from './componentes/estructura/estructura.module';
import { ArchivosModule } from './componentes/archivos/archivos.module';
import { MicelaneosModule } from './componentes/micelaneos/micelaneos.module';
import { PermisosModule } from './componentes/permisos/permisos.module';
import { PersonasModule } from './componentes/personas/personas.module';
import { ProyectosModule } from './componentes/proyectos/proyectos.module';
import { UnidadesModule } from './componentes/unidades/unidades.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,

        AppRoutingModule,

        ArchivosModule,
        EstructuraModule,
        MicelaneosModule,
        PermisosModule,
        PersonasModule,
        ProyectosModule,
        UnidadesModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
