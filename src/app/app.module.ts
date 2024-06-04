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
import { EstructuraModule } from './elementos/estructura/estructura.module';
import { ArchivosModule } from './elementos/archivos/archivos.module';
import { MicelaneosModule } from './elementos/micelaneos/micelaneos.module';
import { PermisosModule } from './elementos/permisos/permisos.module';
import { PersonasModule } from './elementos/personas/personas.module';
import { ProyectosModule } from './elementos/proyectos/proyectos.module';
import { UnidadesModule } from './elementos/unidades/unidades.module';

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
