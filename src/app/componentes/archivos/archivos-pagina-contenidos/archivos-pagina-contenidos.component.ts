import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Scroll } from '@angular/router';
import { Archivo, Carpeta } from '../../../modelos';
import { ArchivosService } from '../../../servicios/archivos.service';

@Component({
    selector: 'app-archivos-pagina-contenidos',
    templateUrl: './archivos-pagina-contenidos.component.html',
    styleUrl: './archivos-pagina-contenidos.component.css',
})
export class ArchivosPaginaContenidosComponent implements OnInit {
    archivos: Archivo[] = [];
    carpetas: Carpeta[] = [];

    permiso: boolean;
    titulo: string;

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            let paginaType: string;
            if (event instanceof Scroll) {
                event = event.routerEvent;
            }
            if (event instanceof NavigationEnd) {
                if (event.url.includes('favoritos')) {
                    paginaType = 'favoritos';
                } else if (event.url.includes('recientes')) {
                    paginaType = 'recientes';
                } else {
                    paginaType = 'contenidos';
                }
            }
            this.determinarPagina(paginaType);
        });
    }

    async determinarPagina(paginaType: string): Promise<void> {
        if (paginaType === 'favoritos') {
            this.titulo = 'Favoritos';
            this.archivos = await this.archivosService.getArchivosFavoritos();
            this.permiso = false;
        } else if (paginaType === 'recientes') {
            this.titulo = 'Recientes';
            this.archivos = await this.archivosService.getArchivosRecientes();
            this.permiso = false;
        } else {
            this.titulo = 'Contenidos';
            this.archivos =
                await this.archivosService.getArchivosPorApartado(
                    'idParaGetArchivos'
                );
            this.carpetas =
                await this.archivosService.getCarpetas('idParaGetArchivos');
            this.permiso = true; // Checar
        }
    }

    constructor(
        private router: Router,
        private archivosService: ArchivosService
    ) {}
}
