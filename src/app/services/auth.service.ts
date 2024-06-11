import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASE_URL } from '../constantes';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Usuario } from '../modelos';

interface AuthResponse {
    access: string;
    refresh: string;
    usuario: Usuario;
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

    getUsuarioActual(): Usuario {
        return JSON.parse(localStorage.getItem('usuario'));
    }

    async iniciarSesion(email: string, password: string): Promise<Usuario> {
        try {
            const passwordHash: string = await this.hashPassword(password);
            const response: Response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: this.customHeader,
                body: JSON.stringify({ email: email, password: passwordHash }),
            });

            if (response.status === 400) {
                throw new Error('Credenciales incorrectas');
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const authResponse: AuthResponse = await response.json();
            const usuarioActual: Usuario = authResponse.usuario;
            localStorage.setItem('access_token', authResponse.access);
            localStorage.setItem('refresh_token', authResponse.refresh);
            localStorage.setItem('usuario', JSON.stringify(usuarioActual));
            this.authStatusListener.next(true);

            return usuarioActual;
        } catch (error) {
            if (error.message === 'Credenciales incorrectas') {
                this.message.error('No se encontró usuario/contraseña', {
                    nzDuration: 10000,
                });
            } else {
                console.error('Error autentificación', error);
                this.message.error(
                    'Hubo un error al iniciar sesión, por favor intente más tarde',
                    {
                        nzDuration: 10000,
                    }
                );
            }
        }
    }

    async registrar(
        usuario: Usuario,
        correo: string,
        password: string
    ): Promise<Usuario> {
        try {
            const passwordHash: string = await this.hashPassword(password);
            const fecha: string = new Date().toISOString().split('T')[0];
            usuario.fecha = fecha;
            const response: Response = await fetch(this.registerUrl, {
                method: 'POST',
                headers: this.customHeader,
                body: JSON.stringify({
                    ...usuario,
                    email: correo,
                    password: passwordHash,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            this.message.success('Se creó el usuario exitosamente', {
                nzDuration: 10000,
            });

            const loginRespuesta: Usuario = await this.iniciarSesion(
                correo,
                password
            );
            return loginRespuesta;
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
    }

    getToken(): string {
        return localStorage.getItem('access_token');
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    getAuthStatusListener(): Observable<boolean> {
        return this.authStatusListener.asObservable();
    }

    async hashPassword(password: string): Promise<string> {
        const msgUint8: Uint8Array = new TextEncoder().encode(password);
        const hashBuffer: ArrayBuffer = await crypto.subtle.digest(
            'SHA-256',
            msgUint8
        );
        const hashArray: number[] = Array.from(new Uint8Array(hashBuffer));
        const hashHex: string = hashArray
            .map(b => b.toString(16).padStart(2, '0'))
            .join('');
        return hashHex;
    }

    constructor(private message: NzMessageService) {}
}
