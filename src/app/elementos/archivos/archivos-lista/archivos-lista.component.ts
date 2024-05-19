import { Component, Input } from '@angular/core';
import { Archivo } from '../../../modelos/archivo.model';
import { Carpeta } from '../../../modelos/carpeta.model';

@Component({
    selector: 'app-archivos-lista',
    templateUrl: './archivos-lista.component.html',
    styleUrl: './archivos-lista.component.css',
})
export class ArchivosListaComponent {
    @Input() archivos: Archivo[];
    @Input() carpetas: Carpeta[];
}
