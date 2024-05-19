import { Component } from '@angular/core';
import { Proyecto } from '../../../modelos/proyectos.model';
import { ProyectosService } from '../../../servicios/proyecto.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-proyectos-pagina',
    templateUrl: './proyectos-pagina.component.html',
    styleUrl: './proyectos-pagina.component.css',
})
export class ProyectosPaginaComponent {
    proyectos: Proyecto[] = [];

    constructor(
        proyectoServices: ProyectosService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.proyectos = proyectoServices.getProyectos();
    }
    navigateToUnidades(id: string): void {
        this.router.navigate(['/proyectos', id, 'unidades'], {
            relativeTo: this.route,
        });
    }
}
