// app.module.ts
import { NgModule } from '@angular/core';

// Declarations
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { CrearContenidosComponent } from './paginas/vista-archivos/components/crear-contenidos/crear-contenidos.component';
import { ProyectoCrearComponent } from './paginas/vista-proyectos/components/proyecto-crear/proyecto-crear.component';
import { CrearUnidadComponent } from './paginas/vista-unidades/components/crear-unidad/crear-unidad.component';

// Imports angular
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';
import { enableRipple } from '@syncfusion/ej2-base';

// Imports ng-zorro
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

// Imports locales
import { EntradaLoginModule } from './EntradaLogin/entrada-login.module';
import { AppRoutingModule } from './app-routing.module';
import { VistaProyectosModule } from './paginas/vista-proyectos/vista-proyectos.module';
import { VistaArchivosModule } from './paginas/vista-archivos/vista-archivos.module';
import { VistaPersonasModule } from './paginas/vista-personas/vista-persona.module';
import { VistaUnidadesModule } from './paginas/vista-unidades/vista-unidades.module';
import { VistaPermisosModule } from './paginas/vista-permisos/vista-permisos.module';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

enableRipple(true);

@NgModule({
    declarations: [
        AppComponent,
        EncabezadoComponent,
        CrearContenidosComponent,
        ProyectoCrearComponent,
        CrearUnidadComponent,
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        ColorPickerModule,
        NzDropDownModule,
        NzIconModule,
        NzInputModule,
        NzLayoutModule,
        NzMenuModule,
        VistaArchivosModule,
        VistaPersonasModule,
        VistaProyectosModule,
        VistaUnidadesModule,
        VistaPermisosModule,
        ReactiveFormsModule,

        EntradaLoginModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NzColDirective,
        NzRowDirective,
    ],
    bootstrap: [AppComponent],
    providers: [provideAnimationsAsync()],
})
export class AppModule {}
