import { Component } from '@angular/core';
import { Archivo } from '../../../modelos/archivo.model';
import { ArchivosService } from '../../../servicios/archivo.services';
import { Carpeta } from '../../../modelos/carpeta.model';
import { Contenidos } from '../../../modelos/contenidos.model';

@Component({
    selector: 'app-contenidos',
    templateUrl: './contenidos.component.html',
    styleUrl: './contenidos.component.css',
})
export class ContenidosComponent {
    archivos: Archivo[] = [];
    carpetas: Carpeta[] = [];

    constructor(private archivosService: ArchivosService) {
        const contenidos: Contenidos =
            archivosService.getContenidos('idParaGetArchivos');
        this.archivos = contenidos.archivos;
        this.carpetas = contenidos.carpetas;
    }
}
