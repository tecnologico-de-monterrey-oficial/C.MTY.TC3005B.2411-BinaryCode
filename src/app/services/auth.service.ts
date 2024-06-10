import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASE_URL } from '../constantes';
import { NzMessageService } from 'ng-zorro-antd/message';

interface AuthResponse {
    access: string;
    refresh: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = BASE_URL + 'api/usuarios/login/';
    private registerUrl = BASE_URL + 'api/usuarios/';
    private authStatusListener = new BehaviorSubject<boolean>(
        this.isAuthenticated()
    );

    private customHeader: HeadersInit = {
        'Content-Type': 'application/json',
    };

    async login(email: string, password: string): Promise<AuthResponse> {
        try {
            const response: Response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: this.customHeader,
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const authResponse: AuthResponse = await response.json();
            localStorage.setItem('access_token', authResponse.access);
            localStorage.setItem('refresh_token', authResponse.refresh);
            this.authStatusListener.next(true);
            return authResponse;
        } catch (error) {
            console.error('Error autentificación', error);
            this.message.error('Hubo un error durante la autentificación', {
                nzDuration: 10000,
            });
        }
    }

    async register(
        first_name: string,
        last_name: string,
        email: string,
        password: string,
        color: string
    ): Promise<void> {
        try {
            const fecha: string = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
            const response: Response = await fetch(this.registerUrl, {
                method: 'POST',
                headers: this.customHeader,
                body: JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    password,
                    color,
                    fecha,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const loginRespuesta: AuthResponse = await this.login(
                email,
                password
            );
            if (loginRespuesta) {
                this.router.navigate(['/proyectos']);
            }
        } catch (error) {
            console.error('Error during registration', error);
            this.message.error('Hubo un error durante autentificación', {
                nzDuration: 10000,
            });
        }
    }

    logout(): void {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.authStatusListener.next(false);
        this.router.navigate(['/login']);
    }

    getToken(): string {
        return localStorage.getItem('access_token');
    }

    isAuthenticated(): boolean {
        const token: string = localStorage.getItem('access_token');
        return !!token;
    }

    getAuthStatusListener(): Observable<boolean> {
        return this.authStatusListener.asObservable();
    }

    constructor(
        private message: NzMessageService,
        private router: Router
    ) {}
}
