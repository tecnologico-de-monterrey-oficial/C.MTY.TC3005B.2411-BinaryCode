import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unidad } from '../../../modelos/unidad.model';
import { NzMessageService } from 'ng-zorro-antd/message';
import { borrarUnidad, actualizarUnidad } from '../../../servicios/unidad.util';
import { modalBorrarInputInput } from '../../modales/modal-borrar-input/modal-borrar-input.component';
import { entradaBorrarUnidad } from '../unidades-constantes';

@Component({
    selector: 'app-unidades-tarjeta',
    templateUrl: './unidades-tarjeta.component.html',
    styleUrl: './unidades-tarjeta.component.css',
})
export class UnidadesTarjetaComponent implements OnInit {
    @Input() unidad: Unidad;
    @Input() message: NzMessageService;

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
        await actualizarUnidad(
            unidadAActualizar,
            this.actualizarUnidadImportada,
            this.message,
            this.handleCancel.bind(this),
            finishLoading
        );
        unidadAActualizar;
        finishLoading;
    }

    async handleDelete(finishLoading: () => void): Promise<void> {
        await borrarUnidad(
            this.unidad.id,
            this.eliminarUnidadImportada,
            this.message,
            this.handleCancel.bind(this),
            finishLoading
        );
        finishLoading;
    }
}
