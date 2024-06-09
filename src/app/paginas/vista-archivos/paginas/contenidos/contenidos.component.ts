import { Component, OnInit } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { Unidad } from '../../../../modelos/unidad.model';
import { UnidadesService } from '../../../../servicios/unidad.services';

@Component({
    selector: 'app-contenidos',
    templateUrl: './contenidos.component.html',
    styleUrl: './contenidos.component.css',
})
export class ContenidosComponent implements OnInit {
    archivos: Archivo[] = [];
    unidades: Unidad[] = [];
    constructor(
        private archivosService: ArchivosService,
        private unidadesService: UnidadesService
    ) {}

    async ngOnInit(): Promise<void> {
        this.archivosService.getArchivos().subscribe(archivos => {
            this.archivos = archivos;
        });
        this.unidadesService.getApartados().subscribe(unidades => {
            this.unidades = unidades;
        });
        //console.log(this.archivos.at(0).usuario_info);
    }
}
