import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-entrada-pagina',
    templateUrl: './entrada-pagina.component.html',
    styleUrls: ['./entrada-pagina.component.css'],
})
export class EntradaPaginaComponent implements OnInit {
    isRegistro: boolean = false;

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.isRegistro = event.url.includes('entrada');
            }
        });
    }

    constructor(private router: Router) {}
}
