import { Component } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';

@Component({
    selector: 'app-favoritos',
    templateUrl: './favoritos.component.html',
})
export class FavoritosComponent {
    archivos: Archivo[] = [];

    constructor(archivosService: ArchivosService) {
        this.archivos = archivosService.getArchivosFavoritos();
    }
}
