import { Component } from '@angular/core';
import { Archivo } from '../../../modelos/archivo.model';
import { ArchivosService } from '../../../servicios/archivo.services';
import { Carpeta } from '../../../modelos/carpeta.model';
import { Contenidos } from '../../../modelos/contenidos.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-contenidos',
    templateUrl: './contenidos.component.html',
    styleUrl: './contenidos.component.css',
})
export class ContenidosComponent {
    archivos: Archivo[] = [];
    carpetas: Carpeta[] = [];

    constructor(archivosService: ArchivosService, route: ActivatedRoute) {
        route.params.subscribe(params => {
            const unidadId = params['unidadId'];
            const contenidos: Contenidos = archivosService.getContenidos(unidadId);
            this.archivos = contenidos.archivos;
            this.carpetas = contenidos.carpetas;
        });
    }
}
