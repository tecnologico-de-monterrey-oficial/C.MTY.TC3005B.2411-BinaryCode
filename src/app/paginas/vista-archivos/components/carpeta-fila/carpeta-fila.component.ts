import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Unidad } from '../../../../modelos/unidad.model';

@Component({
    selector: 'app-carpeta-fila',
    templateUrl: './carpeta-fila.component.html',
    styleUrl: './carpeta-fila.component.css',
})
export class CarpetaFilaComponent {
    @Input() carpeta: Unidad;
    constructor(private router: Router) {}
    onFolderClick(): void {
        console.log('Carpeta clickeada', this.carpeta.id);

        // Obtener el URL actual
        const url: string = this.router.url;

        // Dividir el URL en segmentos para reemplazar el último
        const segments: string[] = url.split('/');
        segments[segments.length - 1] = String(this.carpeta.id);

        // Navegar al nuevo URL
        this.router.navigateByUrl(segments.join('/'));
    }
    onMenuClick(event: Event): void {
        event.stopPropagation();
    }
}
