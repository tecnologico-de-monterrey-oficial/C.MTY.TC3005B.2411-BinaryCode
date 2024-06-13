import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
    selector: 'app-crear-version',
    templateUrl: './crear-version.component.html',
    styleUrls: ['./crear-version.component.css'],
})
export class CrearVersionComponent implements OnInit {
    filePreview: string | ArrayBuffer | null = null;
    isImage: boolean = false;
    isDocument: boolean = false;
    isVideo: boolean = false;
    isOther: boolean = false;
    fileName: string = '';
    versionForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private modalRef: NzModalRef
    ) {}

    ngOnInit(): void {
        this.versionForm = this.fb.group({
            versionName: ['', [Validators.required, Validators.maxLength(15)]],
        });
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

    agregarVersion(): void {
        if (this.versionForm.invalid) {
            alert('Por favor completa todos los campos.');
            return;
        }

        const versionName: string = this.versionForm.get('versionName')?.value;
        console.log('Versión agregada:', versionName);
        this.modalRef.close(); // Cierra el modal después de una operación exitosa
    }
}
