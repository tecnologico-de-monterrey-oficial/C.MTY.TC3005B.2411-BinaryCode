import { Component, OnInit } from '@angular/core';
import {
    getArchivosAPI,
    getCarpetasAPI,
} from '../../../servicios/archivo.services';
import { Archivo, Carpeta } from '../../../modelos';

@Component({
    selector: 'app-archivos-pagina-contenidos',
    templateUrl: './archivos-pagina-contenidos.component.html',
    styleUrl: './archivos-pagina-contenidos.component.css',
})
export class ArchivosPaginaContenidosComponent implements OnInit {
    archivos: Archivo[] = [];
    carpetas: Carpeta[] = [];

    permiso: boolean = true;

    async ngOnInit(): Promise<void> {
        this.archivos = await getArchivosAPI('idParaGetArchivos');
        this.carpetas = await getCarpetasAPI('idParaGetArchivos');
    }
}
