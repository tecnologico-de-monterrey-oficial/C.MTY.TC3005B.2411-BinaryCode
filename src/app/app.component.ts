import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './servicios/auth.services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    showSidebar: boolean = true;
    showHeader: boolean = true;
    isAuthenticated: boolean = false;

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.isAuthenticated = isAuthenticated;
            this.updateLayoutVisibility();
        });

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.updateLayoutVisibility();
            }
        });
    }

    private updateLayoutVisibility(): void {
        const isLoginRoute: boolean = this.router.url.includes('entrada');
        this.showSidebar = !isLoginRoute;
        this.showHeader = !isLoginRoute;
        // this.showSidebar = this.isAuthenticated && !isLoginRoute;
        // this.showHeader = this.isAuthenticated && !isLoginRoute;
    }
}
