import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Importaciones de los colores desde el archivo correspondiente
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
    selector: 'app-crear-carpeta',
    templateUrl: './crear-carpeta.component.html',
    styleUrls: ['./crear-carpeta.component.css'],
})
export class CrearCarpetaComponent implements OnInit {
    unidadForm: FormGroup;
    colorSeleccionado: string;
    colores: string[] = [
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
    ];

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.iniciarFormulario();
        console.log('Colores disponibles:', this.colores); // Añade este logging
    }

    iniciarFormulario(): void {
        // Inicializa el formulario usando formBuilder
        this.unidadForm = this.formBuilder.group({
            nombreCarpeta: ['', Validators.required],
            color: [this.colores[0], Validators.required],
        });

        // Establece el color predeterminado en la variable para el binding con la clase CSS
        this.colorSeleccionado = this.colores[0];
    }

    seleccionarColor(color: string): void {
        // Establece el color seleccionado y actualiza el valor del formulario
        this.colorSeleccionado = color;
        this.unidadForm.patchValue({ color: color });
    }
}
