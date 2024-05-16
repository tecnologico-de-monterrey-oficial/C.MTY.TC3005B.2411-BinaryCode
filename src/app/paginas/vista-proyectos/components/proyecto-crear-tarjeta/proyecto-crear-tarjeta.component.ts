// src/app/components/proyecto-crear-tarjeta/proyecto-crear-tarjeta.component.ts
import { Component } from '@angular/core';
import { ModalService } from '../../../../servicios/modal.service';  // Ajusta la ruta según tu estructura de directorios

@Component({
    selector: 'app-proyecto-crear-tarjeta',
    templateUrl: './proyecto-crear-tarjeta.component.html',
    styleUrls: ['./proyecto-crear-tarjeta.component.css'],
})
export class ProyectoCrearTarjetaComponent {

    constructor(private modalService: ModalService) {}

    crearProyecto(): void {
        this.modalService.openCrearProyectoModal();
    }
}
