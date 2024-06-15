import { Component, Input } from '@angular/core';
import { Unidad } from '../../../../modelos/unidad.model';
import { ModalService } from '../../../../servicios/modal.service';

@Component({
    selector: 'app-unidad',
    templateUrl: './unidad-tarjeta.component.html',
    styleUrls: ['./unidad-tarjeta.component.css'],
})
export class UnidadTarjetaComponent {
    @Input() unidad: Unidad;

    isVisible = false;
    constructor(private modalService: ModalService) {}
    showPlaceholder: boolean = false;
    isConfirmLoading = false;

    handleImageError(): void {
        this.showPlaceholder = true;
    }

    editarUnidad(): void {
        this.modalService.openUnidadModal(this.unidad);
    }

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        this.isConfirmLoading = true;
        setTimeout(() => {
            this.isVisible = false;
            this.isConfirmLoading = false;
        }, 1000);
    }

    handleCancel(): void {
        this.isVisible = false;
    }

    openPermisosModal(): void {
        console.log('openPermisosModal called with title: Coordinadores');
        this.modalService.openPermisosModal('Coordinadores');
    }
}
