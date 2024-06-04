import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-entrada-login',
    templateUrl: './entrada-login.component.html',
    styleUrls: ['./entrada-login.component.css'],
})
export class EntradaLoginComponent {
    showLogin: boolean = true; // true  login      false  registro

    constructor(private fb: FormBuilder) {}

    toggleView(): void {
        this.showLogin = !this.showLogin;
    }
}
