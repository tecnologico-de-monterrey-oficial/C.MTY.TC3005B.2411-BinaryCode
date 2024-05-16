import { Component } from '@angular/core';

@Component({
    selector: 'app-unidades-crear-modal',
    templateUrl: './unidades-crear-modal.component.html',
    styleUrls: ['./unidades-crear-modal.component.css'],
})
export class UnidadesCrearModalComponent {
    nombreUnidad: string = ''; // Propiedad enlazada al input 'nombre de la unidad'
    colorSeleccionado: string | null = null;

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

    seleccionarColor(color: string): void {
        this.colorSeleccionado =
            this.colorSeleccionado === color ? null : color;
    }
}
