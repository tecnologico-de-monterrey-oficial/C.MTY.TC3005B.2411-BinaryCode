import { Component, OnInit } from '@angular/core';
import { getArchivosRecientesAPI } from '../../../servicios/archivo.services';
import { Archivo } from '../../../modelos';

@Component({
    selector: 'app-archivos-pagina-recientes',
    templateUrl: './archivos-pagina-recientes.component.html',
})
export class ArchivosPaginaRecientesComponent implements OnInit {
    archivos: Archivo[];

    async ngOnInit(): Promise<void> {
        this.archivos = await getArchivosRecientesAPI();
    }
}
