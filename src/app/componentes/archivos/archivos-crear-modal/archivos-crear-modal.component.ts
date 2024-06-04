import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Archivo } from '../../../modelos';

type sendCrearArchivo = {
    archivo: Archivo;
    terminar: () => void;
};

@Component({
    selector: 'app-archivos-crear-modal',
    templateUrl: './archivos-crear-modal.component.html',
    styleUrl: './archivos-crear-modal.component.css',
})
export class ArchivosCrearModalComponent {
    @Output() cancelModal = new EventEmitter();
    @Output() crearArchivoImportada = new EventEmitter<sendCrearArchivo>();
    @Output() actualizarArchivoImportada = new EventEmitter<sendCrearArchivo>();

    @Input() archivoOriginal: Archivo;
    @Input() unidadId: number;

    validateForm: FormGroup<{
        id: FormControl<number>;
        nombreArchivo: FormControl<string>;
        etiquetas: FormControl<string>;
    }>;

    imagenControl: string;

    archivoEnProceso: Archivo;
    isLoading: boolean;
}
