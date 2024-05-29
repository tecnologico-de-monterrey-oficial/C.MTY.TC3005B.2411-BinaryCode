// Imports angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imports ng-zorro
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFlexDirective, NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

// Declaraciones - Archivos
import { ArchivosCarpetaFilaComponent } from './archivos/archivos-carpeta-fila/archivos-carpeta-fila.component';
import { ArchivosCrearModalComponent } from './archivos/archivos-crear-modal/archivos-crear-modal.component';
import { ArchivosFilaComponent } from './archivos/archivos-fila/archivos-fila.component';
import { ArchivosListaComponent } from './archivos/archivos-lista/archivos-lista.component';
import { ArchivosPaginaContenidosComponent } from './archivos/archivos-pagina-contenidos/archivos-pagina-contenidos.component';
import { ArchivosPaginaFavoritosComponent } from './archivos/archivos-pagina-favoritos/archivos-pagina-favoritos.component';
import { ArchivosPaginaRecientesComponent } from './archivos/archivos-pagina-recientes/archivos-pagina-recientes.component';

// Declaraciones - Buscador
import { BuscadorMiniPersonasComponent } from './buscador/buscador-mini-personas/buscador-mini-personas.component';
import { BuscadorPersonasComponent } from './buscador/buscador-personas/buscador-personas.component';

// Declaraciones - Entrada
import { EntradaLoginComponent } from './entrada/entrada-login/entrada-login.component';
import { EntradaPaginaComponent } from './entrada/entrada-pagina/entrada-pagina.component';
import { EntradaRegistroComponent } from './entrada/entrada-registro/entrada-registro.component';

import { EstructuraEncabezadoComponent } from './estructura/estructura-encabezado/estructura-encabezado.component';

// Declaraciones - Modales
import { ModalBorrarInputComponent } from './modales/modal-borrar-input/modal-borrar-input.component';
import { ModalCrearArchivoComponent } from './modales/modal-crear-archivo/modal-crear-archivo.component';
import { ModalCrearProyectoComponent } from './modales/modal-crear-proyecto/modal-crear-proyecto.component';
import { ModalCrearUnidadComponent } from './modales/modal-crear-unidad/modal-crear-unidad.component';
import { ModalGenericoComponent } from './modales/modal-generico/modal-generico.component';

// Declaraciones - Permisos
import { PermisosBuscadorMiniComponent } from './permisos/permisos-buscador-mini/permisos-buscador-mini.component';
import { PermisosCuadriculaUnidadesComponent } from './permisos/permisos-cuadricula-unidades/permisos-cuadricula-unidades.component';
import { PermisosEditoresComponent } from './permisos/permisos-editores/permisos-editores.component';
import { PermisosMiniCoordinadorComponent } from './permisos/permisos-mini-coordinador/permisos-mini-coordinador.component';
import { PermisosMiniEditorComponent } from './permisos/permisos-mini-editor/permisos-mini-editor.component';
import { PermisosPaginaComponent } from './permisos/permisos-pagina/permisos-pagina.component';
import { PermisosSidebarComponent } from './permisos/permisos-sidebar/permisos-sidebar.component';

// Declaraciones - Personas
import { PersonasLineaComponent } from './personas/personas-linea/personas-linea.component';
import { PersonasListaComponent } from './personas/personas-lista/personas-lista.component';

// Declaraciones - Proyectos
import { ProyectosCrearTarjetaComponent } from './proyectos/proyectos-crear-tarjeta/proyectos-crear-tarjeta.component';
import { ProyectosPaginaComponent } from './proyectos/proyectos-pagina/proyectos-pagina.component';
import { ProyectosTarjetaEsqueletoComponent } from './proyectos/proyectos-tarjeta-esqueleto/proyectos-tarjeta-esqueleto.component';
import { ProyectosTarjetaComponent } from './proyectos/proyectos-tarjeta/proyectos-tarjeta.component';

// Declaraciones - Unidades
import { UnidadesCrearTarjetaComponent } from './unidades/unidades-crear-tarjeta/unidades-crear-tarjeta.component';
import { UnidadesPaginaComponent } from './unidades/unidades-pagina/unidades-pagina.component';
import { UnidadesTarjetaEsqueletoComponent } from './unidades/unidades-tarjeta-esqueleto/unidades-tarjeta-esqueleto.component';
import { UnidadesTarjetaComponent } from './unidades/unidades-tarjeta/unidades-tarjeta.component';

// Declaraciones - Vacío
import { ArchivosCrearFilaComponent } from './archivos/archivos-crear-fila/archivos-crear-fila.component';
import { VacioContenidoComponent } from './vacio/vacio-contenido/vacio-contenido.component';
import { VacioUrlComponent } from './vacio/vacio-url/vacio-url.component';
import { EstructuraPaginaComponent } from './estructura/estructura-pagina/estructura-pagina.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        NzBreadCrumbModule,
        NzButtonModule,
        NzDividerModule,
        NzDropDownModule,
        NzEmptyModule,
        NzFlexDirective,
        NzFlexModule,
        NzFormModule,
        NzGridModule,
        NzIconModule,
        NzInputModule,
        NzLayoutModule,
        NzMessageModule,
        NzModalModule,
        NzPopoverModule,
        NzSegmentedModule,
        NzSkeletonModule,
        NzSpinModule,
        NzTagModule,
        NzToolTipModule,
    ],
    declarations: [
        ArchivosCarpetaFilaComponent,
        ArchivosCrearFilaComponent,
        ArchivosCrearModalComponent,
        ArchivosFilaComponent,
        ArchivosListaComponent,
        ArchivosPaginaContenidosComponent,
        ArchivosPaginaFavoritosComponent,
        ArchivosPaginaRecientesComponent,

        BuscadorPersonasComponent,
        BuscadorMiniPersonasComponent,

        EstructuraEncabezadoComponent,
        EstructuraPaginaComponent,

        EntradaPaginaComponent,
        EntradaLoginComponent,
        EntradaRegistroComponent,

        ModalBorrarInputComponent,
        ModalCrearArchivoComponent,
        ModalCrearProyectoComponent,
        ModalCrearUnidadComponent,
        ModalGenericoComponent,

        PermisosBuscadorMiniComponent,
        PermisosCuadriculaUnidadesComponent,
        PermisosEditoresComponent,
        PermisosMiniCoordinadorComponent,
        PermisosMiniEditorComponent,
        PermisosPaginaComponent,
        PermisosSidebarComponent,

        PersonasLineaComponent,
        PersonasListaComponent,

        ProyectosCrearTarjetaComponent,
        ProyectosPaginaComponent,
        ProyectosTarjetaEsqueletoComponent,
        ProyectosTarjetaComponent,

        UnidadesCrearTarjetaComponent,
        UnidadesTarjetaComponent,
        UnidadesPaginaComponent,
        UnidadesTarjetaEsqueletoComponent,

        VacioContenidoComponent,
        VacioUrlComponent,
    ],
    exports: [EstructuraPaginaComponent],
})
export class ElementosModule {}
