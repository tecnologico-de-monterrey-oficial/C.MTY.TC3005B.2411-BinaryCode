import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArchivoCompartidoService } from '../../../../servicios/archivo-compartido.service';
import { Archivo } from '../../../../modelos/archivo.model';

@Component({
    selector: 'app-crear-contenidos',
    templateUrl: './crear-contenidos.component.html',
    styleUrls: ['./crear-contenidos.component.css'],
})
export class CrearContenidosComponent implements OnInit {
    contenidoForm: FormGroup;
    filePreview: string | ArrayBuffer | null = null;
    isImage: boolean = false;
    isDocument: boolean = false;
    isVideo: boolean = false;
    isOther: boolean = false;
    fileName: string = '';
    isEditing: boolean = false;

    constructor(
        private fb: FormBuilder,
        private archivoCompartidoService: ArchivoCompartidoService
    ) {
        this.contenidoForm = this.fb.group({
            nombreArchivo: [
                '',
                [Validators.required, Validators.maxLength(32)],
            ],
            descripcion: ['', [Validators.required, Validators.maxLength(150)]],
            nombreVersion: [
                '',
                [Validators.required, Validators.maxLength(32)],
            ],
            file: [null, Validators.required],
            tagInput: [''],
            tags: [[]],
        });
    }

    ngOnInit(): void {
        this.archivoCompartidoService
            .getArchivo()
            .subscribe((archivo: Archivo | null) => {
                if (archivo) {
                    this.isEditing = true;
                    this.contenidoForm.patchValue({
                        nombreArchivo: archivo.nombre,
                        descripcion: archivo.descripcion,
                        tags: archivo.etiquetas.map(
                            etiqueta => etiqueta.nombre
                        ),
                    });
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
        this.contenidoForm.reset({
            nombreArchivo: '',
            descripcion: '',
            nombreVersion: '',
            file: null,
            tagInput: '',
            tags: [],
        });
        this.filePreview = null;
        this.isImage = false;
        this.isDocument = false;
        this.isVideo = false;
        this.isOther = false;
        this.fileName = '';
    }

    validarDatos(): void {
        if (this.contenidoForm.invalid) {
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
        this.contenidoForm.patchValue({ file: file });
    }

    resetFileFlags(): void {
        this.isImage = false;
        this.isDocument = false;
        this.isVideo = false;
        this.isOther = false;
    }

    agregarTag(): void {
        const tagInputValue: string = this.contenidoForm.value.tagInput.trim();
        if (tagInputValue !== '') {
            const tags: string[] = this.contenidoForm.value.tags;
            tags.push(tagInputValue);
            this.contenidoForm.patchValue({ tags: tags, tagInput: '' });
        }
    }

    eliminarTag(tag: string): void {
        const tags: string[] = this.contenidoForm.value.tags.filter(
            (t: string) => t !== tag
        );
        this.contenidoForm.patchValue({ tags: tags });
    }
}
