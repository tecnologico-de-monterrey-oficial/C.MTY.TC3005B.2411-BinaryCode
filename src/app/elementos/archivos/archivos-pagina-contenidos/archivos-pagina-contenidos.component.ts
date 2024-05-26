import { Component, OnInit } from '@angular/core';
import { Archivo } from '../../../modelos/archivo.model';
import { Carpeta } from '../../../modelos/carpeta.model';
import { Contenidos } from '../../../modelos/contenidos.model';
import { getContenidosAPI } from '../../../servicios/archivo.services';

@Component({
    selector: 'app-archivos-pagina-contenidos',
    templateUrl: './archivos-pagina-contenidos.component.html',
    styleUrl: './archivos-pagina-contenidos.component.css',
})
export class ArchivosPaginaContenidosComponent implements OnInit {
    archivos: Archivo[] = [];
    carpetas: Carpeta[] = [];

    async ngOnInit(): Promise<void> {
        const contenidos: Contenidos =
            await getContenidosAPI('idParaGetArchivos');
        this.archivos = contenidos.archivos;
        this.carpetas = contenidos.carpetas;
    }
}
