import { Component } from '@angular/core'; // Elimina OnInit si no lo usas
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
    selector: 'app-crear-contenidos',
    templateUrl: './crear-contenidos.component.html',
    styleUrls: ['./crear-contenidos.component.css'],
})
export class CrearContenidosComponent {
    contenidoForm: FormGroup;
    archivoURL: string | ArrayBuffer | null = null;
    nombreArchivo: string | null = null;

    constructor(
        private fb: FormBuilder,
        private modalRef: NzModalRef
    ) {
        this.contenidoForm = this.fb.group({
            tituloContenido: ['', Validators.required],
            descripcion: ['', Validators.required],
            archivo: [null, Validators.required],
        });
    }

    onFileSelected(event: Event): void {
        const element: HTMLInputElement =
            event.currentTarget as HTMLInputElement;
        const file: File | null = element.files ? element.files[0] : null;
        if (file) {
            this.nombreArchivo = file.name;
            const reader: FileReader = new FileReader();
            reader.onload = (e): void => {
                this.archivoURL = e.target.result;
                this.contenidoForm.patchValue({ archivo: this.archivoURL });
            };
            reader.readAsDataURL(file);
        }
    }

    validarDatos(): void {
        if (this.contenidoForm.valid) {
            console.log('Contenido a crear:', this.contenidoForm.value);
            alert('El Contenido ha sido creado exitosamente');
            // Debes implementar la lógica para guardar el contenido
            this.cerrarModal();
        } else {
            alert('Por favor completa todos los campos requeridos.');
        }
    }

    cerrarModal(): void {
        this.modalRef.close();
    }
}
