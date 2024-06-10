import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Unidad } from '../../../modelos';
import { UnidadesService } from '../../../services/unidades.service';

@Component({
    selector: 'app-unidades-crear-tarjeta',
    templateUrl: './unidades-crear-tarjeta.component.html',
    styleUrl: './unidades-crear-tarjeta.component.css',
})
export class UnidadesCrearTarjetaComponent {
    @Output() crearUnidadImportada = new EventEmitter<Unidad>();
    @Input() proyectoId: number;

    modalVisible: boolean = false;

    async handleCrear(
        unidadACrear: Unidad,
        finishLoading: () => void
    ): Promise<void> {
        const unidad: Unidad =
            await this.unidadesService.postUnidad(unidadACrear);
        if (unidad) {
            this.crearUnidadImportada.emit(unidad);
            this.handleCancel();
        }
        finishLoading();
    }

    handleCancel(): void {
        this.modalVisible = false;
    }

    abrirModal(): void {
        this.modalVisible = true;
    }

    constructor(private unidadesService: UnidadesService) {}
}
