import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Subscription } from 'rxjs';
import { ProyectosService } from '../../../../servicios/proyecto.services';
import { ModalDataService } from '../../../../servicios/modal-data.service';
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
import { Proyecto } from '../../../../modelos/proyectos.model';

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
    modo: string = 'crear';

    constructor(
        private fb: FormBuilder,
        public modalRef: NzModalRef,
        private modalDataService: ModalDataService,
        private proyectosService: ProyectosService
    ) {
        this.proyectoForm = this.fb.group({
            nombreProyecto: ['', Validators.required],
            descripcion: ['', Validators.required],
            color: ['', Validators.required],
            imagen: [null, Validators.required],
        });
    }

    ngOnInit(): void {
        this.subscription = this.modalDataService.proyectoData.subscribe(
            data => {
                if (data) {
                    this.modo = 'editar';
                    this.colorSeleccionado = data.color;
                    this.imagenURL = data.imagen;
                    this.proyectoForm.patchValue({
                        nombreProyecto: data.nombre,
                        descripcion: data.descripcion,
                        color: data.color,
                        imagen: data.imagen,
                    });
                } else {
                    this.colorSeleccionado = this.colores[0];
                }
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
            const proyectoData: Proyecto = {
                id: '24',
                nombre: this.proyectoForm.get('nombreProyecto').value,
                descripcion: this.proyectoForm.get('descripcion').value,
                color: this.proyectoForm.get('color').value,
                imagen: this.proyectoForm.get('imagen').value,
                activo: true,
                creator: '1', // Adjust this according to your authentication logic
            };

            this.proyectosService.createProyecto(proyectoData).subscribe(
                response => {
                    console.log('Proyecto creado:', response);
                    this.modalRef.close(response);
                    alert('Proyecto creado con éxito.');
                },
                error => {
                    console.error('Error al crear el proyecto:', error);
                    alert('Error al crear el proyecto.');
                }
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
