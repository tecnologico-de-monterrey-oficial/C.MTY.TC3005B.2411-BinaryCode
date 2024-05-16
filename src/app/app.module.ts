import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
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
import { EncabezadoComponent } from './components/layout-elements/encabezado/encabezado.component';
import { SidebarComponent } from './components/layout-elements/sidebar/sidebar.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

import { CrearContenidosComponent } from './paginas/vista-archivos/components/crear-contenidos/crear-contenidos.component';
import { ProyectoCrearComponent } from './paginas/vista-proyectos/contenido-proyectos/proyecto-crear/proyecto-crear.component';
import { CrearUnidadComponent } from './paginas/vista-unidades/components/crear-unidad/crear-unidad.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

registerLocaleData(es);

@NgModule({
    declarations: [
        AppComponent,
        EncabezadoComponent,
        CrearContenidosComponent,
        ProyectoCrearComponent,
        CrearUnidadComponent,
    ],
    imports: [
        NzIconModule,
        NzInputModule,
        NzLayoutModule,
        NzMenuModule,
        NzDropDownModule,
        BrowserModule,
        AppRoutingModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        EntradaLoginModule,
        MainLayoutModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
