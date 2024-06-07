import { Component, Input } from '@angular/core';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { getIcono } from '../../../../modelos/icono.model';

@Component({
    selector: 'app-archivo-fila',
    templateUrl: './archivo-fila.component.html',
    styleUrl: './archivo-fila.component.css',
})
export class ArchivoFilaComponent {
    constructor(private archivosService: ArchivosService) {}
    @Input() archivo: Archivo;

    onStarClick(): void {
        this.archivo.favorito = !this.archivo.favorito;
        this.archivosService.setFavorito(
            this.archivo.id,
            this.archivo.favorito
        );
    }

    onFileClick(): void {
        console.log('Se abre archivo ' + this.archivo.nombre);
    }
    formatDate(dateString: string): string {
        const [day, month, year] = dateString.split('-');
        const date: Date = new Date(
            Number(year),
            Number(month) - 1,
            Number(day)
        );
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        });
    }

    protected readonly getIcono = getIcono;
}
