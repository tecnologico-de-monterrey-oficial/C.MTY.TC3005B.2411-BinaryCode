// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface AuthResponse {
    access: string;
    refresh: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://127.0.0.1:8000/api/usuarios/login/';
    private registerUrl = 'http://127.0.0.1:8000/api/usuarios/';
    private authStatusListener = new BehaviorSubject<boolean>(
        this.isAuthenticated()
    );

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    login(email: string, password: string): Observable<AuthResponse> {
        return this.http
            .post<AuthResponse>(this.apiUrl, { email: email, password })
            .pipe(
                tap(response => {
                    localStorage.setItem('access_token', response.access);
                    localStorage.setItem('refresh_token', response.refresh);
                    this.authStatusListener.next(true);
                })
            );
    }

    register(
        first_name: string,
        last_name: string,
        email: string,
        password: string,
        color: string
    ): Observable<unknown> {
        const fecha: string = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
        return this.http
            .post<unknown>(this.registerUrl, {
                first_name,
                last_name,
                email,
                password,
                color,
                fecha,
            })
            .pipe(
                tap(() => {
                    // Auto login después del registro exitoso
                    this.login(email, password).subscribe(() => {
                        this.router.navigate(['/proyectos']);
                    });
                })
            );
    }

    logout(): void {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.authStatusListener.next(false);
        this.router.navigate(['/login']);
    }

    getToken(): string | null {
        return localStorage.getItem('access_token');
    }

    isAuthenticated(): boolean {
        const token: string = localStorage.getItem('access_token');
        return !!token;
    }

    getAuthStatusListener(): Observable<boolean> {
        return this.authStatusListener.asObservable();
    }
}
