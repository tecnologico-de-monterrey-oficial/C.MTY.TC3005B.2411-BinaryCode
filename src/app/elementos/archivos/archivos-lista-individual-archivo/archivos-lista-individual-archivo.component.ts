import { Component, Input } from '@angular/core';
import { Archivo } from '../../../modelos';
import { ArchivosService } from '../../../servicios/archivos.service';

@Component({
    selector: 'app-archivos-lista-individual-archivo',
    templateUrl: './archivos-lista-individual-archivo.component.html',
    styleUrl: './archivos-lista-individual-archivo.component.css',
})
export class ArchivosListaIndividualArchivoComponent {
    @Input() archivo: Archivo;

    async onStarClick(): Promise<void> {
        const respuesta: Archivo = await this.archivosService.setFavorito(
            this.archivo,
            this.archivo.favorito
        );
        if (respuesta) {
            this.archivo.favorito = !this.archivo.favorito;
        }
    }

    onFileClick(): void {
        console.log('Se abre archivo ' + this.archivo.nombre);
        // TODO: Agregar ruteo
    }

    constructor(private archivosService: ArchivosService) {}
}
