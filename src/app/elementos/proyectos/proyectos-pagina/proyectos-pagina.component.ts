import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../modelos/proyectos.model';
import { ProyectosService } from '../../../servicios/proyecto.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-proyectos-pagina',
    templateUrl: './proyectos-pagina.component.html',
    styleUrl: './proyectos-pagina.component.css',
})
export class ProyectosPaginaComponent implements OnInit {
    proyectos: Proyecto[] = [];

    constructor(
        private proyectoServices: ProyectosService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.proyectoServices.getProyectos().subscribe({
            next: data =>
                (this.proyectos = data.map(proyecto => {
                    proyecto.color = '#' + proyecto.color;
                    return proyecto;
                })),
            error: err => console.error('Error fetching projects:', err),
        });
    }

    navigateToUnidades(id: string): void {
        this.router.navigate(['/proyectos', id, 'unidades'], {
            relativeTo: this.route,
        });
    }

    crearProyecto(proyecto: Proyecto): void {
        this.proyectos.push(proyecto);
    }
}
