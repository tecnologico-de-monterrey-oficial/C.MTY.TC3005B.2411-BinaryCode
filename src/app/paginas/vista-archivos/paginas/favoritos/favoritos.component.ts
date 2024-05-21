import { Component } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { ModalService } from '../../../../servicios/modal.service'; // Importar ModalService

@Component({
    selector: 'app-favoritos',
    templateUrl: './favoritos.component.html',
    styleUrls: ['../contenidos/contenidos.component.css'],
})
export class FavoritosComponent {
    archivos: Archivo[] = [];

    constructor(
        private archivosService: ArchivosService, // Añadir 'private' si se usa en la clase
        private modalService: ModalService // Inyectar ModalService
    ) {
        this.archivos = this.archivosService.getArchivosFavoritos();
    }

    abrirCrearContenidosModal(): void {
        this.modalService.openCrearContenidosModal(); // Método para abrir el modal
    }
}
