import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { CrearContenidosComponent } from '../../components/crear-contenidos/crear-contenidos.component';

@Component({
    selector: 'app-favoritos',
    templateUrl: './favoritos.component.html',
    styleUrls: ['../contenidos/contenidos.component.css'],
})
export class FavoritosComponent {
    archivos: Archivo[] = [];

    constructor(
        private archivosService: ArchivosService,
        private modalService: NzModalService
    ) {
        this.archivos = archivosService.getArchivosFavoritos();
    }

    abrirModalCrearContenido(): void {
        this.modalService.create({
            nzTitle: 'Agregar a Favoritos',
            nzContent: CrearContenidosComponent,
            nzFooter: null,
            nzWidth: '80%',
        });
    }
}
