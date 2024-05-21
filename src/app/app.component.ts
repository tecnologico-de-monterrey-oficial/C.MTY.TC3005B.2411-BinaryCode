import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    showSidebar: boolean = true;
    showHeader: boolean = true;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // eslint-disable-next-line @typescript-eslint/typedef
                const isLoginRoute = event.url.includes('entrada');
                this.showSidebar = !isLoginRoute;
                this.showHeader = !isLoginRoute;
            }
        });
    }
}
