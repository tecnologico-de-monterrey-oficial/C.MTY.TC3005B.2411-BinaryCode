import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.services';
import { Router } from '@angular/router';

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
} from '../../../assets/colores';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
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
    hide = true;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.colorSeleccionado =
            this.colores[Math.floor(Math.random() * this.colores.length)];

        this.registroForm = this.fb.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            color: [this.colorSeleccionado, Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    toggleHide(): void {
        this.hide = !this.hide;
    }

    seleccionarColor(color: string): void {
        this.colorSeleccionado =
            this.colorSeleccionado === color ? null : color;
        this.registroForm.patchValue({ color: this.colorSeleccionado });
    }

    onSubmit(): void {
        if (this.registroForm.valid) {
            const { first_name, last_name, email, password, color } =
                this.registroForm.value;
            console.log(first_name, last_name, email, password, color);
            this.authService
                .register(first_name, last_name, email, password, color)
                .subscribe({
                    next: () => {
                        this.router.navigate(['/proyectos']);
                    },
                    error: err => {
                        console.error('Registro fallido', err);
                    },
                });
        } else {
            console.log('Formulario no válido');

        }
    }
}
