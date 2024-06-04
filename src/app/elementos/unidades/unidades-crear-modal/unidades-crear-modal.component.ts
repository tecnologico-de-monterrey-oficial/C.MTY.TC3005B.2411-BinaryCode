import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    Validators,
} from '@angular/forms';
import { paletaColores } from '../../../../assets/colores';
import { permisoType } from '../../permisos/permisos-constantes';
import { Unidad } from '../../../modelos';

type sendCrearUnidad = {
    unidad: Unidad;
    terminar: () => void;
};

@Component({
    selector: 'app-unidades-crear-modal',
    templateUrl: './unidades-crear-modal.component.html',
    styleUrl: './unidades-crear-modal.component.css',
})
export class UnidadesCrearModalComponent implements OnInit {
    @Output() cancelModal = new EventEmitter();
    @Output() crearUnidadImportada = new EventEmitter<sendCrearUnidad>();
    @Output() actualizarUnidadImportada = new EventEmitter<sendCrearUnidad>();

    @Input() unidadOriginal: Unidad;
    @Input() proyectoId: number;

    validateForm: FormGroup<{
        id: FormControl<number>;
        nombreUnidad: FormControl<string>;
        colorSeleccionado: FormControl<string>;
        imagen: FormControl<string>;
    }>;

    colores: string[] = paletaColores;

    imagenControl: string;

    permisosType = permisoType;
    unidadEnProceso: Unidad;
    isLoading: boolean;

    ngOnInit(): void {
        this.unidadEnProceso = this.unidadOriginal || {
            id_proyecto: this.proyectoId,
            nombre: '',
            color: this.colores[
                Math.floor(Math.random() * this.colores.length)
            ],
            imagen: '',
            id_usuario: 1,
        };

        this.imagenControl = this.unidadEnProceso.imagen;

        this.validateForm = this.fb.group({
            id: [this.unidadEnProceso.id],
            nombreUnidad: [this.unidadEnProceso.nombre, [Validators.required]],
            colorSeleccionado: [
                this.unidadEnProceso.color,
                [Validators.required],
            ],
            imagen: [this.unidadEnProceso.imagen, [Validators.required]],
        });
    }

    seleccionarColor(color: string): void {
        this.validateForm.controls.colorSeleccionado.setValue(color);
    }

    seleccionarArchivo(event: Event): void {
        const file: File = (event.target as HTMLInputElement).files[0];

        if (!file) return;

        const reader: FileReader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>): void => {
            const imagen: string | ArrayBuffer = e.target.result;
            if (typeof imagen === 'string') {
                this.imagenControl = imagen;
            }
        };

        reader.readAsDataURL(file);
    }

    cancelarModal(): void {
        this.cancelModal.emit();
    }

    terminarCargar(): void {
        this.isLoading = false;
    }

    async crearUnidad(): Promise<void> {
        this.isLoading = true;
        if (this.validateForm.valid) {
            this.unidadEnProceso.nombre = this.validateForm.value.nombreUnidad;
            this.unidadEnProceso.color =
                this.validateForm.value.colorSeleccionado;
            this.unidadEnProceso.imagen =
                this.imagenControl === this.unidadOriginal?.imagen
                    ? undefined
                    : this.imagenControl;

            if (!this.unidadOriginal) {
                this.crearUnidadImportada.emit({
                    unidad: this.unidadEnProceso,
                    terminar: this.terminarCargar.bind(this),
                });
            } else {
                this.actualizarUnidadImportada.emit({
                    unidad: this.unidadEnProceso,
                    terminar: this.terminarCargar.bind(this),
                });
            }
        } else {
            Object.values(this.validateForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
            this.isLoading = false;
        }
    }

    constructor(private fb: NonNullableFormBuilder) {}
}
