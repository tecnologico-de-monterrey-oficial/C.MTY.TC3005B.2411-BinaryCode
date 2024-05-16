import { Component } from '@angular/core';

@Component({
    selector: 'app-archivos-crear-modal',
    templateUrl: './archivos-crear-modal.component.html',
    styleUrls: ['./archivos-crear-modal.component.css'],
})
export class ArchivosCrearModalComponent {
    agregar: string = ''; // Propiedad enlazada al input 'agregar'
    nombreArchivo: string = ''; // Propiedad enlazada al input 'nombre_archivo'
    descripcion: string = ''; // Propiedad enlazada al textarea 'descripcion'

    validarDatos(): void {
        // Validación de los datos ingresados
        if (
            this.agregar.trim() === '' ||
            this.nombreArchivo.trim() === '' ||
            this.descripcion.trim() === ''
        ) {
            alert('Por favor completa todos los campos.');
            return; // Detiene la ejecución si hay campos vacíos
        }

        // Si los datos son válidos, realizar la acción correspondiente
        this.subirArchivo();
    }

    subirArchivo(): void {
        // Aquí puedes escribir la lógica para subir el archivo al servidor
        console.log('Datos válidos, subiendo archivo...');
    }
}
