import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
class AuthGuard {
    canActivate(): boolean {
        const isAuth: boolean = this.authService.isAuthenticated();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    }

    canActivateRedirect(): boolean {
        const isAuth: boolean = this.authService.isAuthenticated();
        if (isAuth) {
            this.router.navigate(['/proyectos']);
        }
        return !isAuth;
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
