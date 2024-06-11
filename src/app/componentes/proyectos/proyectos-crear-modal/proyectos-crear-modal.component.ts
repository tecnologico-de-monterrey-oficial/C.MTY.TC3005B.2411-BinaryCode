import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    Validators,
} from '@angular/forms';
import { paletaColores } from '../../../../assets/colores';
import { permisoType } from '../../permisos/permisos-constantes';
import { Proyecto } from '../../../modelos';
import { AuthService } from '../../../services/auth.service';

type sendCrearProyecto = {
    proyecto: Proyecto;
    terminar: () => void;
};

@Component({
    selector: 'app-proyectos-crear-modal',
    templateUrl: './proyectos-crear-modal.component.html',
    styleUrl: './proyectos-crear-modal.component.css',
})
export class ProyectosCrearModalComponent implements OnInit {
    @Output() cancelModal = new EventEmitter();
    @Output() crearProyectoImportado = new EventEmitter<sendCrearProyecto>();
    @Output() actualizarProyectoImportado =
        new EventEmitter<sendCrearProyecto>();

    @Input() proyectoOriginal: Proyecto;

    validateForm: FormGroup<{
        id: FormControl<number>;
        nombreProyecto: FormControl<string>;
        descripcion: FormControl<string>;
        colorSeleccionado: FormControl<string>;
        imagen: FormControl<string>;
    }>;

    colores: string[] = paletaColores;

    imagenControl: string;

    permisosType = permisoType;
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
            creator: this.authService.getUsuarioActual().id,
        };

        this.imagenControl = this.proyectoEnProceso.imagen;

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

    onFileSelected(event: Event): void {
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
                this.imagenControl === this.proyectoOriginal?.imagen
                    ? undefined
                    : this.imagenControl;

            if (!this.proyectoOriginal) {
                this.crearProyectoImportado.emit({
                    proyecto: this.proyectoEnProceso,
                    terminar: this.finishLoading.bind(this),
                });
            } else {
                this.actualizarProyectoImportado.emit({
                    proyecto: this.proyectoEnProceso,
                    terminar: this.finishLoading.bind(this),
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

    constructor(
        private fb: NonNullableFormBuilder,
        private authService: AuthService
    ) {}
}
