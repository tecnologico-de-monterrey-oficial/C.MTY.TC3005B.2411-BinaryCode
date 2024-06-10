// archivo-fila.component.ts
import { Component, Input } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ArchivoCompletoComponent } from '../archivo-completo/archivo-completo.component';
import { CrearVersionComponent } from '../crear-version/crear-version.component';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { ArchivoModalService } from '../../../../servicios/archivo-modal.service';
import { getIcono } from '../../../../modelos/icono.model';

@Component({
    selector: 'app-archivo-fila',
    templateUrl: './archivo-fila.component.html',
    styleUrls: ['./archivo-fila.component.css'],
})
export class ArchivoFilaComponent {
    constructor(
        private archivosService: ArchivosService,
        private modal: NzModalService,
        private archivoModalService: ArchivoModalService
    ) {}

    @Input() archivo: Archivo;

    onStarClick(event: Event): void {
        event.stopPropagation();
        this.archivo.favorito = !this.archivo.favorito;
        this.archivosService.setFavorito(
            this.archivo.id,
            this.archivo.favorito
        );
    }

    onMenuClick(event: Event): void {
        event.stopPropagation();
    }

    onFileClick(): void {
        this.archivoModalService.setArchivo(this.archivo);
        this.modal.create({
            nzTitle: 'Detalles del Archivo',
            nzContent: ArchivoCompletoComponent,
            nzFooter: null,
            nzWidth: '80%',
        });
    }

    onAddVersionClick(): void {
        this.modal.create({
            nzTitle: 'Agregar Versión',
            nzContent: CrearVersionComponent,
            nzFooter: null,
            nzWidth: '70%',
        });
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
