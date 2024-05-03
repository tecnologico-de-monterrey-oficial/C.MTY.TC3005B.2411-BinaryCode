import { Component } from '@angular/core';
import { Proyecto } from '../../../../modelos/proyectos.model';
import { ProyectoServices } from '../../../../servicios/proyecto.services';
import { Router } from '@angular/router';



@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrl: './proyectos.component.css',
})
export class ProyectosComponent {
    
    proyectos: Proyecto[] = [];

    constructor(private proyectoServices: ProyectoServices, private router: Router) {
        this.proyectos = proyectoServices.getProyectos();
    }
    navigateToUnidades(id: number) {
        this.router.navigate(['/proyecto', id, 'unidades']);
      }
}
