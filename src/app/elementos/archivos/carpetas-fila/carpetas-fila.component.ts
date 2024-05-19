import { Component, Input } from '@angular/core';
import { Carpeta } from '../../../modelos/carpeta.model';

@Component({
    selector: 'app-carpetas-fila',
    templateUrl: './carpetas-fila.component.html',
    styleUrl: './carpetas-fila.component.css',
})
export class CarpetasFilaComponent {
    @Input() carpeta: Carpeta;

    onFolderClick(): void {
        console.log('Carpeta clickeada');
    }
}
