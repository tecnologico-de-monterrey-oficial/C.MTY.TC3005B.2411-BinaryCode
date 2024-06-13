import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../servicios/auth.services';
import { UnidadesService } from '../../../../servicios/unidad.services';
import { firstValueFrom } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { Location } from '@angular/common';
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
    id_proyecto: string | null = null;
    id_padre: string | null = null;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private unidadesService: UnidadesService,
        private location: Location
    ) {
        const path: string = this.location.path();
        const segments: string[] = path.split('/');
        const index: number = segments.findIndex(seg => seg === 'unidades');
        this.id_proyecto = segments[index - 1];
        this.id_padre = segments[index + 1];
        console.log(this.id_padre);
    }

    ngOnInit(): void {
        this.iniciarFormulario();
        console.log('Colores disponibles:', this.colores);
    }

    iniciarFormulario(): void {
        this.unidadForm = this.fb.group({
            nombreCarpeta: ['', Validators.required],
            color: [this.colores[0], Validators.required],
        });
        this.colorSeleccionado = this.colores[0];
    }

    seleccionarColor(color: string): void {
        this.colorSeleccionado = color;
        this.unidadForm.patchValue({ color: color });
    }

    async crearCarpeta(): Promise<void> {
        if (this.unidadForm.valid) {
            // eslint-disable-next-line @typescript-eslint/typedef
            const usuario = await firstValueFrom(
                this.authService.getUsuarioAutenticado()
            );
            // eslint-disable-next-line @typescript-eslint/typedef
            const carpetaData = {
                nombre: this.unidadForm.get('nombreCarpeta').value,
                color: this.unidadForm.get('color').value,
                id_usuario: usuario.id,
                fecha: this.formatDate(new Date()),
                id_padre: this.id_padre,
                id_proyecto: this.id_proyecto,
            };

            // if (!this.id_proyecto || !this.id_padre) {
            //     console.error('No se pudieron obtener los IDs de la ruta.');
            //     alert('Error al obtener los IDs de la ruta.');
            //     return;
            // }

            console.log('Datos de la carpeta a enviar:', carpetaData);

            this.unidadesService
                .crearCarpeta(carpetaData)
                .pipe(
                    catchError(error => {
                        console.error('Error al crear la carpeta:', error);
                        return throwError(error);
                    })
                )
                .subscribe(response => {
                    console.log('Carpeta creada con éxito:', response);
                    // Aquí puedes añadir lógica adicional, como redireccionar o mostrar un mensaje
                });
        } else {
            console.log(this.unidadForm.value);
            alert('Por favor completa todos los campos.');
        }
    }

    formatDate(date: Date): string {
        const day: string = date.getDate().toString().padStart(2, '0');
        const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
        const year: number = date.getFullYear();
        return `${year}-${month}-${day}`;
    }
}
