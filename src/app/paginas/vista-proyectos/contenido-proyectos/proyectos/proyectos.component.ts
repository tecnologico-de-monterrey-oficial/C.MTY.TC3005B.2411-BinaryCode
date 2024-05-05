import { Component } from '@angular/core';
import { Proyecto } from '../../../../modelos/proyectos.model';
import { ProyectosService } from '../../../../servicios/proyecto.services';

@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrl: './proyectos.component.css',
})
export class ProyectosComponent {
    proyectos: Proyecto[] = [];

    constructor(private proyectoServices: ProyectosService) {
        this.proyectos = proyectoServices.getProyectos();
    }
}
