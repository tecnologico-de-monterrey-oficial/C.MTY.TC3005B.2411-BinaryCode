import { Component, Input } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';
import {
    E10,
    E11,
    E3,
    E4,
    E5,
    E6,
    E7,
    E8,
    E9,
} from '../../../../../assets/mocks/etiquetas';
import { Etiqueta } from '../../../../modelos/etiqueta.model';

@Component({
    selector: 'app-archivo-fila',
    templateUrl: './archivo-fila.component.html',
    styleUrl: './archivo-fila.component.css',
})
export class ArchivoFilaComponent {
    constructor(private archivosService: ArchivosService) {}
    @Input() archivo: Archivo;
    favorito: boolean = false;
    etiquetas: Etiqueta[] = [E3, E4, E5, E6, E7, E8, E9, E10, E11];
    onStarClick(): void {
        this.favorito = !this.favorito;
        this.archivosService.setFavorito(this.archivo.id, this.favorito);
    }

    onFileClick(): void {
        console.log('Se abre archivo ' + this.archivo.nombre);
        // TODO: Agregar ruteo
    }
}
