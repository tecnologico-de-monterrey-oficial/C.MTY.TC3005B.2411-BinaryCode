import { Component, Input } from '@angular/core';
import { Carpeta } from '../../../modelos';

@Component({
    selector: 'app-archivos-lista-individual-carpeta',
    templateUrl: './archivos-lista-individual-carpeta.component.html',
    styleUrl: './archivos-lista-individual-carpeta.component.css',
})
export class ArchivosListaIndividualCarpetaComponent {
    @Input() carpeta: Carpeta;

    onFolderClick(): void {
        console.log('Carpeta clickeada');
    }
}
