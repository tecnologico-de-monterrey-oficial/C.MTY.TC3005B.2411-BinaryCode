import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarpetaCompartidaService } from '../../../../servicios/carpeta-compartida.service'; // Asegúrate de poner la ruta correcta
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
    esModoEdicion: boolean;
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

    constructor(
        private formBuilder: FormBuilder,
        private carpetaService: CarpetaCompartidaService
    ) {}

    ngOnInit(): void {
        this.iniciarFormulario();
        this.carpetaService.modoEdicionActual$.subscribe(modoEdicion => {
            this.esModoEdicion = modoEdicion;
        });
        this.carpetaService.carpetaActual$.subscribe(carpeta => {
            if (carpeta) {
                this.unidadForm.patchValue({
                    nombreCarpeta: carpeta.nombre,
                    color: carpeta.color,
                });
                this.colorSeleccionado = carpeta.color;
            } else {
                this.unidadForm.reset();
                this.colorSeleccionado = this.colores[0];
                this.unidadForm.patchValue({ color: this.colores[0] });
            }
        });
    }

    iniciarFormulario(): void {
        this.unidadForm = this.formBuilder.group({
            nombreCarpeta: ['', Validators.required],
            color: [this.colores[0], Validators.required],
        });

        this.colorSeleccionado = this.colores[0];
    }

    seleccionarColor(color: string): void {
        this.colorSeleccionado = color;
        this.unidadForm.patchValue({ color: color });
    }
}
