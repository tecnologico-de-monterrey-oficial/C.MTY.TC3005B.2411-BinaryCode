import { Component } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { Carpeta } from '../../../../modelos/carpeta.model';
import { Contenidos } from '../../../../modelos/contenidos.model';

@Component({
    selector: 'app-archivos-pagina-contenidos',
    templateUrl: './archivos-pagina-contenidos.component.html',
    styleUrl: './archivos-pagina-contenidos.component.css',
})
export class ArchivosPaginaContenidosComponent {
    archivos: Archivo[] = [];
    carpetas: Carpeta[] = [];

    constructor(archivosService: ArchivosService) {
        const contenidos: Contenidos =
            archivosService.getContenidos('idParaGetArchivos');
        this.archivos = contenidos.archivos;
        this.carpetas = contenidos.carpetas;
    }
}
