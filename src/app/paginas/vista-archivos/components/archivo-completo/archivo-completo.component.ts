import { Component, OnInit } from '@angular/core';
import { ArchivoModalService } from '../../../../servicios/archivo-modal.service';
import { Archivo } from '../../../../modelos/archivo.model';
import { getIcono } from '../../../../modelos/icono.model';
import { ArchivosService } from '../../../../servicios/archivo.services';

@Component({
    selector: 'app-archivo-completo',
    templateUrl: './archivo-completo.component.html',
    styleUrls: ['./archivo-completo.component.css'],
})
export class ArchivoCompletoComponent implements OnInit {
    archivo: Archivo;
    selectedVersion: string = 'Version';
    versions: string[] = ['Version 1.0', 'Version 1.1', 'Version 2.0'];

    constructor(
        private archivoModalService: ArchivoModalService,
        private archivoService: ArchivosService
    ) {
        this.archivo = this.archivoModalService.getArchivo();
    }

    ngOnInit(): void {
        console.log('Archivo en modal:', this.archivo);
    }

    getIcono = getIcono;

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
    async downloadFile(): Promise<void> {
        try {
            const blob: Blob = await this.archivoService
                .downloadFile(this.archivo.id)
                .toPromise();
            // eslint-disable-next-line @typescript-eslint/typedef
            const url = window.URL.createObjectURL(blob);
            // eslint-disable-next-line @typescript-eslint/typedef
            const a = document.createElement('a');
            a.href = url;
            a.download = `${this.archivo.nombre}.pdf`; // Puedes cambiar el nombre y extensión según el archivo
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download error:', error);
        }
    }

    selectVersion(version: string): void {
        this.selectedVersion = version;
    }
}
