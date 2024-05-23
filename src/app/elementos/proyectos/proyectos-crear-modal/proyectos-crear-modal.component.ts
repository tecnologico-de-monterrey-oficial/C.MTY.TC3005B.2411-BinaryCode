import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    @Output() actualizarProyectoImportado = new EventEmitter<Proyecto>();

    loading: boolean = false;
    nuevoProyecto: boolean;

    validateForm: FormGroup<{
        id: FormControl<number>;
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

    @Input() proyectoOriginal: Proyecto;

    proyectoEnProceso: Proyecto;

    ngOnInit(): void {
        this.proyectoEnProceso = this.proyectoOriginal || {
            nombre: '',
            descripcion: '',
            color: this.colores[
                Math.floor(Math.random() * this.colores.length)
            ],
            imagen: '',
            activo: true,
            creator: 1,
        };

        this.nuevoProyecto = this.proyectoOriginal === undefined;
        this.validateForm = this.fb.group({
            id: [this.proyectoEnProceso.id],
            nombreProyecto: [
                this.proyectoEnProceso.nombre,
                [Validators.required],
            ],
            descripcion: [
                this.proyectoEnProceso.descripcion,
                [Validators.required],
            ],
            colorSeleccionado: [
                this.proyectoEnProceso.color,
                [Validators.required],
            ],
            imagen: [this.proyectoEnProceso.imagen, [Validators.required]],
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
            this.proyectoEnProceso.nombre =
                this.validateForm.value.nombreProyecto;
            this.proyectoEnProceso.descripcion =
                this.validateForm.value.descripcion;
            this.proyectoEnProceso.color =
                this.validateForm.value.colorSeleccionado;
            this.proyectoEnProceso.imagen =
                this.proyectoEnProceso.imagen !== this.proyectoOriginal?.imagen
                    ? this.validateForm.value.imagen
                    : undefined;

            if (this.nuevoProyecto) {
                await this.llamadaAPICrearProyecto();
            } else {
                await this.llamadaAPIActualizarProyecto();
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

    async llamadaAPICrearProyecto(): Promise<void> {
        const respuestaAPI: RespuestaProyectoServidor =
            await this.proyectoService.createProyecto(this.proyectoEnProceso);

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
            this.message.error('Hubo un error al crear el proyecto:', {
                nzDuration: 10000,
            });
        }
    }

    async llamadaAPIActualizarProyecto(): Promise<void> {
        const respuestaAPI: RespuestaProyectoServidor =
            await this.proyectoService.actualizarProyecto(
                this.proyectoEnProceso
            );

        if (respuestaAPI.exito) {
            this.message.success('El proyecto se actualizó exitosamente', {
                nzDuration: 10000,
            });
            if (
                typeof respuestaAPI.mensaje !== 'string' &&
                !Array.isArray(respuestaAPI.mensaje) &&
                'id' in respuestaAPI.mensaje
            ) {
                this.actualizarProyectoImportado.emit(respuestaAPI.mensaje);
            }
        } else {
            this.message.error('Hubo un error al actualizar el proyecto: ', {
                nzDuration: 10000,
            });
        }
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
