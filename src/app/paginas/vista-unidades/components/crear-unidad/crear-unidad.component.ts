import { Component } from '@angular/core';

@Component({
    selector: 'app-crear-unidad',
    templateUrl: './crear-unidad.component.html',
    styleUrls: ['./crear-unidad.component.css'],
})
export class CrearUnidadComponent {
    nombreUnidad: string = ''; // Propiedad enlazada al input 'nombre de la unidad'
    colorSeleccionado: string | null = null;

    constructor() {}

    validarDatos(): void {
        // Validación de los datos ingresados
        if (
            this.nombreUnidad.trim() === '' ||
            this.colorSeleccionado === null
        ) {
            alert('Por favor completa todos los campos.');
            return; // Detiene la ejecución si hay campos vacíos
        }
        this.crearUnidad();
    }

    crearUnidad(): void {
        console.log('Datos válidos, creando unidad...');
    }

    seleccionarColor(color: string) {
        this.colorSeleccionado =
            this.colorSeleccionado === color ? null : color;
    }
}
