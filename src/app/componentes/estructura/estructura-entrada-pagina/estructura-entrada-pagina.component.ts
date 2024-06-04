import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-estructura-entrada-pagina',
    templateUrl: './estructura-entrada-pagina.component.html',
    styleUrls: ['./estructura-entrada-pagina.component.css'],
})
export class EstructuraEntradaPaginaComponent implements OnInit {
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
