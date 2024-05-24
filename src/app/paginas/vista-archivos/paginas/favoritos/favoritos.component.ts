import { Component, OnInit } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';

@Component({
    selector: 'app-favoritos',
    templateUrl: './favoritos.component.html',
})
export class FavoritosComponent implements OnInit {
    archivos: Archivo[] = [];

    constructor(private archivosServices: ArchivosService) {}
    async ngOnInit(): Promise<void> {
        this.archivos = await this.archivosServices.getArchivosFavoritos(1);
    }
}
