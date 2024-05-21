import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../../modelos/proyectos.model';
import { ProyectosService } from '../../../../servicios/proyecto.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
    proyectos: Proyecto[] = [];

    constructor(
        private proyectoService: ProyectosService,
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
}
