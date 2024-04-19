import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { MainLayoutModule } from './MainLayout/main-layout.module';
import { EntradaLoginModule } from './EntradaLogin/entrada-login.module';
import { EncabezadoComponent } from './components/layout-elements/encabezado/encabezado.component';
import { SidebarComponent } from './components/layout-elements/sidebar/sidebar.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

import { CrearContenidosComponent } from './paginas/vista-archivos/contenidos/crear-contenidos/crear-contenidos.component';
import { ProyectoCrearComponent } from './paginas/vista-proyectos/contenido-proyectos/proyecto-crear/proyecto-crear.component';
import { CrearUnidadComponent } from './paginas/vista-unidades/components/crear-unidad/crear-unidad.component';

registerLocaleData(es);

@NgModule({
    declarations: [
        AppComponent,
        EncabezadoComponent,
        SidebarComponent,
        CrearContenidosComponent,
        ProyectoCrearComponent,
        CrearUnidadComponent,
    ],
    imports: [
        NzIconModule,
        NzInputModule,
        NzLayoutModule,
        NzMenuModule,
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
    providers: [{ provide: NZ_I18N, useValue: es_ES }],
    bootstrap: [AppComponent],
})
export class AppModule {}
