// crear-carpeta.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-crear-carpeta',
    templateUrl: './crear-carpeta.component.html',
    styleUrls: ['./crear-carpeta.component.css'],
})
export class CrearCarpetaComponent implements OnInit {
    unidadForm: FormGroup;
    colorSeleccionado: string;
    colores: string[] = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#FF33FF']; // Colores de ejemplo

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.iniciarFormulario();
    }

    iniciarFormulario(): void {
        this.unidadForm = this.formBuilder.group({
            nombreUnidad: ['', Validators.required],
            color: [this.colores[0], Validators.required],
        });
        // Establece el color predeterminado
        this.colorSeleccionado = this.colores[0];
    }

    seleccionarColor(color: string): void {
        this.colorSeleccionado = color;
        this.unidadForm.patchValue({ color: this.colorSeleccionado });
    }
}
