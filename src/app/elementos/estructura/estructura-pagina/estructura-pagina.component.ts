import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-estructura-pagina',
    templateUrl: './estructura-pagina.component.html',
    styleUrl: './estructura-pagina.component.css',
})
export class EstructuraPaginaComponent implements OnInit {
    routeSubscription: Subscription;
    isLoginRoute: boolean = true;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.isLoginRoute =
                    event.url.includes('registro') ||
                    event.url.includes('login') ||
                    !this.routeExists(event.url);
            }
        });
    }

    private routeExists(url: string): boolean {
        return this.router.config.some(route => route.path === url.slice(1));
    }
}
