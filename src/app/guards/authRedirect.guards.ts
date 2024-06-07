import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.services';
import { inject } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthRedirectGuard {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(): boolean {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/proyectos']);
            return false;
        }
        return true;
    }
}

export const AuthRedirectGuardFn: CanActivateFn = () => {
    return inject(AuthRedirectGuard).canActivate();
};
