import { Component, Input } from '@angular/core';
import { Archivo, Carpeta } from '../../../modelos';

@Component({
    selector: 'app-archivos-lista',
    templateUrl: './archivos-lista.component.html',
    styleUrl: './archivos-lista.component.css',
})
export class ArchivosListaComponent {
    @Input() archivos: Archivo[];
    @Input() carpetas: Carpeta[];

    @Input() permiso: boolean;
}
