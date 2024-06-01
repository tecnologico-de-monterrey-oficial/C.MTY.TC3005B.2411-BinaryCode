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
