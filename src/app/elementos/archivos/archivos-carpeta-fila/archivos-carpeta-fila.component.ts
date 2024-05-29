import { Component, Input } from '@angular/core';
import { Carpeta } from '../../../modelos';

@Component({
    selector: 'app-archivos-carpeta-fila',
    templateUrl: './archivos-carpeta-fila.component.html',
    styleUrl: './archivos-carpeta-fila.component.css',
})
export class ArchivosCarpetaFilaComponent {
    @Input() carpeta: Carpeta;

    onFolderClick(): void {
        console.log('Carpeta clickeada');
    }
}
