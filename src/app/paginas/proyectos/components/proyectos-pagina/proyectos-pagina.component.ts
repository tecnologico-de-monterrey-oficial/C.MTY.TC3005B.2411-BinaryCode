import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../../modelos/proyectos.model';
import { ProyectosService } from '../../../../servicios/proyecto.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-proyectos-pagina',
    templateUrl: './proyectos-pagina.component.html',
    styleUrl: './proyectos-pagina.component.css',
})
export class ProyectosComponent implements OnInit {
    proyectos: Proyecto[] = [];

    constructor(
        private proyectoService: ProyectosService, // Use private to correctly inject the service
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.proyectoService.getProyectos().subscribe({
            next: data => (this.proyectos = data),
            error: err => console.error('Error fetching projects:', err),
            complete: () => console.log('Fetching projects complete'),
        });
    }

    navigateToUnidades(id: string): void {
        this.router.navigate(['/proyectos', id, 'unidades'], {
            relativeTo: this.route,
        });
    }
}
