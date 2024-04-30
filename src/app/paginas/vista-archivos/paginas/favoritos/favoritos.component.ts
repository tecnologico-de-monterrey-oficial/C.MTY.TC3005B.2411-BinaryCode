import { Component } from '@angular/core';
import { FavoritosServices } from '../../../../servicios/favoritos.services';
import { Archivo } from '../../../../modelos/archivo.model';

@Component({
    selector: 'app-favoritos',
    templateUrl: './favoritos.component.html',
})
export class FavoritosComponent {
    archivos: Archivo[] = [];

    constructor(private archivosService: FavoritosServices) {
        this.archivos = archivosService.getArchivosFavoritos();
    }
}
