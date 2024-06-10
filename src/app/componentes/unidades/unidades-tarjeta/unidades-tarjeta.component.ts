import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { modalBorrarInputInput } from '../../micelaneos/micelaneos-modal-borrar-input/micelaneos-modal-borrar-input.component';
import { entradaBorrarUnidad } from '../unidades-constantes';
import { Unidad } from '../../../modelos';
import { UnidadesService } from '../../../services/unidades.service';

@Component({
    selector: 'app-unidades-tarjeta',
    templateUrl: './unidades-tarjeta.component.html',
    styleUrl: './unidades-tarjeta.component.css',
})
export class UnidadesTarjetaComponent implements OnInit {
    @Input() unidad: Unidad;

    @Output() eliminarUnidadImportada = new EventEmitter<number>();
    @Output() actualizarUnidadImportada = new EventEmitter<Unidad>();

    urlReferencia: string;

    textoBorrarUnidad: modalBorrarInputInput = entradaBorrarUnidad;

    showPlaceholder: boolean = false;

    borrarVisible: boolean = false;
    actualizarVisible: boolean = false;

    ngOnInit(): void {
        this.urlReferencia =
            '/proyectos/' +
            this.unidad.id_proyecto +
            '/unidades/' +
            this.unidad.id;
    }

    handleImageError(): void {
        this.showPlaceholder = true;
    }

    showBorrarModal(): void {
        this.borrarVisible = true;
    }

    showActualizarModal(): void {
        this.actualizarVisible = true;
    }

    handleCancel(): void {
        this.borrarVisible = false;
        this.actualizarVisible = false;
    }

    async handleActualizar(
        unidadAActualizar: Unidad,
        finishLoading: () => void
    ): Promise<void> {
        const nuevaUnidad: Unidad =
            await this.unidadesService.putUnidad(unidadAActualizar);
        if (nuevaUnidad) {
            this.handleCancel();
            this.actualizarUnidadImportada.emit(nuevaUnidad);
        }
        finishLoading();
    }

    async handleDelete(finishLoading: () => void): Promise<void> {
        const unidadId: number = await this.unidadesService.deleteUnidad(
            this.unidad.id
        );
        if (unidadId) {
            this.eliminarUnidadImportada.emit(unidadId);
            this.handleCancel();
        }
        finishLoading();
    }

    constructor(private unidadesService: UnidadesService) {}
}
