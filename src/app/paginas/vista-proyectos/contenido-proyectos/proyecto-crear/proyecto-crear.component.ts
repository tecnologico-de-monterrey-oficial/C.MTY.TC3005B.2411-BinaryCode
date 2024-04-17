import { Component } from "@angular/core";

@Component({
    selector: 'app-proyecto-crear',
    templateUrl: './proyecto-crear.component.html',
    styleUrls: ['./proyecto-crear.component.css']
})

export class ProyectoCrearComponent {
    nombreProyecto: string = ''; // Propiedad enlazada al input 'Nombre del proyecto'
    descripcion: string = ''; // Propiedad enlazada al textarea 'descripcion'
    colorSeleccionado: string | null = null;

    constructor() {}

    validarDatos(): void {
        // Validación de los datos ingresados
        if (this.nombreProyecto.trim() === '' || this.colorSeleccionado === null || this.descripcion.trim() === '') {
            alert('Por favor completa todos los campos.');
            return; // Detiene la ejecución si hay campos vacíos
        }
        else{
            alert('Proyecto guardado.');
        }

        this.crearProyecto();
    }

    crearProyecto(): void {
        console.log('Datos válidos, creando proyecto...');
    }

    seleccionarColor(color: string) {
        this.colorSeleccionado = this.colorSeleccionado === color ? null : color;
    }
}
