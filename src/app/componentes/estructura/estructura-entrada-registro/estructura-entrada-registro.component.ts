import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { paletaColores } from '../../../../assets/colores';
import { Usuario } from '../../../modelos';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-estructura-entrada-registro',
    templateUrl: './estructura-entrada-registro.component.html',
    styleUrls: ['./estructura-entrada-registro.component.css'],
})
export class EstructuraEntradaRegistroComponent implements OnInit {
    usuario: Usuario;
    colores: string[] = paletaColores;
    isLoading: boolean;
    passwordVisible: boolean = false;
    passwordConfirmacionVisible: boolean = false;
    showPlaceholderUsuario: boolean = true;
    imagenControl: string;

    registroForm: FormGroup<{
        nombre: FormControl<string>;
        apellido: FormControl<string>;
        correo: FormControl<string>;
        contrasena: FormControl<string>;
        contrasenaConfirmacion: FormControl<string>;
        colorSeleccionado: FormControl<string>;
        imagen: FormControl<string>;
    }>;

    ngOnInit(): void {
        this.registroForm = this.fb.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            correo: ['', [Validators.required, Validators.email]],
            contrasena: ['', [Validators.required, Validators.minLength(8)]],
            contrasenaConfirmacion: ['', Validators.required],
            colorSeleccionado: [
                this.colores[Math.floor(Math.random() * this.colores.length)],
                Validators.required,
            ],
            imagen: [''],
        });
    }

    contrasenaConfirmacionOnChange(): void {
        const contrasenasIguales: boolean =
            this.registroForm.controls.contrasena.value ===
            this.registroForm.controls.contrasenaConfirmacion.value;

        if (!contrasenasIguales) {
            this.registroForm.controls.contrasenaConfirmacion.setErrors({
                PasswordMismatch: 'Las contraseñas no coinciden',
            });
        }
    }

    seleccionarColor(color: string): void {
        this.registroForm.controls.colorSeleccionado.setValue(color);
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

    handleImageError(): void {
        this.showPlaceholderUsuario = true;
    }

    async onSubmit(): Promise<void> {
        this.isLoading = true;
        if (this.registroForm.valid) {
            const resultadoAPI: Usuario = await this.authService.registrar(
                this.registroForm.controls.nombre.value,
                this.registroForm.controls.apellido.value,
                this.registroForm.controls.correo.value,
                this.registroForm.controls.contrasena.value,
                this.registroForm.controls.colorSeleccionado.value,
                this.imagenControl
            );
            if (resultadoAPI) {
                this.router.navigate(['/proyectos']);
            }
        } else {
            Object.values(this.registroForm.controls).forEach(control => {
                if (control.invalid) {
                    control.markAsDirty();
                    control.updateValueAndValidity({ onlySelf: true });
                }
            });
        }
        this.isLoading = false;
    }

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}
}
