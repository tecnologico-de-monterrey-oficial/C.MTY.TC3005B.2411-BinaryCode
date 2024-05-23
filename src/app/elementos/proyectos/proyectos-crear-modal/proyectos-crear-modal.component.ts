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
import { Proyecto } from '../../../modelos/proyectos.model';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
    ProyectosService,
    RespuestaProyectoServidor,
} from '../../../servicios/proyecto.services';

@Component({
    selector: 'app-proyectos-crear-modal',
    templateUrl: './proyectos-crear-modal.component.html',
    styleUrl: './proyectos-crear-modal.component.css',
})
export class ProyectosCrearModalComponent implements OnInit {
    @Output() cancelModal = new EventEmitter();
    @Output() crearProyectoImportado = new EventEmitter<Proyecto>();

    loading = false;

    validateForm: FormGroup<{
        nombreProyecto: FormControl<string>;
        descripcion: FormControl<string>;
        colorSeleccionado: FormControl<string>;
        imagen: FormControl<string>;
    }>;

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
        this.validateForm = this.fb.group({
            nombreProyecto: ['', [Validators.required]],
            descripcion: ['', [Validators.required]],
            colorSeleccionado: [
                this.colores[Math.floor(Math.random() * this.colores.length)],
                [Validators.required],
            ],
            imagen: ['', [Validators.required]],
        });
    }

    seleccionarColor(color: string): void {
        this.validateForm.controls.colorSeleccionado.setValue(color);
    }

    handleCancel(): void {
        this.cancelModal.emit();
    }

    async crearProyecto(): Promise<void> {
        this.loading = true;
        if (this.validateForm.valid) {
            console.log(this.validateForm.value);
            const nuevoProyecto: Proyecto = {
                nombre: this.validateForm.value.nombreProyecto,
                descripcion: this.validateForm.value.descripcion,
                color: this.validateForm.value.colorSeleccionado,
                imagen: this.validateForm.value.imagen,
                activo: true,
                creator: 1,
            };

            // API para crear proyecto
            const respuestaAPI: RespuestaProyectoServidor =
                await this.proyectoService.createProyecto(nuevoProyecto);

            console.log('Proyecto creado:', respuestaAPI);

            if (respuestaAPI.exito) {
                this.message.success('El proyecto se creó exitosamente', {
                    nzDuration: 10000,
                });
                if (
                    typeof respuestaAPI.mensaje !== 'string' &&
                    !Array.isArray(respuestaAPI.mensaje) &&
                    'id' in respuestaAPI.mensaje
                ) {
                    this.crearProyectoImportado.emit(respuestaAPI.mensaje);
                }
            } else {
                this.message.error(
                    'Hubo un error al crear el proyecto: ' + respuestaAPI,
                    {
                        nzDuration: 10000,
                    }
                );
            }
        } else {
            console.log('Formulario inválido');
            Object.values(this.validateForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
        }
        this.loading = false;
    }

    onFileSelected(event: Event): void {
        const file: File = (event.target as HTMLInputElement).files[0];
        if (file) {
            const reader: FileReader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>): void => {
                const imagen: string | ArrayBuffer = e.target.result;
                if (typeof imagen === 'string') {
                    this.validateForm.controls.imagen.setValue(imagen);
                }
            };
            reader.readAsDataURL(file);
        }
    }

    constructor(
        private fb: NonNullableFormBuilder,
        private message: NzMessageService,
        private proyectoService: ProyectosService
    ) {}
}
