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
import { AuthService } from '../../../../servicios/auth.services';
import { Usuario } from '../../../../modelos/usuario.model'; // Asegúrate de que 'Usuario' está importado desde el archivo correcto
import { NzModalRef } from 'ng-zorro-antd/modal';
import { firstValueFrom } from 'rxjs';

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

    nombreArchivoError: string | null = null;
    descripcionError: string | null = null;
    nombreVersionError: string | null = null;
    etiquetasError: string | null = null;

    constructor(
        private archivoCompartidoService: ArchivoCompartidoService,
        private location: Location,
        private archivosService: ArchivosService,
        private authService: AuthService,
        private modalRef: NzModalRef // Inyectar el servicio NzModalRef
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
                    this.etiquetas = archivo.etiquetas;
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
        this.resetErrors();
    }

    resetErrors(): void {
        this.nombreArchivoError = null;
        this.descripcionError = null;
        this.nombreVersionError = null;
        this.etiquetasError = null;
    }

    validarDatos(): void {
        this.resetErrors();

        if (!this.nombreArchivo || this.nombreArchivo.trim().length === 0) {
            this.nombreArchivoError = 'El nombre del archivo es obligatorio.';
        } else if (this.nombreArchivo.trim().length > 32) {
            this.nombreArchivoError =
                'El nombre del archivo debe tener máximo 32 caracteres.';
        }

        if (!this.descripcion || this.descripcion.trim().length === 0) {
            this.descripcionError = 'La descripción es obligatoria.';
        } else if (this.descripcion.trim().length > 150) {
            this.descripcionError =
                'La descripción debe tener máximo 150 caracteres.';
        }

        if (!this.nombreVersion || this.nombreVersion.trim().length === 0) {
            this.nombreVersionError = 'El nombre de la versión es obligatorio.';
        } else if (this.nombreVersion.trim().length > 15) {
            this.nombreVersionError =
                'El nombre de la versión debe tener máximo 15 caracteres.';
        }

        if (this.etiquetas.length > 5) {
            this.etiquetasError = 'No puedes añadir más de 5 etiquetas.';
        }

        if (
            !this.nombreArchivoError &&
            !this.descripcionError &&
            !this.nombreVersionError &&
            !this.etiquetasError
        ) {
            this.subirArchivo();
        }
    }

    async subirArchivo(): Promise<void> {
        this.version.nombre = this.fileName;
        this.versionesLista.push(this.version);
        const usuario: Usuario = await firstValueFrom(
            this.authService.getUsuarioAutenticado()
        );
        const archivo: ArchivoPost = {
            nombre: this.nombreArchivo,
            descripcion: this.descripcion,
            fecha: this.formatDate(new Date()),
            terminacion: this.getFileExtension(this.fileName),
            id_apartado: this.unidadId,
            id_usuario: usuario.id,
            etiquetas: this.etiquetas,
            versiones: this.versionesLista,
        };

        console.log('Datos válidos, subiendo archivo...');
        console.log(archivo);
        this.archivosService.postArchivo(archivo);
        this.versionesLista = this.versionesLista.filter(
            t => t !== this.version
        );
        this.modalRef.close();
        setTimeout(function () {
            location.reload();
        }, 750); // Cerrar el modal
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
            reader.onerror = (
                error: ErrorEvent | ProgressEvent<FileReader>
            ): void => {
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
            if (this.etiquetas.length < 5) {
                const nuevaEtiqueta: EtiquetaArelacional = {
                    nombre: this.tagInput.trim(),
                    color: '#00304E',
                };
                this.etiquetas.push(nuevaEtiqueta);
                this.tagInput = '';
            } else {
                this.etiquetasError = 'No puedes añadir más de 5 etiquetas.';
            }
        }
    }

    eliminarTag(etiqueta: EtiquetaArelacional): void {
        this.etiquetas = this.etiquetas.filter(t => t !== etiqueta);
        this.etiquetasError = null;
    }

    getFileExtension(fileName: string): string {
        const parts: string[] = fileName.split('.');
        return parts.length > 1 ? parts.pop() || '' : '';
    }

    validateNombreArchivo(): void {
        if (!this.nombreArchivo || this.nombreArchivo.trim().length === 0) {
            this.nombreArchivoError = 'El nombre del archivo es obligatorio.';
        } else if (this.nombreArchivo.trim().length > 32) {
            this.nombreArchivoError =
                'El nombre del archivo debe tener máximo 32 caracteres.';
        } else {
            this.nombreArchivoError = null;
        }
    }

    validateDescripcion(): void {
        if (!this.descripcion || this.descripcion.trim().length === 0) {
            this.descripcionError = 'La descripción es obligatoria.';
        } else if (this.descripcion.trim().length > 150) {
            this.descripcionError =
                'La descripción debe tener máximo 150 caracteres.';
        } else {
            this.descripcionError = null;
        }
    }

    validateNombreVersion(): void {
        if (!this.nombreVersion || this.nombreVersion.trim().length === 0) {
            this.nombreVersionError = 'El nombre de la versión es obligatorio.';
        } else if (this.nombreVersion.trim().length > 15) {
            this.nombreVersionError =
                'El nombre de la versión debe tener máximo 15 caracteres.';
        } else {
            this.nombreVersionError = null;
        }
    }
}
