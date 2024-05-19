import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    Validators,
} from '@angular/forms';

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
} from '../../../../assets/colores';

@Component({
    selector: 'app-proyectos-crear-modal',
    templateUrl: './proyectos-crear-modal.component.html',
    styleUrl: './proyectos-crear-modal.component.css',
})
export class ProyectosCrearModalComponent implements OnInit {
    @Output() cancelModal = new EventEmitter();

    validateForm: FormGroup<{
        nombreProyecto: FormControl<string>;
        descripcion: FormControl<string>;
    }>;

    colorSeleccionado: string;

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

    ngOnInit(): void {
        this.colorSeleccionado =
            this.colores[Math.floor(Math.random() * this.colores.length)];

        this.validateForm = this.fb.group({
            nombreProyecto: ['', [Validators.required]],
            descripcion: ['', [Validators.required]],
        });
    }

    seleccionarColor(color: string): void {
        this.colorSeleccionado =
            this.colorSeleccionado === color ? null : color;
    }

    handleCancel(): void {
        this.cancelModal.emit();
    }

    crearProyecto(): void {
        if (this.validateForm.valid) {
            console.log('Proyecto creado?', this.validateForm.value);
            this.cancelModal.emit();
        } else {
            console.log('Formulario inválido');
            Object.values(this.validateForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
        }
    }

    constructor(private fb: NonNullableFormBuilder) {}
}
