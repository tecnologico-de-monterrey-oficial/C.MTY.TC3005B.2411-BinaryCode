// auth.guard.ts
import { Injectable, inject } from '@angular/core';
import {
    CanActivateFn,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from '@angular/router';
import { AuthService } from '../servicios/auth.services';

@Injectable({
    providedIn: 'root',
})
//Descomentar todo lo comentado cuando pruebes la autenticación
class AuthGuard {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        route: ActivatedRouteSnapshot,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state: RouterStateSnapshot
    ): boolean {
        const isAuth: boolean = this.authService.isAuthenticated();
        if (!isAuth) {
            this.router.navigate(['/']);
        }
        return isAuth;
    }
}
export const IsAuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): boolean => {
    return inject(AuthGuard).canActivate(route, state);
};
