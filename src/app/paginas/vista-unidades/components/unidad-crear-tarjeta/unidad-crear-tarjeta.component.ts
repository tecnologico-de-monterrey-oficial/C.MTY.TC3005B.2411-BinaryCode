import { Component } from '@angular/core';
import { ModalService } from '../../../../servicios/modal.service';

@Component({
    selector: 'app-unidad-crear-tarjeta',
    templateUrl: './unidad-crear-tarjeta.component.html',
    styleUrl: './unidad-crear-tarjeta.component.css',
})
export class UnidadCrearTarjetaComponent {
    constructor(private modalService: ModalService) {}
    crearUnidad(): void {
        this.modalService.openUnidadModal();
    }
}
