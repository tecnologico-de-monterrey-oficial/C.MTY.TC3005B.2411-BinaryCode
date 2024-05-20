import { Component } from '@angular/core';
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
import { ModalDataService } from '../../../../servicios/modal-data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-crear-unidad',
    templateUrl: './crear-unidad.component.html',
    styleUrls: ['./crear-unidad.component.css'],
})
export class CrearUnidadComponent {
    unidadForm: FormGroup;
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
    colorSeleccionado: string;
    imagenURL: string | ArrayBuffer | null = null;
    modo: string = 'crear';
    constructor(
        private fb: FormBuilder,
        private modalDataService: ModalDataService,
        private router: Router
    ) {
        this.unidadForm = this.fb.group({
            nombreUnidad: ['', Validators.required],
            color: ['', Validators.required],
            imagen: [null, Validators.required],
        });
    }

    onFileSelected(event: Event): void {
        const file: File = (event.target as HTMLInputElement).files[0];
        if (file) {
            const reader: FileReader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>): void => {
                this.imagenURL = e.target.result;
                this.unidadForm.patchValue({ imagen: this.imagenURL });
            };
            reader.readAsDataURL(file);
        }
    }

    validarDatos(): void {
        const ruta: string = this.router.url;
        const idProyecto: number = this.extraerNumero(ruta);
        //const date: Date = new Date();
        if (this.unidadForm.valid) {
            // eslint-disable-next-line @typescript-eslint/typedef
            const unidadData = {
                nombre: this.unidadForm.get('nombreUnidad').value,
                color: this.unidadForm.get('color').value,
                imagen: this.unidadForm.get('imagen').value,
                //fecha: date,
                id_padre: null,
                id_proyecto: idProyecto,
                id_usuario: 1, //TODO se debe sacar desde que se inicia la app
            };
            console.log(unidadData);
            fetch('http://127.0.0.1:8000/api/apartados/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(unidadData),
            })
                .then(response => response.json())
                .then(proyectoData => {
                    console.log('Success:', proyectoData);
                    setTimeout(function () {
                        location.reload();
                    }, 500);
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error al crear la unidad.');
                });
        } else {
            alert('Por favor completa todos los campos.');
        }
    }

    extraerNumero(ruta: string): number {
        const match: RegExpMatchArray = ruta.match(
            /\/proyectos\/(\d+)\/unidades/
        );
        return match ? parseInt(match[1], 10) : null;
    }

    seleccionarColor(color: string): void {
        this.colorSeleccionado = color;
        this.unidadForm.patchValue({ color: this.colorSeleccionado });
    }
}
