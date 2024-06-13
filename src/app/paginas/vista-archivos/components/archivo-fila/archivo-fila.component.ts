// archivo-fila.component.ts
import { Component, Input } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ArchivoCompletoComponent } from '../archivo-completo/archivo-completo.component';
import { CrearVersionComponent } from '../crear-version/crear-version.component';
import { CrearContenidosComponent } from '../crear-contenidos/crear-contenidos.component';
import { Archivo } from '../../../../modelos/archivo.model';
import { ArchivoModalService } from '../../../../servicios/archivo-modal.service';
import { ArchivoCompartidoService } from '../../../../servicios/archivo-compartido.service'; // Importar el nuevo servicio
import { getIcono } from '../../../../modelos/icono.model';
import { FavoritosService } from '../../../../servicios/favoritos.services';
import { ArchivosService } from '../../../../servicios/archivo.services';

@Component({
    selector: 'app-archivo-fila',
    templateUrl: './archivo-fila.component.html',
    styleUrls: ['./archivo-fila.component.css'],
})
export class ArchivoFilaComponent {
    constructor(
        private modal: NzModalService,
        private archivoModalService: ArchivoModalService,
        private favoritosService: FavoritosService,
        private archivoCompartidoService: ArchivoCompartidoService, // Inyectar el servicio,
        private archivosService: ArchivosService // Inyectar el servicio
    ) {}

    @Input() archivo: Archivo;

    isVisible = false;
    isConfirmLoading = false;

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        this.isConfirmLoading = true;
        this.archivosService.eliminarArchivo(this.archivo.id).subscribe(
            response => {
                console.log('Archivo eliminado:', response);
                this.isVisible = false;
                this.isConfirmLoading = false;
                // Lógica para actualizar la vista después de la eliminación
                setTimeout(function () {
                    location.reload();
                }, 50);
            },
            error => {
                console.error('Error eliminando el archivo:', error);
                this.isConfirmLoading = false;
            }
        );
    }

    handleCancel(): void {
        this.isVisible = false;
    }

    onStarClick(event: Event): void {
        event.stopPropagation();
        if (this.archivo && this.archivo.id) {
            this.favoritosService.toggleFavorito(this.archivo.id).subscribe(
                response => {
                    this.archivo.favorito = response.favorito;
                },
                error => {
                    console.error('Error toggling favorito:', error);
                }
            );
        } else {
            console.error('Archivo o archivo.id no está definido');
        }
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

    onEditClick(): void {
        this.archivoCompartidoService.setArchivo(this.archivo, true);
        this.modal.create({
            nzTitle: 'Editar Archivo',
            nzContent: CrearContenidosComponent,
            nzFooter: null,
            nzWidth: '70%',
        });
    }

    formatDate(dateString: string): string {
        if (!dateString) {
            return 'Fecha no disponible'; // Retorna un mensaje predeterminado si la entrada no es válida
        }

        const parts: string[] = dateString.split('-');
        if (parts.length < 3) {
            return 'Formato de fecha incorrecto'; // Retorna un mensaje si el formato no es correcto
        }

        const [day, month, year] = parts;
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
