import { Component, Input } from '@angular/core';
import { setFavoritoAPI } from '../../../servicios/archivo.services';
import { Archivo } from '../../../modelos';

@Component({
    selector: 'app-archivos-lista-individual-archivo',
    templateUrl: './archivos-lista-individual-archivo.component.html',
    styleUrl: './archivos-lista-individual-archivo.component.css',
})
export class ArchivosListaIndividualArchivoComponent {
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
