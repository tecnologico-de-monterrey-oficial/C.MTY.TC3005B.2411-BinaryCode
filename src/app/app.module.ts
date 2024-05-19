import { NgModule } from '@angular/core';

// Declarations
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { CrearContenidosComponent } from './paginas/vista-archivos/components/crear-contenidos/crear-contenidos.component';
import { ProyectoCrearComponent } from './paginas/vista-proyectos/components/proyecto-crear/proyecto-crear.component';
import { CrearUnidadComponent } from './paginas/vista-unidades/components/crear-unidad/crear-unidad.component';

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

// Imports locales
import { EntradaLoginModule } from './EntradaLogin/entrada-login.module';
import { AppRoutingModule } from './app-routing.module';
import { VistaProyectosModule } from './paginas/vista-proyectos/vista-proyectos.module';

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

        NzDropDownModule,
        NzIconModule,
        NzInputModule,
        NzLayoutModule,
        NzMenuModule,
        VistaProyectosModule,

        EntradaLoginModule,
        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
