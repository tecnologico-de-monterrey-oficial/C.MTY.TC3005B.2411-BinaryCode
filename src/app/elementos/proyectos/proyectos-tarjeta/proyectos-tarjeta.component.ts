import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Proyecto } from '../../../modelos/proyectos.model';
import { ProyectosService } from '../../../servicios/proyecto.services';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
    entradaArchivarProyecto,
    entradaBorrarProyecto,
    mensajesArchivarProyecto,
    mensajesActivarProyecto,
    mensajesActualizarProyecto,
    entradaActivarProyecto,
} from '../proyectos-constantes';
import {
    borrarProyecto,
    actualizarProyecto,
} from '../../../servicios/proyecto.util';
import { modalBorrarInputInput } from '../../modales/modal-borrar-input/modal-borrar-input.component';
import { modalGenericoInput } from '../../modales/modal-generico/modal-generico.component';

@Component({
    selector: 'app-proyectos-tarjeta',
    templateUrl: './proyectos-tarjeta.component.html',
    styleUrl: './proyectos-tarjeta.component.css',
})
export class ProyectosTarjetaComponent {
    @Input() proyecto: Proyecto;

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

    showBorrarModal(): void {
        this.borrarVisible = true;
    }

    showActualizarModal(): void {
        this.actualizarVisible = true;
    }

    showArchivarModal(): void {
        this.archivarVisible = true;
    }

    showActivarModal(): void {
        this.activarVisible = true;
    }

    handleCancel(): void {
        this.borrarVisible = false;
        this.actualizarVisible = false;
        this.archivarVisible = false;
        this.activarVisible = false;
    }

    async handleActualizar(
        proyectoAActualizar: Proyecto,
        finishLoading: () => void
    ): Promise<void> {
        await actualizarProyecto(
            proyectoAActualizar,
            mensajesActualizarProyecto,
            this.actualizarProyectoImportado,
            this.proyectoService,
            this.message,
            this.handleCancel.bind(this),
            finishLoading
        );
    }

    async handleDelete(finishLoading: () => void): Promise<void> {
        await borrarProyecto(
            this.proyecto.id,
            this.eliminarProyectoImportado,
            this.proyectoService,
            this.message,
            this.handleCancel.bind(this),
            finishLoading
        );
    }

    async handleArchivar(finishLoading: () => void): Promise<void> {
        this.proyecto.activo = false;
        const imagenTemp: string = this.proyecto.imagen;
        this.proyecto.imagen = undefined;
        actualizarProyecto(
            this.proyecto,
            mensajesArchivarProyecto,
            this.archivarProyectoImportado,
            this.proyectoService,
            this.message,
            this.handleCancel.bind(this),
            finishLoading
        );
        this.proyecto.imagen = imagenTemp;
    }

    async handleActivar(finishLoading: () => void): Promise<void> {
        this.proyecto.activo = true;
        const imagenTemp: string = this.proyecto.imagen;
        this.proyecto.imagen = undefined;
        actualizarProyecto(
            this.proyecto,
            mensajesActivarProyecto,
            this.activarProyectoImportado,
            this.proyectoService,
            this.message,
            this.handleCancel.bind(this),
            finishLoading
        );
        this.proyecto.imagen = imagenTemp;
    }

    constructor(
        private proyectoService: ProyectosService,
        private message: NzMessageService
    ) {}
}
