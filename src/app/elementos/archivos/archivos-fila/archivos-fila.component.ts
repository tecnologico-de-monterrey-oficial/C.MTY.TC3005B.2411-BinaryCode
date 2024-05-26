import { Component, Input } from '@angular/core';
import { Archivo } from '../../../modelos/archivo.model';
import { setFavoritoAPI } from '../../../servicios/archivo.services';

@Component({
    selector: 'app-archivos-fila',
    templateUrl: './archivos-fila.component.html',
    styleUrl: './archivos-fila.component.css',
})
export class ArchivosFilaComponent {
    @Input() archivo: Archivo;

    onStarClick(): void {
        this.archivo.favorito = !this.archivo.favorito;
        setFavoritoAPI(this.archivo.id, this.archivo.favorito);
    }

    onFileClick(): void {
        console.log('Se abre archivo ' + this.archivo.nombre);
        // TODO: Agregar ruteo
    }
}
