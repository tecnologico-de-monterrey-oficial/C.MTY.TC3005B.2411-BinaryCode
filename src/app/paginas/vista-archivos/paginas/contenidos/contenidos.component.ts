// contenidos.component.ts
import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { Carpeta } from '../../../../modelos/carpeta.model';
import { Contenidos } from '../../../../modelos/contenidos.model';
import { CrearContenidosComponent } from '../../components/crear-contenidos/crear-contenidos.component';

@Component({
    selector: 'app-contenidos',
    templateUrl: './contenidos.component.html',
    styleUrls: ['./contenidos.component.css'],
})
export class ContenidosComponent {
    archivos: Archivo[] = [];
    carpetas: Carpeta[] = [];

    constructor(
        private archivosService: ArchivosService,
        private modalService: NzModalService
    ) {
        const contenidos: Contenidos =
            this.archivosService.getContenidos('idParaGetArchivos');
        this.archivos = contenidos.archivos;
        this.carpetas = contenidos.carpetas;
    }

    abrirModalCrearContenido(): void {
        this.modalService.create({
            nzTitle: 'Crear Contenido',
            nzContent: CrearContenidosComponent,
            nzFooter: null,
            nzWidth: '80%',
        });
    }
}
