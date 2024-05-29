import { Component, OnInit } from '@angular/core';
import { getArchivosFavoritosAPI } from '../../../servicios/archivo.services';
import { Archivo } from '../../../modelos';

@Component({
    selector: 'app-archivos-pagina-favoritos',
    templateUrl: './archivos-pagina-favoritos.component.html',
})
export class ArchivosPaginaFavoritosComponent implements OnInit {
    archivos: Archivo[];

    async ngOnInit(): Promise<void> {
        this.archivos = await getArchivosFavoritosAPI();
    }
}
