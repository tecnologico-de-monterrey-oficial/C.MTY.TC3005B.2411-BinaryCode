import { Component, Input } from '@angular/core';
import { Unidad } from '../../../../modelos/unidad.model';
import { ModalService } from '../../../../servicios/modal.service';

@Component({
    selector: 'app-unidad',
    templateUrl: './unidad-tarjeta.component.html',
    styleUrl: './unidad-tarjeta.component.css',
})
export class UnidadTarjetaComponent {
    @Input() unidad: Unidad;

    isVisible = false;
    constructor(private modalService: ModalService) {
        console.log(this.unidad);
    }
    showPlaceholder: boolean = false;

    handleImageError(): void {
        this.showPlaceholder = true;
    }
    editarUnidad(): void {
        this.modalService.openUnidadModal(this.unidad);
    }

    showModal(): void {
        this.isVisible = true;
    }
}
