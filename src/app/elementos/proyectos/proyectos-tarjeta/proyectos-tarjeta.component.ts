import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { modalBorrarInputInput } from '../../micelaneos/micelaneos-modal-borrar-input/micelaneos-modal-borrar-input.component';
import { modalGenericoInput } from '../../micelaneos/micelaneos-modal-generico/micelaneos-modal-generico.component';
import {
    entradaActivarProyecto,
    entradaArchivarProyecto,
    entradaBorrarProyecto,
    mensajesActivarProyecto,
    mensajesActualizarProyecto,
    mensajesArchivarProyecto,
} from '../proyectos-constantes';
import {
    actualizarProyectoConValidacion,
    borrarProyectoConValidacion,
} from '../../../servicios/proyecto.services';
import { Proyecto } from '../../../modelos';

@Component({
    selector: 'app-proyectos-tarjeta',
    templateUrl: './proyectos-tarjeta.component.html',
    styleUrl: './proyectos-tarjeta.component.css',
})
export class ProyectosTarjetaComponent {
    @Input() proyecto: Proyecto;
    @Input() descripcionVisible: boolean = true;

    @Output() eliminarProyectoImportado = new EventEmitter<number>();
    @Output() actualizarProyectoImportado = new EventEmitter<Proyecto>();
    @Output() archivarProyectoImportado = new EventEmitter<Proyecto>();
    @Output() activarProyectoImportado = new EventEmitter<Proyecto>();

    textoBorrarProyecto: modalBorrarInputInput = entradaBorrarProyecto;
    textoArchivarProyecto: modalGenericoInput = entradaArchivarProyecto;
    textoActivarProyecto: modalGenericoInput = entradaActivarProyecto;

    borrarVisible: boolean = false;
    actualizarVisible: boolean = false;
    archivarVisible: boolean = false;
    activarVisible: boolean = false;

    abrirBorrarModal(): void {
        this.borrarVisible = true;
    }

    abrirActualizarModal(): void {
        this.actualizarVisible = true;
    }

    abrirArchivarModal(): void {
        this.archivarVisible = true;
    }

    abrirActivarModal(): void {
        this.activarVisible = true;
    }

    cerrarModales(): void {
        this.borrarVisible = false;
        this.actualizarVisible = false;
        this.archivarVisible = false;
        this.activarVisible = false;
    }

    async handleActualizar(
        proyectoAActualizar: Proyecto,
        finishLoading: () => void
    ): Promise<void> {
        await actualizarProyectoConValidacion(
            proyectoAActualizar,
            mensajesActualizarProyecto,
            this.actualizarProyectoImportado,
            this.message,
            this.cerrarModales.bind(this),
            finishLoading
        );
    }

    async handleBorrar(finishLoading: () => void): Promise<void> {
        await borrarProyectoConValidacion(
            this.proyecto.id,
            this.eliminarProyectoImportado,
            this.message,
            this.cerrarModales.bind(this),
            finishLoading
        );
    }

    async handleArchivar(finishLoading: () => void): Promise<void> {
        this.proyecto.activo = false;
        const imagenTemp: string = this.proyecto.imagen;
        this.proyecto.imagen = undefined;
        actualizarProyectoConValidacion(
            this.proyecto,
            mensajesArchivarProyecto,
            this.archivarProyectoImportado,
            this.message,
            this.cerrarModales.bind(this),
            finishLoading
        );
        this.proyecto.imagen = imagenTemp;
    }

    async handleActivar(finishLoading: () => void): Promise<void> {
        this.proyecto.activo = true;
        const imagenTemp: string = this.proyecto.imagen;
        this.proyecto.imagen = undefined;
        actualizarProyectoConValidacion(
            this.proyecto,
            mensajesActivarProyecto,
            this.activarProyectoImportado,
            this.message,
            this.cerrarModales.bind(this),
            finishLoading
        );
        this.proyecto.imagen = imagenTemp;
    }

    constructor(private message: NzMessageService) {}
}
