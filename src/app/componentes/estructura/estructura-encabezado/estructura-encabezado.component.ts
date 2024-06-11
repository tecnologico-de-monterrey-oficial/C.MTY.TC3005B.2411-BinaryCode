import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Fuse, { FuseResult, IFuseOptions } from 'fuse.js';
import { Archivo, Usuario } from '../../../modelos';
import { ArchivosService } from '../../../services/archivos.service';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-estructura-encabezado',
    templateUrl: './estructura-encabezado.component.html',
    styleUrl: './estructura-encabezado.component.css',
})
export class EstructuraEncabezadoComponent implements OnInit {
    usuario: Usuario;

    fuse: Fuse<Archivo>;

    archivosAPI: Archivo[];
    archivosTotales: Archivo[];
    archivosFiltrados: Archivo[];
    menuBusquedaVisible: boolean = false;
    terminoBusquedaArchivo: string = '';

    parametrosBusqueda: IFuseOptions<Archivo> = {
        threshold: 0.3,
        ignoreLocation: true,
        keys: ['nombre'],
    };

    async ngOnInit(): Promise<void> {
        console.log('EstructuraEncabezadoComponent');
        this.archivosAPI = await this.archivosService.getArchivos();
        this.usuario = this.authService.getUsuarioActual();
        this.archivosTotales = this.archivosAPI;
        this.fuse = new Fuse(this.archivosTotales, this.parametrosBusqueda);

        console.log(this.usuario);
    }

    handleBusquedaArchivo(): void {
        this.menuBusquedaVisible = true;
        if (
            this.terminoBusquedaArchivo === '' ||
            !this.terminoBusquedaArchivo
        ) {
            this.archivosFiltrados = this.archivosTotales;
        } else {
            const result: FuseResult<Archivo>[] = this.fuse.search(
                this.terminoBusquedaArchivo
            );
            this.archivosFiltrados = result.map(resultado => resultado.item);
            if (this.archivosFiltrados.length > 10) {
                this.archivosFiltrados = this.archivosFiltrados.slice(0, 10);
            }
        }
    }

    handleMenuBusquedaVisible(valor: boolean): void {
        this.menuBusquedaVisible = valor;
    }

    handleClick(archivoId: number): void {
        this.menuBusquedaVisible = false;
        this.terminoBusquedaArchivo = '';
        this.router.navigate(['/archivo', archivoId]);
    }

    cambioArchivosTotales(nuevosArchivos: Archivo[]): void {
        this.archivosTotales = nuevosArchivos;
        this.fuse.setCollection(this.archivosTotales);
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    constructor(
        private archivosService: ArchivosService,
        private router: Router,
        private authService: AuthService
    ) {}
}
