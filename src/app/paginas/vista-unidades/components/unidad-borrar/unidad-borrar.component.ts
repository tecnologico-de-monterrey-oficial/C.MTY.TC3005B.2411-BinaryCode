import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Unidad } from '../../../../modelos/unidad.model';
import { UnidadesService } from '../../../../servicios/unidad.services';

@Component({
    selector: 'app-unidad-borrar',
    templateUrl: './unidad-borrar.component.html',
    styleUrls: ['./unidad-borrar.component.css'],
})
export class UnidadBorrarComponent {
    @Input() unidad: Unidad;
    @Input() isConfirmLoading: boolean = false;

    @Output() cancelModal = new EventEmitter();
    @Output() unidadEliminada = new EventEmitter<number>();

    value?: string;

    constructor(private unidadesService: UnidadesService) {}

    handleCancel(): void {
        this.cancelModal.emit();
    }

    handleOk(): void {
        if (this.value === this.unidad.nombre) {
            this.isConfirmLoading = true;
            this.unidadesService.eliminarUnidad(this.unidad.id).subscribe({
                next: () => {
                    this.isConfirmLoading = false;
                    this.unidadEliminada.emit(this.unidad.id);
                },
                error: err => {
                    console.error('Error deleting unidad:', err);
                    this.isConfirmLoading = false;
                },
            });
        }
        /* setTimeout(function () {
            location.reload();
        }, 1000);*/
    }
}
