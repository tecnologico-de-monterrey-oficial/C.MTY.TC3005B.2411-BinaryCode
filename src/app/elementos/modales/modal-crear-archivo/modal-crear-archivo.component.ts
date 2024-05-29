import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Archivo } from '../../../modelos';

type sendCrearArchivo = {
    archivo: Archivo;
    funcion: () => void;
};

@Component({
    selector: 'app-modal-crear-archivo',
    templateUrl: './modal-crear-archivo.component.html',
    styleUrl: './modal-crear-archivo.component.css',
})
export class ModalCrearArchivoComponent {
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
