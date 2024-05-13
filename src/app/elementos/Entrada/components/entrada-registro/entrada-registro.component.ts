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
    selector: 'app-entrada-registro',
    templateUrl: './entrada-registro.component.html',
    styleUrls: ['./entrada-registro.component.css'],
})
export class EntradaRegistroComponent implements OnInit {
    registroForm: FormGroup;
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

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.colorSeleccionado =
            this.colores[Math.floor(Math.random() * this.colores.length)];

        this.registroForm = this.fb.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            color: [this.colorSeleccionado, Validators.required],
        });
    }

    seleccionarColor(color: string): void {
        this.colorSeleccionado =
            this.colorSeleccionado === color ? null : color;
        this.registroForm.patchValue({ color: this.colorSeleccionado });
    }

    onSubmit(): void {
        if (this.registroForm.valid) {
            console.log('Form values:', this.registroForm.value);
            // Aqui poner lo de la Enviar los datos a la base de datos
        }
    }
}
