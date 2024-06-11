import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../../modelos';
import { Router } from '@angular/router';
@Component({
    selector: 'app-estructura-entrada-login',
    templateUrl: './estructura-entrada-login.component.html',
    styleUrls: ['./estructura-entrada-login.component.css'],
})
export class EstructuraEntradaLoginComponent implements OnInit {
    passwordVisible: boolean = false;
    botonCargando: boolean = false;

    registroForm: FormGroup<{
        usuario: FormControl<string>;
        contrasena: FormControl<string>;
    }>;

    ngOnInit(): void {
        this.registroForm = this.fb.group({
            usuario: ['', Validators.required],
            contrasena: ['', Validators.required],
        });
    }

    async onSubmit(): Promise<void> {
        this.botonCargando = true;
        if (this.registroForm.valid) {
            const respuesta: Usuario = await this.authService.iniciarSesion(
                this.registroForm.value.usuario,
                this.registroForm.value.contrasena
            );
            if (respuesta) {
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
        this.botonCargando = false;
    }

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}
}
