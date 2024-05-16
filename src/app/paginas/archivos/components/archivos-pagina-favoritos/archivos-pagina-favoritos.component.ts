import { Component } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';

@Component({
    selector: 'app-archivos-pagina-favoritos',
    templateUrl: './archivos-pagina-favoritos.component.html',
})
export class ArchivosPaginaFavoritosComponent {
    archivos: Archivo[] = [];

    constructor(archivosService: ArchivosService) {
        this.archivos = archivosService.getArchivosFavoritos();
    }
}
