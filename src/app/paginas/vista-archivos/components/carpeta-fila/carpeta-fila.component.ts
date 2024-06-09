import { Component, Input } from '@angular/core';
import { Unidad } from '../../../../modelos/unidad.model';
import { UnidadesService } from '../../../../servicios/unidad.services';

@Component({
    selector: 'app-carpeta-fila',
    templateUrl: './carpeta-fila.component.html',
    styleUrl: './carpeta-fila.component.css',
})
export class CarpetaFilaComponent {
    constructor(private unidadesService: UnidadesService) {}
    @Input() unidad: Unidad;

    onFolderClick(): void {
        console.log('Carpeta clickeada' + this.unidad.nombre);
    }
}
