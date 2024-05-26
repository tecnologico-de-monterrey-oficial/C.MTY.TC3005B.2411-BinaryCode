import { Component, OnInit } from '@angular/core';
import { Archivo } from '../../../modelos/archivo.model';
import { getArchivosRecientesAPI } from '../../../servicios/archivo.services';

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
