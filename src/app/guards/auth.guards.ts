import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
class AuthGuard {
    isAuth: boolean = this.authService.isAuthenticated();

    canActivate(): boolean {
        if (!this.isAuth) {
            this.router.navigate(['/login']);
        }
        return this.isAuth;
    }

    canActivateRedirect(): boolean {
        if (this.isAuth) {
            this.router.navigate(['/proyectos']);
        }
        return !this.isAuth;
    }

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}
}

export const IsAuthGuard: CanActivateFn = (): boolean => {
    return inject(AuthGuard).canActivate();
};

export const IsNotAuthGuard: CanActivateFn = (): boolean => {
    return inject(AuthGuard).canActivateRedirect();
};
