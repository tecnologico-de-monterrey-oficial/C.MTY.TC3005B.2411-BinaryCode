import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    ValidationErrors,
} from '@angular/forms';
import { AuthService } from '../../servicios/auth.services';
import { Router } from '@angular/router';

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
} from '../../../assets/colores';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
    @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;

    registroForm: FormGroup;
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

    colorSeleccionado: string;
    imagenSeleccionada: string | ArrayBuffer | null = null;
    hidePassword = true;
    hideConfirmPassword = true;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.colorSeleccionado =
            this.colores[Math.floor(Math.random() * this.colores.length)];

        this.registroForm = this.fb.group(
            {
                first_name: [
                    '',
                    [Validators.required, Validators.maxLength(40)],
                ],
                last_name: [
                    '',
                    [Validators.required, Validators.maxLength(40)],
                ],
                color: [this.colorSeleccionado, Validators.required],
                email: ['', [Validators.required, Validators.email]],
                password: [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(6),
                        Validators.maxLength(128),
                    ],
                ],
                confirm_password: ['', [Validators.required]],
            },
            { validators: this.passwordMatchValidator }
        );
    }

    passwordMatchValidator(form: FormGroup): ValidationErrors | null {
        return form.get('password')?.value ===
            form.get('confirm_password')?.value
            ? null
            : { mismatch: true };
    }

    toggleHidePassword(): void {
        this.hidePassword = !this.hidePassword;
    }

    toggleHideConfirmPassword(): void {
        this.hideConfirmPassword = !this.hideConfirmPassword;
    }

    seleccionarColor(color: string): void {
        this.colorSeleccionado =
            this.colorSeleccionado === color ? null : color;
        this.registroForm.patchValue({ color: this.colorSeleccionado });
    }

    seleccionarImagen(): void {
        this.fileInput.nativeElement.click();
    }

    onFileSelected(event: Event): void {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const reader: FileReader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>): void => {
                this.imagenSeleccionada = e.target?.result;
            };
            reader.readAsDataURL(input.files[0]);
            input.value = '';
        }
    }

    quitarImagen(): void {
        this.imagenSeleccionada = null;
    }

    onSubmit(): void {
        if (this.registroForm.valid) {
            const { first_name, last_name, email, password, color } =
                this.registroForm.value;
            console.log(first_name, last_name, email, password, color);
            this.authService
                .register(first_name, last_name, email, password, color)
                .subscribe({
                    next: (): void => {
                        this.router.navigate(['/proyectos']);
                    },
                    error: (err: { message: string }): void => {
                        console.error('Registro fallido', err);
                    },
                });
        } else {
            console.log('Formulario no válido');
        }
    }
}
