import { Component, OnInit } from '@angular/core';
import { Archivo } from '../../../modelos/archivo.model';
import { getArchivosFavoritosAPI } from '../../../servicios/archivo.services';

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
