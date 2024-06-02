import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    loginForm: FormGroup;
    hide = true;
    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    toggleHide(): void {
        this.hide = !this.hide;
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            const { email, password } = this.loginForm.value;
            this.authService.login(email, password).subscribe({
                next: response => {
                    console.log('Login successful', response);
                    this.router.navigate(['/proyectos']); // Redirigir a la página deseada después del login
                },
                error: error => {
                    console.error('Login failed', error);
                    // Manejar errores de login, por ejemplo, mostrar un mensaje al usuario
                },
                complete: () => {
                    // Acción opcional al completar la solicitud
                },
            });

        }
    }
}
