import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    Validators,
} from '@angular/forms';
import { Proyecto } from '../../../modelos/proyectos.model';
import { listaColores } from '../../modales/modales.util';

type sendCrear = {
    proyecto: Proyecto;
    funcion: () => void;
};

@Component({
    selector: 'app-modal-crear-proyecto',
    templateUrl: './modal-crear-proyecto.component.html',
    styleUrl: './modal-crear-proyecto.component.css',
})
export class ModalCrearProyectoComponent implements OnInit {
    @Output() cancelModal = new EventEmitter();
    @Output() crearProyectoImportado = new EventEmitter<sendCrear>();
    @Output() actualizarProyectoImportado = new EventEmitter<sendCrear>();

    @Input() proyectoOriginal: Proyecto;

    validateForm: FormGroup<{
        id: FormControl<number>;
        nombreProyecto: FormControl<string>;
        descripcion: FormControl<string>;
        colorSeleccionado: FormControl<string>;
        imagen: FormControl<string>;
    }>;

    colores: string[] = listaColores;

    proyectoEnProceso: Proyecto;
    isLoading: boolean;

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

    finishLoading(): void {
        this.isLoading = false;
    }

    async crearProyecto(): Promise<void> {
        this.isLoading = true;
        if (this.validateForm.valid) {
            this.proyectoEnProceso.nombre =
                this.validateForm.value.nombreProyecto;
            this.proyectoEnProceso.descripcion =
                this.validateForm.value.descripcion;
            this.proyectoEnProceso.color =
                this.validateForm.value.colorSeleccionado;
            this.proyectoEnProceso.imagen =
                this.validateForm.value.imagen === this.proyectoOriginal?.imagen
                    ? undefined
                    : this.validateForm.value.imagen;

            if (!this.proyectoOriginal) {
                this.crearProyectoImportado.emit({
                    proyecto: this.proyectoEnProceso,
                    funcion: this.finishLoading.bind(this),
                });
            } else {
                this.actualizarProyectoImportado.emit({
                    proyecto: this.proyectoEnProceso,
                    funcion: this.finishLoading.bind(this),
                });
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

    constructor(private fb: NonNullableFormBuilder) {}
}
