// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    loginForm: FormGroup;
    hide = true;

    constructor(private fb: FormBuilder) {
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
            console.log('Form values:', this.loginForm.value);
            // Aqui mero presno
        }
    }
}
