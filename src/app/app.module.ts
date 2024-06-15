import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';
import { enableRipple } from '@syncfusion/ej2-base';

// Imports ng-zorro
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

// Imports locales
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { CrearContenidosComponent } from './paginas/vista-archivos/components/crear-contenidos/crear-contenidos.component';
import { ProyectoCrearComponent } from './paginas/vista-proyectos/components/proyecto-crear/proyecto-crear.component';
import { CrearUnidadComponent } from './paginas/vista-unidades/components/crear-unidad/crear-unidad.component';
import { CrearVersionComponent } from './paginas/vista-archivos/components/crear-version/crear-version.component';
import { EditarPerfilComponent } from './components/encabezado/editar-perfil/editar-perfil.component';
import { CrearCarpetaComponent } from './paginas/vista-archivos/components/crear-carpeta/crear-carpeta.component';
import { BusquedaAvanzadaComponent } from './components/encabezado/busqueda-avanzada/busqueda-avanzada.component';
import { PermisosComponent } from './paginas/vista-permisos-carlos/permisos.component';
import { EntradaLoginModule } from './EntradaLogin/entrada-login.module';
import { AppRoutingModule } from './app-routing.module';
import { VistaProyectosModule } from './paginas/vista-proyectos/vista-proyectos.module';
import { VistaArchivosModule } from './paginas/vista-archivos/vista-archivos.module';
import { VistaPersonasModule } from './paginas/vista-personas/vista-persona.module';
import { VistaUnidadesModule } from './paginas/vista-unidades/vista-unidades.module';
import { VistaPermisosModule } from './paginas/vista-permisos/vista-permisos.module';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { PermisosFilaComponent } from './paginas/vista-permisos-carlos/permisos-fila/permisos-fila.component';

// Imports idioma
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';

registerLocaleData(es);

enableRipple(true);

@NgModule({
    declarations: [
        AppComponent,
        EncabezadoComponent,
        CrearContenidosComponent,
        ProyectoCrearComponent,
        CrearUnidadComponent,
        CrearVersionComponent,
        EditarPerfilComponent,
        BusquedaAvanzadaComponent,
        CrearCarpetaComponent,
        PermisosComponent,
        PermisosFilaComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ColorPickerModule,
        NzDropDownModule,
        NzSelectModule,
        NzDatePickerModule,
        NzIconModule,
        NzInputModule,
        NzLayoutModule,
        NzMenuModule,
        VistaArchivosModule,
        VistaPersonasModule,
        VistaProyectosModule,
        VistaUnidadesModule,
        VistaPermisosModule,
        EntradaLoginModule,
        AppRoutingModule,
        NzColDirective,
        NzRowDirective,
        BrowserAnimationsModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
        {
            provide: NZ_I18N,
            useValue: es_ES,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
