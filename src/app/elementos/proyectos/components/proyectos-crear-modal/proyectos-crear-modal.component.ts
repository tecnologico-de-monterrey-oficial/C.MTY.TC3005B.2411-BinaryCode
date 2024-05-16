import { Component } from '@angular/core';

@Component({
    selector: 'app-proyectos-crear-modal',
    templateUrl: './proyectos-crear-modal.component.html',
    styleUrls: ['./proyectos-crear-modal.component.css'],
})
export class ProyectosCrearModalComponent {
    nombreProyecto: string = ''; // Propiedad enlazada al input 'Nombre del proyecto'
    descripcion: string = ''; // Propiedad enlazada al textarea 'descripcion'
    colorSeleccionado: string | null = null;

    validarDatos(): void {
        // Validación de los datos ingresados
        if (
            this.nombreProyecto.trim() === '' ||
            this.colorSeleccionado === null ||
            this.descripcion.trim() === ''
        ) {
            alert('Por favor completa todos los campos.');
            return; // Detiene la ejecución si hay campos vacíos
        } else {
            alert('Proyecto guardado.');
        }

        this.crearProyecto();
    }

    crearProyecto(): void {
        console.log('Datos válidos, creando proyecto...');
    }

    seleccionarColor(color: string): void {
        this.colorSeleccionado =
            this.colorSeleccionado === color ? null : color;
    }
}
