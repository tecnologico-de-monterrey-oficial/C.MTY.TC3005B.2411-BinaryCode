// crear-version.component.ts
import { Component } from '@angular/core'; // OnInit

@Component({
    selector: 'app-crear-version',
    templateUrl: './crear-version.component.html',
    styleUrls: ['./crear-version.component.css'],
})
export class CrearVersionComponent {
    //implements OnInit
    filePreview: string | ArrayBuffer | null = null;
    isImage: boolean = false;
    isDocument: boolean = false;
    isVideo: boolean = false;
    isOther: boolean = false;
    fileName: string = '';
    versionName: string = '';

    //constructor() {}

    //ngOnInit(): void {}

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
        if (this.versionName.trim() === '') {
            alert('Por favor ingresa un nombre para la versión.');
            return;
        }
        console.log('Versión agregada:', this.versionName);
    }
}
