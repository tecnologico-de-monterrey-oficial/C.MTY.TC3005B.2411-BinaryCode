import { Component } from '@angular/core';
import { ArchivosService } from '../../../servicios/archivo.services';
import { Archivo } from '../../../modelos/archivo.model';

@Component({
    selector: 'app-archivos-pagina-recientes',
    templateUrl: './archivos-pagina-recientes.component.html',
})
export class ArchivosPaginaRecientesComponent {
    archivos: Archivo[] = [];

    constructor(archivosService: ArchivosService) {
        this.archivos = archivosService.getArchivosRecientes();
    }
}
