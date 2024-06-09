import { Component, Input, OnInit } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { Unidad } from '../../../../modelos/unidad.model';
import { UnidadesService } from '../../../../servicios/unidad.services';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-lista-archivos',
    templateUrl: './lista-archivos.component.html',
    styleUrl: './lista-archivos.component.css',
})
export class ListaArchivosComponent implements OnInit {
    @Input() archivos: Archivo[];
    apartados: Unidad[] = [];
    apartadosFiltrados: Unidad[] = [];

    constructor(
        private unidadesService: UnidadesService,
        private archivosService: ArchivosService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const idPadre: string = params['idPadre'];

            if (idPadre) {
                this.loadUnidadesData(idPadre);
                this.loadArchivosData(idPadre);
            } else {
                this.loadUnidadesData();
                this.loadArchivosData();
            }
        });
    }

    loadUnidadesData(idPadre?: string): void {
        if (idPadre) {
            this.unidadesService.getApartadosPorPadre(idPadre).subscribe({
                next: apartados => {
                    this.apartados = apartados;
                    this.apartadosFiltrados = apartados; // Inicialmente mostrar todas las unidades
                    console.log('Unidades filtradas:', this.apartados);
                },
                error: err =>
                    console.error('Error fetching filtered units:', err),
            });
        } else {
            this.unidadesService.getApartados().subscribe({
                next: apartados => {
                    this.apartados = apartados;
                    this.apartadosFiltrados = apartados;
                    console.log('Unidades:', this.apartados);
                },
                error: err => console.error('Error fetching units:', err),
            });
        }
    }

    loadArchivosData(idPadre?: string): void {
        if (idPadre) {
            this.archivosService.getArchivosPorUnidad(idPadre).subscribe({
                next: archivos => {
                    this.archivos = archivos;
                    console.log('Archivos filtrados:', this.archivos);
                },
                error: err =>
                    console.error('Error fetching filtered files:', err),
            });
        } else {
            this.archivosService.getArchivos().subscribe({
                next: archivos => {
                    this.archivos = archivos;
                    console.log('Archivos:', this.archivos);
                },
                error: err => console.error('Error fetching files:', err),
            });
        }
    }

    filtrarPorPadre(idPadre: string): void {
        this.unidadesService
            .getApartadosPorPadre(idPadre)
            .subscribe(apartados => {
                this.apartadosFiltrados = apartados;
            });
    }
}
