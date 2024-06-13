import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Unidad } from '../../../../modelos/unidad.model';
import { UnidadesService } from '../../../../servicios/unidad.services';

@Component({
    selector: 'app-carpeta-fila',
    templateUrl: './carpeta-fila.component.html',
    styleUrl: './carpeta-fila.component.css',
})
export class CarpetaFilaComponent {
    @Input() carpeta: Unidad;
    isVisible = false;
    isConfirmLoading = false;

    constructor(
        private router: Router,
        private unidadesService: UnidadesService
    ) {}

    showModal(): void {
        this.isVisible = true;
        this.handleOk();
    }

    handleOk(): void {
        this.isConfirmLoading = true;
        this.unidadesService.eliminarUnidad(this.carpeta.id).subscribe(
            response => {
                console.log('Carpeta eliminada:', response);
                this.isVisible = false;
                this.isConfirmLoading = false;
                // Lógica para actualizar la vista después de la eliminación
            },
            error => {
                console.error('Error eliminando la carpeta:', error);
                this.isConfirmLoading = false;
            }
        );
    }

    handleCancel(): void {
        this.isVisible = false;
    }

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
