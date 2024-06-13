// crear-contenidos.component.ts
import { Component, OnInit } from '@angular/core';
import { ArchivoCompartidoService } from '../../../../servicios/archivo-compartido.service';
import {
    Archivo,
    ArchivoPost,
    version,
} from '../../../../modelos/archivo.model';
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
    version: version = { nombre: '', archivo: null, iteracion: 1 };
    versionesLista: version[] = [];
    isEditing: boolean = false;

    constructor(
        private archivoCompartidoService: ArchivoCompartidoService,
        private location: Location,
        private archivosService: ArchivosService
    ) {
        const path: string = this.location.path();
        const segments: string[] = path.split('/');
        const index: number = segments.findIndex(seg => seg === 'unidades');
        this.unidadId = segments[index + 1];
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
        this.version.nombre = this.fileName;
        this.versionesLista.push(this.version);
        const archivo: ArchivoPost = {
            nombre: this.nombreArchivo,
            descripcion: this.descripcion,
            fecha: this.formatDate(new Date()),
            terminacion: this.getFileExtension(this.fileName),
            id_apartado: this.unidadId,
            id_usuario: 1,
            etiquetas: this.etiquetas,
            versiones: this.versionesLista,
        };
        console.log('Datos válidos, subiendo archivo...');
        console.log(archivo);
        this.archivosService.postArchivo(archivo);
        this.versionesLista = this.versionesLista.filter(
            t => t !== this.version
        );
    }

    formatDate(date: Date): string {
        const day: string = date.getDate().toString().padStart(2, '0');
        const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
        const year: number = date.getFullYear();
        return `${year}-${month}-${day}`;
    }

    fileChanged(event: Event): void {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            const file: File = input.files[0];
            this.fileName = file.name;
            this.version.nombre = this.fileName;

            const reader: FileReader = new FileReader();
            reader.onloadend = (): void => {
                if (reader.readyState === FileReader.DONE) {
                    // Verificar que la lectura esté completa
                    const base64: string = reader.result as string;
                    if (base64) {
                        this.filePreview = base64;
                        this.version.archivo = base64;
                        this.isImage = file.type.includes('image');
                        this.isDocument = file.type.includes('application/pdf');
                        this.isVideo = file.type.includes('video');
                        this.isOther =
                            !this.isImage && !this.isDocument && !this.isVideo;
                    } else {
                        console.error(
                            'No se pudo leer el archivo o la conversión a base64 falló.'
                        );
                    }
                }
            };
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            reader.onerror = error => {
                console.error('Error al leer el archivo:', error);
            };
            reader.readAsDataURL(file);
        } else {
            console.error(
                'No hay archivo seleccionado o el archivo es inaccesible.'
            );
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
