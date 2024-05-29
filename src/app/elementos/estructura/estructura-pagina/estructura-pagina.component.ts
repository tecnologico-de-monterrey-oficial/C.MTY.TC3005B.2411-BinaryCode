import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-estructura-pagina',
    templateUrl: './estructura-pagina.component.html',
    styleUrl: './estructura-pagina.component.css',
})
export class EstructuraPaginaComponent implements OnInit {
    isLoginRoute: boolean = true;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.isLoginRoute =
                    event.url.includes('registro') ||
                    event.url.includes('login');
            }
        });
    }
}
