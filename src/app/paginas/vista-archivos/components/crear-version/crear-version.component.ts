import { Component } from '@angular/core'; // OnInit
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-crear-version',
    templateUrl: './crear-version.component.html',
    styleUrls: ['./crear-version.component.css'],
})
export class CrearVersionComponent {
    versionForm: FormGroup;
    filePreview: string | ArrayBuffer | null = null;
    isImage: boolean = false;
    isDocument: boolean = false;
    isVideo: boolean = false;
    isOther: boolean = false;
    fileName: string = '';

    constructor(private fb: FormBuilder) {
        this.versionForm = this.fb.group({
            versionName: ['', [Validators.required, Validators.maxLength(32)]],
            file: [null, Validators.required],
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
        this.versionForm.patchValue({ file: file });
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
        console.log('Versión agregada:', this.versionForm.value.versionName);
    }
}
