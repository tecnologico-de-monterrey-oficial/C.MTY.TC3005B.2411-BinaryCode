import { Component, EventEmitter, Input, Output } from '@angular/core';
import { modalBorrarInputInput } from '../../micelaneos/micelaneos-modal-borrar-input/micelaneos-modal-borrar-input.component';
import { modalGenericoInput } from '../../micelaneos/micelaneos-modal-generico/micelaneos-modal-generico.component';
import {
    entradaActivarProyecto,
    entradaArchivarProyecto,
    entradaBorrarProyecto,
} from '../proyectos-constantes';
import { Proyecto } from '../../../modelos';
import { ProyectosService } from '../../../services/proyectos.service';

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
        const nuevoProyecto: Proyecto =
            await this.proyectosServicio.putProyecto(proyectoAActualizar);
        if (nuevoProyecto) {
            this.actualizarProyectoImportado.emit(nuevoProyecto);
            this.cerrarModales();
        }
        finishLoading();
    }

    async handleBorrar(finishLoading: () => void): Promise<void> {
        const idProyectoBorrado: number =
            await this.proyectosServicio.deleteProyecto(this.proyecto.id);
        if (idProyectoBorrado) {
            this.cerrarModales();
            this.eliminarProyectoImportado.emit(idProyectoBorrado);
        }
        finishLoading();
    }

    async handleArchivar(finishLoading: () => void): Promise<void> {
        const nuevoProyecto: Proyecto =
            await this.proyectosServicio.archivarProyecto(this.proyecto);
        if (nuevoProyecto) {
            this.archivarProyectoImportado.emit(nuevoProyecto);
            this.cerrarModales();
        }
        finishLoading();
    }

    async handleActivar(finishLoading: () => void): Promise<void> {
        const nuevoProyecto: Proyecto =
            await this.proyectosServicio.activarProyecto(this.proyecto);
        if (nuevoProyecto) {
            this.activarProyectoImportado.emit(nuevoProyecto);
            this.cerrarModales();
        }
        finishLoading();
    }

    constructor(private proyectosServicio: ProyectosService) {}
}
