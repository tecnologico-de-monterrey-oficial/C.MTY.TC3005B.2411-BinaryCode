import { Component } from '@angular/core';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { Archivo } from '../../../../modelos/archivo.model';

@Component({
    selector: 'app-recientes',
    templateUrl: './recientes.component.html',
})
export class RecientesComponent {
    archivos: Archivo[] = [];

    constructor(archivosService: ArchivosService) {
        this.archivos = archivosService.getArchivosRecientes();
    }
}
