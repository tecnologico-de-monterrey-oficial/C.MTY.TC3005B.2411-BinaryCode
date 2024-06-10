// crear-contenidos.component.ts
import { Component, OnInit } from '@angular/core';
import { ArchivoCompartidoService } from '../../../../servicios/archivo-compartido.service';
import { Archivo, ArchivoPost } from '../../../../modelos/archivo.model';
import { Location } from '@angular/common';
import { ArchivosService } from '../../../../servicios/archivo.services';
import { EtiquetaArelacional } from '../../../../modelos/etiqueta.model';

@Component({
    selector: 'app-crear-contenidos',
    templateUrl: './crear-contenidos.component.html',
    styleUrls: ['./crear-contenidos.component.css'],
})
export class CrearContenidosComponent implements OnInit {
    unidadId: string;
    nombreArchivo: string = '';
    descripcion: string = '';
    nombreVersion: string = '';
    filePreview: string | ArrayBuffer | null = null;
    isImage: boolean = false;
    isDocument: boolean = false;
    isVideo: boolean = false;
    isOther: boolean = false;
    fileName: string = '';
    tagInput: string = '';
    etiquetas: EtiquetaArelacional[] = [];
    isEditing: boolean = false; // Nueva propiedad para indicar si se está editando

    constructor(
        private archivoCompartidoService: ArchivoCompartidoService,
        private location: Location,
        private archivosService: ArchivosService
    ) {
        const path: string = this.location.path();
        const segments: string[] = path.split('/');
        const index: number = segments.findIndex(seg => seg === 'unidades');
        this.unidadId = segments[index + 1];
        console.log(this.unidadId);
    }

    ngOnInit(): void {
        this.archivoCompartidoService
            .getArchivo()
            .subscribe((archivo: Archivo | null) => {
                if (archivo) {
                    this.nombreArchivo = archivo.nombre;
                    this.descripcion = archivo.descripcion;
                    // Asume que archivo.etiquetas ya es de tipo EtiquetaArelacional[]
                    this.etiquetas = archivo.etiquetas; // Asigna directamente si ya es el tipo correcto
                } else {
                    this.resetForm();
                }
            });

        this.archivoCompartidoService
            .isEditing()
            .subscribe((isEditing: boolean) => {
                this.isEditing = isEditing;
            });
    }

    resetForm(): void {
        this.nombreArchivo = '';
        this.descripcion = '';
        this.nombreVersion = '';
        this.filePreview = null;
        this.isImage = false;
        this.isDocument = false;
        this.isVideo = false;
        this.isOther = false;
        this.fileName = '';
        this.tagInput = '';
        this.etiquetas = [];
    }

    validarDatos(): void {
        if (
            this.nombreArchivo.trim() === '' ||
            this.descripcion.trim() === '' ||
            this.nombreVersion.trim() === ''
        ) {
            alert('Por favor completa todos los campos.');
            return;
        }
        this.subirArchivo();
    }

    subirArchivo(): void {
        const archivo: ArchivoPost = {
            nombre: this.nombreArchivo,
            descripcion: this.descripcion,
            fecha: this.formatDate(new Date()),
            terminacion: this.getFileExtension(this.fileName),
            id_apartado: this.unidadId,
            id_usuario: 1,
            etiquetas: this.etiquetas,
        };
        console.log('Datos válidos, subiendo archivo...');
        console.log(archivo);
        this.archivosService.postArchivo(archivo);
    }

    formatDate(date: Date): string {
        const day: string = date.getDate().toString().padStart(2, '0');
        const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
        const year: number = date.getFullYear();
        return `${year}-${month}-${day}`; // Cambia el formato a YYYY-MM-DD
    }

    fileChanged(event: Event): void {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        const file: File | null = input.files ? input.files[0] : null;
        if (!file) return;
        this.fileName = file.name;
        const reader: FileReader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>): void => {
            const result: string | ArrayBuffer | null = e.target?.result;
            this.filePreview = result;
            this.isImage = file.type.includes('image');
            this.isDocument = file.type.includes('application/pdf');
            this.isVideo = file.type.includes('video');
            this.isOther = !this.isImage && !this.isDocument && !this.isVideo;
        };
        if (file.type.includes('image') || file.type.includes('video')) {
            reader.readAsDataURL(file);
        } else {
            this.filePreview = null;
        }
    }

    resetFileFlags(): void {
        this.isImage = false;
        this.isDocument = false;
        this.isVideo = false;
        this.isOther = false;
    }

    agregarTag(): void {
        if (this.tagInput.trim() !== '') {
            const nuevaEtiqueta: EtiquetaArelacional = {
                nombre: this.tagInput.trim(),
                color: '#00304E',
            };
            this.etiquetas.push(nuevaEtiqueta);
            this.tagInput = '';
        }
    }

    eliminarTag(etiqueta: EtiquetaArelacional): void {
        this.etiquetas = this.etiquetas.filter(t => t !== etiqueta);
    }

    getFileExtension(fileName: string): string {
        const parts: string[] = fileName.split('.');
        return parts.length > 1 ? parts.pop() || '' : '';
    }
}
