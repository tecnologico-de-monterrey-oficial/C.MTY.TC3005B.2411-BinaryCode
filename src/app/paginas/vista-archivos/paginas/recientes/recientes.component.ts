import { Component, OnInit } from '@angular/core';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { Archivo } from '../../../../modelos/archivo.model';

@Component({
    selector: 'app-recientes',
    templateUrl: './recientes.component.html',
})
export class RecientesComponent implements OnInit {
    archivos: Archivo[] = [];
    constructor(private archivosServices: ArchivosService) {}
    async ngOnInit(): Promise<void> {
        this.archivos = await this.archivosServices.getRecientes(1);
    }
}
