import { NgModule } from '@angular/core';

// Declarations
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './elementos/Encabezado/encabezado.component';
import { ArchivosCrearModalComponent } from './elementos/archivos/components/archivos-crear-modal/archivos-crear-modal.component';
import { ProyectosCrearModalComponent } from './elementos/proyectos/components/proyectos-crear-modal/proyectos-crear-modal.component';
import { UnidadesCrearModalComponent } from './elementos/unidades/components/unidades-crear-modal/unidades-crear-modal.component';

// Imports angular
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Imports ng-zorro
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';

// Imports locales
import { AppRoutingModule } from './app-routing.module';
import { EntradaModule } from './elementos/Entrada/entrada.module';
import { ArchivosModule } from './elementos/archivos/archivos.module';
import { PermisosModule } from './elementos/permisos/permisos.module';
import { PersonasModule } from './elementos/personas/personas.module';
import { ProyectosModule } from './elementos/proyectos/proyectos.module';
import { UnidadesModule } from './elementos/unidades/unidades.module';

@NgModule({
    declarations: [
        AppComponent,
        EncabezadoComponent,
        ArchivosCrearModalComponent,
        ProyectosCrearModalComponent,
        UnidadesCrearModalComponent,
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,

        NzDropDownModule,
        NzIconModule,
        NzInputModule,
        NzLayoutModule,
        NzMenuModule,
        NzModalModule,

        ArchivosModule,
        PermisosModule,
        PersonasModule,
        ProyectosModule,
        UnidadesModule,
        EntradaModule,
        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
