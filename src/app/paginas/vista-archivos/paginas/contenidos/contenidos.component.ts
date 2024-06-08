import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { Carpeta } from '../../../../modelos/carpeta.model';
import { CrearContenidosComponent } from '../../components/crear-contenidos/crear-contenidos.component';
import { CrearCarpetaComponent } from '../../components/crear-carpeta/crear-carpeta.component';
// import { Contenidos } from '../../../../modelos/contenidos.model';

@Component({
    selector: 'app-contenidos',
    templateUrl: './contenidos.component.html',
    styleUrls: ['./contenidos.component.css'],
})
export class ContenidosComponent implements OnInit {
    archivos: Archivo[] = [];
    carpetas: Carpeta[] = [];
    constructor(
        private archivosService: ArchivosService,
        private modalService: NzModalService
    ) {}

    async ngOnInit(): Promise<void> {
        this.archivos = await this.archivosService.getArchivos();
        this.carpetas = await this.archivosService.getCarpetas();
    }

    abrirModalCrearContenido(): void {
        this.modalService.create({
            nzTitle: 'Crear Contenido',
            nzContent: CrearContenidosComponent,
            nzFooter: null,
            nzWidth: '80%',
        });
    }

    abrirModalCrearCarpeta(): void {
        this.modalService.create({
            nzTitle: 'Crear Carpeta',
            nzContent: CrearCarpetaComponent,
            nzFooter: null,
            nzWidth: '40%',
        });
    }
}
