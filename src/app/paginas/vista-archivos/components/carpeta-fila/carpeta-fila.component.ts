import { Component, Input } from '@angular/core';
import { Carpeta } from '../../../../modelos/carpeta.model';

@Component({
    selector: 'app-carpeta-fila',
    templateUrl: './carpeta-fila.component.html',
    styleUrl: './carpeta-fila.component.css',
})
export class CarpetaFilaComponent {
    @Input() carpeta: Carpeta;

    onFolderClick(): void {
        console.log('Carpeta clickeada');
    }
}
