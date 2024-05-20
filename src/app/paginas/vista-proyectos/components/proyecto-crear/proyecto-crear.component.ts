import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
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
    imagenOriginal: string;
    idProyecto: number;

    constructor(
        private fb: FormBuilder,
        private modalDataService: ModalDataService
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
                    this.idProyecto = data.id;
                    this.modo = 'editar';
                    this.colorSeleccionado = data.color;
                    this.imagenURL = data.imagen;
                    this.imagenOriginal = data.imagen;
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
        if (this.modo === 'crear') {
            if (this.proyectoForm.valid) {
                // eslint-disable-next-line @typescript-eslint/typedef
                const proyectoData = {
                    nombre: this.proyectoForm.get('nombreProyecto').value,
                    descripcion: this.proyectoForm.get('descripcion').value,
                    color: this.proyectoForm.get('color').value,
                    imagen: this.proyectoForm.get('imagen').value,
                    activo: true,
                    creator: 1,
                };
                fetch('http://127.0.0.1:8000/api/proyectos/', {
                    // Reemplaza con tu URL de la API
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(proyectoData),
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
                        alert('Error al crear el proyecto.');
                    });
            } else {
                alert('Por favor completa todos los campos.');
            }
        } else {
            // eslint-disable-next-line @typescript-eslint/typedef
            const proyectoEdit = {
                nombre: this.proyectoForm.get('nombreProyecto').value,
                descripcion: this.proyectoForm.get('descripcion').value,
                color: this.proyectoForm.get('color').value,
                imagen: this.imagenEditada()
                    ? this.proyectoForm.get('imagen').value
                    : undefined,
                activo: true,
                creator: 1, //TODO
            };
            console.log(proyectoEdit);
            console.log(this.idProyecto);
            fetch(`http://127.0.0.1:8000/api/proyectos/${this.idProyecto}/`, {
                // Reemplaza con tu URL de la API
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(proyectoEdit),
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
                    alert('Error al editar el proyecto.');
                });
        }
    }

    imagenEditada(): boolean {
        // Comprueba si la URL actual de la imagen es diferente de la URL original
        return this.proyectoForm.get('imagen').value !== this.imagenOriginal;
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
