import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { CrearContenidosComponent } from '../../components/crear-contenidos/crear-contenidos.component';
import { CrearCarpetaComponent } from '../../components/crear-carpeta/crear-carpeta.component';
import { ActivatedRoute } from '@angular/router';
import { Unidad } from '../../../../modelos/unidad.model';
import { ArchivoCompartidoService } from '../../../../servicios/archivo-compartido.service'; // Importar el servicio

@Component({
    selector: 'app-contenidos',
    templateUrl: './contenidos.component.html',
    styleUrls: ['./contenidos.component.css'],
})
export class ContenidosComponent implements OnInit {
    archivos: Archivo[] = [];
    carpetas: Unidad[] = [];
    unidadId: string;

    constructor(
        private archivosService: ArchivosService,
        private modalService: NzModalService,
        private route: ActivatedRoute,
        private archivoCompartidoService: ArchivoCompartidoService // Inyectar el servicio
    ) {}

    async ngOnInit(): Promise<void> {
        this.route.queryParams.subscribe(async params => {
            const search: string = params['search'];
            if (search) {
                this.archivosService.buscarArchivos(search).subscribe(
                    result => {
                        this.archivos = result;
                    },
                    error => {
                        console.error('Error buscando archivos:', error);
                    }
                );
            } else {
                this.route.params.subscribe(async params => {
                    this.unidadId = params['unidadesId'];
                    this.archivos = await this.archivosService.getArchivos(
                        this.unidadId
                    );
                    this.carpetas = await this.archivosService.getCarpetas(
                        this.unidadId
                    );
                });
            }
        });
    }

    abrirModalCrearContenido(): void {
        this.archivoCompartidoService.reset(); // Restablecer el servicio
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
            nzWidth: '70%',
        });
    }
}
