import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
    tarjeta_amarillo,
    tarjeta_amarillo_claro,
    tarjeta_amarillo_fuerte,
    tarjeta_azul_claro,
    tarjeta_azul_fuerte,
    tarjeta_azul_medio,
    tarjeta_morado,
    tarjeta_morado_claro,
    tarjeta_morado_fuerte,
    tarjeta_rojo_claro,
    tarjeta_rojo_fuerte,
    tarjeta_rojo_medio,
    tarjeta_rosa,
    tarjeta_rosa_claro,
    tarjeta_rosa_fuerte,
    tarjeta_verde_claro,
    tarjeta_verde_fuerte,
    tarjeta_verde_medio,
} from '../../../../../assets/colores';

@Component({
    selector: 'app-proyecto-crear',
    templateUrl: './proyecto-crear.component.html',
    styleUrls: ['./proyecto-crear.component.css'],
})
export class ProyectoCrearComponent implements OnInit {
    proyectoForm: FormGroup;
    colores: string[] = [
        tarjeta_azul_fuerte,
        tarjeta_azul_medio,
        tarjeta_azul_claro,
        tarjeta_rojo_fuerte,
        tarjeta_rojo_medio,
        tarjeta_rojo_claro,
        tarjeta_morado_fuerte,
        tarjeta_morado,
        tarjeta_morado_claro,
        tarjeta_verde_fuerte,
        tarjeta_verde_medio,
        tarjeta_verde_claro,
        tarjeta_amarillo_fuerte,
        tarjeta_amarillo,
        tarjeta_amarillo_claro,
        tarjeta_rosa_fuerte,
        tarjeta_rosa,
        tarjeta_rosa_claro,
    ];
    colorSeleccionado: string;
    imagenURL: string | ArrayBuffer | null = null;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.colorSeleccionado =
            this.colores[Math.floor(Math.random() * this.colores.length)];

        this.proyectoForm = this.fb.group({
            nombreProyecto: ['', Validators.required],
            descripcion: ['', Validators.required],
            color: [this.colorSeleccionado, Validators.required],
            imagen: [null, Validators.required],
        });
    }

    seleccionarColor(color: string): void {
        this.colorSeleccionado =
            this.colorSeleccionado === color ? null : color;
        this.proyectoForm.patchValue({ color: this.colorSeleccionado });
    }

    onFileSelected(event: Event): void {
        // eslint-disable-next-line @typescript-eslint/typedef
        const file = (event.target as HTMLInputElement).files[0];
        if (file) {
            // eslint-disable-next-line @typescript-eslint/typedef
            const reader = new FileReader();
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            reader.onload = e => {
                this.imagenURL = e.target.result;
                this.proyectoForm.patchValue({ imagen: this.imagenURL });
            };
            reader.readAsDataURL(file);
        }
    }

    validarDatos(): void {
        if (this.proyectoForm.valid) {
            console.log('Datos válidos, creando proyecto...');
            this.crearProyecto();
        } else {
            alert('Por favor completa todos los campos.');
        }
    }

    crearProyecto(): void {
        // eslint-disable-next-line @typescript-eslint/typedef
        const dataproyecto = this.proyectoForm.value;
        console.log('Datos del Proyecto:', dataproyecto);
        // Enviar datos a la base de datos
        alert('Proyecto guardado con éxito.');
    }
}
