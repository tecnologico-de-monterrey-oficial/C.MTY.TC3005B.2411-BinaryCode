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
import { ModalDataService } from '../../../../servicios/modal-data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UnidadPost } from '../../../../modelos/unidad.model';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
    selector: 'app-crear-unidad',
    templateUrl: './crear-unidad.component.html',
    styleUrls: ['./crear-unidad.component.css'],
})
export class CrearUnidadComponent implements OnInit {
    subscription: Subscription;
    unidadForm: FormGroup;
    unidadId: number;
    color: string = '#000000';
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
    imagenOriginal: string;

    constructor(
        private fb: FormBuilder,
        private modalDataService: ModalDataService,
        private router: Router,
        private modalRef: NzModalRef
    ) {
        this.unidadForm = this.fb.group({
            nombreUnidad: ['', [Validators.required, Validators.maxLength(20)]],
            color: ['', Validators.required],
            imagen: [null, Validators.required],
        });
    }

    ngOnInit(): void {
        this.subscription = this.modalDataService.unidadData.subscribe(data => {
            if (data) {
                this.unidadId = data.id;
                this.modo = 'editar';
                this.color = data.color;
                this.imagenURL = data.imagen;
                this.imagenOriginal = data.imagen;
                this.unidadForm.patchValue({
                    nombreUnidad: data.nombre,
                    color: data.color,
                    imagen: data.imagen,
                });
            } else {
                this.color = this.colores[0];
            }
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
        if (this.modo === 'crear') {
            if (this.unidadForm.valid) {
                const unidadData: UnidadPost = {
                    nombre: this.unidadForm.get('nombreUnidad').value,
                    color: this.unidadForm.get('color').value,
                    imagen: this.unidadForm.get('imagen').value,
                    fecha: this.formatDate(new Date()),
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
                    .then(unidadData => {
                        console.log('Success:', unidadData);
                        this.modalRef.close(); // Cierra el modal después de una creación exitosa
                        /*setTimeout(function () {
                            location.reload();
                        }, 500);*/
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('Error al crear la unidad.');
                    });
            } else {
                alert('Por favor completa todos los campos.');
            }
        } else {
            if (this.unidadForm.valid) {
                const unidadEdit: {
                    nombre: string;
                    color: string;
                    imagen?: string | ArrayBuffer | null;
                    id_usuario: number;
                    id_proyecto: number;
                } = {
                    nombre: this.unidadForm.get('nombreUnidad').value,
                    color: this.unidadForm.get('color').value,
                    imagen: this.imagenEditada()
                        ? this.unidadForm.get('imagen').value
                        : undefined,
                    id_usuario: 1, //TODO
                    id_proyecto: idProyecto,
                };
                fetch(`http://127.0.0.1:8000/api/apartados/${this.unidadId}/`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(unidadEdit),
                })
                    .then(response => response.json())
                    .then(() => {
                        this.modalRef.close(); // Cierra el modal después de una edición exitosa
                        setTimeout(function () {
                            location.reload();
                        }, 500);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('Error al editar la unidad.');
                    });
            } else {
                alert('No puedes dejar estos campos vacios!');
            }
        }
    }

    seleccionarColor(color: string): void {
        this.colorSeleccionado = color;
        this.unidadForm.patchValue({ color: this.colorSeleccionado });
    }

    imagenEditada(): boolean {
        return this.unidadForm.get('imagen').value !== this.imagenOriginal;
    }

    extraerNumero(ruta: string): number {
        const match: RegExpMatchArray = ruta.match(
            /\/proyectos\/(\d+)\/unidades/
        );
        return match ? parseInt(match[1], 10) : null;
    }

    formatDate(date: Date): string {
        const day: string = date.getDate().toString().padStart(2, '0');
        const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
        const year: number = date.getFullYear();
        return `${year}-${month}-${day}`;
    }
}
