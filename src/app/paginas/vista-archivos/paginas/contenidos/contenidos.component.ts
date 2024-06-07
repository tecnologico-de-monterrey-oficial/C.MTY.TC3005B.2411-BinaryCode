import { Component, OnInit } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { Carpeta } from '../../../../modelos/carpeta.model';

@Component({
    selector: 'app-contenidos',
    templateUrl: './contenidos.component.html',
    styleUrl: './contenidos.component.css',
})
export class ContenidosComponent implements OnInit {
    archivos: Archivo[] = [];
    carpetas: Carpeta[] = [];
    constructor(private archivosService: ArchivosService) {}

    async ngOnInit(): Promise<void> {
        this.archivos = await this.archivosService.getArchivos();
        this.carpetas = await this.archivosService.getCarpetas();
        console.log(this.archivos.at(0).usuario_info);
    }
}
