import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { ModalDataService } from '../../../../servicios/modal-data.service';
import { Proyecto } from '../../../../modelos/proyectos.model';
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
export class ProyectoCrearComponent implements OnInit, OnDestroy {
    proyectoForm: FormGroup;
    subscription: Subscription;
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
    modo: string;

    constructor(
        private fb: FormBuilder,
        public modalRef: NzModalRef,
        private modalDataService: ModalDataService
    ) {}

    ngOnInit(): void {
        this.subscription = this.modalDataService.proyectoData.subscribe(
            data => {
                this.modo = 'crear';
                this.colorSeleccionado =
                    data && data.color ? data.color : this.colores[0];
                this.imagenURL = data && data.imagen ? data.imagen : null;
                this.proyectoForm = this.fb.group({
                    nombreProyecto: [
                        data ? data.nombre : '',
                        Validators.required,
                    ],
                    descripcion: [
                        data ? data.descripcion : '',
                        Validators.required,
                    ],
                    color: [this.colorSeleccionado, Validators.required],
                    imagen: [this.imagenURL, Validators.required],
                });
            }
        );
    }

    seleccionarColor(color: string): void {
        this.colorSeleccionado = color;
        this.proyectoForm.patchValue({ color: this.colorSeleccionado });
    }

    onFileSelected(event: Event): void {
        const file: File = (event.target as HTMLInputElement).files[0];
        if (file) {
            const reader: FileReader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>): void => {
                this.imagenURL = e.target.result;
                this.proyectoForm.patchValue({ imagen: this.imagenURL });
            };
            reader.readAsDataURL(file);
        }
    }

    validarDatos(): void {
        if (this.proyectoForm.valid) {
            const proyectoData: { [key: string]: Proyecto } =
                this.proyectoForm.value;
            console.log('Datos del Proyecto:', proyectoData);
            // Lógica para enviar datos al servidor puede ser agregada aquí
            this.modalRef.close(proyectoData);
            alert(
                'Proyecto ' +
                    (this.modo === 'editar' ? 'actualizado' : 'creado') +
                    ' con éxito.'
            );
        } else {
            alert('Por favor completa todos los campos.');
        }
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
