import { Component } from '@angular/core';

@Component({
    selector: 'app-crear-contenidos',
    templateUrl: './crear-contenidos.component.html',
    styleUrls: ['./crear-contenidos.component.css'],
})
export class CrearContenidosComponent {
    nombreArchivo: string = '';
    descripcion: string = '';
    filePreview: string | ArrayBuffer | null = null;
    isImage: boolean = false;
    isDocument: boolean = false;
    isVideo: boolean = false;
    isOther: boolean = false;
    fileName: string = '';
    tagInput: string = '';
    tags: string[] = [];

    validarDatos(): void {
        if (
            this.nombreArchivo.trim() === '' ||
            this.descripcion.trim() === ''
        ) {
            alert('Por favor completa todos los campos.');
            return;
        }
        this.subirArchivo();
    }

    subirArchivo(): void {
        console.log('Datos válidos, subiendo archivo...');
    }

    fileChanged(event: Event): void {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        const file: File | null = input.files ? input.files[0] : null;
        if (!file) return;

        this.resetFileFlags();
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
            this.tags.push(this.tagInput.trim());
            this.tagInput = '';
        }
    }

    eliminarTag(tag: string): void {
        this.tags = this.tags.filter(t => t !== tag);
    }
}
