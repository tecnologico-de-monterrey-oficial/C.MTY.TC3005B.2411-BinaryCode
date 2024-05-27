import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { paletaColores } from '../../../../assets/colores';
import { Usuario } from '../../../modelos/usuario.model';

@Component({
    selector: 'app-entrada-registro',
    templateUrl: './entrada-registro.component.html',
    styleUrls: ['./entrada-registro.component.css'],
})
export class EntradaRegistroComponent implements OnInit {
    usuario: Usuario;
    colores: string[] = paletaColores;
    isLoading: boolean;

    registroForm: FormGroup<{
        nombre: FormControl<string>;
        apellido: FormControl<string>;
        colorSeleccionado: FormControl<string>;
        imagen: FormControl<string>;
    }>;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.registroForm = this.fb.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            colorSeleccionado: [
                this.colores[Math.floor(Math.random() * this.colores.length)],
                Validators.required,
            ],
            imagen: [''],
        });
    }

    seleccionarColor(color: string): void {
        this.registroForm.controls.colorSeleccionado.setValue(color);
    }

    onSubmit(): void {
        this.isLoading = true;
        if (this.registroForm.valid) {
            this.usuario = {
                nombre:
                    this.registroForm.controls.nombre.value +
                    ' ' +
                    this.registroForm.controls.apellido.value,
                color: this.registroForm.controls.colorSeleccionado.value,
                imagenUrl: this.registroForm.controls.imagen.value,
            };
        } else {
            Object.values(this.registroForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
        }
        this.isLoading = false;
    }
}
